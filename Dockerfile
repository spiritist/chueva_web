# ---- Этап 1: Сборка приложения (Builder) ----
# Используем LTS-версию Node.js. На май 2025 года, node:22-alpine будет хорошим выбором как актуальная LTS.
# Вы использовали node:20-alpine, что тоже хорошо.
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем файлы с описанием зависимостей
COPY package.json yarn.lock ./

# Устанавливаем ВСЕ зависимости (включая devDependencies), необходимые для сборки
# --frozen-lockfile гарантирует установку версий из yarn.lock
RUN yarn install --frozen-lockfile --network-timeout 100000

# Копируем остальной код приложения
COPY . .

# Собираем продакшн-билд Next.js
# Переменная окружения NEXT_TELEMETRY_DISABLED=1 отключает телеметрию Next.js во время сборки
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

# ---- Этап 2: Запуск приложения (Runner) ----
# Используем такой же минимальный образ Node.js Alpine для запуска
FROM node:20-alpine AS runner

WORKDIR /usr/src/app

# Создаем непривилегированного пользователя для запуска приложения
# UID и GID 1001 часто используются по умолчанию
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Копируем результат сборки (standalone output) из этапа builder
# Эта папка уже содержит все необходимое, включая минимизированный Node.js сервер и node_modules.
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
# Копируем папку .next/static, так как она нужна для обслуживания статических файлов
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

# Копируем папку public, если она используется
# Убедитесь, что папка public существует в вашем проекте, если нет - эту строку можно удалить или закомментировать
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/public ./public

# Устанавливаем пользователя для запуска приложения
USER nextjs

# Порт, на котором будет работать приложение
EXPOSE 3000

# Переменные окружения для продакшена (если нужны)
ENV PORT=3000
# ENV HOSTNAME=0.0.0.0 # Уже по умолчанию для standalone сервера Next.js

# Команда для запуска приложения
# server.js находится внутри корневой директории WORKDIR (куда было скопировано содержимое .next/standalone)
CMD ["node", "server.js"]

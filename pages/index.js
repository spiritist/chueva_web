import React, { memo } from 'react';
import FullscreenImage from '@/shared/fullimage';
import SystemicSection from '@/shared/abouttext';
import BackToTop from '@/shared/backtop';
import ApproachesSection from '@/shared/approaches';
import PathSection from '@/shared/pathtext';
import EduSection from '@/shared/edutext';
import ExpSection from '@/shared/exptext';
import EtSection from '@/shared/ethictext';
import TimeSection from '@/shared/timetext';
import CostSection from '@/shared/costtext';
import ReqSection from '@/shared/requesttext';
import ContactSection from '@/shared/contacttext';
import PHeader from '@/layouts/Header';
import { Divider } from 'antd';
import MainSection from '@/shared/maintext'; // Предполагаем, что MainSection.js находится в shared

const MainPage = () => {
    return (
        <>
            <BackToTop />
            <div id='hero' className="relative w-full h-screen overflow-hidden max-sm:mx-0 sm:mx-4 md:mx-0 lg:mx-0">
                <FullscreenImage />
                <PHeader />
                <MainSection />
            </div>

            <div className="relative w-full h-auto overflow-hidden">
                <SystemicSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-hidden">
                <ApproachesSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <PathSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <EduSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <ExpSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <EtSection />
            </div>
            <div className="relative w-full h-auto overflow-visible">
                <TimeSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <CostSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <ReqSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <ContactSection />
            </div>
        </>
    );
};

export default MainPage;
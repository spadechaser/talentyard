"use client"
import { BoltIcon, ChartBarSquareIcon, ChevronUpDownIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import ProfileCard from './ProfileCard_comp'
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

export default function Features() {
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            const t2 = gsap.timeline({ defaults: { duration: 0.5 } });
            t2.set(".big-div", { x: 100 })
            t2.set(".big-div-2", { x: 100 })
            setTimeout(() => {
                t2.fromTo('.big-div', { x: 100 }, { x: 0 });
                t2.fromTo('.big-div-2', { x: 100 }, { x: 0 });
            }, 700);
        }
    }, [inView]);
    return (
        <div className='flex flex-col lg:flex-row mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full lg:w-1/2'>
                <div className='space-y-3'>
                    <h2 className='font-semibold text-4xl lg:text-5xl text-center md:text-left'>Access Top Talents,On Demand</h2>
                    <p className='font-extralight text-center md:text-left'>Easily build your team with top talents, also integrate talent into an existing team.</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-between w-full space-y-4 lg:space-y-0 lg:space-x-12 mt-12'>
                    <div className='w-full lg:w-1/2 space-y-4'>
                        <BoltIcon width={75} height={75} strokeWidth={0.2} color='blue' />
                        <span className='text-2xl font-extralight text-gray-500'>Hire Faster</span>
                        <p className='font-extralight'>Bring onboard talents within 72 hours. Adjust your team size based on operational needs. Our talents provide a variety of work structure, that would align with your business needs.</p>
                    </div>
                    <div className='w-full lg:w-1/2 space-y-4'>
                        <ChevronUpDownIcon width={75} height={75} strokeWidth={0.2} color='blue' />
                        <span className='text-2xl font-extralight text-gray-500'>Seamless Integration</span>
                        <p className='font-extralight'>Whether you're integrating into an existing team or building a new one from scratch, our approach ensures a seamless and effective structure that fosters synergy and drives success.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-between w-full space-y-6 lg:space-y-0 lg:space-x-12 mt-12'>
                    <div className='w-full lg:w-1/2 space-y-4'>
                        <PresentationChartLineIcon width={75} height={75} strokeWidth={0.2} color='blue' />
                        <span className='text-2xl font-extralight text-gray-500'>Top Performance</span>
                        <p className='font-extralight'>Our talents excel in their respective fields. We provide individuals who consistently achieve excellence, ensuring that your team operates at a peak performance level.</p>
                    </div>
                </div>
            </div>
            <div ref={ref} className='w-1/2 hidden lg:flex'>
                <div className='w-1/2 flex flex-col justify-center items-center big-div'>
                    <ProfileCard imageUrl={"/linda.png"} name={"Linda Madu"} role={"Product Manager"} skills={["Product development", "product strategy"]} />
                </div>
                <div className='w-1/2 flex flex-col justify-between big-div-2'>
                    <ProfileCard imageUrl={"/utba.png"} name={"Utba Zafar"} role={"Software Developer"} skills={["Python", "React", "Java", "MongoDB"]} />
                    <ProfileCard imageUrl={"/viktor.png"} name={"Victor-Almond"} role={"Product Designer"} skills={["Animation", "Prototyping", "Wireframing"]} />
                </div>
            </div>
        </div>
    )
}

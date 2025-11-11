"use client";




import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const homepage = () => {

    const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'categories'>('dashboard')
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(textRef.current, {
                y: -150,
                ease: "none",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    const image = {
        dashboard: `/dashboard.png`,
        products: `/products.png`,
        categories: `/categories.png`

    }



    return (
        <>
            <div className='bg-[#030712]'>

                <div ref={textRef} className='flex pt-64'>
                    <div className={'text-[#ffffff]  pl-108 font-rethink'}>
                        <h1 className={`text-[92px] h-24 font-semibold`}>Engineer better </h1>
                        <h1 className={`text-[92px] font-semibold`}>protiens, faster.</h1>
                    </div>
                    <div className={`text-[#ffffff] mt-21 ml-30 font-rethink`}>
                        <p>Leverage AI to generate protein</p>
                        <p>candidates and improve their</p>
                        <p>properties. More breakthroughs</p>
                        <p>in fewer experiments — guided</p>
                        <p>by your own experimental data.</p>

                    </div>
                </div>


                <div>
                    <div className=' flex justify-center mb-10 mt-8 '>
                        <div className='border-[0.1px] border-white p-3 rounded-xl'>
                            <div className="border border-gray-200 rounded-xl bg-white shadow-sm p-4 duration-300">
                                <img src={image[activeTab]} className='w-[1080px] pb-20 mt-20' alt="" />


                            </div>
                        </div>

                    </div>
                    <div className="text-[#ffffff] flex justify-center pb-20 gap-x-1">
                        <div className="cursor-pointer" onClick={() => { setActiveTab("dashboard") }}>
                            <div className={` h-1 rounded-3xl  mb-3 duration-500 ${activeTab == 'dashboard' ? 'bg-blue-600 w-80' : 'bg-[#ffffff14] w-50'}`}></div>
                            <span className="font-semibold pl-px">Dashboard</span>
                        </div>
                        <div className="cursor-pointer" onClick={() => { setActiveTab("products") }}>
                            <div className={` h-1 rounded-3xl  mb-3 duration-500 ${activeTab == 'products' ? 'bg-blue-600 w-80' : 'bg-[#ffffff14] w-50'}`}></div>
                            <span className="font-semibold pl-px">Products</span>
                        </div>
                        <div className="cursor-pointer" onClick={() => { setActiveTab("categories") }}>
                            <div className={` h-1 rounded-3xl  mb-3 duration-500 ${activeTab == 'categories' ? 'bg-blue-600 w-80' : 'bg-[#ffffff14] w-50'}`}></div>
                            <span className="font-semibold pl-px">Categories</span>
                        </div>

                    </div>
                </div>
            </div>





            <div className=" pt-30 pb-30       bg-transparent bg-linear-to-b from-[#f9fafb] to-[#f9fafb]">
                <div className="ml-77">
                    <div className="flex  items-center gap-5 " >
                        <div className="bg-[#3d66f8] h-2 w-2 rounded-xs  "></div>
                        <h3 className={`text-[18px]  font-bold text-[#616E80] font-spot`}>TRUSTED BY THE BEST</h3>
                    </div>
                    <div className=" text-[#030712]">
                        <p className="font-rethink font-semibold text-[64px] h-16 tracking-tight">Scientific teams at Novo </p>
                        <p className="font-rethink font-semibold text-[64px] h-16 tracking-tight">Nordisk, Johnson & Johnson,</p>
                        <p className="font-rethink font-semibold text-[64px] h-16 tracking-tight">and IFF all use Cradle to</p>
                        <p className="font-rethink font-semibold text-[64px] h-16 tracking-tight">engineer proteins faster.</p>
                    </div>
                </div>




                <div className="ml-77 mt-15 mb-20 flex gap-5">
                    <div>
                        <div className="flex gap-5 mt-5 ml-1" >
                            <div className="border bg-[#ffffff] border-[#e7eaee] h-40 w-[285px] rounded-lg"></div>
                            <div className="border bg-[#ffffff] border-[#e7eaee] h-40 w-[285px] rounded-lg"></div>
                        </div>
                        <div className="flex gap-5 mt-5 ml-1" >
                            <div className="border bg-[#ffffff] border-[#e7eaee] h-40 w-[285px] rounded-lg"></div>
                            <div className="border bg-[#ffffff] border-[#e7eaee] h-40 w-[285px] rounded-lg"></div>
                        </div>
                        <div className="flex gap-5 mt-5 ml-1" >
                            <div className="border bg-[#ffffff] border-[#e7eaee] h-40 w-[285px] rounded-lg"></div>
                            <div className="border bg-[#ffffff] border-[#e7eaee] h-40 w-[285px] rounded-lg"></div>
                        </div>

                    </div>
                    <div className="w-[670px] h-[520px] border border-[#e7eaee] bg-[#ffffff] rounded-lg mt-5">
                        <div className=" font-rethink font-semibold  text-[32px] m-10 tracking-tight">
                            <p className="h-10">"Cradle’s AI-based protein design</p>
                            <p className="h-10">platform provides easy access and</p>
                            <p className="h-10">acceleration to protein optimization</p>
                            <p className="h-10">for the discovery pipeline."</p>
                        </div>

                    </div>
                </div>

                <hr className="border-[#e7eaee]" />


                <div className="ml-77 mt-20">
                    <h3 className="font-rethink text-[#030712] text-[32px] font-semibold ml-1">Case studies</h3>
                    <div className="mt-10 flex gap-6">
                        <div className="w-[413px] text-[#616E80] font-semibold cursor-pointer hover:text-black">
                            <div className="w-[413px] h-[219px] rounded-lg ">
                                <img src='https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg' alt="img" className="w-full h-full rounded-lg object-cover object-center" />
                            </div>
                            <div className="mt-5">
                                <p>Optimizing Cetuximab: An update on our win of the Adaptyv 2024 competition</p>
                            </div>
                        </div>

                        <div className="w-[413px] text-[#616E80] font-semibold cursor-pointer hover:text-black">
                            <div className="w-[413px] h-[219px] rounded-lg ">
                                <img src='https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg' alt="img" className="w-full h-full rounded-lg object-cover object-center" />
                            </div>
                            <div className="mt-5">
                                <p>Optimizing Cetuximab: An update on our win of the Adaptyv 2024 competition</p>
                            </div>
                        </div>

                        <div className="w-[413px] text-[#616E80] font-semibold cursor-pointer hover:text-black">
                            <div className="w-[413px] h-[219px] rounded-lg ">
                                <img src='https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg' alt="img" className="w-full h-full rounded-lg object-cover object-center" />
                            </div>
                            <div className="mt-5">
                                <p>Optimizing Cetuximab: An update on our win of the Adaptyv 2024 competition</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div className="bg-[#ffffff] h-1000 pt-30">
                <div className="ml-77">
                    <div className="flex  items-center gap-5 " >
                        <div className="bg-[#3d66f8] h-2 w-2 rounded-xs  "></div>
                        <h3 className={`text-[18px]  font-bold text-[#616E80] font-spot`}>PROTEIN ENGINEERING 2.0</h3>
                    </div>
                    <div className=" text-[#030712]">
                        <p className="font-rethink font-semibold text-[64px] h-16 tracking-tight">Compounding results  </p>
                        <p className="font-rethink font-semibold text-[64px] h-16">across all properties.</p>
                    </div>

                    <div className="  mt-15 text-[#616E80] font-semibold text-[20px]">
                        <p>Get products to market in quarters, not years. Use Cradle to chart</p>
                        <p>the fastest course to proteins that meet all your desired </p>
                        <p>objectives. Explore further, optimize faster, and reach your</p>
                        <p>destination in fewer experiments.</p>
                    </div>
                </div>


            </div>


        </>
    )
}

export default homepage
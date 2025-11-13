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


    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Black box moves diagonally down-right
            gsap.to(box1Ref.current, {
                x: -15,
                y: -15,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom", // start when section enters viewport
                    end: "bottom 40%", // end near bottom
                    scrub: true, // smooth motion tied to scroll
                    // markers: true, // uncomment for debug
                },
            });

            // White box moves diagonally up-left (opposite)
            gsap.to(box2Ref.current, {
                x: 15,
                y: 15,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom 40%",
                    scrub: true,
                    // markers: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);





    useEffect(() => {
        const sections = gsap.utils.toArray<HTMLElement>(".section");

        sections.forEach((section) => {
            const box = section.querySelector(".pin-box");

            ScrollTrigger.create({
                trigger: section,
                pin: box,
                start: "top 7%",
                end: "bottom 17%",
                scrub: true,
            });
        });
    }, []);



    const image = {
        dashboard: `/dashboard.png`,
        products: `/products.png`,
        categories: `/categories.png`

    }



    return (
        <>
            <div className="w-full overflow-x-hidden">
                <div className='bg-[#030712]'>

                    <div ref={textRef} className='flex pt-64 justify-center'>
                        <div className={'text-[#ffffff]  font-rethink'}>
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





                <div className=" pt-30 pb-30  w-full flex   flex-col items-center  bg-transparent bg-linear-to-b from-[#f9fafb] to-[#f9fafb]">
                    <div>
                        <div >
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




                        <div className=" mt-15 mb-20 flex gap-5">
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





                    </div>


                    <hr className="border-[#e7eaee] w-full" />

                    <div className=" mt-20 ">
                        <div>

                            <h3 className="font-rethink text-[#030712] text-[32px] font-semibold ">Case studies</h3>

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



                </div>














                <div className="bg-[#ffffff] pb-35 pt-30 flex flex-col items-center">
                    <div>
                        <div >
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


                        <div className=" flex mt-20 gap-6 ">
                            <div className="w-[760px] h-[635px] bg-[#f2f4f7] rounded-2xl">
                                <div className="flex mt-23 ml-39">
                                    <div className="w-[256px] h-[180px] bg-black rounded-2xl"></div>
                                    <div className="w-[256px] h-[180px] bg-white rounded-2xl ml-[-60px] mt-[75px]"></div>


                                </div>

                                <div className="mt-30 ml-10">
                                    <p className="text-[24px] text-[#030712] font-semibold font-rethink ">Compounding results</p>
                                    <div className="text-[16px] text-[#616E80] font-semibold mt-5">
                                        <p>Move from incremental progress to compounding results with</p>
                                        <p>models that learn from every round of your wet lab data. Teams</p>
                                        <p>that use Cradle report 1.5-12x faster development timelines.</p>
                                    </div>
                                </div>

                            </div>





                            <div className="w-[500px] h-[635px] bg-black rounded-2xl">
                                <div className="mt-8 ml-10">
                                    <p className="text-[24px] text-[#ffffff] font-semibold font-rethink ">Breakthroughs on repeat</p>
                                    <div className="text-[16px] text-[#FFFFFF99] font-semibold mt-4">
                                        <p>Following a single path puts you at risk of hitting</p>
                                        <p>a dead end. Instead, confidently explore multiple</p>
                                        <p>design strategies to bring more programs over</p>
                                        <p>the finish line and strengthen your IP portfolio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div className=" flex mt-20 gap-6 ">
                            <div className="w-[500px] h-[610px] bg-[#f2f4f7] rounded-2xl">


                            </div>





                            <div className="w-[760px] h-[610px] bg-[#f2f4f7] rounded-2xl">
                                <div className="mt-8 ml-10">
                                    <p className="text-[24px] text-[#030712] font-semibold font-rethink ">Co-optimize all your properties</p>
                                    <div className="text-[16px] text-[#616E80] font-semibold mt-3">
                                        <p>Activity, binding, stability, expression, and more. Co-optimize the properties you</p>
                                        <p>care about, turning complex trade-offs into optimized solutions in fewer rounds.</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>







                <div className="bg-[#030712] h-220 flex gap-10 pt-10 justify-center">


                    <div >
                        <div className="flex  items-center gap-5 " >
                            <div className="bg-[#3d66f8] h-2 w-2 rounded-xs  "></div>
                            <h3 className={`text-[18px]  font-bold text-[#616E80] font-spot`}>WORK ON ANY PROTEIN</h3>
                        </div>
                        <div className=" text-[#ffffff]">
                            <p className="font-rethink font-semibold text-[64px] h-16 tracking-tight">Built for any protein</p>
                            <p className="font-rethink font-semibold text-[64px] h-16">and all properties.</p>
                        </div>

                        <div className="  mt-15 text-[#616E80] font-semibold text-[20px]">
                            <p>Accelerate your journey from hit identification to lead</p>
                            <p>optimization and beyond. If you can measure it, you can optimize</p>
                            <p>it with Cradle.</p>
                        </div>
                        <div className="  mt-5 text-[#616E80] font-semibold text-[20px]">
                            <p>This makes Cradle fit-for-purpose for teams developing</p>
                            <p>therapeutics, agricultural solutions, food ingredients, and more.</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div>
                            <p className="text-[#ffffff] text-[18px] font-semibold font-rethink mt-5">Antibodies</p>
                            <p className="text-[16px] font-semibold text-[#616E80]">Craft mature and developable binders that avoid </p>
                            <p className="text-[16px] font-semibold text-[#616E80]">unwanted immunogenicity.</p>
                        </div>
                        <div>
                            <p className="text-[#ffffff] text-[18px] font-semibold font-rethink mt-5">Enzymes</p>
                            <p className="text-[16px] font-semibold text-[#616E80]">Accelerate specific catalytic conversions, even in</p>
                            <p className="text-[16px] font-semibold text-[#616E80]">challenging conditions.</p>
                        </div>
                        <div>
                            <p className="text-[#ffffff] text-[18px] font-semibold font-rethink mt-5">Vaccines</p>
                            <p className="text-[16px] font-semibold text-[#616E80]">Stabilize your antigens and hit therapeutic goals</p>
                            <p className="text-[16px] font-semibold text-[#616E80]">faster.</p>
                        </div>
                        <div>
                            <p className="text-[#ffffff] text-[18px] font-semibold font-rethink mt-5">Peptides</p>
                            <p className="text-[16px] font-semibold text-[#616E80]">Get to desired efficacy while ensuring stability.</p>
                        </div>
                    </div>

                </div>




                <div className="pt-15 flex flex-col items-center w-full">
                    <div>
                        <div >
                            <div className="flex  items-center gap-5 " >
                                <div className="bg-[#3d66f8] h-2 w-2 rounded-xs  "></div>
                                <h3 className={`text-[18px]  font-bold text-[#616E80] font-spot`}>HOW CRADLE WORKS</h3>
                            </div>
                            <div className=" text-[#030712]">
                                <p className="font-rethink font-semibold text-[64px] h-16 tracking-tight">Design in Cradle.</p>
                                <p className="font-rethink font-semibold text-[64px] h-16">Validate in the lab.</p>
                            </div>

                            <div className="  mt-15 text-[#616E80] font-semibold text-[20px]">
                                <p>Quickly generate lab-ready protein candidates to test in your</p>
                                <p>own lab or with a CRO. Track model and candidate performance</p>
                                <p>in your reports. Learn every time you add assay data.</p>
                            </div>

                        </div>




                        <div ref={containerRef} className=" w-7xl h-[732px] flex items-center justify-center bg-[#616E80] rounded-2xl mt-15">
                            <div className="flex   justify-center  mb-15">
                                <div ref={box1Ref} className="w-[380px] mt-20 h-[250px] bg-black rounded-2xl ml-10"></div>
                                <div ref={box2Ref} className="w-[380px] h-[250px] bg-white rounded-2xl ml-[-190px] mt-[220px]"></div>
                            </div>

                        </div>


                    </div>

                </div>



                <div>
                    <div className="w-full mt-10 flex flex-col items-center ">
                        <div>
                            <p className="text-[120px]  font-rethink font-semibold text-[#030712] ml-25">Learn</p>

                            <div className=" section flex gap-10   ">
                                <div className="pin-box w-14 h-14 bg-[#3d66f8] rounded-2xl text-[24px] flex justify-center items-center font-rethink text-[#ffffff] font-semibold"><p>1</p></div>
                                <div>
                                    <div className="flex gap-10 mb-10">
                                        <div className="w-[572px] h-[448px] bg-[#f2f4f7] rounded-2xl"></div>

                                        <div className="w-[572px] h-[448px] ">
                                            <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Import your data</p>
                                            <div className="  mt-5 text-[#616E80] font-semibold text-[16px] tracking-tight">
                                                <p>To begin, upload wet lab data from screening</p>
                                                <p>or optimization experiments. If you're</p>
                                                <p>starting a project from scratch, simply</p>
                                                <p>define your goals and assays to get going.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex gap-10 mb-10">
                                        <div className="w-[572px] h-[448px] bg-[#f2f4f7] rounded-2xl"></div>

                                        <div className="w-[572px] h-[448px] ">
                                            <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Explore your data quality</p>
                                            <div className="  mt-5 text-[#616E80] font-semibold text-[16px] tracking-tight">
                                                <p>Cradle automatically analyses your experimental</p>
                                                <p>data to determine data quality and AI’s</p>
                                                <p>ability to learn from it. This helps you to</p>
                                                <p>understand how to improve your workflows</p>
                                                <p>and assays to get to optimal sequences faster.</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex gap-10 mb-10">
                                        <div className="w-[572px] h-[448px] bg-[#f2f4f7] rounded-2xl"></div>

                                        <div className="w-[572px] h-[448px] ">
                                            <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Explore your data quality</p>
                                            <div className="  mt-5 text-[#616E80] font-semibold text-[16px] tracking-tight">
                                                <p>Cradle automatically analyses your experimental</p>
                                                <p>data to determine data quality and AI’s</p>
                                                <p>ability to learn from it. This helps you to</p>
                                                <p>understand how to improve your workflows</p>
                                                <p>and assays to get to optimal sequences faster.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div>
                    <div className="w-full mt-10 flex flex-col items-center ">
                        <div>
                            <p className="text-[120px]  font-rethink font-semibold text-[#030712] ml-25">Generate</p>

                            <div className="section flex gap-10  ">
                                <div className="pin-box w-14 h-14 bg-[#3d66f8] rounded-2xl text-[24px] flex justify-center items-center font-rethink text-[#ffffff] font-semibold"><p>2</p></div>
                                <div>
                                    <div className="flex gap-10 mb-10">
                                        <div className="w-[572px] h-[448px] bg-[#f2f4f7] rounded-2xl"></div>

                                        <div className="w-[572px] h-[448px] ">
                                            <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Import your data</p>
                                            <div className="  mt-5 text-[#616E80] font-semibold text-[16px] tracking-tight">
                                                <p>To begin, upload wet lab data from screening</p>
                                                <p>or optimization experiments. If you're</p>
                                                <p>starting a project from scratch, simply</p>
                                                <p>define your goals and assays to get going.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex gap-10 mb-10">
                                        <div className="w-[572px] h-[448px] bg-[#f2f4f7] rounded-2xl"></div>

                                        <div className="w-[572px] h-[448px] ">
                                            <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Explore your data quality</p>
                                            <div className="  mt-5 text-[#616E80] font-semibold text-[16px] tracking-tight">
                                                <p>Cradle automatically analyses your experimental</p>
                                                <p>data to determine data quality and AI’s</p>
                                                <p>ability to learn from it. This helps you to</p>
                                                <p>understand how to improve your workflows</p>
                                                <p>and assays to get to optimal sequences faster.</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex gap-10 mb-10">
                                        <div className="w-[572px] h-[448px] bg-[#f2f4f7] rounded-2xl"></div>

                                        <div className="w-[572px] h-[448px] ">
                                            <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Explore your data quality</p>
                                            <div className="  mt-5 text-[#616E80] font-semibold text-[16px] tracking-tight">
                                                <p>Cradle automatically analyses your experimental</p>
                                                <p>data to determine data quality and AI’s</p>
                                                <p>ability to learn from it. This helps you to</p>
                                                <p>understand how to improve your workflows</p>
                                                <p>and assays to get to optimal sequences faster.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>







                <div>
                    <div className="w-full mt-10 flex flex-col items-center ">
                        <div>
                            <p className="text-[120px]   font-rethink font-semibold text-[#030712] ml-25">Review</p>

                            <div className="section flex gap-10  ">
                                <div className="pin-box w-14 h-14 bg-[#3d66f8] rounded-2xl text-[24px] flex justify-center items-center font-rethink text-[#ffffff] font-semibold"><p>3</p></div>
                                <div>
                                    <div className="flex gap-10 mb-10">
                                        <div className="w-[572px] h-[448px] bg-[#f2f4f7] rounded-2xl"></div>

                                        <div className="w-[572px] h-[448px] ">
                                            <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Import your data</p>
                                            <div className="  mt-5 text-[#616E80] font-semibold text-[16px] tracking-tight">
                                                <p>To begin, upload wet lab data from screening</p>
                                                <p>or optimization experiments. If you're</p>
                                                <p>starting a project from scratch, simply</p>
                                                <p>define your goals and assays to get going.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex gap-10 mb-10">
                                        <div className="w-[572px] h-[448px] bg-[#f2f4f7] rounded-2xl"></div>

                                        <div className="w-[572px] h-[448px] ">
                                            <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Explore your data quality</p>
                                            <div className="  mt-5 text-[#616E80] font-semibold text-[16px] tracking-tight">
                                                <p>Cradle automatically analyses your experimental</p>
                                                <p>data to determine data quality and AI’s</p>
                                                <p>ability to learn from it. This helps you to</p>
                                                <p>understand how to improve your workflows</p>
                                                <p>and assays to get to optimal sequences faster.</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex gap-10 mb-10">
                                        <div className="w-[572px] h-[448px] bg-[#f2f4f7] rounded-2xl"></div>

                                        <div className="w-[572px] h-[448px] ">
                                            <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Explore your data quality</p>
                                            <div className="  mt-5 text-[#616E80] font-semibold text-[16px] tracking-tight">
                                                <p>Cradle automatically analyses your experimental</p>
                                                <p>data to determine data quality and AI’s</p>
                                                <p>ability to learn from it. This helps you to</p>
                                                <p>understand how to improve your workflows</p>
                                                <p>and assays to get to optimal sequences faster.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>






                <div>
                    <div className="relative mt-20 w-full aspect-video bg-[url('/dashboard.png')] ">
                        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/60 to-black"></div>





                    </div>
                    <div className="bg-black h-200">

                    </div>
                </div>








                <div className="bg-[#ffffff] pb-20 pt-30 w-full flex flex-col items-center">
                    <div className=" flex gap-15 ">
                        <div>
                            <div className="flex  items-center gap-5 " >
                                <div className="bg-[#3d66f8] h-2 w-2 rounded-xs  "></div>
                                <h3 className={`text-[18px]  font-bold text-[#616E80] font-spot`}>THE CRADLE LAB</h3>
                            </div>
                            <div className=" text-[#030712]">
                                <p className="font-rethink font-semibold text-[64px] h-16 tracking-tight">AI that gets better</p>
                                <p className="font-rethink font-semibold text-[64px] h-16">every two weeks.</p>
                            </div>

                            <div className="  mt-15 text-[#616E80] font-semibold text-[20px] tracking-tight">
                                <p>Cradle isn’t a CRO, so why do we run our own wet lab in</p>
                                <p>Amsterdam?</p>

                                <p className="mt-5">It's simple. So you get reliable and high-performing models from</p>
                                <p>day one, while your proprietary data remains completely private.</p>

                                <p className="mt-5">Much like a self-driving car company: they wouldn’t just design</p>
                                <p>algorithms and cross their fingers. They need to test real-world</p>
                                <p>scenarios and collect data in order to fine-tune performance. We</p>
                                <p>take the same approach, ensuring our models are performant</p>
                                <p>even before seeing your data.</p>
                            </div>


                            <button className="mt-10 border rounded-xl w-[252px] h-12 border-[#e7eaee] text-[18px] text-[#1F2937] font-semibold">Get to know our wet lab</button>
                        </div>

                        <div>
                            <div className="w-[600px] h-[576px] border-[#e7eaee] border rounded-xl">

                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-[#e7eaee]" />

                <div className="pt-20 pb-20 bg-[#ffffff] w-full flex flex-col items-center">
                    <div >
                        <p className="font-rethink text-[#030712] text-[32px] font-semibold  tracking-tight">Learnings from our wet lab</p>
                        <div className="mt-5 gap-6 flex">

                            <div>
                                <div className="w-[302px] h-40 bg-[#e7eaee] rounded-xl"></div>
                                <div className="mt-5">
                                    <p className="text-[16px] text-[#181717] font-semibold">Backbone of high-throughput </p>
                                    <p className="text-[16px] text-[#181717] font-semibold">experimentation: Design principles for</p>
                                    <p className="text-[16px] text-[#181717] font-semibold">ML-ready sample tracking</p>
                                </div>
                            </div>

                            <div>
                                <div className="w-[302px] h-40 bg-[#e7eaee] rounded-xl"></div>
                                <div className="mt-5">
                                    <p className="text-[16px] text-[#181717] font-semibold">Backbone of high-throughput </p>
                                    <p className="text-[16px] text-[#181717] font-semibold">experimentation: Design prin</p>

                                </div>
                            </div>

                            <div>
                                <div className="w-[302px] h-40 bg-[#e7eaee] rounded-xl"></div>
                                <div className="mt-5">
                                    <p className="text-[16px] text-[#181717] font-semibold">Backbone of high-throughput </p>
                                    <p className="text-[16px] text-[#181717] font-semibold">ML-ready sample tracking</p>
                                </div>
                            </div>

                            <div>
                                <div className="w-[302px] h-40 bg-[#e7eaee] rounded-xl"></div>
                                <div className="mt-5">
                                    <p className="text-[16px] text-[#181717] font-semibold">Backbone of high-throughput </p>
                                    <p className="text-[16px] text-[#181717] font-semibold">ML-ready sample tracking</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>







                <div>
                    <div className="bg-[linear-gradient(180deg,rgb(34,78,238)_52%,rgb(45,102,248)_100%)] w-full h-200">

                    </div>

                    <div className="w-full h-[370px] bg-[#224eee]">

                    </div>


                    <hr className="border-[#3976c7] h-[0.5px]" />

                    <div className="w-full h-[60px] bg-[#224eee] flex items-center  ">
                        <div className="flex justify-between w-full mx-10 ">
                            <div className="flex gap-5 text-[12px] text-[#ffffff99] font-semibold ">
                                <p> © 2025 · Cradle is a registered trademark</p>
                                <p>Legal Terms</p>
                                <p>Privacy Policy</p>
                                <p>Cookies</p>
                            </div>
                            <div>
                                <p className="text-[12px] text-[#ffffff99] font-semibold ">Built with ❤️ in Amsterdam & Zurich</p>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default homepage
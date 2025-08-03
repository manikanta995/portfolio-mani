import React from 'react';
import Lottie from 'lottie-react';
import HelloRobot from '../assets/hello-robot.json';

function About() {
    return ( 
        <>
            <div id='about' className='py-12 lg:py-20 flex flex-col relative bg-gradient-to-b from-[#0d1224] to-[#0a0e1a]'>
                <img 
                    src="/hero.svg"
                    className='absolute -z-10' 
                />
                
                <div className='mb-8 lg:mb-12'>
                    <div className='w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20'></div>
                    
                    <div className='flex justify-center -translate-y-[1px]'>
                        <div className='w-3/4'>
                            <div className='h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full'></div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center my-5 lg:py-8'>
                        <div className='flex items-center'>
                            <span className='w-24 h-[2px] bg-[#1a1443]'></span>
                            <span className='bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md'>About Me</span>
                            <span className='w-24 h-[2px] bg-[#1a1443]'></span>
                        </div>
                    </div>
                </div>
                
                <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto'>
                    <div className='text-left flex flex-col justify-center space-y-6'>
                        <div className='space-y-4'>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                Full Stack <span className="text-[#16f2b3]">Developer</span>
                            </h2>
                            
                            <p className="text-base lg:text-lg leading-relaxed text-gray-300 font-light">
                                I'm Manikanta Manchala, <span className="text-violet-400 font-medium">a Full Stack Developer with hands-on experience in the MERN stack. </span> I recently completed my B.Tech from Pillai College of Engineering, where I developed a strong passion for building scalable, efficient web applications.
                               
                            </p>
                            
                            <p className="text-base lg:text-lg leading-relaxed text-gray-300 font-light">
                               I enjoy solving real-world problems through clean, functional code — whether it's  <span className="text-[#16f2b3] font-semibold bg-[#16f2b3]/10 px-2 py-1 rounded">backend logic, frontend design, or full-stack integration.</span>
                            
                            </p>
                            
                            <p className="text-base lg:text-lg leading-relaxed text-gray-300 font-light">
                                I'm always exploring new tools, contributing to projects, and 


                             <span className="text-blue-400 font-medium"> growing as a developer.</span> 
                            </p>
                        </div>
                        
                        <div className='flex flex-wrap gap-2 mt-6'>
                            {['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript', 'Git'].map((skill) => (
                                <span 
                                    key={skill}
                                    className='bg-[#1a1443] text-white px-3 py-1 rounded-full text-sm font-medium border border-violet-500/30 hover:border-violet-500/60 transition-colors duration-300'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        
                        <div className='pt-4'>
                            <p className="text-lg text-gray-300 font-light">
                                My goal: <span className="text-[#16f2b3] font-semibold">Just a dev who loves turning ideas into cool web apps</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className='flex justify-center items-center'>
                        <div className='w-full max-w-md lg:max-w-lg'>
                            <Lottie 
                                animationData={HelloRobot} 
                                loop={true} 
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
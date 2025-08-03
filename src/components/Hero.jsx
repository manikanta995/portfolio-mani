import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import computer from '../assets/Programming_Computer.json'

function Hero() {

    return ( 
        <>
            <div id='hero' className='h-screen w-full flex justify-center items-center flex-col text-white'>
                <img 
                    src="/hero.svg"
                    className="absolute inset-0 -z-10 w-full h-full object-cover" 
                />
                <div className='grid sm:grid-cols-2 '>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='text-left'>
                            <h1 className='text-4xl sm:text-6xl font-bold text-amber-400'>Hello, <br /> I'm <span className='text-pink-500'>Manikanta Manchala</span></h1>
                            <TypeAnimation
                                sequence={[
                                    'Software Developer', 1500,
                                    'Full Stack Developer', 1500,
                                    'Problem Solver', 1500,
                                    
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-xl sm:text-3xl text-amber-300 font-semibold"
                            />
                        </div>
                        
                        <div className="my-12 flex items-center gap-5">
                            <a
                                href='https://github.com/manikanta995'
                                rel="noopener noreferrer"
                                target='_blank'
                                className="transition-all text-pink-500 hover:scale-125 duration-300 cursor-pointer"
                            >
                                <BsGithub size={30} />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/manikanta-manchala/'
                                rel="noopener noreferrer"
                                target='_blank'
                                className="transition-all text-pink-500 hover:scale-125 duration-300 cursor-pointer"
                            >
                                <BsLinkedin size={30} />
                            </a>
                            <a
                                href=''
                                rel="noopener noreferrer"
                                target='_blank'
                                className="transition-all text-pink-500 hover:scale-125 duration-300 cursor-pointer"
                            >
                                <FaTwitterSquare size={30} />
                            </a>
                        </div>

                        <div className="relative inline-block px-6 py-3 font-semibold text-blue-600 border border-blue-600 group overflow-hidden rounded-lg transition duration-300 ease-in-out cursor-pointer">
                            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out z-0"></span>
                            <a
  href="https://drive.google.com/file/d/1fVgIyARNccnbNQGD02omHNuEw0leWlyx/view"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-10 text-white group-hover:text-white"
>
  Resume!
</a>
                        </div>
                    </div>

                    <div className='sm:flex justify-center items-center hidden'>
                        <img 
                            src="/black_laptop.png"  
                        />
                        <div className="bg-[#0d1117] text-[#c9d1d9] p-6 rounded-xl shadow-lg max-w-3xl mx-auto font-mono text-sm absolute sm:h-[400px] sm:w-[610px] w-[300px] ">
                            <div className="flex space-x-2 mb-4">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            </div>

                            <pre className="text-sm md:text-base font-mono text-white leading-relaxed">
                                    <code>
                                       
                                        <span className="text-[#7ee787]">function</span> wordsILike() &#123;
                                        <br />
                                        &nbsp;&nbsp;<span className="text-[#a5d6ff]">
                                        console.log(
                                            "
                                            <TypeAnimation
                                            sequence={[
                                                'Server running on port 3000.',
                                                1500,
                                                'connection successfull',
                                                1500,
                                                'mongo db server is started!',
                                                1500,
                                                'Commit. Push. Pray. Repeat',
                                                1500,
                                                'exit',
                                                1500,
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            repeat={Infinity}
                                            />
                                            "
                                        );
                                        </span>
                                        &#125;
                                        <br />
                                        <span className="text-[#ff7b72]">// error not found</span>
                                    </code>
                                </pre>
                        </div>

                    </div>

                    <div className='sm:hidden flex justify-center items-center'>
                        <Lottie 
                            animationData={computer} 
                            loop={true} 
                            className='w-full h-auto'
                        />
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Hero;
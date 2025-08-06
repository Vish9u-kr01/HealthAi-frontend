// components/Hero.tsx
'use client'
import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
)

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

          {/* Gradient Heading */}
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-extrabold bg-gradient-to-r from-[#4729FF] via-[#A042FF] to-[#FF4FB6] bg-clip-text text-transparent">
            Revolutionizing Healthcare with AI:
            <br className="hidden lg:inline-flex" />
            The Future of Intelligent Wellness
          </h1>

          {/* Paragraph + Image */}
          <p className="text-center font-bold mt-6"
            style={{
              background: 'linear-gradient(to right, #5D2CFF, #0080FF, #00E0C6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1rem'
            }} >
            The Health AI project harnesses the power of artificial intelligence to transform the way we approach healthcare. By integrating machine learning, data analytics, and predictive modeling, our system aims to improve diagnostics, personalize treatment plans, and enhance patient outcomes. Whether its early disease detection or real-time health monitoring, Health AI empowers medical professionals with deeper insights and faster decision-making. Our goal is to create smarter, more accessible, and efficient healthcare solutions for everyone.
          </p>

          <div className=" ml-15 relative group">
            <div style={{
              background: 'linear-gradient(to right, #5D2CFF, #0080FF, #00E0C6)',
            }} className='flex items-center justify-center mt-10 rounded-4xl ' >
              <p className="  text-white cursor-pointer py-2 px-4">Heyy!! 👋</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition duration-100 transform group-hover:translate-y-0 translate-y-2">
              <div className="bg-slate-800 w-max max-w-xs text-white rounded-lg px-4 py-4">
                <p className="font-bold text-md mb-1">Hello there! 👋</p>
                <p className="text-sm">
                  Thanks for visiting our website! We are thrilled to have you here.
                  <br />
                  This msg <b>appears</b> and then <b>disappears</b>.
                  <br />
                  ....
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Player
            src="/Hero.json"
            autoplay
            loop
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[400px]"
          />
          <Player
            src="/Hero2.json"
            autoplay
            loop
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[400px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero




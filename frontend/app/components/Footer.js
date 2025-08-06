// components/Footer.tsx

import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="text-center font-bold mt-1"
            style={{
              background: 'linear-gradient(to right, #5D2CFF, #0080FF, #00E0C6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '2rem'
            }}>HealthAI</span>
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2025 HealthAI —
          <a
            className="text-white ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            All rights reserved
          </a>
        </p>

        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4 mr-0.5">
          {/* Facebook */}
          <div className="relative group">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-[#1877f2]">
              Facebook
            </div>
            <a
              href="https://facebook.com"
              target="_blank"
              className="relative w-[30px] h-[30px] rounded-full bg-white text-gray-600 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[3px_2px_30px_0px_rgba(0,0,0,0.12)] hover:text-white cursor-pointer"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#1877f2] transition-all duration-300 group-hover:h-full" />
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="relative z-10 w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>

          {/* Twitter */}
          <div className="relative group">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-[#1DA1F2]">
              Twitter
            </div>
            <a
              href="https://twitter.com"
              target="_blank"
              className="relative w-[30px] h-[30px] rounded-full bg-white text-gray-600 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[3px_2px_30px_0px_rgba(0,0,0,0.12)] hover:text-white cursor-pointer"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#1DA1F2] transition-all duration-300 group-hover:h-full" />
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="relative z-10 w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>

          {/* Instagram */}
          <div className="relative group">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-gradient-to-r from-[#405de6] via-[#b33ab4] to-[#fd1f1f]">
              Instagram
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              className="relative w-[30px] h-[30px] rounded-full bg-white text-gray-600 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[3px_2px_30px_0px_rgba(0,0,0,0.12)] hover:text-white cursor-pointer"
            >
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-[#405de6] via-[#b33ab4] to-[#fd1f1f] transition-all duration-300 group-hover:h-full" />
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="relative z-10 w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


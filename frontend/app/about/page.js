'use client'; // Only if you're using App Router in Next.js 13+

import React from 'react';

const AboutPage = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl   mb-4  bg-gradient-to-r from-[#4729FF] via-[#A042FF] to-[#FF4FB6] bg-clip-text text-transparent"> Welcome to Health AI</h1>
          <p className="text-lg leading-relaxed text-white">
            Health AI is an innovative platform harnessing the power of artificial intelligence to revolutionize the healthcare experience. Our mission is to make healthcare smarter, more accessible, and personalized through advanced data-driven technologies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 text-base text-white">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">What We Do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Predictive Diagnostics:</strong> Our AI models can detect potential health issues early by analyzing symptoms, medical history, and patient data.</li>
              <li><strong>Smart Monitoring:</strong> Continuous health tracking using wearable devices and sensors, with intelligent alerts and real-time updates.</li>
              <li><strong>Data-Driven Insights:</strong> We provide healthcare organizations with powerful analytics tools to uncover trends and optimize treatment plans.</li>
              <li><strong>Virtual Health Assistant:</strong> Our intelligent chatbot and voice assistant help patients get answers to health questions, book appointments, and manage their wellness.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Our Vision</h2>
            <p>
              We believe in a future where healthcare is not reactive, but proactive — driven by insights, personalization, and prevention. Health AI is committed to building secure, ethical, and human-centric AI solutions that empower both doctors and patients.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Join Us on the Journey</h2>
            <p>
              Whether you are a healthcare provider, researcher, patient, or innovator — Health AI welcomes you to be a part of this transformative journey. Together, we can shape a healthier, smarter future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

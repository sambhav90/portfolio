"use client"
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
export default function Hero (){
    return(
        <div>
             {/* Hero Section */}
                  <section className="py-20 md:py-32 flex items-center min-h-[80vh] container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                          Hi, I'm <span className="text-indigo-600">Sambhav Singh</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl mt-4 text-gray-600 dark:text-gray-300">
                          Frontend Developer
                        </h2>
                        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-md">
                          I build exceptional and accessible digital experiences for the web.
                          Focused on creating clean, responsive products with engaging user experiences.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                          <a
                            href="#projects"
                            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300"
                          >
                            View My Work
                          </a>
                          <a
                            href="#contact"
                            className="px-6 py-3 bg-transparent border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800 transition duration-300"
                          >
                            Contact Me
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-tl-3xl rounded-br-3xl overflow-hidden border-4 border-indigo-600">
                          <Image
                            src="/image/profile.jpg"
                            alt="Your Name"
                            layout="fill"
                            objectFit="cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </section>
        </div>
    )
}
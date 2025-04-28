// pages/index.js
"use client"
import Contact from '@/components/contact';
import Footer from '@/components/Footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '../components/skills';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Frontend Developer specializing in React, Next.js and TailwindCSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Hero/>

      <Projects/>

      <Skills/>

      <Contact/>

      <Footer/>
    </div>
  )
}

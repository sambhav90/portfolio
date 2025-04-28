"use client"
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
export default function Header (){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
        <div>
            {/* Navigation Bar */}
            <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 shadow-sm">
                <div className="container mx-auto px-6 py-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-800 dark:text-white">SS</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300 hidden md:block">Sambhav Singh</span>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className='flex space-x-6 items-center'>
                    <nav className="hidden md:flex space-x-8">
                      <a href="#about" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">About</a>
                      <a href="#projects" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Projects</a>
                      <a href="#skills" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Skills</a>
                      <a href="#contact" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Contact</a>
                    </nav>
                    
                    {/* Resume Button */}
                    <a 
                      href="/resume.pdf" 
                      target="_blank"
                      className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-300"
                    >
                      Resume
                    </a>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button 
                      className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none" 
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      )}
                    </button>
                  </div>
                  
                  {/* Mobile Menu */}
                  {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-2 space-y-3">
                      <a href="#about" className="block text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>About</a>
                      <a href="#projects" className="block text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>Projects</a>
                      <a href="#skills" className="block text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>Skills</a>
                      <a href="#contact" className="block text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
                      <a 
                        href="/resume.pdf" 
                        target="_blank"
                        className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-300"
                      >
                        Resume
                      </a>
                    </div>
                  )}
                </div>
              </header>
        </div>
    )
}
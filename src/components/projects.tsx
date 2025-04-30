import Image from 'next/image'
export default function Projects (){
    return(
        <div>
            {/* Featured Projects */}
      <section id="projects" className="md:py-[64px] py-[34px] bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Featured Projects</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              A selection of my recent work for clients and personal projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            

            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition duration-500 hover:shadow-2xl">
              <div className="relative h-48 w-full">
                <Image
                  src="/image/project2.png"
                  alt="Project 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Website Home Page Design</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 capitalize ">
                A responsive, mobile-friendly website that is easy to use, with simple and understandable content.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md dark:bg-indigo-900 dark:text-indigo-200">
                    React.js
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md dark:bg-indigo-900 dark:text-indigo-200">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md dark:bg-indigo-900 dark:text-indigo-200">
                    TailwindCSS
                  </span>
                </div>
                <div className="mt-6 flex justify-between">
                  <a
                    href="https://nexcent-blue-seven.vercel.app/" target='_blank'
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/sambhav90/nexcent" target='_blank'
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition duration-500 hover:shadow-2xl">
              <div className="relative h-48 w-full">
                <Image
                  src="/image/project3.png"
                  alt="Project 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Analytics Dashboard</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 capitalize">
                  Data visualization dashboard with customizable charts and filters.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md dark:bg-indigo-900 dark:text-indigo-200">
                    React.js
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md dark:bg-indigo-900 dark:text-indigo-200">
                    Redux
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md dark:bg-indigo-900 dark:text-indigo-200">
                    API Integration
                  </span>
                </div>
                <div className="mt-6 flex justify-between">
                  <a
                    href="https://dashboard-liart-seven-17.vercel.app/" target='_blank'
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/sambhav90/dashboard"
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition duration-500 hover:shadow-2xl">
              <div className="relative h-48 w-full">
                <Image
                  src="/image/project1.png"
                  alt="Project 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">website</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 capitalize">
                  {/* A full-stack e-commerce solution with Next.js, Redux, and Stripe integration. */}
                  A News website that provides the latest news and articles on various topics.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md dark:bg-indigo-900 dark:text-indigo-200">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md dark:bg-indigo-900 dark:text-indigo-200">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md dark:bg-indigo-900 dark:text-indigo-200">
                    3rd Party API Integration
                  </span>
                </div>
                <div className="mt-6 flex justify-between">
                  <a
                    href="https://jeloxio-git-main-sambhav90s-projects.vercel.app/" target='_blank'
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/sambhav90/jeloxio" target='_blank'
                    className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-12 text-center">
            <a
              href="/projects"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div> */}
        </div>
      </section>
        </div>
    )
}
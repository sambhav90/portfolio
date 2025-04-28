"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const languages = [
    { src: "/image/html.png", alt: "Html", title: "HTML5" },
    { src: "/image/css.png", alt: "CSS", title: "CSS" },
    { src: "/image/javascript.png", alt: "JavaScript", title: "JavaScript" },
    { src: "/image/react.png", alt: "React", title: "React.js" },
    { src: "/image/bootstrap.png", alt: "Bootstrap", title: "Bootstrap" },
    { src: "/image/tailwind1.png", alt: "tailwind CSS", title: "Tailwind CSS" },
    { src: "/image/typescript.png", alt: "Type Script", title: "Type Script" },
    { src: "/image/node.png", alt: "Node.js", title: "Node.js" },
    { src: "/image/next.png", alt: "Next", title: "Next.js" },
    { src: "/image/git.png", alt: "Git", title: "Git" },
    { src: "/image/github.png", alt: "Github", title: "Github" },
    { src: "/image/vscode.png", alt: "VScode", title: "VScode" },
  ];

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // xl and down
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // lg and down
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // md and down
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // sm and down
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Skills & Technologies</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-justify">
            I've worked with a variety of technologies in the web development world.<br />
            I am a Frontend Developer with a passion for learning and can work with estimation of future tasks and client feedback. I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools. <b>I have a firm knowledge of JavaScript and React Js, Next Js, Redux, HTML5, CSS3, Git, Tailwind CSS, Bootstrap, Flexbox, Gridbox, REST API,</b> JSON and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology
          </p>
        </div>
        <Slider {...settings}>
          {languages.map((item, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-xl shadow-md py-6 transition duration-300 hover:shadow-lg">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="mx-auto"
                  height={64}
                  width={64}
                  style={{ maxHeight: 64, maxWidth: 64 }}
                />
                <h3 className="mt-4 text-base font-medium text-gray-800 dark:text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}








// "use client"
// import Image from "next/image";
// import Slider, {Settings} from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Skills() {

//   const languages = [
//     { src: "/image/css.png", alt: "CSS", title: "CSS" },
//     { src: "/image/node.png", alt: "Node.js", title: "Node.js" },
//     { src: "/image/react.png", alt: "React", title: "React.js" },
//     { src: "/image/next.png", alt: "Next", title: "Next.js" },
//     { src: "/image/html.png", alt: "Html", title: "HTML5" },
//     { src: "/image/git.png", alt: "Git", title: "Git" },
//     { src: "/image/github.png", alt: "Github", title: "Github" },
//     { src: "/image/vscode.png", alt: "VScode", title: "VScode" },
//     { src: "/image/javascript.png", alt: "JavaScript", title: "JavaScript" },
//     { src: "/image/bootstrap.png", alt: "Bootstrap", title: "Bootstrap" },
//     { src: "/image/tailwind1.png", alt: "tailwind CSS", title: "Tailwind CSS" },
//     { src: "/image/typescript.png", alt: "Type Script", title: "Type Script" },
//   ];
  

//     const settings: Settings = {
//         dots: false,
//         autoplay: true,
//         infinite: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear",
//         slidesToShow: 8,
//         arrows: false,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 5,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: false,
//                     // rows: 3,
//                     slidesPerRow: 3
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: false
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="">
//             <div id="skills" className='relative bg-light-black md:py-[64px] py-[34px] max-w-[99%]'>
//              <div className="mb-12 text-center mx-auto px-6">
//                 <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Skills & Technologies</h2>
//                 <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-justify">
//                   I've worked with a variety of technologies in the web development world.<br/>
//                   I am a Frontend Developer with a passion for learning and can work with estimation of future tasks and client feedback. I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools. <b>I have a firm knowledge of JavaScript and React Js, Next Js, Redux, HTML5, CSS3, Git, Tailwind CSS, Bootstrap, Flexbox, Gridbox, REST API,</b> JSON and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology
//                 </p>
//               </div>
//                 <div className="md:px-0 px-2">
//                     <Slider {...settings}>
//                     {/* {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Node.js', 'GraphQL', 'MongoDB'].map((skill) => ( */}
//                     {languages.map((item:any, index:any) => (
//                         <div key={index}>
//                             {/* <div className='relative md:w-36 w-24 h-24 md:h-36 text-center md:p-9 p-6 bg-light-white rounded-xl mr-8'> */}
//                             <div className='pb-2 flex-col bg-gray-50 relative md:w-[168px] w-[106px] h-24 md:h-36 text-center flex justify-center bg-light-white rounded-xl mr-8'>
//                                 {/* <p className='text-center'> */}
//                                 <img
//                                   src={item.src}
//                                   alt={item.alt}
//                                   className="img-fluid m-auto"
//                                   height={90}
//                                   width={90}
//                                 />
//                                 <h3 className="md:block hidden text-lg font-medium text-gray-800 dark:text-white">{item.title}</h3>
//                                 {/* </p> */}
//                             </div>
//                         </div>
//                     ))}


//                     </Slider>
//                 </div>

//             </div>
//         </div>
//     );
// }












// {languages.map((item:any, index:any) => (
//   <div key={index} className="bg-[#df0f0f] dark:bg-gray-900 rounded-lg p-6 shadow-md text-center hover:shadow-lg transition duration-300">
//     <div className="text-indigo-600 dark:text-indigo-400 mb-4">
      // <img
      //   src={item.src}
      //   alt={item.alt}
      //   className="img-fluid m-auto"
      //   height={70}
      //   width={70}
      // />
//     </div>
//     <h3 className="text-lg font-medium text-gray-800 dark:text-white">{item.title}</h3>
//   </div>
// ))}









// export default function Skills (){
//     return(
//         <div>
//         {/* Skills Section */}
//           <section id="skills" className="py-16">
//             <div className="container mx-auto px-6">
//               <div className="mb-12 text-center">
//                 <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Skills & Technologies</h2>
//                 <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
//                   I've worked with a variety of technologies in the web development world.
//                 </p>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {/* Skill Item */}
//                 {['JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Node.js', 'GraphQL', 'MongoDB'].map((skill) => (
//                   <div key={skill} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md text-center hover:shadow-lg transition duration-300">
//                     <div className="text-indigo-600 dark:text-indigo-400 mb-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-medium text-gray-800 dark:text-white">{skill}</h3>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </div>
//     )
// }


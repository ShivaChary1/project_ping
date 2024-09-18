// import React, { useEffect, useState, useRef } from 'react';
// import interface_img from '../../../assets/Chat_interface_img.png';
// import './thirdsection.css';
// import interface_profile from '../../../assets/Chat_interface_profile.png';

// import ScrollReveal from 'scrollreveal';

// const ThirdSection = () => {

//   const visibleText = "WITH OUR ALL NEW MODERN UI. START USING NOW!";
//   const [scrollY, setScrollY] = useState(0);
//   const [marqueeOffset, setMarqueeOffset] = useState(0);
  
//   // Ref to the marquee text element to calculate its width
//   const textRef = useRef(null);
//   const containerRef = useRef(null);
  
//   // Handle scrolling and background gradient movement
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const ops = {
//     origin: "left",
//     distance: "500px", // Increase distance to trigger the reveal before the element's bottom reaches the viewport
//     scale: .5,
//     duration: 2000,
//   };

//   const ops1 = {
//     origin: "right",
//     distance: "500px", // Adjust distance for the second element
//     scale: 0.5,
//     duration: 2000,
//   };

//   useEffect(() => {
//     ScrollReveal().reveal(".interface1", ops);
//     ScrollReveal().reveal(".interface2", ops1);
//   }, []);

//   // Marquee effect
//   useEffect(() => {
//     const marqueeInterval = setInterval(() => {
//       if (textRef.current && containerRef.current) {
//         const textWidth = textRef.current.offsetWidth;
//         const containerWidth = containerRef.current.offsetWidth;

//         // Reset the offset to create an infinite loop when the text has fully scrolled out of view
//         setMarqueeOffset((prevOffset) => {
//           if (prevOffset > textWidth) {
//             return -containerWidth; // Reset position to the right side
//           }
//           return prevOffset + 5; // Adjust speed of text movement
//         });
//       }
//     }, 20); // Adjust this for smooth scrolling speed

//     return () => clearInterval(marqueeInterval);
//   }, []);

//   return (
//     <>
//       <div className='h-screen w-screen third_section px-32 flex justify-center'>
//         <div className='relative wrapper'>
//           <img className='interface2' src={interface_profile} />
//           <img className='interface1' src={interface_img} />
//         </div>
//       </div>

//       <div
//         ref={containerRef} // Ref for the container
//         className="flex pb-16 mb-16 justify-center items-start flex-col"
//         style={{
//           overflow: 'hidden', // Hide the text outside the boundaries
//           whiteSpace: 'nowrap', // Prevent text wrapping
//         }}
//       >
//         <h1
//           ref={textRef} // Ref for the text
//           className="text-9xl text_modify"
//           style={{
//             display: 'inline-block',
//             position: 'relative',
//             left: `-${marqueeOffset}px`, // Move the text from right to left
//             backgroundImage: 'linear-gradient(160deg, #007bff, #f0f0f0)',
//             backgroundSize: '100%',
//             backgroundPosition: `${marqueeOffset * 0.2}px`, // Moves gradient with the marquee effect
//             transition: 'background-position 0.1s ease-in-out',
//             WebkitBackgroundClip: 'text',
//             color: 'transparent',
//           }}
//         >
//           {visibleText}
//         </h1>
//         <marquee className='text-9xl text-blue-700' behavior="" direction="">
//           {visibleText}
//         </marquee>
//       </div>

//       <div className='h-screen'></div>
//     </>
//   );
// };

// export default ThirdSection;


import React, { useEffect, useState, useRef } from 'react';
import interface_img from '../../../assets/Chat_interface_img.png';
import './thirdsection.css';
import interface_profile from '../../../assets/Chat_interface_profile.png';

import ScrollReveal from 'scrollreveal';

const ThirdSection = () => {
  const visibleText = "THE ALL NEW MODERN UI AND AMAZING FEATURES. START USING NOW!";
  const [scrollY, setScrollY] = useState(0);
  
  // Ref to track the marquee tag
  const marqueeRef = useRef(null);

  // Handle scrolling and background gradient movement
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ops = {
    origin: "left",
    distance: "500px", // Increase distance to trigger the reveal before the element's bottom reaches the viewport
    scale: 0.5,
    duration: 2000,
  };

  const ops1 = {
    origin: "right",
    distance: "500px", // Adjust distance for the second element
    scale: 0.5,
    duration: 2000,
  };

  useEffect(() => {
    ScrollReveal().reveal(".interface1", ops);
    ScrollReveal().reveal(".interface2", ops1);
  }, []);

  return (
    <>
      <div className='h-screen w-screen third_section px-32 flex justify-center'>
        <div className='relative wrapper'>
          <img className='interface2' src={interface_profile} />
          <img className='interface1' src={interface_img} />
        </div>
      </div>

      {/* Marquee with gradient text */}
      <div className="flex pb-16 mb-16 justify-center items-start flex-col">
        <marquee
          ref={marqueeRef}
          behavior="scroll"
          direction="left"
          scrollamount="35"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          <h1
            className="text-9xl text_modify"
            style={{
              display: 'inline-block',
              backgroundImage: 'linear-gradient(190deg, #007bff, #f0f0f0)',
              backgroundSize: '100%',
              backgroundPosition: `center`, // Set initial gradient position
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {visibleText}
          </h1>
        </marquee>
      </div>

      <div className='h-screen'></div>
    </>
  );
};

export default ThirdSection;

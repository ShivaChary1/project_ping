// import React from "react";
// import Lottie from "react-lottie";
// import { useEffect, useState } from "react";
// import "./second.css";
// import ScrollReveal from "scrollreveal";
// import boy1 from "../../../assets/boy2.json";
// import girl1 from "../../../assets/girl1.json";
// import boy2 from "../../../assets/boy1.json";

// const Second = () => {
//   const sc_ops = {
//     origin: "bottom",
//     distance: "100px",
//     scale: 0.5,
//     duration: 1000,
//   };
//   useEffect(() => {
//     ScrollReveal().reveal(".first_chat", sc_ops);
//     ScrollReveal().reveal(".second_chat", sc_ops);
//     ScrollReveal().reveal(".third_chat", sc_ops);
//     ScrollReveal().reveal(".fourth_chat", sc_ops);
//   }, []);

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     delay: 5,
//     animationData: boy1,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   const defaultOptions2 = {
//     loop: true,
//     autoplay: true,
//     delay: 5,
//     animationData: girl1,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   const defaultOptions3 = {
//     loop: true,
//     autoplay: true,
//     delay: 5,
//     animationData: boy2,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="flex px-16 py-16 justify-center items-start flex-col gap-y-3"
//         style={{
//           backgroundPosition: `${scrollY * 0.5}px`,
//           WebkitBackgroundClip: "text",
//           color: "transparent",
//         }}
//       >
//         <h1
//           className="text-9xl text-white text-left"
//           style={{
//             backgroundImage: "linear-gradient(90deg, #007bff, #f0f0f0)",
//             backgroundSize: "200%",
//             transition: "background-position 0.1s ease-in-out",
//           }}
//         >
//           TEXT ANYTIME,
//         </h1>
//         <h1 className="text-9xl text-white">ANYWHERE,</h1>
//         <h1 className="text-9xl text-white">AND SHARE WHATEVER YOU WANT TO.</h1>
//       </div>
//       <div className="txts_container w-screen">
//         <div className="first_chat">
//           <span className="img_profile">
//             <Lottie options={defaultOptions} />
//           </span>

//           <div className="profile_msg1 text-3xl">Hey, Guys! Random gc?</div>
//         </div>

//         <div className="second_chat">
//           <div className="profile_msg1 text-3xl">Sure! I'm interested.</div>
//           <span className="img_profile">
//             <Lottie options={defaultOptions2} />
//           </span>
//         </div>

//         <div className="third_chat">
//           <span className="img_profile">
//             <Lottie options={defaultOptions3} />
//           </span>
//           <div className="profile_msg2 text-3xl">GoodMorning🤗😀</div>
//         </div>

//         <div className="fourth_chat">
//           <div className="profile_msg2 text-3xl">Have a great day! 🤗</div>
//           <span className="img_profile">
//             <Lottie options={defaultOptions} />
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Second;


import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import ScrollReveal from "scrollreveal";
import boy1 from "../../../assets/boy2.json";
import girl1 from "../../../assets/girl1.json";
import boy2 from "../../../assets/boy1.json";
import "./second.css";

const Second = () => {
  const text = "TEXT ANYTIME, ANYWHERE, AND SHARE WHATEVER YOU WANT TO.";
  const [visibleText, setVisibleText] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const sc_ops = {
    origin: "bottom",
    distance: "100px",
    scale: 0.5,
    duration: 1000,
  };

  useEffect(() => {
    ScrollReveal().reveal(".first_chat", sc_ops);
    ScrollReveal().reveal(".second_chat", sc_ops);
    ScrollReveal().reveal(".third_chat", sc_ops);
    ScrollReveal().reveal(".fourth_chat", sc_ops);
  }, []);

  // Animations for Lottie files
  const defaultOptions = {
    loop: true,
    autoplay: true,
    delay: 5,
    animationData: boy1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    delay: 5,
    animationData: girl1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    delay: 5,
    animationData: boy2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Append letters to text based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calculate how many letters should be visible based on scroll position
      const maxLetters = Math.min(text.length, Math.floor(scrollY / 10));
      setVisibleText(text.slice(0, maxLetters));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, text]);

  return (
    <>
      
      <div className="txts_container w-screen">
        <div className="first_chat">
          <span className="img_profile">
            <Lottie options={defaultOptions} />
          </span>

          <div className="profile_msg1 text-3xl">Hey, Guys! Random gc?</div>
        </div>

        <div className="second_chat">
          <div className="profile_msg1 text-3xl">Sure! I'm interested.</div>
          <span className="img_profile">
            <Lottie options={defaultOptions2} />
          </span>
        </div>

        <div className="third_chat">
          <span className="img_profile">
            <Lottie options={defaultOptions3} />
          </span>
          <div className="profile_msg2 text-3xl">GoodMorning🤗😀</div>
        </div>

        <div className="fourth_chat">
          <div className="profile_msg2 text-3xl">Have a great day! 🤗</div>
          <span className="img_profile">
            <Lottie options={defaultOptions} />
          </span>
        </div>
      </div>


      <div
        className="mx-16 flex px-16 py-16 justify-center items-start flex-col gap-y-3"
        style={{
          backgroundPosition: `${scrollY * 0.2}px`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        <h1
          className="text-9xl text-white text-left"
          style={{
            backgroundImage: "linear-gradient(180deg, #007bff, #f0f0f0)",
            backgroundSize: "200%",
            backgroundPosition: `${scrollY * 0.9}px 0`,
            transition: "background-position 0.1s ease-in-out",
            color: "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          {visibleText}
        </h1>
      </div>
      <div className="h-screen">

      </div>
    </>
  );
};

export default Second;

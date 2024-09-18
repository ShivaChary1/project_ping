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
  const [letterIndex, setLetterIndex] = useState(0); // To track the current index of the text being revealed.

  const sc_ops = {
    origin: "bottom",
    distance: "100px",
    scale: 0.5,
    duration: 1000,
  };

  // Scroll reveal for chat elements
  useEffect(() => {
    ScrollReveal().reveal(".first_chat", sc_ops);
    ScrollReveal().reveal(".second_chat", sc_ops);
    ScrollReveal().reveal(".third_chat", sc_ops);
    ScrollReveal().reveal(".fourth_chat", sc_ops);
  }, []);

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

  // Reveal text letter by letter every 0.5 seconds
  useEffect(() => {
    if (letterIndex < text.length) {
      const intervalId = setInterval(() => {
        setVisibleText((prev) => prev + text[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 100); // Appends a new letter every 0.5 seconds

      return () => clearInterval(intervalId); // Clear interval on component unmount or when letterIndex changes
    }
  }, [letterIndex, text]);

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: boy1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: girl1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: boy2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* Chat content */}
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

      {/* Scrolling text with gradient */}
      <div
        className="mx-16 flex px-16 pb-16 mb-16 justify-center items-start flex-col"
        style={{
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        <h1
          className="text-9xl color_text_big text-left"
          style={{
            backgroundImage: "linear-gradient(160deg, #007bff, #f0f0f0)",
            backgroundSize: "100%",
            backgroundPosition: `${scrollY * 2}px`, // Moves gradient faster on scroll
            transition: "background-position 0.1s ease-in-out",
            WebkitBackgroundClip: "text",
          }}
        >
          {visibleText}
        </h1>
      </div>{/* Filler div for scrollable height */}
    </>
  );
};

export default Second;

/* eslint-disable react/no-unescaped-entities */
import "./hero.css";
import Lottie from "lottie-react";
import animationDevelopment from "../../animation/animationDevelopment.json";
import { useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const lottieRef = useRef();
  let currentMode = localStorage.getItem("currentMode") || "dark";
  return (
    <section className="flex hero" id="hero">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/images/formal.png"
            alt="Ahmed Gaafer"
          />
        </div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Front-End Developer
        </motion.h1>
        <p className="subtitle">
          Hi, I’m Ahmed — a front-end developer with a background in
          engineering.
          <br />
          After gaining hands-on experience in the engineering field, I
          transitioned into tech by completing a Front-End Angular course at
          Route Academy, and later specialized in Front-End Cross-Platform
          development at ITI.
          <br />
          I focus on building scalable, responsive web apps using modern
          technologies like JavaScript, TypeScript, Angular, React, and Flutter.
          I’m always exploring new tools and best practices to deliver smooth,
          user-friendly experiences across platforms.
          <br />
          Currently, I'm working on several personal and collaborative projects
          to sharpen my skills and contribute to real-world solutions.
          <br />
          I'm open to internship or junior front-end opportunities where I can
          grow and contribute to impactful projects.
        </p>
        <div className="allIcons flex">
          <a
            href="https://x.com/reshaaa111"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-twitter"></div>
          </a>
          <a
            href="https://www.instagram.com/ahmed.gaafer_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-instagram"></div>
          </a>
          <a
            href="https://github.com/ahmedgaafer1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedgaafer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin-square"></div>
          </a>
          <a
            href="https://www.facebook.com/ahmed.beh17/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-facebook"></div>
          </a>
        </div>
        <div className="CV_Container">
          <a
            className={`${
              currentMode === "dark" ? "cv-Dark-button" : "cv-glass-button"
            }`}
            href="https://drive.google.com/uc?export=download&id=1hU9gFd_CfQRJj07Lo7l5c6FRGY2pmtAK"
            download
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          style={{ height: 400 }}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={animationDevelopment}
        />
      </div>
    </section>
  );
}

export default Hero;

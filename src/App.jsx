import { useState, useRef } from "react";
import { motion } from "framer-motion";

import logo from "./assets/logo.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import instagramIcon from "./assets/icon-instagram.svg";
import youtubeIcon from "./assets/icon-youtube.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";
import facebookIcon from "./assets/icon-facebook.svg";
import hamburgerMenu from "./assets/icon-hamburger.svg";
import closeIcon from "./assets/icon-close.svg";
import illustrationIntro from "./assets/illustration-intro.svg";
import bgSimplifyDesktop from "./assets/bg-simplify-section-desktop.svg";
import bgSimplifyMobile from "./assets/bg-simplify-section-mobile.svg";
import bgTabletPattern from "./assets/bg-tablet-pattern.svg";
import ali from "./assets/avatar-ali.png";
import anisha from "./assets/avatar-anisha.png";
import richard from "./assets/avatar-richard.png";
import shanai from "./assets/avatar-shanai.png";

function App() {
  const footerLogo = (
    <svg xmlns="http://www.w3.org/2000/svg" width="146" height="24">
      <g fill="none" fill-rule="evenodd">
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z"
        />
        <g fill="#F3603C">
          <path d="M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z" />
          <ellipse cx="12.814" cy="13.257" opacity=".5" rx="2.786" ry="2.857" />
        </g>
      </g>
    </svg>
  );

  const menuRef = useRef(null);
  const navRef = useRef(null);

  const [menuImg, setMenuImg] = useState(hamburgerMenu);
  const [menuToggled, setMenuToggled] = useState(false);

  const toggleMenu = () => {
    const nav = navRef.current;
    nav.classList.toggle("hideNav");

    if (!menuToggled) {
      setMenuImg(closeIcon);
      setMenuToggled(true);
    } else {
      setMenuImg(hamburgerMenu);
      setMenuToggled(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.8 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } },
  };

  return (
    <div className="App">
      <header>
        <div className="logoGrp">
          <img src={logo} alt="logo" className="logo" />
          <img
            src={menuImg}
            alt="menu"
            className="menu"
            ref={menuRef}
            onClick={toggleMenu}
          />
        </div>

        <nav ref={navRef} className="hideNav">
          <ul className="navList">
            <li className="navText">
              <a href="#">Pricing</a>
            </li>
            <li className="navText">
              <a href="#">Product</a>
            </li>
            <li className="navText">
              <a href="#">About us</a>
            </li>
            <li className="navText">
              <a href="#">Careers</a>
            </li>
            <li className="navText">
              <a href="#">Community</a>
            </li>
          </ul>
        </nav>

        <button className="getStartedBtn hidden md:block">Get started</button>
      </header>

      <main className="mainBody">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          className="introSection"
        >
          <div className="textSection">
            <h1 className="text-4xl md:text-5xl text-center md:text-start font-bold mb-5">
              Bring everyone together to build better products.
            </h1>

            <p className="text text-center md:text-start">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>

            <button className="getStartedBtn mt-5 mx-auto md:mx-0 block">
              Get started
            </button>
          </div>

          <div className="imgSection">
            <img
              src={illustrationIntro}
              alt="illustration"
              className="mx-auto md:mx-0 block"
            />
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          className="sectionClass"
        >
          <div className="textSection">
            <h1 className="sectionHeading">What's different about manage?</h1>

            <p className="text w-full md:w-10/12">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="textSection flex flex-col gap-9">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
            >
              <div className="featureContainer">
                <div className="featureNum">01</div>
                <h1 className="featureHeading">Track company-wide progress</h1>
              </div>

              <div className="featureContent">
                <p className="text lg:ml-24">
                  See how your day to day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest level of details. Never lose sight of the
                  bigger picture again.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
            >
              <div className="featureContainer">
                <div className="featureNum">02</div>{" "}
                <h1 className="featureHeading">Advanced built in reports</h1>
              </div>

              <div className="featureContent">
                <p className="text lg:ml-24">
                  See how your day to day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest level of details. Never lose sight of the
                  bigger picture again.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
            >
              <div className="featureContainer">
                <div className="featureNum">03</div>
                <h1 className="featureHeading">
                  Everything you need in one place
                </h1>
              </div>

              <div className="featureContent">
                <p className="text lg:ml-24">
                  See how your day to day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest level of details. Never lose sight of the
                  bigger picture again.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          className="reviewSection"
        >
          <div className="reviewsGrp">
            <div className="reviewCard">
              <img src={anisha} alt="profilePic" className="reviewImg" />

              <div className="reviewContent">
                <h1 className="reviewerName">anisha li</h1>
                <p className="text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora sequi magnam temporibus repellat, est doloribus
                  doloremque quidem ipsa
                </p>
              </div>
            </div>

            <div className="reviewCard">
              <img src={ali} alt="profilePic" className="reviewImg" />

              <div className="reviewContent">
                <h1 className="reviewerName">ali bravo</h1>
                <p className="text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora sequi magnam temporibus repellat, est doloribus
                  doloremque quidem ipsa
                </p>
              </div>
            </div>

            <div className="reviewCard">
              <img src={richard} alt="profilePic" className="reviewImg" />

              <div className="reviewContent">
                <h1 className="reviewerName">richard watts</h1>
                <p className="text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora sequi magnam temporibus repellat, est doloribus
                  doloremque quidem ipsa
                </p>
              </div>
            </div>

            <div className="reviewCard">
              <img src={shanai} alt="profilePic" className="reviewImg" />

              <div className="reviewContent">
                <h1 className="reviewerName">shanai ming</h1>
                <p className="text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora sequi magnam temporibus repellat, est doloribus
                  doloremque quidem ipsa
                </p>
              </div>
            </div>
          </div>

          <button className="getStartedBtn mt-5 mx-auto  block">
            Get started
          </button>
        </motion.section>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          className="bg-[url('./assets/bg-simplify-section-mobile.svg')] md:bg-[url('./assets/bg-simplify-section-desktop.svg')]  flex flex-col md:flex-row justify-between items-center bg-brightRed p-10 md:p-20"
        >
          <h1 className="text-4xl font-bold text-white text-center md:text-start md:w-1/2">
            Simplify how your team works today
          </h1>

          <button className=" rounded-full px-5 py-2 font-semibold bg-white text-sm mt-10 md:mt-0 text-brightRed hover:scale-110 transition ease-in-out duration-200;">
            Get started
          </button>
        </motion.section>

        <motion.footer
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex flex-col-reverse md:flex-col gap-10 justify-center md:justify-start items-center mx-auto lg:mx-0;">
            {footerLogo}

            <div className="iconGrp">
              <img src={facebookIcon} alt="icon" />
              <img src={youtubeIcon} alt="icon" />
              <img src={twitterIcon} alt="icon" />
              <img src={pinterestIcon} alt="icon" />
              <img src={instagramIcon} alt="icon" />
            </div>
          </div>

          <div className="mt-10 md:mt-0 flex flex-row justify-between md:gap-10 w-full md:w-auto">
            <ul className="footerCol">
              <li>Home</li>
              <li>Pricing</li>
              <li>Products</li>
              <li>About us</li>
            </ul>

            <ul className="footerCol">
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="footerInput">
            <input
              type="text"
              className="rounded-full text-black p-2 focus:outline-0"
            />
            <button className="goBtn">Go</button>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}

export default App;

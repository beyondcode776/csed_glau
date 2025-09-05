import React from "react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import targetAnimation from "../animations/excellence.json";
import computerAnimation from "../animations/innovation.json";
import peopleAnimation from "../animations/community.json";
import handshakeAnimation from "../animations/event.json";
import starAnimation from "../animations/caree.json";
import clockAnimation from "../animations/event.json";
import { ThreeDMarquee} from "../components/3d-marquee";
import img1 from '../assets/grimerover.jpg';
import img2 from '../assets/EventBack.jpg';  
import img3 from '../assets/Media.jpg';
import img4 from '../assets/wissenaire.jpg';
import img5 from '../assets/rccar.jpg';
import img6 from '../assets/aaroi.jpg';
import img7 from '../assets/drone.jpg';
import img8 from '../assets/grime.jpg';


gsap.registerPlugin(ScrollTrigger);

export default function HomeGradient() {
  const containerRef = useRef(null);
  const statsRefs = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const timeline = gsap.timeline();

  const statsData = [
    {
      number: 50,
      suffix: "+",
      label: "Events",
      animation: targetAnimation,
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
      bgGradient: "from-purple-500/10 to-purple-900/10",
      hoverGlow: "group-hover:shadow-purple-500/20",
    },
    {
      number: 12,
      suffix: "+",
      label: "Hackathons",
      animation: computerAnimation,
      color: "text-blue-400",
      borderColor: "border-blue-400/30",
      bgGradient: "from-blue-500/10 to-blue-900/10",
      hoverGlow: "group-hover:shadow-blue-500/20",
    },
    {
      number: 60,
      suffix: "+",
      label: "Alumni",
      animation: peopleAnimation,
      color: "text-emerald-400",
      borderColor: "border-emerald-400/30",
      bgGradient: "from-emerald-500/10 to-emerald-900/10",
      hoverGlow: "group-hover:shadow-emerald-500/20",
    },
    {
      number: 10,
      suffix: "+",
      label: "Partners",
      animation: handshakeAnimation,
      color: "text-amber-400",
      borderColor: "border-amber-400/30",
      bgGradient: "from-amber-500/10 to-amber-900/10",
      hoverGlow: "group-hover:shadow-amber-500/20",
    },
    {
      number: 100,
      suffix: "+",
      label: "Members",
      animation: starAnimation,
      color: "text-pink-400",
      borderColor: "border-pink-400/30",
      bgGradient: "from-pink-500/10 to-pink-900/10",
      hoverGlow: "group-hover:shadow-pink-500/20",
    },
    {
      number: 5,
      suffix: "+",
      label: "Years",
      animation: clockAnimation,
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      bgGradient: "from-cyan-500/10 to-cyan-900/10",
      hoverGlow: "group-hover:shadow-cyan-500/20",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const statElements = statsRefs.current;

    gsap.set(statElements, {
      opacity: 0,
      y: 80,
      scale: 0.7,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateStats();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (container) observer.observe(container);

    const animateStats = () => {
      gsap.to(statElements, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "elastic.out(1, 0.5)",
      });

      statElements.forEach((element, index) => {
        const numberElement = element.querySelector(".stat-number");
        const targetNumber = statsData[index].number;
        const iconElement = element.querySelector(".stat-icon");

        gsap.to(iconElement, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        const counter = { value: 0 };
        gsap.to(counter, {
          value: targetNumber,
          duration: 2.5,
          delay: 0.3 + index * 0.15,
          ease: "power3.out",
          onUpdate: () => {
            numberElement.textContent = Math.floor(counter.value);
          },
          onComplete: () => {
            numberElement.textContent = targetNumber;
            gsap.to(numberElement, {
              scale: 1.1,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: "power2.inOut",
            });
          },
        });
      });
    };

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [hasAnimated, statsData]);

  useGSAP(() => {
    timeline
      .fromTo(
        ".gradient-container",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".gradient-container",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
          },
        }
      )
      .fromTo(
        ".logo-letter",
        {
          opacity: 0,
          y: 50,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".csed-full-form",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        },
        "-=0.5"
      )
      .fromTo(
        ".lead-text",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 0.9,
          x: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".csed-full-form",
            start: "top 70%",
            end: "top 40%",
            scrub: 1,
          },
        },
        "-=0.3"
      )
      .fromTo(
        ".club-text",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".club-text",
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        },
        "-=0.2"
      )
      .fromTo(
        ".imp-image-area",
        {
          scale: 0.8,
          opacity: 0,
          rotationY: 30,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".imp-people-intro",
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        }
      )
      .fromTo(
        ".imp-data-area",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".imp-people-intro",
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        },
        "-=0.8"
      );
  });

const images = [
  { 
    imgElement: <img src={img1} alt="Gallery item 1" />,
    alt: "Gallery item 1"
  },
  { 
    imgElement: <img src={img3} alt="Gallery item 2" />,
    alt: "Gallery item 2" 
  },
  { 
    imgElement: <img src={img2} alt="Gallery item 2" />,
    alt: "Gallery item 2" 
  },
  { 
    imgElement: <img src={img4} alt="Gallery item 2" />,
    alt: "Gallery item 2" 
  },
  { 
    imgElement: <img src={img5} alt="Gallery item 2" />,
    alt: "Gallery item 2" 
  },
  { 
    imgElement: <img src={img6} alt="Gallery item 2" />,
    alt: "Gallery item 2" 
  },
  { 
    imgElement: <img src={img7} alt="Gallery item 2" />,
    alt: "Gallery item 2" 
  },
  { 
    imgElement: <img src={img8} alt="Gallery item 2" />,
    alt: "Gallery item 2" 
  },

  { 
    imgElement: <img src={img4} alt="Gallery item 2" />,
    alt: "Gallery item 2" 
  },
];


  const handleStatHover = (index, isHovering) => {
    const element = statsRefs.current[index];
    const glowElement = element.querySelector(".stat-glow");

    gsap.to(element, {
      y: isHovering ? -10 : 0,
      scale: isHovering ? 1.05 : 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(glowElement, {
      opacity: isHovering ? 0.3 : 0,
      scale: isHovering ? 1.5 : 1,
      duration: 0.4,
      ease: "power2.out",
    });

    const icon = element.querySelector(".stat-icon");
    gsap.to(icon, {
      scale: isHovering ? 1.4 : 1,
      rotation: isHovering ? 15 : 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <div className="gradient-container bg-black text-white overflow-hidden relative font-['Inter']">
      <div className="data-details py-16 md:py-32 px-[5%] max-w-[1400px] mx-auto">
        <div className="csed-full-form mb-16 md:mb-32 text-center">
          <div className="logo-letter text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-[-0.03em] leading-[0.9] mb-2 relative inline-block">
            C<span className="lead-text text-[clamp(0.8rem,1.5vw,1.2rem)] font-normal opacity-90 ml-2 inline-block text-white tracking-[0.1em]">ENTER FOR</span>
          </div>
          <div className="logo-letter text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-[-0.03em] leading-[0.9] mb-2 relative inline-block">
            S<span className="lead-text text-[clamp(0.8rem,1.5vw,1.2rem)] font-normal opacity-90 ml-2 inline-block text-white tracking-[0.1em]">KILLS &</span>
          </div>
          <div className="logo-letter text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-[-0.03em] leading-[0.9] mb-2 relative inline-block">
            E<span className="lead-text text-[clamp(0.8rem,1.5vw,1.2rem)] font-normal opacity-90 ml-2 inline-block text-white tracking-[0.1em]">NTREPRENEURSHIP</span>
          </div>
          <div className="logo-letter text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-[-0.03em] leading-[0.9] mb-2 relative inline-block">
            D<span className="lead-text text-[clamp(0.8rem,1.5vw,1.2rem)] font-normal opacity-90 ml-2 inline-block text-white tracking-[0.1em]">EVELOPMENT</span>
          </div>
          <div className="club-text text-[clamp(1rem,2vw,1.4rem)] leading-relaxed max-w-[800px] mt-8 md:mt-12 opacity-80 font-light tracking-[0.02em] mx-auto">
            A visionary community empowering young innovators to build, grow, and
            transform ideas into impactful realities through collaboration and
            cutting-edge learning.
          </div>
        </div>

          
        <ThreeDMarquee 
  images={images}
  cols={3}
  className="w-[1200px]" // Fixed width
/>
            

      </div>
      <div className="imp-people-intro grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 py-12 md:py-24 px-[5%] max-w-[1400px] mx-auto items-center relative">
        <div className="imp-image-area w-full h-[300px] md:h-[400px] rounded-2xl bg-[url('/images/People/Anoop.jpg')] bg-cover bg-no-repeat bg-center relative overflow-hidden transform-style-preserve-3d">
          <div className="image-glow absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
          <div className="image-pattern absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30"></div>
        </div>
        <div className="imp-data-area relative">
          <div className="title-container mb-6 md:mb-8 relative">
            <h1 className="imp-title text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight mb-2 tracking-[-0.02em]">Prof. Anoop Kumar Gupta</h1>
            <div className="title-underline w-20 h-[3px] bg-gradient-to-r from-white to-transparent mt-4"></div>
          </div>
          <h3 className="imp-sub-title text-[clamp(1rem,1.3vw,1.2rem)] font-normal opacity-80 mb-3 tracking-[0.02em]">
            Vice Chancellor & Director Institute of Applied Sciences & Humanities
          </h3>
          <h3 className="imp-sub-title text-[clamp(1rem,1.3vw,1.2rem)] font-normal opacity-80 mb-3 tracking-[0.02em]">
            Chief Patron of CSED Club
          </h3>
          <div className="imp-desc mt-6 md:mt-8 text-[clamp(0.95rem,1.1vw,1.1rem)] leading-loose opacity-70 font-light">
            <p className="mb-4 md:mb-6">
              Prof. Anup Kumar Gupta brings 28+ years of academic leadership as
              Vice Chancellor and Director of the Institute of Applied Sciences
              & Humanities. His visionary approach has elevated academic
              standards and fostered an environment of innovation and excellence.
            </p>
            <p>
              A distinguished scholar with a Ph.D., M.Phil., and dual MBA
              degrees (including Executive MBA Topper), Prof. Gupta's
              multidisciplinary expertise continues to inspire faculty and
              students alike, driving the institution toward new heights of
              achievement.
            </p>
          </div>
          <div className="signature-line w-[150px] h-[2px] bg-white/30 mt-8 md:mt-12 relative">
            <div className="absolute right-0 top-[-5px] w-[10px] h-[10px] rounded-full bg-white opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
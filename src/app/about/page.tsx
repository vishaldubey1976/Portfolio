'use client';
import React, { useEffect, useState } from "react";
import { SparklesCore } from '@/components/ui/sparkles';
import GitHubCalendar from "react-github-calendar";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import { 
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiHtml5, 
  SiCss3,
  SiVisualstudiocode,
  SiCanva,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import {
  SiNextdotjs,
} from "react-icons/si";

const About = () => {
  const [blockSize, setBlockSize] = useState(15); // Default block size
  const [blockMargin, setBlockMargin] = useState(4); // Default block margin
  const [fontSize, setFontSize] = useState(16); // Default font size for GitHub Calendar text

  // Dynamically set the block size, margin, and text size based on screen width
  useEffect(() => {
    const updateBlockSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 350) {
        setBlockSize(4); // Tiny screens
        setBlockMargin(1); // Minimal margin
        setFontSize(10); // Reduce text size on tiny screens
      } else if (screenWidth < 400) {
        setBlockSize(5); // Extra small screen
        setBlockMargin(1); // Reduce margin
        setFontSize(12); // Adjust text size
      } else if (screenWidth < 480) {
        setBlockSize(5); // Small screen (Mobile)
        setBlockMargin(1); // Adjust margin for small screens
        setFontSize(12); // Adjust text size for mobile
      } else if (screenWidth < 768) {
        setBlockSize(6); // Medium screen (Tablet)
        setBlockMargin(1); // Adjust margin for tablets
        setFontSize(14); // Slightly bigger text for tablets
      } else {
        setBlockSize(15); // Larger screens (Desktop)
        setBlockMargin(4); // Default margin
        setFontSize(16); // Default text size
      }
    };

    // Set initial values
    updateBlockSize();

    // Update values on window resize
    window.addEventListener("resize", updateBlockSize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateBlockSize);
  }, []);

  return (
    <div className="min-h-screen relative bg-gray-100 dark:bg-gray-900 py-12 pt-40 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles-contact"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-10 flex justify-center mt-8">
        <div className="border-4 border-purple-200 p-8 rounded-lg max-w-4xl w-full custom-border">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-sans font-bold mb-4 text-white">
                Know Who <span className="text-purple-300">I'M</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-xl text-gray-300 mt-6 text-justify">
                Hey Everyone, I am <span className="text-purple-300">Aman Ajay Pandey</span> from <span className="text-purple-300">Maharashtra, India</span>.
                <br />
                <br />
                I have completed my B.Tech in Electronics and Telecommunication from Deogiri Institute of Engineering and Management Studies.
                <br />
                <br />
                As a frontend developer, I am passionate about creating seamless user experiences and have a strong foundation in modern web technologies.
              </p>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-sans font-bold mb-4 text-white">
                My <span className="text-purple-300">Experience</span>
              </h1>
              <div className="mt-6 text-justify">
                <h2 className="text-lg md:text-xl lg:text-xl font-bold text-purple-300">
                  Java Developer Intern, Capgemini - FUEL
                </h2>
                <p className="text-gray-300 mt-2 text-lg md:text-xl lg:text-xl">
                  Developed applications using Core Java, managed and manipulated data with MySQL, performing database design and SQL queries.
                </p>
              </div>
              <div className="mt-4 text-justify">
                <h2 className="text-lg md:text-xl lg:text-xl font-bold text-purple-300">
                  Technical Associate at IETE DIEMS ISF
                </h2>
                <p className="text-gray-300 mt-2 text-lg md:text-xl lg:text-xl">
                  As a Technical Associate at IETE DIEMS, I supported the team in various initiatives and projects, ensuring smooth operations and effective collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Skillset Section */}
      <div className="relative z-10 text-center mt-20">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-sans font-bold mb-8 text-white">
          Professional <strong className="text-purple-300">Skillset</strong>
        </h1>
      </div>

      <div className="flex justify-center pb-10 mt-12 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[ 
            SiHtml5, SiCss3, DiJavascript1, SiTailwindcss, DiReact, CgCPlusPlus, 
            SiMysql, SiNextdotjs, DiJava, SiTypescript,
          ].map((Icon, index) => (
            <div
              key={index}
              className="w-28 h-28 md:w-40 md:h-40 border-4 border-purple-300 flex justify-center items-center rounded-lg"
            >
              <Icon className="text-4xl md:text-6xl text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Tools I Use Section */}
      <div className="relative z-10 text-center mt-8">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-sans font-bold mb-8 text-white">
          My <strong className="text-purple-300">Tech Stack</strong>
        </h1>
      </div>

      <div className="flex justify-center mt-12 pb-10 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[ 
            SiVisualstudiocode, SiCanva, DiGit, SiGithub, SiVercel, 
          ].map((Icon, index) => (
            <div
              key={index}
              className="w-28 h-28 md:w-40 md:h-40 border-4 border-purple-300 flex justify-center items-center rounded-lg"
            >
              <Icon className="text-4xl md:text-6xl text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Days I Code Section */}
      <div className="relative z-10 text-center mt-8 text-white">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-sans font-bold mb-8 text-white">
          My Code <strong className="text-purple-300">Calendar</strong>
        </h1>
        <div className="flex justify-center mt-12 pb-10 relative z-10">
          <GitHubCalendar
            username="amanpandey3956"
            blockSize={blockSize}
            blockMargin={blockMargin}
            fontSize={fontSize}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

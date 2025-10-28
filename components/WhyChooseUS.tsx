"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Interactive Coding Lessons",
    description:
      "Learn full-stack development the smart way — with hands-on coding challenges, live previews, and guided projects. CodeCraft adapts to your pace so you can master web development step by step.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--violet-500))] text-white">
        <img
          src="https://www.shutterstock.com/image-photo/diverse-happy-school-kids-using-600nw-2036186216.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time code feedback demo"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Project Feedback",
    description:
      "Build real-world projects and get instant feedback from mentors and AI-powered code reviews. Track errors, optimize logic, and improve your skills with each commit.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://www.proofhub.com/articles/wp-content/uploads/2025/03/Real-time-feedback.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time code feedback demo"
        />
      </div>
    ),
  },
  {
    title: "Collaborate & Build Together",
    description:
      "Join live coding sessions, pair-program with other learners, and collaborate on mini-projects. Learn teamwork and Git-based workflows like a real developer.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--cyan-500))] text-white">
        <img
          src="https://www.skillsally.com/journal/wp-content/uploads/2023/07/10-Best-Team-Building-Activities-for-Work.jpg"
          height={300}
          className="h-full w-full object-cover"
          alt="real-time code feedback demo"
        />
      </div>
    ),
  },
  {
    title: "Track Your Learning Journey",
    description:
      "Visualize your coding progress — from completed lessons to deployed projects. Stay motivated with streaks, badges, and analytics designed to help you grow as a developer.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="https://www.aihr.com/wp-content/uploads/career-progression-framework-template-cover-image.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time code feedback demo"
        />
      </div>
    ),
  },
];




export default function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={content}/>
        </div>
    )
}
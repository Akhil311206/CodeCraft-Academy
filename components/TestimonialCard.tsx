'use client'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Joining CodeCraft Academy completely changed how I think about coding. The mentors made even complex topics like React and APIs feel easy to grasp and fun to learn.",
    name: "Arjun Sharma",
    title: "Student – Full Stack Web Development",
  },
  {
    quote:
      "Before joining, I struggled to stay consistent. But CodeCraft’s hands-on projects and mentor support helped me build discipline and confidence in my skills.",
    name: "Neha Patel",
    title: "Student – Frontend Developer",
  },
  {
    quote:
      "Learning backend development here gave me the real-world knowledge I needed. Building projects using Node and databases felt like creating something meaningful every week.",
    name: "Rohit Kumar",
    title: "Student – Backend Developer",
  },
  {
    quote:
      "I started as a beginner with HTML and CSS, but now I can design complete responsive websites confidently. CodeCraft made the learning journey smooth and inspiring.",
    name: "Ananya Singh",
    title: "Student – UI/UX & Web Design",
  },
  {
    quote:
      "CodeCraft isn’t just an academy—it’s a builder’s community. Collaborating with peers on real projects made me realize how powerful teamwork in tech can be.",
    name: "Karthik Nair",
    title: "Student – MERN Stack Developer",
  },
];

export default function MusicSchoolTestimonals() {
    return (
        <div className="relative flex flex-col items-center justify-center h-[40rem] w-full bg-black bg-grid-white overflow-hidden">

            <h2 className="text-3xl font-bold text-center mb-8 z-10">
                CodeCraft Journeys: Voices of success
            </h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                    />
                </div>
            </div>
        </div>
        
    )
}
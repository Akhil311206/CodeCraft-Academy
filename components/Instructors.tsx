"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "Hitesh Choudhary",
    designation: "Full Stack Developer & Educator (Chai aur Code)",
    image:
      "https://avatars.githubusercontent.com/u/11613311?v=4",
  },
  {
    id: 2,
    name: "Shradha Khapra",
    designation: "Software Engineer & Educator (Apna College)",
    image:
      "https://pbs.twimg.com/profile_images/1828452192107253760/LgHYdkkd_400x400.jpg",
  },
  {
    id: 3,
    name: "Kunal Kushwaha",
    designation: "DevOps Engineer & Open Source Advocate",
    image:
      "https://hackernoon.imgix.net/images/QliruVK1cgQIvQ4wCknVeQTEZDt1-vv93pu1.jpeg",
  },
  {
    id: 4,
    name: "Love Babbar",
    designation: "Software Engineer & DSA Instructor",
    image:
      "https://yt3.googleusercontent.com/st0tjHROqHEs6scfJ0ZVyMPP1_bh18WJ7l4zAjR4yRf-9sX-eFz2heChzXkiF2TL2tyo2fj_mg=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: 5,
    name: "Anuj Bhaiya",
    designation: "Software Engineer & Career Mentor",
    image:
      "https://yt3.googleusercontent.com/yZMicQ6ubvvqHV7NYTVQJRFrJc1hMRK3JXEoFl4PVM0eP7E9Yw0Vu83621Vwar3wnj92zyroHg=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 6,
    name: "Akshay Saini",
    designation: "Frontend Developer & Educator (Namaste JavaScript)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXoKYP7lz0RbIuGepdtK6uWFcwF6AfBP30w&s",
  },
];


export default function Instructors() {
  return (
    <div className="relative w-full overflow-hidden">
      <WavyBackground className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-center text-white py-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-10">
            Mentors & Developers Who Inspire Us
          </h2>
          <div className="flex items-center justify-center w-full">
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}









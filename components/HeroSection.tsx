"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#38bdf8" 
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-sky-200 to-sky-500 drop-shadow-lg">
          CodeCraft Academy
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-neutral-300">
          Master the most in-demand tech skills with hands-on practice, 
          real-world projects, and guided learning paths — all in one place.
        </p>
        <div className="mt-8">
          <Link href="/courses/all-courses">
            <Button
              borderRadius="1.75rem"
              className="cursor-pointer px-8 py-3 bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800 hover:scale-105 transition-transform"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

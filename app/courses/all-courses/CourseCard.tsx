"use client";

import CourseData from "@/data/coding_courses.json";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  about: string;
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = CourseData.courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-200 text-2xl">
        Course not found
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-6 py-16 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Aurora gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/10 via-purple-600/5 to-transparent"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700/10 via-teal-600/5 to-transparent"></div>

      <div className="max-w-3xl w-full space-y-10 backdrop-blur-xl bg-gray-800/30 border border-gray-700/40 rounded-3xl shadow-2xl shadow-indigo-900/30 p-10">
        <Card className="bg-transparent border-none shadow-none text-center space-y-4">
          <CardHeader>
            <CardTitle className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wide">
              {course.title}
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              {course.description}
            </CardDescription>
          </CardHeader>
        </Card>

        <Separator className="bg-gradient-to-r from-indigo-500/40 to-cyan-400/40 h-[1px]" />

        <Card className="bg-gray-800/40 border border-gray-700/50 rounded-2xl shadow-lg shadow-indigo-900/20">
          <CardHeader>
            <CardTitle className="text-indigo-400 text-xl mb-3">
              About this course
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed text-[17px]">
              {course.about}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/40 border border-gray-700/50 rounded-2xl shadow-lg shadow-indigo-900/20 text-gray-200">
          <CardContent className="flex flex-col items-center gap-4 pt-6">
            <Badge className="bg-indigo-600/30 text-indigo-300 border border-indigo-500/40">
              Instructor
            </Badge>
            <p className="text-lg font-medium text-gray-200">
              {course.instructor}
            </p>

            <Badge className="bg-emerald-600/30 text-emerald-300 border border-emerald-500/40">
              Price
            </Badge>
            <p className="text-2xl font-semibold text-emerald-400">
              Rs. {course.price}
            </p>

            <Link href="/SignupForm">
              <Button className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-indigo-700/40">
                Enroll Now →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

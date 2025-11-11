import React from "react";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-gradient-to-b from-gray-800/60 to-gray-900/80 border border-gray-700 rounded-2xl shadow-lg hover:shadow-gray-700/40 transition-all duration-300 p-6 hover:-translate-y-2">
      <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{course.description}</p>

      <div className="flex justify-between items-center">
        <span className="text-indigo-400 text-2xl font-semibold ml-100">Rs. {course.price}</span>
      </div>

      <Link
        href={`/courses/${course.slug}`}
        className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-300"
      >
        Learn More →
      </Link>
    </div>
  );
}

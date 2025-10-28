import CourseData from "@/data/coding_courses.json";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  about: string;
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = CourseData.courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50 text-stone-800 text-2xl">
        Course not found 
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 flex flex-col items-center px-6 py-16">
      <div className="max-w-3xl mt-30 w-full">
        <h1 className="text-4xl font-semibold mb-6 text-center text-amber-700">
          {course.title}
        </h1>

        <p className="text-stone-700 text-center mb-10 text-lg leading-relaxed">
          {course.description}
        </p>

        <div className="border border-amber-200 rounded-xl p-8 mb-10 bg-white shadow-md shadow-amber-100">
          <h2 className="text-xl font-medium mb-4 text-amber-800">
            About this course
          </h2>
          <p className="text-stone-700 leading-relaxed text-[17px]">
            {course.about}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-stone-700">
            Instructor:{" "}
            <span className="text-amber-800 font-medium">{course.instructor}</span>
          </p>
          <p className="text-stone-700">
            Price:{" "}
            <span className="text-emerald-700 font-semibold">Rs. {course.price}</span>
          </p>
          <Link
            href={`/SignupForm`}
            className="mt-6 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 px-8 rounded-md transition-colors duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}

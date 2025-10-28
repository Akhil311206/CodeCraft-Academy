import CourseData from "@/data/coding_courses.json";
import CourseCard from "./CourseCard";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function AllCourses() {
  return (
    <div className="min-h-screen bg-black py-16 px-10 mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {CourseData.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

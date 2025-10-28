import HeroSection from "@/components/HeroSection"
import FeaturedCourses from "@/components/FeaturedCourses"
import WhyChooseUs from "@/components/WhyChooseUS"
import MusicSchoolTestimonals from "@/components/TestimonialCard"
import Instructors from "@/components/Instructors"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white">
      
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonals/>
      <Instructors/>
    </main>
  )
}

import HeroSection from '@/app/components/HeroSection';
import LearningJourney from '@/app/components/LearningJourney';
import CurriculumSection from '@/app/components/TechnologiesULearn';
import BuildSection from '@/app/components/BuildSection';
import SuccessStories from '@/app/components/SuccessStories';
import EnrollmentForm from '@/app/components/EnrollmentForm';
import Footer from '@/app/components/Footer';
import Courses from './components/PickCourse';
import About from './components/About';
import Header from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {/* Container for the main body content */}
      <div className="mx-auto">
        <HeroSection />

        {/* Padding and separator for visual sections */}
        <section className="">
          <LearningJourney />
        </section>

        <section className="">
          <CurriculumSection />
        </section>
      </div>
      
      {/* <Courses /> */}
      {/* Full-width dark section */}
      <BuildSection />

      <div className="mx-auto">
        <section className="">
          <SuccessStories />
        </section>

        <About />

        <section className="bg-white">
          <EnrollmentForm />
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
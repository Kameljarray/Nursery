import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import CameraGrid from './CameraGrid';
import StaffSection from './StaffSection';
import DailySchedule from './DailySchedule';
import Features from './Features';
import Testimonials from './Testimonials';
import EnrollmentForm from './EnrollmentForm';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="cameras">
          <CameraGrid />
        </section>
        
        <section id="staff">
          <StaffSection />
        </section>
        
        <section id="schedule">
          <DailySchedule />
        </section>
        
        <section id="about">
          <Features />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="enrollment">
          <EnrollmentForm />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
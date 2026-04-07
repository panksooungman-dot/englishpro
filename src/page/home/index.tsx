'use client'

import { HeroSection } from './hero-section'
import { FeaturedCoursesSection } from './featured-courses-section'
import { InstructorSection } from './instructor-section'
import { TestimonialsSection } from './testimonials-section'
import { CtaSection } from './cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCoursesSection />
      <InstructorSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

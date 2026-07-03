'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Users, Award, TrendingUp, ChevronRight, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import OffersModal from '@/components/offers-modal';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Web Developer',
    course: 'Modern Web Designing',
    feedback: 'The course transformed my career! I got hired within 3 months of completing the program. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Digital Marketing Executive',
    course: 'Digital Marketing',
    feedback: 'Excellent instructors and practical projects. The skills I learned are directly applicable in my job.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Arjun Patel',
    role: 'Finance Analyst',
    course: 'Advanced Excel & VBA',
    feedback: 'Amazing course! The Excel VBA training helped me automate my entire workflow. Saved hours of work daily!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha Verma',
    role: 'Graphic Designer',
    course: 'Graphic Design Masterclass',
    feedback: 'Professional training with industry experts. My design portfolio improved significantly!',
    rating: 5,
  },
];

const features = [
  { icon: Users, title: 'Expert Instructors', desc: 'Industry professionals with 10+ years experience' },
  { icon: Award, title: 'Certifications', desc: 'Recognized certificates upon completion' },
  { icon: TrendingUp, title: 'Job Assistance', desc: '95% placement rate with top companies' },
  { icon: Zap, title: 'Updated Content', desc: 'Latest curriculum with cutting-edge technologies' },
];

export default function HomePage() {
  const [showOffers, setShowOffers] = useState(false);

  useEffect(() => {
    // Show offers modal on page load after 2 seconds
    const timer = setTimeout(() => {
      setShowOffers(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <OffersModal isOpen={showOffers} onClose={() => setShowOffers(false)} /> */}
      <Navbar />
      
      {/* Hero Section with Banner Image */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-light"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block">
                <span className="badge-primary">Learn • Grow • Excel</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform <span className="gradient-text">The Universe Computer Institute</span>
                <br />
                Career Today
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Join houndreds of students who&apos;ve mastered in-demand skills at 
                <strong className="text-foreground/70 text-lg gradient-text"> Our Institute </strong>  
                 Get industry-ready with professional certification programs.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses" className="button-gradient inline-flex items-center justify-center gap-2 group">
                  Explore Courses
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="button-outline inline-flex items-center justify-center gap-2">
                  Get in Touch
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sky-200 dark:border-sky-800">
                <div className="hover:scale-110 transition-transform">
                  <p className="text-3xl font-bold gradient-text">100+</p>
                  <p className="text-sm text-foreground/70">Students</p>
                </div>
                <div className="hover:scale-110 transition-transform">
                  <p className="text-3xl font-bold gradient-text">50+</p>
                  <p className="text-sm text-foreground/70">Courses</p>
                </div>
                <div className="hover:scale-110 transition-transform">
                  <p className="text-3xl font-bold gradient-text">99%</p>
                  <p className="text-sm text-foreground/70">Success</p>
                </div>
              </div> */}
            </div>

            {/* Right - Hero Image */}
            <div className="relative card-hover ">
              <div>
                <Image
                  src="/images/Home_banner.jfif"
                  alt="Learning Experience"
                  width={500}
                  height={400}
                  className="w-full h-96 object-cover rounded-xl"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white dark:bg-blue-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-secondary">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="gradient-text">Excellence in Education</span>
            </h2>
            <p className="text-lg text-foreground/70">Comprehensive training designed for career success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="glass rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-sky-200 dark:border-sky-800"
              >
                <div className="bg-gradient-main w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-padding bg-gradient-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-primary">Featured Programs</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="gradient-text">Popular Courses</span>
            </h2>
            {/* <p className="text-lg text-foreground/70">Learn from industry experts</p> */}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { id: 1, name: 'Modern Web Designing', level: 'Advanced', price: '₹4,999', duration: '6 months' },
              { id: 2, name: 'Digital Marketing', level: 'Intermediate', price: '₹3,499', duration: '6 months' },
              { id: 3, name: 'Advanced Excel & VBA', level: 'Advanced', price: '₹2,499', duration: '6 months' },
            ].map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="glass rounded-2xl p-6 card-hover group border-2 border-sky-200 dark:border-sky-800 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-main opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">{course.name}</h3>
                    <span className="badge-primary text-xs">{course.level}</span>
                  </div>
                  <div className="space-y-2 text-foreground/70">
                    <p className="flex items-center gap-2">⏱️ {course.duration}</p>
                    {/* <p className="text-2xl font-bold gradient-text">{course.price}</p> */}
                  </div>
                  <button className="w-full button-gradient mt-4 ">
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses" className="button-outline inline-flex items-center gap-2">
              View All Courses
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white dark:bg-blue-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-secondary">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="gradient-text">Student Feedback</span>
            </h2>
            <p className="text-lg text-foreground/70">See what our students have to say</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-sky-200 dark:border-sky-800 group"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-main flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground group-hover:gradient-text transition-all">{testimonial.name}</h4>
                      <p className="text-xs text-foreground/70">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-foreground/80 mb-4 italic line-clamp-3">
                  &quot;{testimonial.feedback}&quot;
                </p>

                <div className="pt-4 border-t border-sky-200 dark:border-sky-800">
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-sky-300 via-cyan-500 to-sky-400 relative overflow-hidden">
        <div className="absolute top-0 right-0 -m-16 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join houndreds of successful students and transform your career. Enroll today and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href="/auth/signup" className="bg-white text-sky-600 font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2 group">
              Sign Up Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link> */}
            <Link href="/contact" className="bg-white text-sky-600 font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2 group">
              Contact Us
              {/* <ChevronRight className="w-5 h-5" /> */}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

// सर्व Unsplash लिंक्स बदलून तुमच्या लोकल 'public/images/' फोल्डरमधील पाथ्स जोडले आहेत
const galleryItems = [
  { id: 1, category: 'classroom', title: 'Interactive Learning Session', image: '/images/classroom.jpeg' },
  { id: 2, category: 'activites', title: 'Annual Tech Summit 2024', image: '/images/activites.jpeg' },
  { id: 3, category: 'students', title: 'Student Success Stories', image: '/images/students.jpeg' },
  { id: 4, category: 'classroom', title: 'Advanced Lab Training', image: '/images/classroom.jpeg' },
  { id: 5, category: 'activites', title: 'Graduation Ceremony', image: '/images/activites.jpeg' },
  // { id: 6, category: 'achievements', title: 'Certificate Awards', image: '/images/achievements.jpeg' },
  { id: 7, category: 'students', title: 'Collaborative Projects', image: '/images/students.jpeg' },
  { id: 8, category: 'classroom', title: 'Hands-on Training', image: '/images/classroom.jpeg' },
  { id: 9, category: 'activites', title: 'Workshop with Industry Expert', image: '/images/activites.jpeg' },
  // { id: 10, category: 'achievements', title: 'Student Portfolio Exhibition', image: '/images/achievements.jpeg' },
  { id: 11, category: 'students', title: 'Mentorship Program', image: '/images/students.jpeg' },
  { id: 12, category: 'classroom', title: 'Modern Computing Facilities', image: '/images/classroom.jpeg' },
];

const categories = ['all', 'classroom', 'activites', 'students'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <>
      <Navbar />
      
      {/* Banner Section */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-light">
        <div className="absolute inset-0 bg-gradient-light"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="p-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Our Gallery</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Explore moments of learning, achievements, and student success stories
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white dark:bg-blue-950/30">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                  activeCategory === category
                    ? 'button-gradient shadow-lg'
                    : 'button-outline'
                }`}
              >
                {category === 'all' ? 'All Photos' : category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="relative overflow-hidden rounded-xl glass cursor-pointer group card-hover border-2 border-sky-200 dark:border-sky-800"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-white/80 text-sm capitalize">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 fade-in">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-sky-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
              
              {/* Info */}
              <div className="p-6 bg-black/50 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80 capitalize">{selectedImage.category}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all transform hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all transform hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="text-center mt-4 text-white/80">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
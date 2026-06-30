'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Clock, Users, Star, ChevronRight, Filter, X, 
  Keyboard, Monitor, Briefcase, Calculator, 
  Palette, Code, FileSpreadsheet, BarChart3, 
  Megaphone, Layout, Layers, Languages, Award
} from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CourseCard from '@/components/course-card';

const singleCourses = [
  { id: 1, title: 'Language Typing', category: 'Typing', level: 'Beginner', duration: '3 / 6 Months', rating: 4.6, students: 2100,  description: 'Master typing paths in English, Marathi & Hindi scripts', icon: <Keyboard className="w-6 h-6" /> },
  { id: 2, title: 'Basic Computer Course', category: 'Fundamentals', level: 'Beginner', duration: '1 Month', rating: 4.9, students: 1800,  description: 'Learn Windows OS parameters and vital configuration controls', icon: <Monitor className="w-6 h-6" /> },
  { id: 3, title: 'Microsoft Office', category: 'Business', level: 'Intermediate', duration: '3 Months', rating: 4.7, students: 950,  description: 'Master corporate Excel layouts, Word documents, and Outlook entries', icon: <Briefcase className="w-6 h-6" /> },
  { id: 4, title: 'Professional Accounting', category: 'Accounting', level: 'Intermediate', duration: '12 weeks', rating: 4.8, students: 620,  description: 'Learn manual entries, basic Tally Prime structure & tracking setups', icon: <Calculator className="w-6 h-6" /> },
  { id: 5, title: 'Creative Clay Art', category: 'Creative', level: 'Beginner', duration: '8 weeks', rating: 4.6, students: 450,  description: 'Master basic sculpting, coil modeling, and leaf prints architecture', icon: <Palette className="w-6 h-6" /> },
  { id: 6, title: 'Modern Web Designing', category: 'Development', level: 'Advanced', duration: '8 weeks', rating: 4.8, students: 1250,  description: 'Web layouts design with HTML5, CSS3, and core C/C++ logics', icon: <Code className="w-6 h-6" /> },
  { id: 7, title: 'Advanced Excel & VBA', category: 'Business', level: 'Advanced', duration: '5 weeks', rating: 4.9, students: 850,  description: 'Excel dashboard systems with VB macros automation controls', icon: <FileSpreadsheet className="w-6 h-6" /> },
  { id: 8, title: 'Advanced Tally Prime', category: 'Accounting', level: 'Advanced', duration: '8 weeks', rating: 4.8, students: 580,  description: 'Implement complex compliance paths, payroll tracking, and GST forms', icon: <Layers className="w-6 h-6" /> },
  { id: 9, title: 'Digital Marketing', category: 'Marketing', level: 'Intermediate', duration: '6 weeks', rating: 4.7, students: 980,  description: 'Master SEO schemas, Google Ads metrics, and GA4 tracking modules', icon: <Megaphone className="w-6 h-6" /> },
  { id: 10, title: 'Power BI Data Analytics', category: 'Analytics', level: 'Advanced', duration: '10 weeks', rating: 4.9, students: 720,  description: 'Connect M Language parameters, star schemas, and active DAX formulas', icon: <BarChart3 className="w-6 h-6" /> },
  { id: 11, title: 'Graphic Design Masterclass', category: 'Design', level: 'Intermediate', duration: '12 weeks', rating: 4.7, students: 890, description: 'Master Photoshop layouts, Corel Draw paths, and print-ready production files', icon: <Layout className="w-6 h-6" /> },
  { id: 12, title: 'Google Skills Masterclass', category: 'Fundamentals', level: 'Beginner', duration: '4 weeks', rating: 4.8, students: 1100, description: 'Master collaborative Google workspace pipelines, drive partitions and online data structures', icon: <Languages className="w-6 h-6" /> },
  { id: 13, title: 'English Speaking & Personality Development', category: 'Creative', level: 'Beginner', duration: '6 weeks', rating: 4.7, students: 670, description: 'Boost conversational fluency, public confidence, theater displays and advanced semantics', icon: <Users className="w-6 h-6" /> },
  { id: 14, title: 'The Universe Training System', category: 'Development', level: 'Advanced', duration: '1 Year', rating: 5.0, students: 310, description: 'Flagship 12-month program combining complete corporate accounting with advanced layout graphics tracking', icon: <Award className="w-6 h-6" /> }
];

const comboCourses = [
  { id: 'combo1', title: 'Advanced Diploma in Computerized Accounting (ADCA)', courses: [1, 3, 8],  savings: '₹1,498', duration: '20 weeks' },
  { id: 'combo2', title: 'Professional Data Entry and Accounting Expert', courses: [1, 7, 3],  savings: '₹1,998', duration: '24 weeks' },
  { id: 'combo3', title: 'The Digital Accountant Pro Pack', courses: [1, 7, 10],  savings: '₹1,999', duration: '28 weeks' },
  { id: 'combo4', title: 'Microsoft Office & Google Workspace Masterclass', courses: [1, 3, 12],  savings: '₹1,199', duration: '26 weeks' },
  { id: 'combo5', title: 'Professional Graphic & Typing Combo Bundle', courses: [1, 11],   duration: '24 weeks' },
  { id: 'combo6', title: 'Fast Track Office Accounting', courses: [1, 3, 4],  savings: '₹1,299', duration: '12 weeks' },
  { id: 'combo7', title: 'DTP Master Course Bundle', courses: [1, 11],  savings: '₹1,000', duration: '16 weeks' },
  { id: 'combo8', title: 'Professional Photo Editor & Typist Pack', courses: [1, 11],  savings: '₹1,100', duration: '12 weeks' }
];

export default function CoursesPage() {
  const [filterType, setFilterType] = useState('single');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  
  const categories = ['All', ...new Set(singleCourses.map(c => c.category))];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const filteredCourses = singleCourses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <>
      <Navbar />

      <section className="relative pt-20 pb-20 bg-gradient-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h1>
          <p className="text-lg text-foreground/70">
            Explore our diverse range of courses and combo packages verified by the Institute.
          </p>
        </div>
      </section>

      <section className="pb-20 mt-20 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex gap-4">
              <button
                onClick={() => setFilterType('single')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filterType === 'single' ? 'button-gradient' : 'button-outline'
                }`}
              >
                Individual Courses
              </button>
              <button
                onClick={() => setFilterType('combo')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filterType === 'combo' ? 'button-gradient' : 'button-outline'
                }`}
              >
                Combo Packages
              </button>
            </div>

            {filterType === 'single' && (
              <div className="flex flex-col md:flex-row gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-sky-200 dark:bg-slate-900 cursor-pointer">
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-sky-200 dark:bg-slate-900 cursor-pointer" >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}</select>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterType === 'single' ? (
              filteredCourses.length > 0 ? (
                filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-foreground/70 text-lg mb-4">No courses found</p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setSelectedLevel('All'); }}
                    className="button-gradient"
                  >
                    Reset Filters
                  </button>
                </div>
              )
            ) : (
              comboCourses.map(combo => (
                <Link 
                  key={combo.id} 
                  href={`/courses/${combo.id}`}
                  className="glass rounded-2xl p-6 hover-lift relative overflow-hidden border-2 border-sky-200 dark:border-sky-800 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-main opacity-0 group-hover:opacity-5 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold text-foreground leading-snug max-w-full sm:max-w-[70%] group-hover:gradient-text transition-all">
                        {combo.title}
                      </h3>
                      {/* <span className="self-start sm:self-auto bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-sm">
                        Save {combo.savings}
                      </span> */}
                    </div>
                    <p className="text-foreground/60 text-sm mb-4">
                      Includes {combo.courses.length} modules • {combo.duration}
                    </p>
                    <div className="space-y-2 mb-6 py-4 border-y border-sky-200 dark:border-slate-700">
                      {combo.courses.map(courseId => {
                        const course = singleCourses.find(c => c.id === courseId);
                        return (
                          <div key={courseId} className="flex items-start gap-2 text-sm">
                            <div className="w-1 h-1 rounded-full bg-sky-600 mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/70 truncate">{course?.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        {/* <p className="text-foreground/60 text-sm">Bundle Price</p> */}
                        {/* <p className="text-3xl font-bold gradient-text">{combo.price}</p> */}
                      </div>
                      <div className="bg-gradient-main p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="w-full button-gradient py-2.5 rounded-xl text-center font-semibold text-sm shadow-sm">
                      View Details
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </> 
  );
}
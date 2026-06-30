'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { CheckCircle, Clock, FileText, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { admissionFormSchema } from '@/lib/schemas';
import { handleAdmissionSubmit } from '../app/actions';

const steps = [
  { icon: FileText, title: 'Apply Online', description: 'Fill out the simple online application form' },
  { icon: CheckCircle, title: 'Verification', description: 'We verify your details and requirements' },
  { icon: Users, title: 'Counseling', description: 'Get personalized guidance from our advisors' },
  { icon: Clock, title: 'Enrollment', description: 'Complete enrollment and start learning' },
];

const courseData = [
  { id: 1, title: 'Typing - (English / Marathi )', category: 'Alpha Skill' },
  { id: 2, title: 'Basic computer Course', category: 'Alpha Skill' },
  { id: 3, title: 'Microsoft office', category: 'Alpha Skill' },
  { id: 4, title: 'Google Skills', category: 'Alpha Skill' },
  { id: 5, title: 'Basic Tally', category: 'Accounting' },
  { id: 6, title: 'Advance Tally', category: 'Accounting' },
  { id: 7, title: 'Advance Excel', category: 'Accounting' },
  { id: 8, title: 'Advance Excel Expert', category: 'Accounting' },
  { id: 9, title: 'Industrial Accounting', category: 'Accounting' },
  { id: 10, title: 'Power BI', category: 'Accounting' },
  { id: 11, title: 'Basic Hardware', category: 'Programming & Hardware' },
  { id: 12, title: 'Digital Marketing', category: 'Alpha Skill' },
  { id: 13, title: 'Corel', category: 'Designing' },
  { id: 14, title: 'Photoshop', category: 'Designing' },
  { id: 15, title: 'Indesign', category: 'Designing' },
  { id: 16, title: 'Illustrator', category: 'Designing' },
  { id: 17, title: 'Canva', category: 'Designing' },
  { id: 18, title: 'After Effect', category: 'Designing' },
  { id: 19, title: 'Premiere Pro', category: 'Designing' },
  { id: 20, title: 'C', category: 'Programming & Hardware' },
  { id: 21, title: 'C++', category: 'Programming & Hardware' },
  { id: 22, title: 'English Speaking', category: 'Other' },
  { id: 23, title: 'Kids English Speaking', category: 'Kids' },
  { id: 24, title: 'kids Clay work', category: 'Kids' },
  { id: 25, title: 'kids Crafting work', category: 'Kids' },
  { id: 26, title: 'kids Drawing Classes', category: 'Kids' },
  { id: 27, title: 'Accounting Training system', category: 'Systems' },
  { id: 28, title: 'Designing Training System', category: 'Systems' },
];

const categories = ['All', ...new Set(courseData.map(c => c.category))];

export default function AdmissionsForm() {
  const searchParams = useSearchParams();
  const selectedCourseId = searchParams.get('course');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentCourses, setCurrentCourses] = useState(courseData);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);

  // स्टेट फॉर मल्टिपल चेकबॉक्सेस (Pure JavaScript Array)
  const [selectedGoogleCourses, setSelectedGoogleCourses] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
        course: courseData[0].title
    }
  });

  const watchCourse = watch('course');

  useEffect(() => {
    if (selectedCourseId) {
      const id = parseInt(selectedCourseId);
      const foundCourse = courseData.find(c => c.id === id);
      if (foundCourse) {
        setValue('course', foundCourse.title);
        const indexInFullList = courseData.findIndex(c => c.id === id);
        setSelectedCourseIndex(indexInFullList);
      }
    }
  }, [selectedCourseId, setValue]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    const filtered = cat === 'All' ? courseData : courseData.filter(c => c.category === cat);
    setCurrentCourses(filtered);
    if (filtered.length > 0) {
      setValue('course', filtered[0].title);
      const indexInOriginal = courseData.findIndex(c => c.title === filtered[0].title);
      setSelectedCourseIndex(indexInOriginal);
    }
  };

  const handleCourseSelect = (courseTitle) => {
    setValue('course', courseTitle);
    const index = courseData.findIndex(c => c.title === courseTitle);
    setSelectedCourseIndex(index);
  };

  const handleCheckboxChange = (courseTitle) => {
    setSelectedGoogleCourses(prev =>
      prev.includes(courseTitle)
        ? prev.filter(t => t !== courseTitle)
        : [...prev, courseTitle]
    );
  };

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const result = await handleAdmissionSubmit(data);
      if (!result || !result.success) {
        throw new Error(result?.error || 'Failed to send email via Server Action');
      }
      try {
        await fetch('/api/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: data.email, action: 'send' }),
        });
      } catch (otpErr) {
        console.error("⚠️ OTP API Call Failed:", otpErr);
      }
      toast.success('Application submitted successfully!');
      reset();
    } catch (error) {
      toast.error(error.message || 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onValidationError = (formErrors) => {
    toast.error("कृपया सर्व आवश्यक फील्ड्स योग्य प्रकारे भरा!");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 left-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Admissions</span>
            <br />
            Open Enrollment
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join thousands of students transforming their careers with our professional certification programs.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white dark:bg-blue-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="glass rounded-xl p-6 border-2 border-sky-200 dark:border-sky-800 text-center hover:shadow-lg transition-all relative">
                  <div className="bg-gradient-main w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    
      <section className="section-padding bg-gradient dark:bg-blue-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center gradient-text mb-4">
            Admission Form
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-xl mx-auto text-sm">
            Please provide your details below and select multiple courses if applicable to sync directly with our database.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-sky-500/20 dark:border-slate-800 bg-white dark:bg-slate-900">
            
            {/* 🖼️ डावा कॉलम: कोणतीही टेक्स्ट किंवा ब्लर लेयर नसलेली संपूर्ण ओरिजिनल इमेज */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[750px] overflow-hidden">
              <Image 
                src="/images/admission_img.jpeg" 
                alt="Img" 
                fill
                className="object-fill"
                priority
              />
            </div>

            {/* 📝 उजवा कॉलम: रिअल टाईम कनेक्टेड गुगल फॉर्म */}
            <div className="lg:col-span-7 p-8 md:p-12 bg-white dark:bg-slate-950 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-sky-600 block mb-1"> Student Admission Form</span>
                {/* <h4 className="text-2xl font-black text-slate-900 dark:text-white">Profile Details & Course Enrollment</h4> */}
              </div>

              {/* तुमच्या नवीन लिंकनुसार कॉन्फिगर केलेला मुख्य फॉर्म ॲक्शन */}
              <form 
                action="https://docs.google.com/forms/d/e/1FAIpQLSd3bPKexPTnE5SWFFIuEbvWA3fEzZeyThUgd40p37LQSCdJ8w/formResponse"
                method="POST"
                target="_blank"
                className="space-y-5"
              >
                {/* Student Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Student Name *</label>
                  <input 
                    type="text" 
                    name="entry.1032453931" 
                    placeholder="Your Full Name" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="entry.452958298" 
                    placeholder="username@example.com" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="entry.621540400" 
                    placeholder="Contact Number" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Address *</label>
                  <textarea 
                    name="entry.1261225302" 
                    placeholder="Full residential address..." 
                    rows={2}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all text-sm resize-none"
                  />
                </div>

                {/* Course Selection (Checkboxes - Multiple Choice) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Select Courses (Select Multiple) *
                  </label>
                  <div className="max-h-60 overflow-y-auto border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-2 bg-slate-50 dark:bg-slate-900 custom-scrollbar">
                    {courseData.map((course) => (
                      <label 
                        key={course.id} 
                        className="flex items-start gap-3 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800/60 cursor-pointer transition-colors"
                      >
                        <input 
                          type="checkbox" 
                          name="entry.1316762729" 
                          value={course.title}
                          checked={selectedGoogleCourses.includes(course.title)}
                          onChange={() => handleCheckboxChange(course.title)}
                          className="mt-1 accent-sky-500 h-4 w-4 rounded"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{course.title}</span>
                          <span className="text-[10px] text-slate-400 capitalize">{course.category} Unit</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Selected: {selectedGoogleCourses.length} program(s)</p>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                >
                  ✓ Submit Additional Information
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
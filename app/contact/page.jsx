'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin, Clock, MessageSquare, MapPin as LocationIcon, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { contactFormSchema } from '@/lib/schemas';
import { handleContactSubmit } from '../actions';
import Image from 'next/image';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: 'Vande Mataram Chauk, Near by Mangalmurti Hospital,',
    details1: 'Laxmi Building, Third Floor, Tasgaon',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 917 237 6867',
    details1: '+91 927 250 7521',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'theuniverse0311institute@gmail.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon - Sat: 9:00 AM - 6:00 PM',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const result = await handleContactSubmit(data);
      if (!result.success) throw new Error(result.error || 'Failed to send message');
      toast.success('Message sent successfully! We will get back to you soon.');
      reset();
    } catch (error) {
      toast.error(error.message || 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 left-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-white dark:bg-blue-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-xl p-6 text-center border-2 border-sky-200 dark:border-sky-800 hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
                >
                  <div className="bg-gradient-main w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all">{info.title}</h3>
                  <p className="text-foreground/70 text-sm">{info.details}</p>
                  <p className="text-foreground/70 text-sm">{info.details1}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gradient-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 border-2 border-sky-200 dark:border-sky-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-main w-10 h-10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="form-label">Full Name</label>
                <input type="text" placeholder="Your name" className="form-input" {...register('name')} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="form-label">Email Address</label>
                <input type="email" placeholder="your@email.com" className="form-input" {...register('email')} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="form-label">Phone Number</label>
                <input type="tel" placeholder="+91 9876543210" className="form-input" {...register('phone')} />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="form-label">Subject</label>
                <input type="text" placeholder="Message subject" className="form-input" {...register('subject')} />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label className="form-label">Message</label>
                <textarea placeholder="Your message here..." rows="5" className="form-input resize-none" {...register('message')} />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="button-gradient w-full flex items-center justify-center gap-2 disabled:opacity-50">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Location & Map */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 border-2 border-sky-200 dark:border-sky-800">
              <h2 className="text-3xl font-bold gradient-text mb-6 flex items-center gap-3">
                <LocationIcon className="w-8 h-8" />
                Location
              </h2>
              <p className="text-foreground/70 mb-6">Visit Us and experience our learning environment.</p>
              <div className="w-full h-64 rounded-xl overflow-hidden border-2 border-sky-200 dark:border-sky-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3814.730950112888!2d74.60031777515698!3d17.036862283791734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDAyJzEyLjciTiA3NMKwMzYnMTAuNCJF!5e0!3m2!1sen!2sin!4v1778685325100!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Institute Location"
                >
                  Loading…
                </iframe>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border-2 border-sky-200 dark:border-sky-800">
              <h2 className="text-2xl font-bold gradient-text mb-4">Quick Contact</h2>
              <div className="space-y-3">
                <a href="tel:+919172376867" className="flex items-center gap-3 p-3 hover:bg-sky-50 dark:hover:bg-sky-900/30 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 text-sky-600" />
                  <div>
                    <p className="text-sm text-foreground/70">Phone 1</p>
                    <p className="font-semibold">+91 917 237 6867</p>
                  </div>
                </a>
                <a href="tel:+919272507521" className="flex items-center gap-3 p-3 hover:bg-sky-50 dark:hover:bg-sky-900/30 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 text-sky-600" />
                  <div>
                    <p className="text-sm text-foreground/70">Phone 2</p>
                    <p className="font-semibold">+91 927 250 7521</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* 🌟 2-Column Fully Connected Premium Feedback Section */}
<section className="section-padding bg-white dark:bg-blue-950/30">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center gradient-text mb-12">
      Institute Feedback Hub
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-500/20 dark:border-slate-800 bg-white dark:bg-slate-900">
      
      {/* 🖼️ डावा कॉलम: इथे आपण तुमची इमेज आणि त्यावर टेक्स्ट लेयर सेट केला आहे */}
      <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[750px]  flex flex-col justify-between p-12 overflow-hidden">
        
        {/* Next.js Image Component - जो अचूक object-contain मध्ये बसेल */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/feedback-form1_img1.jfif" 
            alt="Img" 
            fill
            className="object-fill"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-top from-slate-950/95 via-slate-950/40 to-transparent z-10" />
        </div>

        {/* वरचा टॅग - (z-20 मुळे इमेजच्या वर दिसेल) */}
        <div className="absolute top-6 left-6 bg-gradient-main text-white text-xs px-3 py-1 rounded-full font-bold tracking-wider uppercase shadow-md z-20">
          The Universe Computer Institute
        </div>
        
        {/* खालचा टेक्स्ट मेसेज - (z-20 मुळे इमेजच्या वर दिसेल) */}
        {/* <div className="mt-auto relative z-20">
          <h3 className="text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            We&apos;re ready
          </h3>
          <p className="text-white text-base font-normal border-l-4 border-emerald-500 pl-4 max-w-sm leading-relaxed">
            To change the look of your basic computer education. Share your valuable feedback with us.
          </p>
        </div> */}

      </div>

  

      {/* 📝 उजवा कॉलम: तुमच्या खऱ्या गुगल फॉर्मच्या एंट्री आयडीसह कनेक्टेड फॉर्म */}
      <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-slate-950">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest font-bold gradient-text block mb-1">Student Review Portal</span>
          <h4 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Get in touch with reviews</h4>
        </div>
        
        {/* 🔗 गुगल फॉर्मची मुख्य सबमिशन ॲक्शन लिंक */}
        <form 
          action="https://docs.google.com/forms/d/e/1FAIpQLSejxpb99O-2ZPxrOTmXERtC8PhVX57en6QHxHrgADT1Fb0RZw/formResponse"
          method="POST"
          target="_blank"
          className="space-y-6"
        >
          {/* १. Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
            <input 
              type="text" 
              name="entry.727632560" 
              placeholder="Your Full Name (Optional)" 
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            />
          </div>

          {/* २. Select Your Course */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Course Name *</label>
            <input 
              type="text" 
              name="entry.2060711559" 
              placeholder="Course Name" 
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            />
            {/* <select 
              name="entry.454245645" 
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
              required
            >
              <option value="">-- Choose Your Course --</option>
              <option value="Web Design">Web Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Excel & VBA">Excel & VBA</option>
              <option value="Tally Prime">Tally Prime</option>
              <option value="Power BI">Power BI</option>
              <option value="Other">Other</option>
            </select> */}
          </div>

          {/* ३. Teaching Quality (Linear Scale 1-5) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">How would you rate the teaching quality? *</label>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-emerald-500 transition-all group">
                  <input type="radio" name="entry.2090737595" value={num} className="sr-only peer" required />
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:gradient-text peer-checked:gradient-text">{num}⭐</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 px-1">
              <span>Unsatisfied</span>
              <span>Highly Satisfied</span>
            </div>
          </div>

          {/* ४. Doubts Resolution */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Are your doubts resolved on time? *</label>
            <div className="grid grid-cols-3 gap-3">
              {['Yes, always', 'Sometimes', 'No'].map((status) => (
                <label key={status} className="flex items-center justify-center p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-emerald-500 text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <input type="radio" name="entry.824941636" value={status} className="mr-2 accent-emerald-500" required />
                  {status}
                </label>
              ))}
            </div>
          </div>

          {/* ५. Study Material */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Is the course study material easy to understand? *</label>
            <div className="grid grid-cols-3 gap-3">
              {['Yes, very helpful', 'It is okay, but could be better', 'No, it\'s difficult'].map((status) => (
                <label key={status} className="flex items-center justify-center p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-emerald-500 text-[11px] font-semibold text-slate-600 dark:text-slate-400 text-center">
                  <input type="radio" name="entry.629854583" value={status} className="mr-1 accent-emerald-500" required />
                  {status}
                </label>
              ))}
            </div>
          </div>

          {/* ६. Skill Improvement */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">How much has this course helped you improve? *</label>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-emerald-500 transition-all group">
                  <input type="radio" name="entry.824919882" value={num} className="sr-only peer" required />
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:gradient-text">{num}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ७. Suggestions */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Any specific suggestions or feedback? *</label>
            <textarea 
              name="entry.1112147174" 
              placeholder="Your suggestions here..." 
              rows="3" 
              className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm resize-none"
              required
            />
          </div>

          {/* 🟢 Submit Button */}
          <button 
            type="submit" 
            className="button-gradient w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            ✓ Submit Feedback
            
          </button>
        </form>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </>
  );
}
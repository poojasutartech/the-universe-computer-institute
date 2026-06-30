'use client';


import Link from 'next/link'; 
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col items-start gap-3">
                <Image src="/images/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
              <span className="text-[10px] font-bold uppercase tracking-tight text-foreground leading-none">The Universe Computer Institute</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Courses', 'Admissions', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Top Courses</h4>
            <ul className="space-y-2">
              {['Web Design', 'Digital Marketing', 'Excel & VBA', 'Tally Prime', 'Power BI'].map((course) => (
                <li key={course}>
                  <Link
                    href="/courses"
                    className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <a href="mailto:theuniverse0311institute@gmail.com" className="text-foreground/70 hover:text-emerald-500 transition-colors text-sm">
                  theuniverse0311institute@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                <a href="tel:+919172376867" className="text-foreground/70 hover:text-cyan-500 transition-colors text-sm">
                  +91 917 237 6867
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                <a href="tel:+919272507521" className="text-foreground/70 hover:text-cyan-500 transition-colors text-sm">
                  +91 927 250 7521
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-foreground/70 text-sm">Vande Mataram Chauk, Near by Mangalmurti Hospital, Laxmi Building, Third Floor, Tasgaon</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Social Links */}
        <div className="border-t border-slate-200/60 dark:border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50 text-sm">
              © 2026 The Universe Computer Institute. All rights reserved.
            </p>
            
            <div className="flex items-center gap-5">
              {/* WhatsApp */}
              <a 
                href="whatsapp://send?phone=919172376867&text=Hello%20The%20Universe%20Institute,%20I%20am%20interested%20in%20your%20courses." 
                className="text-foreground/70 hover:text-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/theuniversecomputerinstitute" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-cyan-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Facebook */}
              {/* <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground/70 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
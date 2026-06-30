'use client';

import Link from 'next/link';
import { Star, Clock, TrendingUp, ChevronRight } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="glass rounded-2xl p-6 h-full flex flex-col border-2 border-sky-200 dark:border-sky-800 overflow-hidden group card-hover relative"
    >
      <div className="absolute inset-0 bg-gradient-main opacity-0 group-hover:opacity-5 transition-opacity" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Header - Now shows the specific course icon */}
          <div className="flex justify-between items-start mb-4">
            <div className="bg-gradient-main w-12 h-12 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-sky-500/20">
              {course.icon}
            </div>
            <div className="text-right">
              <span className="bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {course.level}
              </span>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all line-clamp-2">
            {course.title}
          </h3>

          <p className="text-foreground/70 text-sm mb-4 flex-grow line-clamp-2">
            {course.description}
          </p>

          {/* Meta Info */}
          <div className="space-y-2 mb-6 py-4 border-y border-sky-200 dark:border-sky-800">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-sky-600" />
              <span className="text-foreground/70">{course.level}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-sky-600" />
              <span className="text-foreground/70">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-foreground">{course.rating}</span>
            </div>
          </div>
        </div>

        <div>
          {/* Footer */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold gradient-text">{course.price || 'Enroll Now'}</p>
            <div className="bg-gradient-main p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="w-full button-gradient py-2.5 rounded-xl text-center font-semibold text-sm shadow-sm">
            View Details
          </div>
        </div>
      </div>
    </Link>
  );
}
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { Star, Send } from 'lucide-react';
import { z } from 'zod';

const feedbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  courseName: z.string().min(1, 'Please select a course'),
  rating: z.number().min(1, 'Please rate your experience').max(5),
  contentRating: z.number().min(1).max(5),
  instructorRating: z.number().min(1).max(5),
  facilitiesRating: z.number().min(1).max(5),
  feedback: z.string().min(10, 'Feedback must be at least 10 characters'),
});

const courses = [
  'Language Typing',
  'Basic Computer Course',
  'Microsoft Office',
  'Digital Marketing',
  'Professional Accounting',
  'Creative Clay Art',
  'Modern Web Designing',
  'Advanced Excel & VBA',
  'Advanced Tally Prime',
  'Power BI Data Analytics',
  'Graphic Design Masterclass'
];

export default function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ratings, setRatings] = useState({
    rating: 0,
    contentRating: 0,
    instructorRating: 0,
    facilitiesRating: 0
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          type: 'feedback',
        }),
      });

      if (!response.ok) throw new Error('Failed to send feedback');

      toast.success('Thank you for your feedback! We appreciate your insights.');
      reset();
      setRatings({ rating: 0, contentRating: 0, instructorRating: 0, facilitiesRating: 0 });
    } catch (error) {
      toast.error(error.message || 'Failed to submit feedback');
    } finally {
      setIsSubmitting(false);
    }
  };

  const RatingInput = ({ label, name, value, onChange }) => (
    <div className="mb-6">
      <label className="form-label">{label}</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => onChange(num)}
            className={`transition-all p-2 rounded-lg ${
              value >= num
                ? 'text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
                : 'text-gray-300'
            }`}
          >
            <Star
              size={32}
              className={`fill-current ${value >= num ? 'fill-yellow-400' : ''}`}
            />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Toaster position="top-right" />
      
      <div className="card-glow p-8 md:p-12">
        <h2 className="text-3xl font-bold text-foreground mb-8">Course Feedback Form</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                placeholder="Your name"
                className="form-input"
                {...register('name')}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="form-label">Email *</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Course Selection */}
          <div>
            <label className="form-label">Course Name *</label>
            <select
              className="form-input cursor-pointer"
              {...register('courseName')}
            >
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            {errors.courseName && <p className="text-red-500 text-sm mt-1">{errors.courseName.message}</p>}
          </div>

          {/* Ratings */}
          <div className="py-6 px-4 rounded-lg bg-sky-50 dark:bg-slate-800 border border-sky-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-foreground mb-6">Rate Your Experience</h3>

            <RatingInput
              label="Overall Experience (1-5 stars)"
              name="rating"
              value={ratings.rating}
              onChange={(val) => {
                setRatings({...ratings, rating: val});
                register('rating').onChange({target: {value: val}});
              }}
            />

            <RatingInput
              label="Course Content Quality"
              name="contentRating"
              value={ratings.contentRating}
              onChange={(val) => {
                setRatings({...ratings, contentRating: val});
                register('contentRating').onChange({target: {value: val}});
              }}
            />

            <RatingInput
              label="Instructor/Faculty Quality"
              name="instructorRating"
              value={ratings.instructorRating}
              onChange={(val) => {
                setRatings({...ratings, instructorRating: val});
                register('instructorRating').onChange({target: {value: val}});
              }}
            />

            <RatingInput
              label="Facilities & Infrastructure"
              name="facilitiesRating"
              value={ratings.facilitiesRating}
              onChange={(val) => {
                setRatings({...ratings, facilitiesRating: val});
                register('facilitiesRating').onChange({target: {value: val}});
              }}
            />
          </div>

          {/* Feedback */}
          <div>
            <label className="form-label">Your Feedback *</label>
            <textarea
              placeholder="Share your thoughts, suggestions, and experience with us..."
              rows="6"
              className="form-input resize-none"
              {...register('feedback')}
            />
            {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-gradient w-full flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}

import { z } from 'zod';

// 1. Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50).optional().or(z.literal('')),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[\d\s\-\+\(\)]{10,}$/, 'Invalid phone number').optional().or(z.literal('')),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

// 2. Admission Form Schema (CORRECTED)
export const admissionFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  course: z.string().min(1, 'Please select a course'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  zipCode: z.string().min(3, 'Zip code is required'),
  qualifications: z.string().min(1, 'Please mention your qualifications'),
  
  // जर भविष्यात जन्मतारीख आणि एक्सपिरियन्स फॉर्ममध्ये जोडला, तर एरर येऊ नये म्हणून यांना optional केले आहे:
  dateOfBirth: z.string().optional().or(z.literal('')),
  experience: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
});

// 3. Signup Form Schema
export const signupFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// 4. Login Form Schema
export const loginFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// 5. OTP Verification Schema
export const otpVerificationSchema = z.object({
  email: z.string().email('Invalid email address'),
  otp: z.string().length(6, 'OTP must be 6 digits').regex(/^\d+$/, 'OTP must contain only numbers'),
});
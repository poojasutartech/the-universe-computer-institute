import { Suspense } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AdmissionsForm from '@/components/admissions-form';
import { Toaster } from 'react-hot-toast';

function AdmissionsContent() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <AdmissionsForm />
      <Footer />
    </>
  );
}

export default function AdmissionsPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
      <AdmissionsContent />
    </Suspense>
  );
}
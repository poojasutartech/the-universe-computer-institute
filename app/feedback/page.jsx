import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FeedbackForm from '@/components/feedback-form';

export default function FeedbackPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 left-10 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="relative max-w-6xl mx-auto section-px text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Share Your <span className="gradient-text">Feedback</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Help us improve by sharing your experience and suggestions about our courses and services.
          </p>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <FeedbackForm />
        </div>
      </section>

      <Footer />
    </>
  );
}

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Briefcase, MapPin, Clock, Users, Trophy, TrendingUp } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    location: 'Mumbai, India',
    type: 'Full-time',
    salary: '₹8L - ₹12L',
    description: 'Build scalable web applications using modern technologies.',
    skills: ['React', 'Node.js', 'MongoDB'],
    posted: '2 days ago'
  },
  {
    id: 2,
    title: 'Web Designer',
    company: 'Creative Agency',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹6L - ₹9L',
    description: 'Design beautiful and user-friendly interfaces.',
    skills: ['Figma', 'UI/UX', 'CSS'],
    posted: '5 days ago'
  },
  {
    id: 3,
    title: 'Digital Marketing Specialist',
    company: 'E-commerce Company',
    location: 'Delhi, India',
    type: 'Full-time',
    salary: '₹5L - ₹8L',
    description: 'Drive digital marketing campaigns and analytics.',
    skills: ['Google Analytics', 'SEO', 'Social Media'],
    posted: '1 week ago'
  },
  {
    id: 4,
    title: 'Python Developer',
    company: 'Data Analytics Firm',
    location: 'Pune, India',
    type: 'Full-time',
    salary: '₹7L - ₹11L',
    description: 'Develop data solutions and automation scripts.',
    skills: ['Python', 'Data Analysis', 'SQL'],
    posted: '3 days ago'
  },
];

export default function CareerPage() {
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
            Launch Your <span className="gradient-text">Tech Career</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore exciting job opportunities from leading companies in India. Your dream job awaits.
          </p>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="card-glow p-6 hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                    <p className="text-foreground/60 font-medium">{job.company}</p>
                  </div>
                  <span className="badge-secondary text-xs">{job.type}</span>
                </div>

                <p className="text-foreground/70 mb-4 line-clamp-2">{job.description}</p>

                <div className="space-y-2 mb-4 py-4 border-y border-sky-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    <span className="text-foreground/70">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-sky-600" />
                    <span className="text-foreground/70">{job.posted}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold text-foreground">{job.salary}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <span key={skill} className="badge-primary text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="button-gradient w-full text-sm">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding bg-white dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">
            Why Join Our Partner Companies?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: 'Top Companies', desc: 'Work with India\'s leading tech companies' },
              { icon: TrendingUp, title: 'Growth Opportunities', desc: 'Advance your career with mentorship' },
              { icon: Users, title: 'Networking', desc: 'Connect with industry professionals' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card-glow p-8 text-center hover-glow">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-main w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/60">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

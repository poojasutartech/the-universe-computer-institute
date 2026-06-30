import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Award, Star, Users, CheckCircle } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'Advanced Web Development Specialist',
    course: 'Modern Web Designing',
    issueDate: 'March 2024',
    students: 324,
    rating: 4.9,
    skills: ['React', 'Node.js', 'MongoDB', 'Responsive Design']
  },
  {
    id: 2,
    name: 'Digital Marketing Professional',
    course: 'Digital Marketing',
    issueDate: 'February 2024',
    students: 267,
    rating: 4.8,
    skills: ['SEO', 'Google Analytics', 'Social Media', 'Content Marketing']
  },
  {
    id: 3,
    name: 'Professional Accountant',
    course: 'Professional Accounting',
    issueDate: 'January 2024',
    students: 189,
    rating: 4.9,
    skills: ['Tally', 'GST', 'Financial Analysis', 'Tax Planning']
  },
  {
    id: 4,
    name: 'Data Analytics Expert',
    course: 'Power BI Data Analytics',
    issueDate: 'December 2023',
    students: 156,
    rating: 4.8,
    skills: ['Power BI', 'Data Visualization', 'DAX', 'SQL']
  },
  {
    id: 5,
    name: 'Graphics Design Master',
    course: 'Graphic Design Masterclass',
    issueDate: 'November 2023',
    students: 203,
    rating: 4.9,
    skills: ['Adobe Suite', 'UI Design', 'Branding', 'Illustration']
  },
  {
    id: 6,
    name: 'Excel Professional Certificate',
    course: 'Advanced Excel & VBA',
    issueDate: 'October 2023',
    students: 412,
    rating: 4.7,
    skills: ['VBA', 'Formulas', 'Macros', 'Dashboard Design']
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="relative max-w-6xl mx-auto section-px text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Industry-Recognized <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Earn valuable certifications that enhance your professional profile and career prospects.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="card-glow p-6 hover-lift flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-main w-12 h-12 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-foreground">{cert.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-foreground/60 text-sm mb-3">{cert.course}</p>

                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4 py-4 border-y border-sky-200 dark:border-slate-700">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-sky-600" />
                    <span>{cert.students} Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-sky-600" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                <div className="mb-4 flex-grow">
                  <p className="text-xs font-semibold text-foreground/70 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="badge-secondary text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="button-gradient w-full text-sm">
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white dark:bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold gradient-text mb-12">
            Why Our Certifications Matter
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Industry Recognized', desc: 'Accepted by leading companies across India' },
              { title: 'Career Advancement', desc: 'Boost your resume and salary prospects' },
              { title: 'Skill Validation', desc: 'Prove your expertise in your field' },
              { title: 'Lifelong Learning', desc: 'Access to updates and advanced courses' }
            ].map((item, idx) => (
              <div key={idx} className="card-glow p-6 hover-glow">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

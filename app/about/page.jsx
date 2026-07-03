import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

const stats = [
  { icon: Users, label: '100+', desc: 'Students Trained' },
  { icon: Award, label: '50+', desc: 'Courses Offered' },
  { icon: Globe, label: '99%', desc: 'Satisfaction Rate' },
  { icon: CheckCircle, label: '95%', desc: 'Placement Rate' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 pb-20 bg-gradient-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        <div className="relative max-w-6xl mx-auto section-px text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">The Computer Universe</span> Institute
          </h1>
          <p className="text-lg text-foreground/70">
            Transforming careers through excellence in computer education
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Journey</h2>
              <p className="text-foreground/70 mb-4 text-lg leading-relaxed">
                <strong className="text-foreground/70 text-lg gradient-text">The Universe Computer Institute </strong> was founded with a singular mission: to bridge the gap between traditional education and industry-ready skills. Launching our doors just two months ago, we have hit the ground running to provide high-quality technical training to our inaugural batches.
              </p>
              <p className="text-foreground/70 mb-6 text-lg leading-relaxed">
                In just two months of operation, we have already begun cultivating a vibrant community of learners dedicated to mastering the digital landscape. Our commitment to quality education and immediate student success is already establishing us as a fresh, innovative name in computer training.
              </p>
              <div className="space-y-3">
                {['Industry-focused curriculum', 'Experienced instructor', 'Interview Preperation', 'Lifetime learning access'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-main"></div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-glow rounded-2xl overflow-hidden h-96 hover-lift">
              <img 
                src="/images/about_banner.jfif" 
                alt="Our Institute"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-white dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="card-glow p-8 text-center hover-glow">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-main w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold gradient-text mb-2">{stat.label}</p>
                  <p className="text-foreground/70">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Founder 1 */}
            <div className="card-glow p-8 hover-lift">
              <div className="mb-6 flex justify-center">
                <div className="w-60 h-60 rounded-full bg-gradient-main flex items-center justify-center text-white text-4xl font-bold">
                  <img 
                src="/images/woman.png" 
                alt="Our Institute"
                className="w-full h-full object-cover"
              />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-foreground mb-2">Aditya Nalavade</h3>
              <p className="text-center text-sky-600 dark:text-sky-400 font-semibold mb-4">Founder & Director</p>
              <p className="text-center founder-name font-semibold mb-4">[ MBA  (Finance  & HR ) ]</p>
              <p className="text-foreground/70 mb-4 text-center leading-relaxed">
                Aditya brings 10+ years of experience in curriculum development and Teaching. She oversees all course design, ensuring content remains relevant to industry needs. Her background includes roles at leading tech companies and educational institutions.
              </p>
              <div className="pt-4 border-t border-sky-200 dark:border-slate-700">
                <p className="text-sm font-semibold text-foreground mb-2">Specializations:</p>
                <div className="flex flex-wrap gap-2">
                  {['Curriculum Design', 'Digital Marketing', 'Education Tech', 'Student Success'].map((spec) => (
                    <span key={spec} className="badge-secondary text-xs">{spec}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="card-glow p-8 hover-lift">
              <div className="mb-6 flex justify-center">
                <div className="w-60 h-60  rounded-full bg-gradient-main flex items-center justify-center text-white text-4xl font-bold">
                  <img 
                src="/images/man.png" 
                alt="Our Institute"
                className="w-full h-full object-cover"
              />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-foreground mb-2">Vishal Pawar</h3>
              <p className="text-center text-sky-600 dark:text-sky-400 font-semibold mb-4">Founder & Director</p>
              <p className="text-center founder-name font-semibold mb-4">[ Diploma in mechanical engineering ]</p>
              <p className="text-foreground/70 mb-4 text-center leading-relaxed">
                With 5+ years of experience in IT education and industry, Vishal founded Universe Institute with a vision to make quality tech education accessible to everyone. His expertise spans web development, system architecture, and educational technology.
              </p>
              <div className="pt-4 border-t border-sky-200 dark:border-slate-700">
                <p className="text-sm font-semibold text-foreground mb-2">Specializations:</p>
                <div className="flex flex-wrap gap-2">
                  {['IT Management', 'Training', 'Strategy'].map((spec) => (
                    <span key={spec} className="badge-secondary text-xs">{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Updated Local Path */}
      <section className="section-padding bg-white dark:bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">Our Institute Tour</h2>
          <div className="rounded-2xl overflow-hidden border-2 border-sky-200 dark:border-slate-700 shadow-lg-glow">
            <div className="relative w-full h-96 md:h-[500px] bg-transperant">
              <video
                controls
                className="w-full h-full"
                poster="/images/logo.png"
              >
                <source 
                  src="/videoes/TUCI_Video1.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', desc: 'We maintain highest standards in education and service delivery' },
              { title: 'Innovation', desc: 'Continuously updating curriculum with latest industry trends' },
              { title: 'Integrity', desc: 'Committed to transparency and ethical practices in all endeavors' },
              { title: 'Empowerment', desc: 'Enabling students to achieve their career aspirations' },
              { title: 'Collaboration', desc: 'Working together with students, industry, and communities' },
              { title: 'Growth', desc: 'Fostering lifelong learning and personal development' },
            ].map((value, idx) => (
              <div key={idx} className="card-glow p-6 hover-glow text-center">
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground/60">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
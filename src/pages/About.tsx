import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, PieChart, BookOpen, Rocket, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-gray-950">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6" data-aos="zoom-in">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              Our Mission is <span className="text-primary-600">Your Progression</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Skill Gap Analyzer was born out of a simple observation: the world of work is changing faster than our ability to track what skills we need next.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="glass-card p-10 rounded-3xl space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-500 transition-all group-hover:w-2"></div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Philosophy</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We believe that every professional, regardless of their starting point, deserves a clear, data-backed roadmap to their dream career. 
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Target className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Precision: We don't guess, we analyze real-world matching.</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Speed: Skip the generic courses; learn exactly what you lack.</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Heart className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Passion: We care about your long-term fulfillment.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute -inset-4 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Our values"
                className="rounded-3xl shadow-2xl w-full border border-gray-200 dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4" data-aos="fade-up">
            <h2 className="text-3xl font-bold md:text-5xl">Meet the Visionaries</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A diverse team of engineers, data scientists, and career architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Mihir Dabhi', role: 'Founder & CEO', img: 'https://randomuser.me/api/portraits/men/85.jpg', bio: 'Helping professionals bridge the gap with AI.' },
              { name: 'Hirva Vachhani', role: 'Lead Architect', img: 'https://randomuser.me/api/portraits/women/63.jpg', bio: 'The mind behind our mapping algorithms.' },
              { name: 'Samarth Vegada', role: 'Head of Product', img: 'https://randomuser.me/api/portraits/men/32.jpg', bio: 'Obsessed with user experience and growth.' },
              { name: 'Ritu Pal', role: 'UX Research', img: 'https://randomuser.me/api/portraits/women/29.jpg', bio: 'Understanding the human side of career shift.' }
            ].map((member, i) => (
              <div key={member.name} className="glass-card group p-8 rounded-3xl text-center hover:shadow-2xl hover:shadow-primary-500/10 transition-all border-b-4 border-transparent hover:border-primary-500" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-primary-500/20 group-hover:scale-110 transition-all duration-300"></div>
                  <img src={member.img} alt={member.name} className="relative z-10 w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center mb-20" data-aos="fade-up">Our Journey</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-primary-600 rounded-full opacity-30"></div>
            
            <div className="space-y-24 relative z-10">
              {[
                { year: '2020', title: 'The Blueprint', text: 'Mihir identifies the skill gap problem during a global work shift.', side: 'right' },
                { year: '2021', title: 'The MVP', text: 'First 5 career paths launched to tech professionals for beta testing.', side: 'left' },
                { year: '2022', title: 'AI Integration', text: 'Added CV auditing and smarter roadmap recommendations.', side: 'right' },
                { year: 'Today', title: 'Full Spectrum', text: 'Supporting 13+ roles with over 5,000 active users globally.', side: 'left' }
              ].map((item, i) => (
                <div key={item.title} className={`flex items-center w-full group ${item.side === 'left' ? 'flex-row-reverse' : ''}`} data-aos={item.side === 'right' ? 'fade-left' : 'fade-right'}>
                  <div className="w-1/2 px-8">
                    <div className="glass-card p-6 rounded-2xl relative">
                      <div className={`absolute top-1/2 ${item.side === 'right' ? '-left-8' : '-right-8'} w-8 h-px bg-primary-500 hidden md:block`}></div>
                      <span className="text-primary-600 font-bold text-lg">{item.year}</span>
                      <h4 className="text-xl font-bold mt-1 mb-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                  <div className="relative z-20 flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 shadow-xl shadow-primary-500/50 group-hover:scale-125 transition-all">
                    <div className="h-3 w-3 rounded-full bg-white animate-pulse"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6" data-aos="fade-up">
          <div className="bg-primary-600 rounded-3xl p-12 text-center text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl font-bold md:text-5xl">Be part of our story.</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Transform your career journey today with the most precise skill gap analysis tool on the web.
              </p>
              <div className="flex justify-center">
                <Link to="/analyze">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 h-14 px-10 rounded-full font-bold shadow-2xl active:scale-95 transition-all">
                    Get Started NOW
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Rocket className="h-6 w-6 text-primary-600" />
            <span className="font-bold text-gray-900 dark:text-white">Skill Gap Analyzer</span>
          </div>
          <p className="text-gray-500 text-sm">Created with pride by Mihir Dabhi - Lab 5 Ready.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Target, TrendingUp, Award, Users, BookOpen } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8" data-aos="fade-up">
            <div className="inline-flex items-center rounded-full border border-primary-500/20 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              Join over 5,000+ professionals bridging their gaps
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-7xl">
              Identify Your <span className="text-primary-600 dark:text-primary-400">Skill Gap</span> & Build Your Future
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Master the future of your career with data-driven skill analysis, AI CV auditing, and personalized learning roadmaps tailored to your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
              <Link to="/analyze">
                <Button size="lg" className="w-full sm:w-auto h-12 rounded-full px-8 text-lg font-semibold shadow-xl shadow-primary-500/20 transition-all hover:scale-105">
                  Analyze My Skills
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 rounded-full px-8 text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800">
                  How it Works
                </Button>
              </Link>
            </div>
            
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-gray-200 dark:border-gray-800 mt-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="h-10 w-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="font-bold text-gray-900 dark:text-white">AI CV Audit</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Target className="h-6 w-6" />
                </div>
                <p className="font-bold text-gray-900 dark:text-white">Career Roadmap</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <Users className="h-6 w-6" />
                </div>
                <p className="font-bold text-gray-900 dark:text-white">5k+ Users</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <p className="font-bold text-gray-900 dark:text-white">Job Trends</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold md:text-5xl" data-aos="fade-up">
              Features Built for Your <span className="text-primary-600">Growth</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-delay="100">
              We've developed specialized tools to help you bridge the gap between where you are and where you want to be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-8 rounded-2xl space-y-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
              <div className="h-12 w-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">13+ Career Paths</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose from Backend, Cloud, AI/ML, DevOps, and more. Get tailored skill analysis for each role.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-8 rounded-2xl border-primary-500/20 bg-primary-50/10 space-y-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
              <div className="h-12 w-12 rounded-xl bg-primary-500 flex items-center justify-center text-white shadow-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">AI CV Auditor</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Upload your CV and get instant AI-powered feedback on how to optimize it for modern recruiters.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-8 rounded-2xl space-y-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
              <div className="h-12 w-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 shadow-lg">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Skill Badges</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Earn skills-verified badges as you level up your rating and bridge your technical gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6" data-aos="zoom-in">
          <div className="bg-primary-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] transition-all duration-500"></div>
            <div className="max-w-3xl mx-auto space-y-8 relative z-10">
              <h2 className="text-4xl font-bold md:text-5xl">Ready to bridge your gap?</h2>
              <p className="text-xl opacity-90">
                Start your personalized skill gap analysis today and unlock your career potential with data-driven roadmaps.
              </p>
              <div className="flex justify-center pt-4">
                <Link to="/analyze">
                  <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 h-14 rounded-full px-10 text-lg font-bold shadow-xl transition-all active:scale-95">
                    Start Your Analysis
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-primary-500" />
              <span className="font-bold text-gray-900 dark:text-white">Skill Gap Analyzer</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Mihir Dabhi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/analyze" className="text-sm text-gray-500 hover:text-primary-500">Analyze</Link>
              <Link to="/about" className="text-sm text-gray-500 hover:text-primary-500">About</Link>
              <a href="#" className="text-sm text-gray-500 hover:text-primary-500">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Map, 
  Clock, 
  BookOpen, 
  PlayCircle, 
  Award, 
  Users, 
  ChevronLeft,
  Compass,
  Landmark,
  Search
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-slate-800 tracking-tight">
                أكاديمية <span className="text-emerald-600">ابن خلدون</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
              <a href="#" className="text-emerald-600 transition-colors">الرئيسية</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">المناهج الدراسية</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">الخرائط التفاعلية</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">المكتبة المرئية</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
                تسجيل الدخول
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-6">
                <Award className="w-4 h-4" />
                <span>المنصة الأولى لتعلم الدراسات الاجتماعية</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.2] mb-6">
                اكتشف عبق <span className="text-emerald-600 relative">
                  الماضي
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-400 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span> <br/> وروعة الحاضر
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                رحلة تعليمية ممتعة تأخذك عبر الزمن وتجوب بك قارات العالم. نقدم لك التاريخ والجغرافيا بأسلوب تفاعلي وحديث يواكب تطلعاتك.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-emerald-600/30 flex items-center gap-2 hover:-translate-y-1">
                  ابدأ رحلتك الآن
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2 hover:-translate-y-1 shadow-sm">
                  <PlayCircle className="w-5 h-5 text-emerald-600" />
                  شاهد الفيديو التعريفي
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
                  alt="Earth from space" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Compass className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">درس اليوم الموصى به</h3>
                        <p className="text-emerald-100 text-sm">جغرافية التضاريس الكبرى</p>
                      </div>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-emerald-400 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">+50,000</p>
                  <p className="text-sm text-slate-500 font-medium">طالب نشط</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">لماذا تختار منصتنا؟</h2>
            <p className="text-lg text-slate-600">
              نقدم تجربة تعليمية متكاملة تجمع بين الأصالة والمعاصرة، باستخدام أحدث التقنيات لتبسيط مفاهيم الدراسات الاجتماعية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Map className="w-8 h-8 text-blue-600" />,
                bg: "bg-blue-50",
                title: "خرائط تفاعلية",
                desc: "استكشف تضاريس العالم وحدود الدول بلمسة واحدة عبر خرائطنا الذكية."
              },
              {
                icon: <Clock className="w-8 h-8 text-amber-600" />,
                bg: "bg-amber-50",
                title: "تسلسل زمني",
                desc: "رحلة بصرية ممتعة عبر أهم المحطات التاريخية والحضارات القديمة."
              },
              {
                icon: <PlayCircle className="w-8 h-8 text-emerald-600" />,
                bg: "bg-emerald-50",
                title: "مكتبة مرئية",
                desc: "آلاف الفيديوهات الوثائقية والصور النادرة عالية الدقة لدعم فهمك."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-purple-600" />,
                bg: "bg-purple-50",
                title: "اختبارات ذكية",
                desc: "قس مدى استيعابك للدروس فوراً من خلال تقييمات تفاعلية وممتعة."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:bg-white transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">المسارات التعليمية الأكثر طلباً</h2>
              <p className="text-slate-400 text-lg">
                اختر من بين مجموعة واسعة من المناهج المصممة بعناية لتناسب كافة المستويات الدراسية.
              </p>
            </div>
            <button className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-2 transition-colors">
              عرض جميع المناهج
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1539667468225-eebb663053e6?q=80&w=800&auto=format&fit=crop",
                tag: "تاريخ",
                title: "الحضارة الفرعونية القديمة",
                lessons: 12,
                duration: "4 ساعات"
              },
              {
                img: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?q=80&w=800&auto=format&fit=crop",
                tag: "جغرافيا",
                title: "المناخ والتضاريس في الوطن العربي",
                lessons: 8,
                duration: "3 ساعات"
              },
              {
                img: "https://images.unsplash.com/photo-1584972191378-d70853fc47bc?q=80&w=800&auto=format&fit=crop",
                tag: "تاريخ إسلامي",
                title: "عصر الدولة الأموية والعباسية",
                lessons: 15,
                duration: "6 ساعات"
              }
            ].map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-colors group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full">
                    {course.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{course.title}</h3>
                  <div className="flex items-center gap-6 text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons} درس</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-slate-800">
                  أكاديمية <span className="text-emerald-600">ابن خلدون</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                منصتك التعليمية الرائدة لفهم أعمق للتاريخ والجغرافيا. نبني جسوراً بين الماضي والمستقبل.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">روابط سريعة</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">عن الأكاديمية</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">المناهج الدراسية</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">اتصل بنا</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">المواد</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">التاريخ القديم</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">التاريخ الحديث</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">الجغرافيا الطبيعية</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">التربية الوطنية</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2026 أكاديمية ابن خلدون. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-600 transition-colors">الشروط والأحكام</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">سياسة الخصوصية</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

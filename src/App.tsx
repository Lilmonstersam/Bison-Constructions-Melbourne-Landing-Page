/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  ChevronDown, 
  ArrowRight, 
  FileText, 
  Wind, 
  Users, 
  Quote 
} from 'lucide-react';

export default function App() {
  const [isDetailedForm, setIsDetailedForm] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contactRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
      const contactTop = contactRef.current.offsetTop;

      // Show sticky CTA if scrolled past the hero section, AND haven't reached the contact form yet
      if (scrollPosition > heroBottom - 100 && (scrollPosition + windowHeight) < contactTop + 150) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* A. HERO SECTION */}
      <header 
        id="hero-section" 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-48"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="https://bisonconstructions.com.au/wp-content/uploads/2025/06/INDUSTRIAL-LOOP-V3-Resized.mp4"
          >
            <source src="https://bisonconstructions.com.au/wp-content/uploads/2025/06/INDUSTRIAL-LOOP-V3-Resized.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-12"
        >
          {/* Bison Logo */}
          <img 
            src="https://bisonconstructions.com.au/wp-content/themes/bison/assets/images/svg/bison_logo.svg" 
            alt="Bison Constructions" 
            className="h-16 w-auto mx-auto mb-10 brightness-0 invert opacity-90"
          />
          
          <div className="inline-block bg-bison-red text-white px-4 py-1 text-sm md:text-base font-bold tracking-widest uppercase mb-6 shadow-lg">
            Melbourne to Tasmania Expansion
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-none tracking-tight drop-shadow-lg font-oswald uppercase">
            BUILD IN TASMANIA <br />
            <span className="text-white relative inline-block">
              WITH CERTAINTY.
              <span className="absolute bottom-2 left-0 w-full h-2 bg-bison-red"></span>
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Navigating Tasmanian regulations and environmental conditions is complex. Our in-house team provides the local oversight required for certain delivery.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="inline-block bg-bison-red text-white text-lg px-12 py-5 rounded-sm hover:bg-red-700 transition transform hover:-translate-y-1 font-bold uppercase tracking-wider shadow-lg font-oswald"
            >
              Book Discovery Meeting
            </a>
            <a 
              href="tel:0363524449" 
              className="text-white text-xl font-bold tracking-wider hover:text-bison-red transition flex items-center gap-3 bg-white/10 px-8 py-4 rounded-sm backdrop-blur-sm border border-white/20 font-oswald"
            >
              <Phone className="w-6 h-6" /> (03) 6352 4449
            </a>
          </div>
        </motion.div>
      </header>

      {/* B. BRIDGING THE BASS STRAIT */}
      <section className="py-0 flex flex-col lg:flex-row min-h-[600px]">
        {/* Left: The Complex (Blueprint Style) */}
        <div className="w-full lg:w-1/2 bg-gray-50 relative border-r border-gray-200 p-12 lg:p-20 flex flex-col justify-center blueprint-overlay">
          <div className="relative z-10">
            <div className="text-bison-red font-bold tracking-widest mb-4 uppercase text-sm font-oswald">Making Your Complex Easy</div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-oswald uppercase">
              BRIDGING THE <br /><span className="text-gray-400">BASS STRAIT.</span>
            </h2>
            <p className="text-xl text-gray-700 font-medium leading-relaxed">
              Local expertise for mainland leaders.
            </p>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
              Expanding your operations to Tasmania shouldn't mean managing risks from across the water. We integrate every stage of your project internally to give you absolute control without the need to be on the ground.
            </p>
          </div>
          {/* Decorative Blueprint Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>

        {/* Right: The Solution (Dark Tech Style) */}
        <div className="w-full lg:w-1/2 bg-gray-900 text-white relative p-12 lg:p-20 flex flex-col justify-center gap-12">
          
          {/* Point 1 */}
          <div className="flex gap-6 items-start group">
            <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-bison-red group-hover:bg-bison-red/20 transition duration-300">
              <FileText className="w-7 h-7 text-white group-hover:text-bison-red transition" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 tracking-wide text-white font-oswald uppercase">Compliance & Regulation</h3>
              <p className="text-gray-400 leading-relaxed">
                Tasmania's building codes and planning schemes differ significantly from Victoria. We handle all local council approvals and regulatory compliance in-house, ensuring no surprises.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex gap-6 items-start group">
            <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-bison-red group-hover:bg-bison-red/20 transition duration-300">
              <Wind className="w-7 h-7 text-white group-hover:text-bison-red transition" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 tracking-wide text-white font-oswald uppercase">Engineered for the Island</h3>
              <p className="text-gray-400 leading-relaxed">
                From extreme wind loads to specific soil conditions, our projects are engineered to perform in the state’s unique environmental conditions.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex gap-6 items-start group">
            <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:border-bison-red group-hover:bg-bison-red/20 transition duration-300">
              <Users className="w-7 h-7 text-white group-hover:text-bison-red transition" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 tracking-wide text-white font-oswald uppercase">Your Local Partner</h3>
              <p className="text-gray-400 leading-relaxed">
                You don't need to be on-site. Our dedicated project managers provide constant visibility through every stage, from early planning to final handover.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* C. CAPABILITY CALLOUT */}
      <section className="relative py-32 overflow-hidden bg-black">
        {/* Extra Image provided for background */}
        <img 
          src="https://bisonconstructions.com.au/wp-content/uploads/2025/01/DJI_20240516150457_0191_D-3000x3000.jpg" 
          alt="Bison Construction Site" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 object-center"
          referrerPolicy="no-referrer"
        />
        {/* Darkened overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Text shadow added for extra readability. 1,300+ is red as requested. */}
          <div 
            className="text-bison-red text-7xl md:text-9xl font-bold mb-2 tracking-tighter" 
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
          >
            1,300+
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wide font-oswald uppercase">TASMANIAN PROJECTS</h2>
          
          <div className="w-24 h-1 bg-bison-red mx-auto mb-10"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest font-oswald">Our Capability</h3>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-6">
            Specialised Building Types: Industrial, Farm, Dairy. 
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed">
            Tasmania has a history of doing things differently. As the state's first true design and construct partner, we bring that philosophy to every project. We don’t just build structures—we build certainty. We understand the island's unique conditions better than anyone, turning mainland vision into a Tasmanian reality.
          </p>
          <p className="text-white text-xl font-bold mt-8 inline-block tracking-widest uppercase border-b-2 border-bison-red pb-1 font-oswald">Tasmanian Proven.</p>
        </div>
      </section>

      {/* D. SUCCESS STORIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <div className="text-bison-red font-bold tracking-widest uppercase mb-4 text-sm font-oswald">Success Stories</div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-oswald uppercase">OUR RESULTS</h2>
            <div className="h-1 w-24 bg-bison-red mx-auto"></div>
          </div>

          <div className="space-y-32">
            
            {/* Project 1: East Coast Car Rentals */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 relative group overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src="https://bisonconstructions.com.au/wp-content/uploads/2025/09/244A0686-683x1024.jpg" 
                  alt="East Coast Car Rentals Facility" 
                  className="w-full h-[550px] object-cover transition duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 left-0 bg-bison-red text-white px-6 py-2 font-bold uppercase tracking-widest text-sm font-oswald">Hobart, TAS</div>
              </div>
              <div className="lg:w-1/2 flex flex-col h-full justify-center py-4">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight font-oswald uppercase">
                  EAST COAST <br /> CAR RENTALS
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  East Coast Car Rentals required a purpose-built flagship facility in Hobart to support an expanded fleet. This was their first ground-up development, making budget control and design efficiency critical.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Bison delivered a bespoke facility combining undercover storage for 500 vehicles with a modern customer lounge. Consistent communication and proactive problem-solving gave East Coast confidence throughout every stage.
                </p>
                <a 
                  href="https://bisonconstructions.com.au/industrial/project/east-coast-car-rentals/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-bison-red font-bold uppercase tracking-widest hover:text-red-800 transition font-oswald"
                >
                  Read Case Study <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Project 2: Decrolux Lighting */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/2 relative group overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src="https://bisonconstructions.com.au/wp-content/uploads/2025/04/DSC09378-27.jpg" 
                  alt="Decrolux Lighting Facility" 
                  className="w-full h-[550px] object-cover transition duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                 <div className="absolute top-0 right-0 bg-bison-red text-white px-6 py-2 font-bold uppercase tracking-widest text-sm font-oswald">Industrial</div>
              </div>
              <div className="lg:w-1/2 flex flex-col h-full justify-center py-4 lg:pr-12">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight font-oswald uppercase">
                  DECROLUX LIGHTING <br /> FACILITY
                </h3>
                {/* Quote Box - Removed em-dash */}
                <div className="bg-gray-50 border-l-4 border-bison-red p-8 mb-8 relative">
                  <Quote className="w-10 h-10 text-gray-200 absolute top-4 left-4" />
                  <p className="text-xl text-gray-800 font-medium italic relative z-10 leading-relaxed mb-6">
                    "The fixed price contract made it very easy to budget and plan the build. Bison remove the uncertainty."
                  </p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest font-oswald">
                    Jared Grace, Decrolux
                  </p>
                </div>
                <a 
                  href="https://bisonconstructions.com.au/industrial/project/decrolux-lighting/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-bison-red font-bold uppercase tracking-widest hover:text-red-800 transition font-oswald"
                >
                  Read Case Study <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Project 3: Stephen Armstrong Rural Calving Barn */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 relative group overflow-hidden shadow-2xl rounded-sm">
                <img 
                  src="https://bisonconstructions.com.au/wp-content/uploads/2024/11/DJI_20230814130239_0139_D-768x576.jpg" 
                  alt="Stephen Armstrong Rural Calving Barn" 
                  className="w-full h-[550px] object-cover transition duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 left-0 bg-bison-red text-white px-6 py-2 font-bold uppercase tracking-widest text-sm font-oswald">Rural & Agribusiness</div>
              </div>
              <div className="lg:w-1/2 flex flex-col h-full justify-center py-4">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight font-oswald uppercase">
                  STEPHEN ARMSTRONG <br /> RURAL CALVING BARN
                </h3>
                {/* Quote Box - Removed em-dash */}
                <div className="bg-gray-50 border-l-4 border-bison-red p-8 mb-8 relative">
                  <Quote className="w-10 h-10 text-gray-200 absolute top-4 left-4" />
                  <p className="text-xl text-gray-800 font-medium italic relative z-10 leading-relaxed mb-6">
                    "It proved to be a time, stress and sleep saver! If I had to do it all again, I'd do it with Bison."
                  </p>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest font-oswald">
                    Stephen Armstrong
                  </p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-bison-red font-bold uppercase tracking-widest hover:text-red-800 transition font-oswald"
                >
                  Read Case Study <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
          
          <div className="mt-20 text-center">
            <a 
              href="#" 
              className="inline-block border-2 border-gray-900 text-gray-900 px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition font-oswald"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* E. FINAL CONVERSION */}
      <section id="contact" ref={contactRef} className="bg-gray-900 py-24 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-bison-red rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-oswald uppercase">READY TO <br /> BUILD SOUTH?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Book your Discovery Meeting to discuss your site requirements, budget, and timelines with Tasmania's industrial leaders.
            </p>
            
            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-sm backdrop-blur-sm flex items-center gap-4">
                <Phone className="w-6 h-6 text-bison-red" />
                <div className="text-left">
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1 font-oswald">Direct Line</div>
                  <a href="tel:0363524449" className="text-white font-bold text-lg hover:text-bison-red transition">(03) 6352 4449</a>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 px-8 py-6 rounded-sm backdrop-blur-sm flex items-center gap-4">
                <Mail className="w-6 h-6 text-bison-red" />
                <div className="text-left">
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1 font-oswald">Email Enquiries</div>
                  <a href="mailto:build@bisonent.com.au" className="text-white font-bold text-lg hover:text-bison-red transition">build@bisonent.com.au</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl relative">
            
            {/* Toggle Form Switch */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b border-white/10 pb-6">
              <h3 className="text-2xl font-bold text-white tracking-wide mb-4 md:mb-0 font-oswald uppercase">Project Details</h3>
              <label htmlFor="form-toggle" className="flex items-center cursor-pointer group">
                <div className="mr-3 text-gray-400 font-bold uppercase text-xs tracking-widest group-hover:text-white transition font-oswald">
                  I have detailed specifications
                </div>
                <div className="relative">
                  <input 
                    type="checkbox" 
                    id="form-toggle" 
                    className="sr-only" 
                    checked={isDetailedForm}
                    onChange={() => setIsDetailedForm(!isDetailedForm)}
                  />
                  <div className={`block w-12 h-6 rounded-full transition ${isDetailedForm ? 'bg-bison-red' : 'bg-gray-600'}`}></div>
                  <div className={`dot absolute top-1 bg-white w-4 h-4 rounded-full transition transform ${isDetailedForm ? 'translate-x-7' : 'translate-x-1'}`}></div>
                </div>
              </label>
            </div>

            <AnimatePresence mode="wait">
              {!isDetailedForm ? (
                <motion.form 
                  key="simple"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="block"
                >
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">First Name *</label>
                      <input type="text" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="First Name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Last Name *</label>
                      <input type="text" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="Last Name" />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Email Address *</label>
                      <input type="email" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="email@company.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Phone Number *</label>
                      <input type="tel" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="0400 000 000" />
                    </div>
                  </div>

                  {/* Location & Size */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Located In</label>
                      <input type="text" className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="Melbourne, Sydney, etc." />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Building Size *</label>
                      <div className="relative">
                        <select required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm appearance-none">
                          <option value="" disabled className="text-gray-500">Select Size</option>
                          <option value="Under 500m²" className="text-gray-900">Under 500m²</option>
                          <option value="500m² - 1,500m²" className="text-gray-900">500m² - 1,500m²</option>
                          <option value="1,500m² - 5,000m²" className="text-gray-900">1,500m² - 5,000m²</option>
                          <option value="Over 5,000m²" className="text-gray-900">Over 5,000m²</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Message</label>
                    <textarea rows={4} className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="Tell us about your project requirements in Tasmania..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-bison-red text-white text-lg font-bold uppercase py-4 hover:bg-red-700 transition tracking-widest font-oswald">
                    Submit Discovery Request
                  </button>
                </motion.form>
              ) : (
                <motion.form 
                  key="detailed"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="block"
                >
                  {/* Section: Personal Info */}
                  <div className="mb-8">
                    <h4 className="text-bison-red font-bold uppercase tracking-widest mb-4 font-oswald">Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">First Name *</label>
                        <input type="text" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="First Name" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Last Name *</label>
                        <input type="text" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="Last Name" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Email *</label>
                        <input type="email" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="email@company.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Phone Number *</label>
                        <input type="tel" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="0400 000 000" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Located In *</label>
                        <input type="text" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="Melbourne, Sydney, etc." />
                      </div>
                    </div>
                  </div>

                  {/* Section: Building Description */}
                  <div className="mb-8">
                    <h4 className="text-bison-red font-bold uppercase tracking-widest mb-4 font-oswald">Building Description</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Job Location</label>
                        <input type="text" className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="Tasmania Site Address / Area" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Type of Building</label>
                        <div className="relative">
                          <select className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm appearance-none">
                            <option value="" disabled className="text-gray-500">Select Type</option>
                            <option value="Warehouses" className="text-gray-900">Warehouses</option>
                            <option value="Workshops" className="text-gray-900">Workshops</option>
                            <option value="Mining" className="text-gray-900">Mining</option>
                            <option value="Bulk storage" className="text-gray-900">Bulk storage</option>
                            <option value="Bus Shelters" className="text-gray-900">Bus Shelters</option>
                            <option value="Aircraft" className="text-gray-900">Aircraft</option>
                            <option value="Cold Storage" className="text-gray-900">Cold Storage</option>
                            <option value="Sports" className="text-gray-900">Sports</option>
                            <option value="Hay sheds" className="text-gray-900">Hay sheds</option>
                            <option value="Machinery" className="text-gray-900">Machinery</option>
                            <option value="Packhouse" className="text-gray-900">Packhouse</option>
                            <option value="Yard covers" className="text-gray-900">Yard covers</option>
                            <option value="Feedlots" className="text-gray-900">Feedlots</option>
                            <option value="Herringbone" className="text-gray-900">Herringbone</option>
                            <option value="Rotary" className="text-gray-900">Rotary</option>
                            <option value="Robot" className="text-gray-900">Robot</option>
                            <option value="Calving barns" className="text-gray-900">Calving barns</option>
                            <option value="Equine" className="text-gray-900">Equine</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Width (m) *</label>
                        <input type="number" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="e.g. 20" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Length (m) *</label>
                        <input type="number" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="e.g. 50" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Height (m) *</label>
                        <input type="number" required className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="e.g. 8" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Floor Area (m²)</label>
                        <input type="text" className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="e.g. 1000" />
                      </div>
                    </div>
                  </div>

                  {/* Section: Doors & Accessories */}
                  <div className="mb-8">
                    <h4 className="text-bison-red font-bold uppercase tracking-widest mb-4 font-oswald">Doors & Accessories</h4>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Large Door Detail</label>
                        <input type="text" className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="Roller doors, sliding doors, etc." />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Personal Access Door Detail</label>
                        <input type="text" className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="Quantity and locations" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-widest font-oswald">Skylights, Vents or Windows Needed?</label>
                        <textarea rows={2} className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-bison-red transition rounded-sm" placeholder="Describe natural light and ventilation needs..."></textarea>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-bison-red text-white text-lg font-bold uppercase py-4 hover:bg-red-700 transition tracking-widest font-oswald">
                    Submit Detailed Request
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

          </div>
          
          <div className="mt-16 text-center text-gray-500 text-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="https://bisonconstructions.com.au/wp-content/themes/bison/assets/images/svg/bison_logo.svg" 
                alt="Bison" 
                className="h-6 w-auto brightness-0 invert opacity-40"
              />
            </div>
            <div className="font-light tracking-wide font-oswald uppercase">© 2026 Bison Constructions. Simple Certainty.</div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <motion.div 
        id="sticky-cta" 
        initial={{ y: '100%' }}
        animate={{ y: showStickyCta ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 w-full z-50 bg-white border-t-4 border-bison-red shadow-[0_-10px_30px_rgba(0,0,0,0.2)] p-4 md:p-6 flex justify-between items-center"
      >
        <div className="hidden sm:block">
          <h3 className="text-xl md:text-2xl font-bold font-oswald text-gray-900 uppercase tracking-tight">Ready to build certainty?</h3>
          <p className="text-xs md:text-sm text-gray-500 tracking-wide">Engage early for the best results.</p>
        </div>
        <a 
          href="#contact" 
          className="w-full sm:w-auto bg-bison-red text-white px-6 md:px-8 py-3 rounded-sm hover:bg-red-700 transition font-bold uppercase tracking-wide text-center shadow-lg text-sm md:text-base font-oswald"
        >
          Start Conversation
        </a>
      </motion.div>
    </div>
  );
}

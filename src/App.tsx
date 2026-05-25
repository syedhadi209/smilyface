import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  Camera, 
  Zap,
  ArrowRight,
  Stethoscope,
  Users,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Calendar,
  Upload,
  ChevronRight,
  Award,
  Plus,
  Shield,
  HelpCircle,
  Sparkle
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import OrthodonticSolutions from './components/OrthodonticSolutions';
import TiltCard from './components/TiltCard';

// Navbar with Top Info Bar and Responsive Nav Items
const Navbar = ({ onOpenAppointment }: { onOpenAppointment: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
      {/* Main Bar from screenshot */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-3' 
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            {/* Custom SVG logo mimicking interlocking double teeth/smile loops from screenshot */}
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 bg-transparent rounded-xl transition-transform group-hover:scale-105">
              <svg className="w-10 h-10 text-[#00A896]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outward aligner path loop */}
                <path d="M15 50C15 30 35 22 50 22C65 22 85 30 85 50C85 70 65 78 50 78C35 78 15 70 15 50Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                {/* Inward smile path */}
                <path d="M28 48C38 35 62 35 72 48" stroke="#3AAFA9" strokeWidth="5" strokeLinecap="round" />
                <path d="M38 60C46 66 54 66 62 60" stroke="#0B151E" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-extrabold text-[#0B151E] tracking-tight leading-none">
                Smilly Face
              </span>
              <span className="text-[10px] uppercase font-bold text-teal-600 tracking-widest mt-0.5 leading-none">
                Clear Aligners
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links matches screenshot */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Why Us', href: '#benefits' },
              { label: 'Philosophy', href: '#process' },
              { label: 'Investment', href: '#pricing' },
              { label: 'Treatable Conditions', href: '#cases' },
              { label: 'Case Submission', href: '#submit' },
              { label: 'Get In Touch', href: '#footer' }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium text-[#0B151E]/80 hover:text-[#00A896] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00A896] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <button 
              onClick={onOpenAppointment}
              className="bg-[#00A896] hover:bg-[#009080] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-teal-500/10 active:scale-95 cursor-pointer"
            >
              Secure Diagnostics
            </button>
          </div>

          <button className="lg:hidden text-[#0B151E] p-2 hover:bg-black/5 rounded-lg" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-8 h-8 text-[#00A896]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 50C15 30 35 22 50 22C65 22 85 30 85 50C85 70 65 78 50 78C35 78 15 70 15 50Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 48C38 35 62 35 72 48" stroke="#3AAFA9" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                  <span className="text-xl font-bold text-[#0B151E]">Smilly Face</span>
                </div>
                <button className="p-2 text-[#0B151E] hover:bg-black/5 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 mt-6">
                {[
                  { label: 'Why Us', href: '#benefits' },
                  { label: 'Philosophy', href: '#process' },
                  { label: 'Investment', href: '#pricing' },
                  { label: 'Treatable Conditions', href: '#cases' },
                  { label: 'Case Submission', href: '#submit' },
                  { label: 'Get In Touch', href: '#footer' }
                ].map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href}
                    className="text-xl font-serif font-medium text-[#0B151E] hover:text-[#00A896]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="bg-[#00A896] text-white py-3.5 rounded-xl font-semibold mt-8 text-center"
                >
                  Book Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

// Section Heading component
const SectionHeading = ({ children, badge, centered = false }: { children: React.ReactNode, badge?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif font-medium text-smilly-dark leading-tight">
        {children}
      </h2>
    </motion.div>
  </div>
);

// Form / modal to submit case
const CaseSubmissionForm = () => {
  const [formData, setFormData] = useState({
    dentistName: '',
    clinicEmail: '',
    patientName: '',
    caseType: 'Overcrowding',
    customNotes: ''
  });
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitPercent, setSubmitPercent] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const filesArr = Array.from(e.dataTransfer.files);
      setUploadedFiles(prev => [...prev, ...filesArr]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const filesArr = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...filesArr]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.clinicEmail) return;

    setIsSubmitting(true);
    setSubmitPercent(10);
    
    const interval = setInterval(() => {
      setSubmitPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSubmitting(false);
          setSuccess(true);
          return 100;
        }
        return prev + 15;
      });
    }, 300);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-2xl border border-black/5 max-w-4xl mx-auto">
      {success ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-serif font-bold text-[#0B151E] mb-3">Case Submitted Successfully</h3>
          <p className="text-smilly-dark/60 max-w-md mx-auto mb-8">
            Smilly Face clinicians are analyzing your patient parameters & 3D STL file. A customized digital orthodontics treatment plan estimate will arrive in 24 hours.
          </p>
          <button 
            onClick={() => {
              setSuccess(false);
              setUploadedFiles([]);
              setFormData({ dentistName: '', clinicEmail: '', patientName: '', caseType: 'Overcrowding', customNotes: '' });
              setSubmitPercent(0);
            }}
            className="bg-[#00A896] text-white px-8 py-3 rounded-full font-bold hover:bg-[#009080] transition-colors"
          >
            Submit Another Case
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#0B151E] uppercase tracking-wider mb-2">Dentist / Practitioner Name Name (Optional)</label>
              <input 
                type="text" 
                value={formData.dentistName}
                onChange={e => setFormData(prev => ({ ...prev, dentistName: e.target.value }))}
                placeholder="Dr. Julianne Smille" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#00A896] transition-colors text-sm text-[#0B151E]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0B151E] uppercase tracking-wider mb-2">Email Address *</label>
              <input 
                type="email" 
                required
                value={formData.clinicEmail}
                onChange={e => setFormData(prev => ({ ...prev, clinicEmail: e.target.value }))}
                placeholder="office@smillyclinic.com" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#00A896] transition-colors text-sm text-[#0B151E]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-[#0B151E] uppercase tracking-wider mb-2">Patient Initials or Full Name *</label>
              <input 
                type="text" 
                required
                value={formData.patientName}
                onChange={e => setFormData(prev => ({ ...prev, patientName: e.target.value }))}
                placeholder="J. Smith" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#00A896] transition-colors text-sm text-[#0B151E]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0B151E] uppercase tracking-wider mb-2">Principal Diagnosis Case *</label>
              <select 
                value={formData.caseType}
                onChange={e => setFormData(prev => ({ ...prev, caseType: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#00A896] transition-colors text-sm text-[#0B151E]"
              >
                <option value="Overcrowding">Severe Overcrowding</option>
                <option value="Gapped Teeth">Teeth Spacing / Gaps</option>
                <option value="Overbite">Deep Overbite</option>
                <option value="Underbite">Underbite Realignment</option>
                <option value="Crossbite">Crossbite/Complex Case</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B151E] uppercase tracking-wider mb-2">Upload Intraoral 3D STL Scans or Teeth Selfie Images</label>
            <div 
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
                dragActive ? 'border-[#00A896] bg-teal-500/5' : 'border-gray-300 bg-gray-50'
              }`}
            >
              <Upload className="mx-auto w-10 h-10 text-gray-400 mb-4" />
              <p className="text-sm font-semibold text-[#0B151E] mb-1">Drag and drop STL files or tooth images</p>
              <p className="text-xs text-gray-400 mb-4">Supported formats: .stl, .ply, .jpeg, .png (up to 25MB)</p>
              
              <input 
                id="file-selector"
                type="file" 
                multiple
                className="hidden" 
                onChange={handleFileSelect}
              />
              <button 
                type="button"
                onClick={() => document.getElementById('file-selector')?.click()}
                className="bg-white px-5 py-2 rounded-lg border border-gray-200 text-xs font-bold text-[#0B151E] shadow-sm hover:bg-gray-50 transition-colors"
              >
                Browse Files
              </button>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-xl space-y-2">
                <span className="text-xs font-bold text-[#0B151E] uppercase tracking-widest block">Selected Files ({uploadedFiles.length})</span>
                {uploadedFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-gray-100 text-xs text-[#0B151E]">
                    <span className="truncate max-w-sm font-mono text-gray-600">{file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
                    <button type="button" onClick={() => removeFile(idx)} className="text-red-500 hover:text-red-700 font-bold ml-2">Remove</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B151E] uppercase tracking-wider mb-2">Instructions for Clinical Simulation</label>
            <textarea 
              rows={3}
              value={formData.customNotes}
              onChange={e => setFormData(prev => ({ ...prev, customNotes: e.target.value }))}
              placeholder="E.g., Special priority on leveling lateral incisors. Minimize visual flare of upper canines." 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#00A896] transition-colors text-sm text-[#0B151E] resize-none"
            />
          </div>

          <div className="pt-2">
            {isSubmitting ? (
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-[#0B151E]">
                  <span className="font-bold">Analyzing biomechanical vectors & encrypting file...</span>
                  <span className="font-mono">{submitPercent}%</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#00A896] h-full transition-all duration-300" style={{ width: `${submitPercent}%` }} />
                </div>
              </div>
            ) : (
              <button 
                type="submit"
                className="w-full bg-[#0B151E] text-white py-4 rounded-xl font-bold hover:bg-[#1A2633] transition-all shadow-lg active:scale-95"
              >
                Launch Treatment Case Plan Analysis
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

// Scheduler Modal component
const ConsultationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [selectedDate, setSelectedDate] = useState<string>('May 22, 2026');
  const [selectedSlot, setSelectedSlot] = useState<string>('02:30 PM');
  const [patientDetails, setPatientDetails] = useState({ name: '', email: '', phone: '' });
  const [finished, setFinished] = useState(false);

  const datesAndDays = [
    { dayName: 'Fri', dateNum: '22', text: 'May 22, 2026' },
    { dayName: 'Sat', dateNum: '23', text: 'May 23, 2026' },
    { dayName: 'Mon', dateNum: '25', text: 'May 25, 2026' },
    { dayName: 'Tue', dateNum: '26', text: 'May 26, 2026' },
    { dayName: 'Wed', dateNum: '27', text: 'May 27, 2026' },
  ];

  const timeSlots = [
    '09:00 AM', '10:30 AM', '11:00 AM', '12:30 PM', '02:30 PM', '04:00 PM', '05:30 PM'
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setFinished(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        className="bg-white rounded-[32px] shadow-2xl relative z-10 w-full max-w-lg overflow-hidden border border-black/5"
      >
        <button onClick={onClose} className="absolute top-5 right-5 p-2 bg-gray-100 hover:bg-gray-200 text-[#0B151E] rounded-full transition-colors z-20">
          <X size={18} />
        </button>

        {finished ? (
          <div className="p-8 text-center text-[#0B151E]">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Consultation Confirmed!</h3>
            <p className="text-sm text-smilly-dark/60 mb-6">
              Your complimentary three-dimensional diagnostic session and assessment are scheduled at our Lahore facility on:
            </p>
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl max-w-xs mx-auto text-sm space-y-1 mb-6">
              <p className="font-bold text-[#00A896]">{selectedDate}</p>
              <p className="text-[#0B151E] font-medium">at {selectedSlot}</p>
              <p className="text-xs text-gray-500 italic mt-2">Includes complimentary scanning and real-time visualization</p>
            </div>
            <p className="text-xs text-center text-gray-400">A personalized confirmation outline and digital reminder have been dispatched to {patientDetails.email || 'your email'}.</p>
            <button 
              onClick={() => {
                setFinished(false);
                setPatientDetails({ name: '', email: '', phone: '' });
                onClose();
              }}
              className="mt-8 bg-[#0B151E] text-white py-3 px-8 rounded-full font-bold w-full hover:bg-black transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleBook} className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-extrabold text-[#0B151E]">Book Diagnostic Scanning</h3>
              <p className="text-xs text-smilly-dark/50 mt-1">Schedule a diagnostic session with expert clinical advisers at our partner branch.</p>
            </div>

            {/* Step 1: Date */}
            <div>
              <span className="block text-[11px] font-bold text-[#0B151E] uppercase tracking-wider mb-2.5">1. Choose Your Preferred Date</span>
              <div className="grid grid-cols-5 gap-2">
                {datesAndDays.map((d) => (
                  <button
                    key={d.text}
                    type="button"
                    onClick={() => setSelectedDate(d.text)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                      selectedDate === d.text 
                        ? 'border-[#00A896] bg-[#00A896]/10 text-[#00A896] font-bold' 
                        : 'border-gray-200 text-gray-400 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-tight">{d.dayName}</span>
                    <span className="text-base font-serif mt-0.5">{d.dateNum}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Time Slots */}
            <div>
              <span className="block text-[11px] font-bold text-[#0B151E] uppercase tracking-wider mb-2.5">2. Select an Available Hour Slot</span>
              <div className="flex gap-2 flex-wrap max-h-24 overflow-y-auto pr-1">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      selectedSlot === slot 
                        ? 'bg-[#0B151E] text-white border-[#0B151E]' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Patient Form Details */}
            <div className="space-y-3">
              <span className="block text-[11px] font-bold text-[#0B151E] uppercase tracking-wider mb-1">3. Add Your Personal Details</span>
              <input 
                type="text" 
                required
                value={patientDetails.name}
                onChange={e => setPatientDetails(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Full Name" 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none text-xs focus:border-[#00A896] transition-colors text-black"
              />
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="email" 
                  required
                  value={patientDetails.email}
                  onChange={e => setPatientDetails(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="name@email.com" 
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none text-xs focus:border-[#00A896] transition-colors text-black"
                />
                <input 
                  type="tel" 
                  required
                  value={patientDetails.phone}
                  onChange={e => setPatientDetails(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="0339-xxxxxxx" 
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none text-xs focus:border-[#00A896] transition-colors text-black"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#00A896] text-white py-3.5 rounded-xl font-bold hover:bg-[#009080] transition-colors text-sm shadow-md shadow-teal-500/10 active:scale-95"
            >
              Request Diagnostics Session
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default function App() {
  const [activeCaseTab, setActiveCaseTab] = useState(0);
  const [showAppointment, setShowAppointment] = useState(false);

  // Parallax scroll coordinates for Hero section
  const { scrollY, scrollYProgress } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 150]);
  const orb1Y = useTransform(scrollY, [0, 800], [0, -80]);
  const orb2Y = useTransform(scrollY, [0, 800], [0, 60]);

  // Treatable Cases data for interactive tabs
  const treatableCasesList = [
    {
      title: "Dental Crowding",
      problem: "Occurs when teeth overlap or twist due to insufficient room within the dental arch.",
      solution: "Smilly Face systems gently expand the arch, rotating crowded teeth into a beautifully aligned, natural smile.",
      time: "5-7 Months",
      difficulty: "Mild to Moderate",
      animatedPoints: [-10, 0, 10, -5, 5],
      imgUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400"
    },
    {
      title: "Gaps & Spacing",
      problem: "Presents as noticeable spaces or gaps between teeth, which can compromise both appearance and oral health.",
      solution: "Using custom-directed force vectors, our invisible aligners close unwanted gaps to create unified, beautiful tooth contacts.",
      time: "4-6 Months",
      difficulty: "Mild",
      animatedPoints: [20, -20, 15, -15, 0],
      imgUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=400"
    },
    {
      title: "Overbite Anomalies",
      problem: "The upper front teeth excessively overlap or hide the lower teeth, affecting bite comfort and look.",
      solution: "Engineered smart attachments selectively correct vertical heights and bite alignment in complete harmony.",
      time: "6-8 Months",
      difficulty: "Moderate to Severe",
      animatedPoints: [0, 5, -5, 12, -8],
      imgUrl: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?q=80&w=400"
    },
    {
      title: "Underbite Discrepancy",
      problem: "The lower front teeth protrude past the upper teeth, often placing extra strain on jaw joints and speech.",
      solution: "Advanced digital coordinate mapping guides gradual anterior shifts, aligning both arches safely without invasive procedures.",
      time: "8-10 Months",
      difficulty: "Severe Case Level",
      animatedPoints: [-15, 10, -5, -2, 8],
      imgUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-smilly-light selection:bg-smilly-blue/20 flex flex-col pt-20">
      {/* High-visibility glowing scroll progress indicator */}
      <motion.div 
        style={{ scaleX: scrollYProgress }} 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00A896] via-[#10B981] to-[#3B82F6] z-[9999] origin-left"
      />
      <Navbar onOpenAppointment={() => setShowAppointment(true)} />
      <ConsultationModal isOpen={showAppointment} onClose={() => setShowAppointment(false)} />

      {/* Hero Section matches screenshot perfectly */}
      <section className="relative min-h-[580px] lg:min-h-[660px] bg-[#060B11] text-white overflow-hidden flex items-center py-20">
        {/* Background photo under teal/blue high-contrast visual lighting and dark ambient overlay with smooth parallax */}
        <motion.div 
          className="absolute -top-[12%] -bottom-[12%] left-0 right-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(6, 11, 17, 0.94) 40%, rgba(6, 11, 17, 0.6) 100%), url('https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=1800&auto=format&fit=crop')`,
            backgroundBlendMode: 'multiply',
            y: bgY
          }}
        />

        {/* Floating gradient orb blobs with dual-direction parallax scrolling */}
        <motion.div 
          style={{ y: orb1Y }}
          className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#00A896]/30 rounded-full blur-[110px] pointer-events-none opacity-60 mix-blend-screen" 
        />
        <motion.div 
          style={{ y: orb2Y }}
          className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#6366F1]/20 rounded-full blur-[90px] pointer-events-none opacity-50 mix-blend-screen" 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 bg-[#00A896]/15 border border-[#00A896]/30 px-3.5 py-1.5 rounded-full mb-6"
            >
              <Sparkles className="text-[#00A896] w-4 h-4 animate-pulse" />
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">Certified Digital Orthodontics</span>
            </motion.div>

            {/* Exactly "Renovating Smiles, Building Confidence" from screenshot */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl md:text-7xl font-serif font-medium tracking-tight leading-[1.05] text-white mb-6"
            >
              Reimagining Smiles, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-[#34D399] to-[#3B82F6] filter drop-shadow-sm font-bold">
                Restoring Confidence
              </span>
            </motion.h1>

            {/* Support description closely adapted from screenshot */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-gray-300 font-light leading-relaxed mb-10 max-w-xl"
            >
              Discover customized clear aligners engineered for perfection. Smilly Face provides masterfully planned dental alignment through state-of-the-art diagnostic digital modeling at unprecedented values.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Solid blue-periwinkle CTA button matching "Make An Appointment" from screen mockups */}
              <button 
                onClick={() => setShowAppointment(true)}
                className="bg-[#4E5BA6] hover:bg-[#3E4A8D] text-white px-9 py-4 rounded-lg font-bold text-base transition-all transform shadow-lg shadow-indigo-600/10 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <a 
                href="#cases"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-base text-center transition-all backdrop-blur-sm"
              >
                View Treatable Conditions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Orthodontic Solutions Section from screenshot */}
      <OrthodonticSolutions onOpenAppointment={() => setShowAppointment(true)} />

      {/* Benefits section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Excellent Care Standards" centered>
            Why Choose Smilly Face?
          </SectionHeading>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Sparkle className="w-10 h-10 text-[#00A896]" />, title: "Ultra-Discrete Transparency", desc: "Engineered with high-clarity SmillyClear™ materials that are virtually invisible during daily interactions." },
              { icon: <Award className="w-10 h-10 text-[#00A896]" />, title: "Licensed Specialist Verification", desc: "Your personalized alignment journey is designed, approved, and monitored by professional dental experts." },
              { icon: <CheckCircle2 className="w-10 h-10 text-[#00A896]" />, title: "Complete Lifestyle Flexibility", desc: "Easily detach aligners for regular dining, presentations, or photo sessions. Keep oral hygiene uncomplicated." },
              { icon: <Smartphone className="w-10 h-10 text-[#00A896]" />, title: "Remote Progress Tracking", desc: "Scan and share your orthodontic changes directly from your smartphone without constant clinic appointments." }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <TiltCard className="h-full">
                  <div className="p-8 h-full rounded-[24px] bg-[#F8FAFC] border border-gray-100 hover:border-teal-500/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                      <h3 className="text-xl font-bold text-[#0B151E] mb-3">{benefit.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive module: Treatable Cases */}
      <section id="cases" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Clinical Capability" centered>
            Are Invisible Aligners Right for You?
          </SectionHeading>

          <p className="text-center text-gray-500 max-w-xl mx-auto -mt-6 mb-12 text-sm">
            From minor spacing modifications to complex multi-dimensional crowding, we formulate precise computerized pathways for various orthodontic needs.
          </p>

          <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
            {/* Left selector menu of cases */}
            <div className="lg:col-span-5 space-y-3">
              {treatableCasesList.map((c, idx) => (
                <button
                  key={c.title}
                  onClick={() => setActiveCaseTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl flex items-center justify-between transition-all duration-300 border ${
                    activeCaseTab === idx
                      ? 'bg-white border-[#00A896] shadow-md shadow-teal-500/5 text-[#00A896]'
                      : 'bg-[#F1F5F9] border-transparent text-gray-600 hover:bg-gray-200/50'
                  }`}
                >
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest block mb-1 opacity-70">Case {idx+1}</span>
                    <span className="text-lg font-bold font-serif">{c.title}</span>
                  </div>
                  <ChevronRight size={20} className={`transform transition-transform ${activeCaseTab === idx ? 'translate-x-1.5' : ''}`} />
                </button>
              ))}
            </div>

            {/* Right case visualizer display */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCaseTab}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-5">
                    <div>
                      <h3 className="text-2xl font-bold font-serif text-[#0B151E]">{treatableCasesList[activeCaseTab].title}</h3>
                      <p className="text-xs text-[#00A896] font-bold uppercase tracking-wider mt-1">Diagnosis Complexity: {treatableCasesList[activeCaseTab].difficulty}</p>
                    </div>
                    <div className="bg-teal-500/10 text-[#00A896] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1">
                      <Clock size={12} />
                      Avg. {treatableCasesList[activeCaseTab].time}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-red-500/80 uppercase tracking-widest block mb-1">The Concern</span>
                        <p className="text-sm text-gray-500 leading-relaxed">{treatableCasesList[activeCaseTab].problem}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-teal-600/80 uppercase tracking-widest block mb-1">Interactive Ortho Remedy</span>
                        <p className="text-sm text-gray-500 leading-relaxed">{treatableCasesList[activeCaseTab].solution}</p>
                      </div>
                    </div>

                    {/* Interactive CSS simulated tooth realignment visualizer */}
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center relative">
                      <span className="absolute top-3 left-3 bg-gray-200 text-[#0B151E] text-[10px] font-bold px-2 py-0.5 rounded uppercase">Teeth Layout</span>
                      <div className="py-8 flex justify-center gap-3">
                        {treatableCasesList[activeCaseTab].animatedPoints.map((offset, toothIdx) => (
                          <motion.div
                            key={toothIdx}
                            animate={{ 
                              y: [offset, 0, offset],
                              rotate: [offset * 0.4, 0, offset * 0.4]
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 3, 
                              delay: toothIdx * 0.2, 
                              ease: "easeInOut" 
                            }}
                            className="w-7 h-11 bg-white border-2 border-[#00A896] rounded-b-xl flex flex-col justify-end pb-1 inline-block shadow-sm"
                          >
                            <div className="w-full h-1 bg-teal-500/20" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-[10px] text-gray-400 font-medium">Visualizing computer alignment vectors during aligner phases</p>
                    </div>
                  </div>

                  <div className="bg-teal-500/5 p-4 rounded-xl flex items-center gap-3 text-xs text-[#00A896]">
                    <Shield size={16} />
                    <span>Clinical assurance: In over 98% of evaluated cases, custom-designed clear aligners provide excellent results without brackets.</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:flex items-center gap-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <SectionHeading badge="How It Works">
              Your personalized alignment journey <br /> in three straightforward steps.
            </SectionHeading>
            
            <div className="space-y-12">
              {[
                { number: "01", title: "Precise Digital Scanning", desc: "Skip messy plaster trays. We capture thousands of biometric depth references to map your tooth structures in less than 3 minutes." },
                { number: "02", title: "Predictive Dynamic Engineering", desc: "Our advanced laboratories design a series of continuous movement layers. Each individual set is designed under certified supervisory guidance." },
                { number: "03", title: "Effortless Daily Wearing", desc: "Integrate orthodontic trays into your daily life for 22 hours. Swap to adjacent sets sequentially and track milestones directly on your device." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6"
                >
                  <span className="text-4xl font-serif font-light text-[#00A896]/30 italic">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0B151E] mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[40px] overflow-hidden shadow-2xl scale-95 hover:scale-100 transition-transform duration-500"
            >
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop" 
                alt="Intraoral dental scan rendering tooth models" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-teal-900/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology section */}
      <section id="technology" className="py-24 bg-smilly-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[#00A896] font-bold uppercase tracking-widest text-xs">Pioneering Science</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-4">Advanced Dental Bio-Materials</h2>
            <p className="text-white/60 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
              By combining premium dental polymers, optical capture scanners, and precise force algorithms, we map continuous tooth movement pathways with clinical accuracy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.15 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="space-y-8"
            >
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 bg-[#00A896]/20 text-[#00A896] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Continuous Force Bio-Polymers</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Our custom polymer layers exert balanced, prolonged orthodontic pressure to safely guide dental rotations into standard symmetry.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 bg-[#00A896]/20 text-[#00A896] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Optoelectronic Arch Scanning</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Avoid uncomfortable traditional impression putties. Highly sensitive optical laser systems capture structural definitions with instant 3D feedback.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#00A896] via-[#3B82F6] to-[#8B5CF6] rounded-full blur-[100px] opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" 
                alt="Professional Aligner Technology laboratory setup"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing section with built-in calculator */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Investment Plans" centered>
            Simple, Honest Treatment Pricing
          </SectionHeading>

          <p className="text-center text-gray-500 max-w-xl mx-auto -mt-6 mb-16 text-sm">
            We deliver premium, custom-fit clear aligners directly to clinics and patients, completely bypassing traditional markup costs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <TiltCard className="flex flex-col h-full">
              <div className="p-8 h-full rounded-[32px] bg-slate-50 border border-gray-100 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Mild Cases</span>
                  <h4 className="text-2xl font-serif font-bold text-[#0B151E] mb-4">Single Arch Express</h4>
                  <p className="text-xs text-gray-500 mb-6">Optimized for fast aesthetic alignments, minor front tooth spacing, or resolving mild post-treatment shifts.</p>
                  <div className="border-t border-b border-gray-200/50 py-4 mb-6">
                    <span className="text-4xl font-mono font-extrabold text-[#0B151E]">$1,299</span>
                    <span className="text-xs text-gray-400 block mt-1">Or $99/mo with 100% interest-free installments</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-600"><CheckCircle2 size={14} className="text-[#00A896]" /> Up to 12 dynamic adjustment trays</li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-600"><CheckCircle2 size={14} className="text-[#00A896]" /> Three-dimensional diagnostic preview</li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-600"><CheckCircle2 size={14} className="text-[#00A896]" /> Full alignment success guarantee</li>
                  </ul>
                </div>
                <button onClick={() => setShowAppointment(true)} className="w-full py-3 rounded-xl bg-white text-[#0B151E] border border-gray-200 font-bold hover:shadow-md transition-all text-xs">Secure Express Inspection</button>
              </div>
            </TiltCard>

            {/* Package 2 - Featured */}
            <TiltCard className="flex flex-col h-full md:-translate-y-3 shadow-2xl shadow-[#0B151E]/20" hoverScale={1.03}>
              <div className="p-8 h-full rounded-[32px] bg-[#0B151E] text-white flex flex-col justify-between relative">
                <span className="absolute top-4 right-4 bg-[#00A896] text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full">Most Popular</span>
                <div>
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block mb-1">Standard / Complex Cases</span>
                  <h4 className="text-2xl font-serif font-bold mb-4">Comprehensive Smile Restoration</h4>
                  <p className="text-xs text-gray-300 mb-6">Fully therapeutic package coordinating bite depth, crowding, and structural spacing simultaneously.</p>
                  <div className="border-t border-b border-white/10 py-4 mb-6">
                    <span className="text-4xl font-mono font-extrabold text-[#00A896]">$1,850</span>
                    <span className="text-xs text-gray-300 block mt-1">Or $149/mo with absolute 0% APR financing</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-200"><CheckCircle2 size={14} className="text-[#00A896]" /> Full series of corrective alignment steps</li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-200"><CheckCircle2 size={14} className="text-[#00A896]" /> Specialist Clinical Design Oversight</li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-200"><CheckCircle2 size={14} className="text-[#00A896]" /> Complete package of ultra-durable retainers</li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-200"><CheckCircle2 size={14} className="text-[#00A896]" /> Complimentary replacement trays</li>
                  </ul>
                </div>
                <button onClick={() => setShowAppointment(true)} className="w-full py-3.5 rounded-xl bg-[#00A896] text-white font-bold hover:bg-[#009080] transition-colors text-xs shadow-lg">Book Complete Diagnostic Consultation</button>
              </div>
            </TiltCard>

            {/* Package 3 */}
            <TiltCard className="flex flex-col h-full">
              <div className="p-8 h-full rounded-[32px] bg-slate-50 border border-gray-100 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Clinical Practitioners</span>
                  <h4 className="text-2xl font-serif font-bold text-[#0B151E] mb-4">Dental CAD Integrations</h4>
                  <p className="text-xs text-gray-500 mb-6">For clinics and diagnostic laboratories managing intraoral STL data models in-house.</p>
                  <div className="border-t border-b border-gray-200/50 py-4 mb-6">
                    <span className="text-4xl font-mono font-extrabold text-[#0B151E]">$599</span>
                    <span className="text-xs text-gray-400 block mt-1">Per full dental CAD diagnostic file export</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-600"><CheckCircle2 size={14} className="text-[#00A896]" /> Rapid 24-hour digital blueprint drafting</li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-600"><CheckCircle2 size={14} className="text-[#00A896]" /> Downloadable high-fidelity clinical sheets</li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-gray-600"><CheckCircle2 size={14} className="text-[#00A896]" /> Comprehensive physical movement logs</li>
                  </ul>
                </div>
                <a href="#submit" className="w-full text-center py-3 rounded-xl bg-white text-[#0B151E] border border-gray-200 font-bold hover:shadow-md transition-all text-xs">Upload Clinical STL File</a>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Practitioner / Case Submission Section */}
      <section id="submit" className="py-24 bg-[#F8FAFC] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Upload Case Materials" centered>
            Clinical Data Ingestion Hub
          </SectionHeading>
          <p className="text-center text-gray-500 max-w-xl mx-auto -mt-6 mb-12 text-sm">
            Clinics can upload 3D STL dental scans directly, while patients can submit close-up structural photographs for initial diagnostic evaluation.
          </p>
          <CaseSubmissionForm />
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading badge="Patient Celebrations" centered>
            Trusted by Over 50,000 Smile Transformations
          </SectionHeading>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Sarah J.", city: "Lahore", quote: "The interactive diagnostic simulator is remarkable. I could preview how my overlapping incisors would align step-by-step prior to receiving my trays. In less than six months, my confidence has completely skyrocketed!", avatar: "https://i.pravatar.cc/150?u=sarah" },
              { name: "Mark T.", city: "Islamabad", quote: "A stellar orthodontic service. I visited their local partner facility for the initial optoelectronic laser scan, and the entire cycle was pleasant. Highly recommended for those seeking a modern alternative to braces.", avatar: "https://i.pravatar.cc/150?u=mark" },
              { name: "Elena R.", city: "Karachi", quote: "I easily detach the aligners when delivering executive presentations, and colleagues never notice them at all. The convenience of their Express option was worth every single penny.", avatar: "https://i.pravatar.cc/150?u=elena" },
              { name: "David K.", city: "Faisalabad", quote: "The remote smartphone monitoring app totally streamlined my check-ups program. Combine that with transparent pricing and incredible professional support—absolutely perfect.", avatar: "https://i.pravatar.cc/150?u=david" }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full"
              >
                <TiltCard className="h-full">
                  <div className="p-8 h-full rounded-[28px] bg-[#F8FAFC] flex flex-col justify-between border border-gray-100 hover:border-teal-500/20 hover:shadow-xl transition-all duration-300">
                    <div>
                      <div className="flex gap-1 text-teal-500 mb-4 font-bold">
                        {"★★★★★"}
                      </div>
                      <p className="text-[#0B151E] font-medium italic text-sm leading-relaxed mb-6">
                        &quot;{t.quote}&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border border-white shadow" referrerPolicy="no-referrer" />
                      <div>
                        <h5 className="font-bold text-xs text-[#0B151E]">{t.name}</h5>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{t.city}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0B151E] via-[#0E2F44] to-[#1E1B4B] border border-white/5 relative overflow-hidden rounded-[48px] p-12 md:p-20 text-center text-white shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Sparkles size={240} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 relative z-10 leading-tight">
              Ready to capture <br /> your dream smile?
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-12 max-w-lg mx-auto relative z-10">
              Begin your transition alongside thousands of patients who unlocked a premium, clinical-grade smile effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button 
                onClick={() => setShowAppointment(true)}
                className="bg-[#00A896] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl active:scale-95 cursor-pointer"
              >
                Secure a Complimentary Scan
              </button>
              <a 
                href="#submit"
                className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/15 transition-all"
              >
                Upload Structural Scans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer matching elements */}
      <footer id="footer" className="bg-white border-t border-smilly-dark/5 py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-8 h-8 text-[#00A896]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 50C15 30 35 22 50 22C65 22 85 30 85 50C85 70 65 78 50 78C35 78 15 70 15 50Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28 48C38 35 62 35 72 48" stroke="#3AAFA9" strokeWidth="5" strokeLinecap="round" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-extrabold text-[#0B151E] leading-none">Smilly Face</span>
                  <span className="text-[9px] uppercase font-bold text-teal-600 tracking-wider">Clear Aligners</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
                Reimagining and reinventing medical-grade home & clinic orthodontics for patients, labs, and providers worldwide.
              </p>
              <div className="mt-6 text-xs text-gray-400">
                <p>Location: Shabbir Healthcare, Butt Chowk, Lahore</p>
                <p className="mt-1">Technical Hotlines: +923390599003</p>
              </div>
            </div>
            
            <div>
              <h6 className="font-bold text-xs text-smilly-dark uppercase tracking-widest mb-6">Navigation</h6>
              <ul className="space-y-4 text-xs text-gray-500 font-medium">
                <li><a href="#benefits" className="hover:text-[#00A896] transition-colors">Why Choose Us</a></li>
                <li><a href="#process" className="hover:text-[#00A896] transition-colors">Treatment Philosophy</a></li>
                <li><a href="#pricing" className="hover:text-[#00A896] transition-colors">Investment Plans</a></li>
                <li><a href="#cases" className="hover:text-[#00A896] transition-colors">Treatable Conditions</a></li>
                <li><a href="#submit" className="hover:text-[#00A896] transition-colors">Clinical Data Hub</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-bold text-xs text-smilly-dark uppercase tracking-widest mb-6">Patient Inbounds</h6>
              <ul className="space-y-4 text-xs text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#00A896] transition-colors">Emergency Re-order</a></li>
                <li><a href="#" className="hover:text-[#00A896] transition-colors">Mobile Android App</a></li>
                <li><a href="#" className="hover:text-[#00A896] transition-colors">Consultant Hotlines</a></li>
                <li><a href="#" className="hover:text-[#00A896] transition-colors">Practice Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-smilly-dark/5">
            <div className="flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <a href="#" className="hover:text-[#00A896] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00A896] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#00A896] transition-colors">Doctor License Agreement</a>
            </div>
            <p className="text-[10px] text-gray-400 uppercase font-mono">
              &copy; 2026 Smillyface Medical Devices Corp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

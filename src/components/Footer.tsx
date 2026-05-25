import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  explore: [
    { label: 'Why Choose Us', href: '#benefits' },
    { label: 'Treatment Process', href: '#process' },
    { label: 'Pricing Plans', href: '#pricing' },
    { label: 'Treatable Cases', href: '#cases' },
  ],
  support: [
    { label: 'Submit a Case', href: '#submit' },
    { label: 'Book Consultation', href: '#' },
    { label: 'Patient Support', href: '#' },
    { label: 'For Clinics', href: '#submit' },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5">
            <Logo variant="light" size="md" />
            <p className="mt-6 text-white/50 text-sm leading-relaxed max-w-sm">
              Premium clear aligners engineered for invisible comfort. Transform your smile with clinical-grade precision and expert orthodontic oversight.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="text-mint-400 mt-0.5 shrink-0" />
                Shabbir Healthcare, Butt Chowk, Lahore
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-mint-400 shrink-0" />
                +92 339 0599003
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-mint-400 shrink-0" />
                hello@smillyface.com
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h6 className="text-xs font-semibold uppercase tracking-widest text-mint-400 mb-6">Explore</h6>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-mint-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h6 className="text-xs font-semibold uppercase tracking-widest text-mint-400 mb-6">Support</h6>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-mint-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h6 className="text-xs font-semibold uppercase tracking-widest text-mint-400 mb-6">Trust</h6>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-2xl font-display text-mint-300">50K+</p>
                <p className="text-xs text-white/40 mt-1">Smiles transformed</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-2xl font-display text-mint-300">98%</p>
                <p className="text-xs text-white/40 mt-1">Patient satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-mint-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-mint-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-mint-300 transition-colors">Clinical Agreement</a>
          </div>
          <p className="text-xs text-white/30">
            © 2026 Smilly Face. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

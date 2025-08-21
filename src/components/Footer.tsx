import { Link } from "react-router-dom";
import { Trophy, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
   <footer className="bg-primary text-primary-foreground">
  <div className="container mx-auto px-6 py-12">
    <div className="grid md:grid-cols-4 gap-8">
      {/* Brand Section */}
      <div className="col-span-full md:col-span-1">
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/logo.png"
            alt="Thomas Anderson Logo"
            className="h-16 object-contain"
          />
        </div>
        <p className="text-sm opacity-80 leading-relaxed">
          Transforming student-athletes into college-bound champions for over 31 years 
          with proven strategies and personalized guidance.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold mb-4 text-accent">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              About Thomas
            </Link>
          </li>
          <li>
            <Link to="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Mentorship Program
            </Link>
          </li>
          <li>
            <Link to="/book" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Dream Big, Play Hard
            </Link>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="font-semibold mb-4 text-accent">Resources</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Recruiting Unplugged Podcast
            </Link>
          </li>
          <li>
            <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Off the Record Blog
            </Link>
          </li>
          <li>
            <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Video Training Series
            </Link>
          </li>
          <li>
            <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
              Speaking Engagements
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-semibold mb-4 text-accent">Contact</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-accent" />
            <span className="opacity-80">(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-accent" />
            <span className="opacity-80">thomas@andersonrecruiting.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="opacity-80">Recruiting City, RC</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-primary-glow mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-sm opacity-80">
        © 2025 Thomas Anderson College Recruiting. All rights reserved.
      </div>
      <div className="flex items-center gap-6 text-sm">
        <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
          Privacy Policy
        </Link>
        <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
          Terms of Service
        </Link>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
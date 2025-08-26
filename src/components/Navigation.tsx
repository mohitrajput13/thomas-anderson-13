import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

declare global {
  interface Window {
    google: any;
  }
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const location = useLocation();

  const navItems = [
    { name: "Learning Hub", href: "/media" },
    { name: "About Thomas", href: "/about" },
  ];

  const translateToSpanish = () => {
    // Wait for Google Translate to load
    setTimeout(() => {
      const googleTranslateCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (googleTranslateCombo) {
        googleTranslateCombo.value = 'es';
        googleTranslateCombo.dispatchEvent(new Event('change'));
        setCurrentLang('ES');
      } else {
        // If combo not found, try triggering Google Translate initialization
        if (window.google && window.google.translate) {
          window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,es',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, 'google_translate_element');
          
          // Try again after initialization
          setTimeout(() => {
            const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (combo) {
              combo.value = 'es';
              combo.dispatchEvent(new Event('change'));
              setCurrentLang('ES');
            }
          }, 1000);
        }
      }
    }, 500);
  };

  const translateToEnglish = () => {
    setTimeout(() => {
      const googleTranslateCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (googleTranslateCombo) {
        googleTranslateCombo.value = 'en';
        googleTranslateCombo.dispatchEvent(new Event('change'));
        setCurrentLang('EN');
      } else {
        // If combo not found, try triggering Google Translate initialization
        if (window.google && window.google.translate) {
          window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,es',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, 'google_translate_element');
          
          // Try again after initialization
          setTimeout(() => {
            const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (combo) {
              combo.value = 'en';
              combo.dispatchEvent(new Event('change'));
              setCurrentLang('EN');
            }
          }, 1000);
        }
      }
    }, 500);
  };

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover-lift">
            <img
              src="/logo.png"
              alt="Thomas Anderson Logo"
              className="w-full h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-medium transition-colors hover:text-primary group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
            
            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={translateToEnglish}
                className={`px-3 py-1 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium ${
                  currentLang === 'EN' ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                EN
              </button>
              <button
                onClick={translateToSpanish}
                className={`px-3 py-1 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium ${
                  currentLang === 'ES' ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                ES
              </button>
            </div>
            
            <Button className="btn-gold">Get the Free Guide</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-accent/10"
                      : "text-muted-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-2 mx-4">
                <button
                  onClick={translateToEnglish}
                  className={`px-3 py-1 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium ${
                    currentLang === 'EN' ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={translateToSpanish}
                  className={`px-3 py-1 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium ${
                    currentLang === 'ES' ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  ES
                </button>
              </div>
              
              <Button className="btn-gold mx-4 mt-4">Get the Free Guide</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('nav.learningHub'), href: "/media" },
    { name: t('nav.aboutThomas'), href: "/about" },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
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
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              {i18n.language.toUpperCase()}
            </button>
            
            <Button className="btn-gold">{t('nav.getGuide')}</Button>
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
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium mx-4"
              >
                <Globe className="w-4 h-4" />
                {i18n.language === 'en' ? 'Español' : 'English'}
              </button>
              
              <Button className="btn-gold mx-4 mt-4">{t('nav.getGuide')}</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

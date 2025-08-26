import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Start */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Quick Start</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#quiz-section" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Quiz
                </Link>
              </li>
              <li>
                <Link to="/book" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Free Guide
                </Link>
              </li>
              <li>
                <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Thomas's Story
                </Link>
              </li>
              <li>
                <Link to="/#success-stories" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-glow mt-8 pt-8 text-center">
          <div className="text-sm opacity-80">
            Copyright © 2025
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
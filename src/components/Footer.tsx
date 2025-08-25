import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Start */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">{t('footer.quickStart')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#quiz-section" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.quiz')}
                </Link>
              </li>
              <li>
                <Link to="/book" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.freeGuide')}
                </Link>
              </li>
              <li>
                <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.resources')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">{t('footer.learn')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.podcast')}
                </Link>
              </li>
              <li>
                <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.articles')}
                </Link>
              </li>
              <li>
                <Link to="/media" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.videos')}
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">{t('footer.about')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.thomasStory')}
                </Link>
              </li>
              <li>
                <Link to="/#success-stories" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.successStories')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('footer.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-glow mt-8 pt-8 text-center">
          <div className="text-sm opacity-80">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
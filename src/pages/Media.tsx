import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mic, BookOpen, Video, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const Media = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('media.hero.title')} | Thomas Anderson</title>
        <meta name="description" content={t('media.hero.subtitle')} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="mb-6 animate-fade-in">{t('media.hero.title')}</h1>
                <p className="text-xl leading-relaxed animate-slide-up">
                  {t('media.hero.subtitle')}
                </p>
              </div>
            </div>
          </section>

          {/* Media Sections Grid */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                
                {/* Podcast Section */}
                <div className="card-elegant hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Mic className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h2 className="text-primary">Recruiting Unplugged</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Weekly podcast featuring real recruiting stories, expert interviews, 
                    and actionable advice for student-athletes and parents navigating 
                    the college recruiting process.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Latest Episode</h4>
                      <p className="text-sm text-muted-foreground">
                        "The Early Bird Advantage: Why 9th Grade Planning Changes Everything"
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Popular Episode</h4>
                      <p className="text-sm text-muted-foreground">
                        "Scholarship Myths: What Coaches Really Look For"
                      </p>
                    </div>
                  </div>
                  <Button className="btn-gold w-full">Listen to Podcast</Button>
                </div>

                {/* Blog Section */}
                <div className="card-elegant hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h2 className="text-primary">Off the Record</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    In-depth articles covering recruiting strategies, college selection, 
                    academic preparation, and insider insights from three decades of 
                    experience in college athletics.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Recent Article</h4>
                      <p className="text-sm text-muted-foreground">
                        "The Hidden Cost of Last-Minute Recruiting"
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Featured Article</h4>
                      <p className="text-sm text-muted-foreground">
                        "Building Your Dream Team: The Power of Professional Guidance"
                      </p>
                    </div>
                  </div>
                  <Button className="btn-gold w-full">Read Articles</Button>
                </div>

                {/* Video Training */}
                <div className="card-elegant hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Video className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h2 className="text-primary">Video Training Series</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive video courses covering every aspect of college recruiting, 
                    from initial planning through scholarship negotiation and beyond.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Free Series</h4>
                      <p className="text-sm text-muted-foreground">
                        "The Game 12 Principles" - 12 essential recruiting concepts
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Premium Course</h4>
                      <p className="text-sm text-muted-foreground">
                        "Recruiting Mastery Blueprint" - Complete step-by-step system
                      </p>
                    </div>
                  </div>
                  <Button className="btn-gold w-full">Watch Videos</Button>
                </div>

                {/* Speaking Engagements */}
                <div className="card-elegant hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h2 className="text-primary">Speaking Engagements</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Live presentations and workshops for schools, clubs, and organizations. 
                    Interactive sessions designed to educate athletes, parents, and coaches 
                    on effective recruiting strategies.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Upcoming Event</h4>
                      <p className="text-sm text-muted-foreground">
                        "Early Recruiting Success" - High School Athletic Director Conference
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Popular Topic</h4>
                      <p className="text-sm text-muted-foreground">
                        "Parent's Guide to Supporting Their Student-Athlete"
                      </p>
                    </div>
                  </div>
                  <Button className="btn-gold w-full">Book Speaking Event</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6 text-primary">Stay Updated</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get the latest recruiting insights, podcast episodes, and educational 
                  content delivered directly to your inbox.
                </p>
                <div className="max-w-md mx-auto">
                  <Button className="btn-hero w-full">Subscribe to Newsletter</Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Media;
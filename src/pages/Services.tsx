import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('services.hero.title')} | Thomas Anderson</title>
        <meta name="description" content={t('services.hero.subtitle')} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="mb-6 animate-fade-in">{t('services.hero.title')}</h1>
                <p className="text-xl leading-relaxed animate-slide-up">
                  {t('services.hero.subtitle')}
                </p>
                <div className="mt-8">
                  <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                    {t('services.hero.limited')}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3-Stage Process */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-center mb-12 text-primary">Our 3-Stage Success Process</h2>
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                
                <div className="card-elegant text-center hover-lift">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="mb-4 text-primary">Stage 1: Assessment</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      Complete athletic and academic evaluation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      Goal setting and timeline development
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      Recruiting readiness analysis
                    </li>
                  </ul>
                </div>

                <div className="card-elegant text-center hover-lift">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="mb-4 text-primary">Stage 2: Strategy</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      Personalized recruiting plan
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      College list development
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      Communication strategy design
                    </li>
                  </ul>
                </div>

                <div className="card-elegant text-center hover-lift">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="mb-4 text-primary">Stage 3: Execution</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      Weekly progress monitoring
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      Application and visit preparation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      Scholarship negotiation support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Program Benefits */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-12 text-primary">What Makes This Program Different</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-left">
                    <h3 className="mb-4 text-accent">Exclusive Access</h3>
                    <p className="text-muted-foreground">
                      Limited to just 50 families per year to ensure personalized attention 
                      and maximum results for each student-athlete.
                    </p>
                  </div>
                  <div className="text-left">
                    <h3 className="mb-4 text-accent">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Over 95% of our mentorship students receive scholarship offers, 
                      with an average scholarship value 40% higher than the national average.
                    </p>
                  </div>
                  <div className="text-left">
                    <h3 className="mb-4 text-accent">Family Support</h3>
                    <p className="text-muted-foreground">
                      We work with the entire family unit, ensuring parents are equipped 
                      to support their athlete throughout the recruiting process.
                    </p>
                  </div>
                  <div className="text-left">
                    <h3 className="mb-4 text-accent">Lifetime Network</h3>
                    <p className="text-muted-foreground">
                      Join an exclusive network of successful student-athletes and families 
                      who continue to support each other beyond college.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6 text-primary">Ready to Transform Your Future?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Applications are reviewed on a first-come, first-served basis. 
                  Don't wait to secure your spot in this exclusive program.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <Button className="btn-hero">Apply for Mentorship</Button>
                  <Button className="btn-outline">Schedule Consultation</Button>
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

export default Services;
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GameTwelveTimeline from "@/components/GameTwelveTimeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, BookOpen, Star, TrendingUp, Award, Target, Clock } from "lucide-react";
import { useContent } from "@/contexts/ContentContext";
import heroImage from "@/assets/hero-recruiting.jpg";

const Index = () => {
  const { getFieldValue } = useContent();

  return (
    <>
      <Helmet>
        <title>Transform Your College Athletic Dreams Into Reality | Thomas Anderson</title>
        <meta name="description" content="With 31 years of proven expertise, unlock the complete Game 12 system that has helped thousands of student-athletes secure college scholarships." />
        <meta name="keywords" content="college recruiting, student athlete, scholarships, recruiting expert, college sports, athletic recruiting, Thomas Anderson" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-accent opacity-95"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center text-primary-foreground">
                <h1 className="mb-6 animate-fade-in">
                  Transform Your College Athletic Dreams Into Reality
                </h1>
                <p className="text-xl lg:text-2xl leading-relaxed mb-8 animate-slide-up">
                  With 31 years of proven expertise, unlock the complete Game 12 system that has helped thousands of student-athletes secure college scholarships and achieve their academic goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
                  <Button className="btn-gold text-lg px-8 py-4">Start Your Journey</Button>
                  <Button className="btn-outline text-lg px-8 py-4">Watch Success Stories</Button>
                </div>
                
                {/* Hero Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="stat-card bg-primary-foreground/10 backdrop-blur-sm">
                    <div className="stat-number text-accent">31+</div>
                    <div className="stat-label text-primary-foreground/80">Years Experience</div>
                  </div>
                  <div className="stat-card bg-primary-foreground/10 backdrop-blur-sm">
                    <div className="stat-number text-accent">5,000+</div>
                    <div className="stat-label text-primary-foreground/80">Athletes Guided</div>
                  </div>
                  <div className="stat-card bg-primary-foreground/10 backdrop-blur-sm">
                    <div className="stat-number text-accent">95%</div>
                    <div className="stat-label text-primary-foreground/80">Success Rate</div>
                  </div>
                  <div className="stat-card bg-primary-foreground/10 backdrop-blur-sm">
                    <div className="stat-number text-accent">$50M+</div>
                    <div className="stat-label text-primary-foreground/80">Scholarships Earned</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Game 12 Timeline - Special Interactive Section */}
          <GameTwelveTimeline />

          {/* Authority Section */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">{getFieldValue('home', 'authority-title')}</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {getFieldValue('home', 'authority-subtitle')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="mb-4 text-primary">Proven Track Record</h3>
                      <p className="text-muted-foreground">
                        Over 31 years of transforming student-athletes into college-bound champions 
                        with a 95% success rate in scholarship acquisition.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <Target className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="mb-4 text-primary">Personalized Strategy</h3>
                      <p className="text-muted-foreground">
                        Every athlete receives a customized recruiting plan based on their unique 
                        strengths, goals, and target college preferences.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <Clock className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="mb-4 text-primary">Early Advantage</h3>
                      <p className="text-muted-foreground">
                        Start early, finish strong. Our system emphasizes the critical importance 
                        of beginning the recruiting process in freshman year.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Book Showcase */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="mb-6 text-primary">{getFieldValue('home', 'book-title')}</h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    {getFieldValue('home', 'book-description')}
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-primary">#1 Bestseller</span>
                  </div>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                    <Button className="btn-hero">Get Your Copy</Button>
                    <Button className="btn-outline">Preview Sample</Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-80 h-96 bg-gradient-to-br from-accent to-accent-muted rounded-lg shadow-2xl flex items-center justify-center hover-lift">
                      <BookOpen className="w-24 h-24 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full font-bold text-sm animate-glow-pulse">
                      Available Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Multimedia Learning Hub Preview */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">Learning Hub</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Access comprehensive resources designed to educate, inspire, and guide 
                    you through every step of the college recruiting process.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="mb-3 text-primary">Recruiting Unplugged Podcast</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Weekly episodes featuring real recruiting stories, expert interviews, 
                        and actionable advice.
                      </p>
                      <Button className="btn-outline w-full">Listen Now</Button>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="mb-3 text-primary">Off the Record Blog</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        In-depth articles covering recruiting strategies, college selection, 
                        and insider insights.
                      </p>
                      <Button className="btn-outline w-full">Read Articles</Button>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="mb-3 text-primary">Video Training Series</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Comprehensive video courses covering every aspect of college recruiting 
                        from planning to scholarships.
                      </p>
                      <Button className="btn-outline w-full">Watch Videos</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Quiz Section */}
          <section className="py-16 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6">Are You Ready for College Recruiting?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Take our free assessment to discover where you stand and what steps 
                  you need to take to maximize your recruiting potential.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="mb-2">Athletic Assessment</h3>
                    <p className="text-sm opacity-80">Evaluate your current athletic performance and potential</p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                    <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="mb-2">Academic Readiness</h3>
                    <p className="text-sm opacity-80">Review your academic standing and college requirements</p>
                  </div>
                </div>
                <Button className="btn-gold text-lg px-8 py-4">Take Free Assessment</Button>
              </div>
            </div>
          </section>

          {/* Success Stories Preview */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="mb-6 text-primary">Success Stories</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Real students, real results. See how the Game 12 system has transformed 
                    athletic dreams into college reality.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent-foreground">A</span>
                        </div>
                        <h4 className="font-semibold text-primary">Alex Rodriguez</h4>
                        <p className="text-sm text-muted-foreground">Soccer • Stanford University</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        "Thomas's guidance transformed my recruiting journey. From no offers 
                        to a full scholarship at my dream school!"
                      </p>
                      <div className="text-center">
                        <span className="text-accent font-semibold">Full Scholarship</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent-foreground">M</span>
                        </div>
                        <h4 className="font-semibold text-primary">Maya Johnson</h4>
                        <p className="text-sm text-muted-foreground">Basketball • Duke University</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        "The early start strategy changed everything. By junior year, 
                        I had multiple offers from top programs."
                      </p>
                      <div className="text-center">
                        <span className="text-accent font-semibold">D1 Scholarship</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent-foreground">J</span>
                        </div>
                        <h4 className="font-semibold text-primary">Jordan Williams</h4>
                        <p className="text-sm text-muted-foreground">Track & Field • UCLA</p>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        "The Game 12 principles gave me confidence and a clear path. 
                        Now I'm living my dream at UCLA!"
                      </p>
                      <div className="text-center">
                        <span className="text-accent font-semibold">Partial Scholarship</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-12">
                  <Button className="btn-hero">See All Success Stories</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6 text-primary">Ready to Transform Your Future?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Don't leave your college dreams to chance. Join the thousands of student-athletes 
                  who have used the Game 12 system to secure their athletic and academic future.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <Button className="btn-hero text-lg px-8 py-4">Apply for Mentorship</Button>
                  <Button className="btn-outline text-lg px-8 py-4">Schedule Free Consultation</Button>
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

export default Index;
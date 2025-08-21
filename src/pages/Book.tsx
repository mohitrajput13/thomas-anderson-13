import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, BookOpen, Users } from "lucide-react";

const Book = () => {
  return (
    <>
      <Helmet>
        <title>Dream Big, Play Hard - College Recruiting Success Guide by Thomas Anderson</title>
        <meta name="description" content="Get your copy of Dream Big, Play Hard - the comprehensive guide to college recruiting success with 31 years of proven strategies and real-world insights." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h1 className="mb-6 animate-fade-in">Dream Big, Play Hard</h1>
                  <p className="text-xl leading-relaxed mb-8 animate-slide-up">
                    The definitive guide to college recruiting success, packed with 31 years 
                    of proven strategies, real-world insights, and the complete Game 12 system 
                    that has helped thousands of student-athletes achieve their dreams.
                  </p>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-lg">4.9/5 Reader Rating</span>
                  </div>
                  <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                    <Button className="btn-gold">
                      Buy on Amazon <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button className="btn-outline">Preview Sample</Button>
                  </div>
                </div>
                <div className="order-1 lg:order-2 text-center">
                  <div className="relative inline-block">
                    <div className="w-80 h-96 bg-gradient-to-br from-accent to-accent-muted rounded-lg shadow-2xl flex items-center justify-center">
                      <BookOpen className="w-24 h-24 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full font-bold text-sm">
                      #1 Bestseller
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Book Content Preview */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-center mb-12 text-primary">What's Inside</h2>
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div className="card-elegant text-center hover-lift">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-accent-foreground">12</span>
                  </div>
                  <h3 className="mb-4 text-primary">The Game 12 Principles</h3>
                  <p className="text-muted-foreground">
                    Complete breakdown of the 12 essential principles that form the 
                    foundation of successful college recruiting.
                  </p>
                </div>

                <div className="card-elegant text-center hover-lift">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="mb-4 text-primary">Real Success Stories</h3>
                  <p className="text-muted-foreground">
                    Inspiring case studies from actual student-athletes who used these 
                    strategies to secure their dream college opportunities.
                  </p>
                </div>

                <div className="card-elegant text-center hover-lift">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="mb-4 text-primary">Step-by-Step Guides</h3>
                  <p className="text-muted-foreground">
                    Detailed action plans for every stage of the recruiting process, 
                    from freshman year through scholarship negotiation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Table of Contents Preview */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-center mb-12 text-primary">Chapter Overview</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-card-border">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent-foreground">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Your Only Rival is Yourself</h4>
                        <p className="text-sm text-muted-foreground">Building unshakeable self-confidence</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-card-border">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent-foreground">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Support from the Stands</h4>
                        <p className="text-sm text-muted-foreground">The crucial role of family support</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-card-border">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent-foreground">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">The Clock of Success Starts Early</h4>
                        <p className="text-sm text-muted-foreground">Why freshman year planning matters</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-card-border">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent-foreground">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Every Great Goal Begins with a Plan</h4>
                        <p className="text-sm text-muted-foreground">Strategic planning methodology</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-card-border">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent-foreground">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Build Your Dream Team</h4>
                        <p className="text-sm text-muted-foreground">Assembling your support network</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-card-border">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-accent-foreground">+</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">And 7 More Principles</h4>
                        <p className="text-sm text-muted-foreground">Complete system for recruiting success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reader Testimonials */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-center mb-12 text-primary">What Readers Are Saying</h2>
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                
                <div className="card-elegant">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "This book changed everything for our family. The Game 12 principles 
                    gave us a clear roadmap when we felt completely lost in the recruiting process."
                  </p>
                  <div className="text-sm font-semibold text-primary">- Sarah M., Parent</div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I wish I had this book when I was recruiting. As a coach, I now recommend 
                    it to every family. The strategies are proven and the results speak for themselves."
                  </p>
                  <div className="text-sm font-semibold text-primary">- Coach Johnson, High School</div>
                </div>

                <div className="card-elegant">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "From a D3 hopeful to a full D1 scholarship - this book's strategies 
                    helped me exceed every expectation I had for my college career."
                  </p>
                  <div className="text-sm font-semibold text-primary">- Marcus T., Student-Athlete</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-6">Start Your Success Story Today</h2>
                <p className="text-xl mb-8">
                  Join thousands of families who have transformed their recruiting 
                  journey with the proven strategies in Dream Big, Play Hard.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                  <Button className="btn-gold">
                    Order Your Copy Now <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button className="btn-outline">Read Free Sample</Button>
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

export default Book;
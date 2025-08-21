import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, HelpCircle } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Thomas Anderson - College Recruiting Expert</title>
        <meta name="description" content="Get in touch with Thomas Anderson for college recruiting guidance, mentorship applications, speaking engagements, and personalized support." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="mb-6 animate-fade-in">Get In Touch</h1>
                <p className="text-xl leading-relaxed animate-slide-up">
                  Ready to transform your college recruiting journey? Let's connect and 
                  discuss how we can help you achieve your athletic and academic dreams.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                
                {/* Contact Form */}
                <div className="card-elegant">
                  <h2 className="mb-6 text-primary">Send a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input placeholder="What would you like to discuss?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your situation, goals, and how we can help..."
                        rows={5}
                      />
                    </div>
                    
                    <Button className="btn-hero w-full">Send Message</Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="card-elegant">
                    <h3 className="mb-6 text-primary">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <Phone className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Phone</p>
                          <p className="text-muted-foreground">(555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Email</p>
                          <p className="text-muted-foreground">thomas@andersonrecruiting.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Office</p>
                          <p className="text-muted-foreground">123 Athletic Way<br />Recruiting City, RC 12345</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Office Hours</p>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 2:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-elegant">
                    <h3 className="mb-4 text-primary">Quick Response Times</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email inquiries:</span>
                        <span className="font-semibold text-foreground">Within 24 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Urgent matters:</span>
                        <span className="font-semibold text-foreground">Same day</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Consultation requests:</span>
                        <span className="font-semibold text-foreground">2-3 business days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <HelpCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h2 className="text-primary">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="card-elegant">
                    <h3 className="mb-3 text-primary">When should my student-athlete start the recruiting process?</h3>
                    <p className="text-muted-foreground">
                      The earlier, the better! Ideally, planning should begin in 9th grade to maximize 
                      opportunities and scholarship potential. However, it's never too late to start - 
                      we've helped students succeed even when starting their senior year.
                    </p>
                  </div>
                  
                  <div className="card-elegant">
                    <h3 className="mb-3 text-primary">How much does the mentorship program cost?</h3>
                    <p className="text-muted-foreground">
                      Investment levels vary based on the specific needs and timeline of each student-athlete. 
                      We offer flexible payment plans and guarantee that the value far exceeds the cost. 
                      Contact us for a personalized consultation and pricing information.
                    </p>
                  </div>
                  
                  <div className="card-elegant">
                    <h3 className="mb-3 text-primary">Do you work with all sports and division levels?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! Our proven system works for all sports at every level - from Division I 
                      to NAIA and junior colleges. The principles remain the same regardless of sport or 
                      target division level.
                    </p>
                  </div>
                  
                  <div className="card-elegant">
                    <h3 className="mb-3 text-primary">What makes your approach different from other recruiting services?</h3>
                    <p className="text-muted-foreground">
                      Our 31 years of experience, proven Game 12 system, and personalized family approach 
                      set us apart. We don't just provide generic advice - we create customized strategies 
                      for each student-athlete's unique situation and goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-8 text-primary">Ready to Get Started?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Button className="btn-gold h-auto py-4 px-6 flex flex-col gap-2">
                    <span className="font-semibold">Apply for Mentorship</span>
                    <span className="text-sm opacity-90">Limited spots available</span>
                  </Button>
                  <Button className="btn-outline h-auto py-4 px-6 flex flex-col gap-2">
                    <span className="font-semibold">Schedule Consultation</span>
                    <span className="text-sm opacity-90">Free 30-minute call</span>
                  </Button>
                  <Button className="btn-outline h-auto py-4 px-6 flex flex-col gap-2">
                    <span className="font-semibold">Book Speaking Event</span>
                    <span className="text-sm opacity-90">For teams & organizations</span>
                  </Button>
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

export default Contact;
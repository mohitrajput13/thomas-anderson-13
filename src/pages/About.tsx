import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>The Man Behind the Mission | Thomas Anderson</title>
        <meta name="description" content="For over three decades, Thomas Anderson has dedicated his life to transforming young athletes into college-bound champions." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary-glow text-primary-foreground">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="mb-6 animate-fade-in">The Man Behind the Mission</h1>
                <p className="text-xl leading-relaxed animate-slide-up">
                  For over three decades, Thomas Anderson has dedicated his life to transforming young athletes into college-bound champions. His journey began in 1979 and continues to impact thousands of families nationwide.
                </p>
              </div>
            </div>
          </section>

          {/* Personal Story */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-center mb-12 text-primary">My Story & Mission</h2>
                <div className="prose prose-lg mx-auto text-muted-foreground">
                  <p>
                    My passion for college recruiting began when I witnessed firsthand how proper 
                    guidance could transform a young athlete's future. What started as helping a 
                    few local players has evolved into a comprehensive system that has helped 
                    thousands of student-athletes achieve their college dreams.
                  </p>
                  <p>
                    Over 31 years, I've seen the recruiting landscape evolve dramatically. Through 
                    every change, one truth remains constant: early preparation and strategic 
                    planning are the keys to success.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Career Timeline */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-6">
              <h2 className="text-center mb-12 text-primary">Career Timeline</h2>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  <div className="timeline-item">
                    <h3 className="text-accent mb-2">1979 - The Beginning</h3>
                    <p className="text-muted-foreground">Started coaching and mentoring young athletes in college preparation</p>
                  </div>
                  <div className="timeline-item">
                    <h3 className="text-accent mb-2">1990s - System Development</h3>
                    <p className="text-muted-foreground">Developed "The Game 12" principles that would become the foundation of successful recruiting</p>
                  </div>
                  <div className="timeline-item">
                    <h3 className="text-accent mb-2">2000s - National Recognition</h3>
                    <p className="text-muted-foreground">Expanded reach nationally, helping athletes from coast to coast</p>
                  </div>
                  <div className="timeline-item">
                    <h3 className="text-accent mb-2">2020 - Published Author</h3>
                    <p className="text-muted-foreground">Released "Dream Big, Play Hard" - comprehensive guide to college recruiting success</p>
                  </div>
                  <div className="timeline-item">
                    <h3 className="text-accent mb-2">Present - Knowledge Hub</h3>
                    <p className="text-muted-foreground">Continuing to educate and empower the next generation of student-athletes</p>
                  </div>
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

export default About;
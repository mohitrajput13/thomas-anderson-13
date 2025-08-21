import { useState } from "react";
import { Play } from "lucide-react";

const GameTwelveTimeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const principles = [
    { id: 1, title: "Your Only Rival is Yourself", description: "Building unshakeable self-confidence and personal accountability", position: "left" },
    { id: 2, title: "Support from the Stands", description: "The crucial role of family support in recruiting success", position: "right" },
    { id: 3, title: "The Clock of Success Starts Early", description: "Why freshman year planning changes everything", position: "left" },
    { id: 4, title: "Every Great Goal Begins with a Plan", description: "Strategic planning methodology for recruiting success", position: "right" },
    { id: 5, title: "Build Your Dream Team", description: "Assembling your support network of coaches and mentors", position: "left" },
    { id: 6, title: "Invest in Professional Recruiting Guidance", description: "The value of expert guidance in the recruiting process", position: "right" },
    { id: 7, title: "Academic Excellence Powers Recruiting", description: "How grades and test scores open scholarship doors", position: "left" },
    { id: 8, title: "College Success Requires a Complete Game", description: "Balancing athletics, academics, and personal development", position: "right" },
    { id: 9, title: "Discover Your X-Factor", description: "Identifying and showcasing your unique athletic talents", position: "left" },
    { id: 10, title: "Design Your University List Strategically", description: "Creating a targeted list of colleges that fit your goals", position: "right" },
    { id: 11, title: "No Second Chances for First Impressions", description: "Mastering communication with college coaches", position: "left" },
    { id: 12, title: "Step on Campus: Go Beyond the Brochure", description: "Making the most of college visits and evaluations", position: "right" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-primary">The Game 12 Principles</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the 12 fundamental principles that form the foundation of successful 
            college recruiting. Hover over each principle to learn more.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Center Line - hidden on mobile */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent"></div>

          <div className="space-y-12">
            {principles.map((principle, index) => (
              <div
                key={principle.id}
                className={`flex flex-col sm:flex-row items-center sm:items-start ${
                  principle.position === "left" ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Content Card */}
                <div className={`w-full sm:w-5/12 ${principle.position === "left" ? "sm:pr-8" : "sm:pl-8"} mb-6 sm:mb-0`}>
                  <div className={`card-elegant hover-lift transition-all duration-300 ${
                    activeIndex === index ? "scale-105 shadow-2xl" : ""
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground">
                        {principle.id}
                      </div>
                      <h3 className="text-primary flex-1">{principle.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{principle.description}</p>

                    <div className={`relative bg-gradient-to-br from-primary to-primary-glow rounded-lg p-6 text-center transition-all duration-300 ${
                      activeIndex === index ? "opacity-100" : "opacity-75"
                    }`}>
                      <div className="flex items-center justify-center gap-3 text-primary-foreground">
                        <Play className="w-6 h-6" />
                        <span className="font-semibold">Watch Thomas Explain</span>
                      </div>
                      <p className="text-sm text-primary-foreground/80 mt-2">Video coming soon</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden sm:flex">
                  <div className={`w-6 h-6 rounded-full border-4 border-accent transition-all duration-300 ${
                    activeIndex === index 
                      ? "bg-accent scale-125 animate-glow-pulse" 
                      : "bg-background"
                  }`}></div>
                </div>

                {/* Spacer for right side */}
                <div className="hidden sm:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            These principles have guided thousands of student-athletes to college success.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="btn-hero">Get the Complete System</button>
            <button className="btn-outline">Download Free Guide</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameTwelveTimeline;

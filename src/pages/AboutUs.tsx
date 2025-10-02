import About from "@/components/About";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";
import Contact from "@/components/Contact";

const stats = [
  {
    icon: Award,
    title: "Certified & Licensed",
    description: "Fully licensed and insured for your peace of mind",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled craftsmen and women with years of experience",
  },
  {
    icon: Clock,
    title: "Fast Service",
    description: "Quick response times and efficient project completion",
  },
  {
    icon: Shield,
    title: "100% Satisfaction",
    description: "We don't leave until you're completely satisfied",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              About Ourmijos Roofing
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Local, owner-operated, and committed to excellence in every project
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Our Promise */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
              Our Commitment to You
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                We have been expressing our passion for roofing and customer service, our standard for excellent customer service hasn't swayed a bit. From our very first job, we have had one goal in mind: To provide the best service to our customers, at great prices, with the professional and friendly attitude you can only hope for in a roofing contractor in Texas.
              </p>
              <p className="leading-relaxed">
                We are licensed and insured. We are rapidly becoming Texas number one roofing company by simply focusing on customer satisfaction above anything else. We do not leave until the customer is 100% satisfied "guaranteed". This all stems from our pickiness and passion for what we do.
              </p>
              <p className="leading-relaxed">
                When all you want to do is stop the leaks on your roof, call Ourmijos roofing now and save yourself a world of stress! Whether it is repairs, maintenance, or a brand new roof, we're the roofing contractor to guarantee the best possible job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default AboutUs;

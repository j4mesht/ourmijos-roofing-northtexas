import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Facebook } from "lucide-react";
import Contact from "@/components/Contact";

// Placeholder gallery - will be replaced with Facebook integration
const placeholderProjects = [
  { id: 1, title: "Residential Tile Roof", location: "Dallas, TX" },
  { id: 2, title: "Commercial Shingle Roof", location: "Fort Worth, TX" },
  { id: 3, title: "Roof Restoration", location: "Plano, TX" },
  { id: 4, title: "Emergency Repair", location: "Arlington, TX" },
  { id: 5, title: "New Construction", location: "McKinney, TX" },
  { id: 6, title: "Tile Replacement", location: "Frisco, TX" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-xl text-primary-foreground/90">
              See our latest projects and transformations
            </p>
          </div>
        </div>
      </section>

      {/* Facebook Integration Notice */}
      <section className="py-12 bg-accent/10">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-4">
              <Facebook className="h-5 w-5" />
              <span className="font-semibold">Facebook Gallery Integration</span>
            </div>
            <p className="text-muted-foreground">
              This gallery will automatically display photos from your Facebook business page once connected.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Placeholder */}
      <section className="py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Facebook className="h-16 w-16 text-muted-foreground/20" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      Coming Soon
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-display text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Want Your Project Featured Here?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to start your roofing project and join our gallery of satisfied customers.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Gallery;

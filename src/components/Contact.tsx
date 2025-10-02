import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Contact us today for a free consultation and quote. We're here to help with all your roofing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <p className="text-primary-foreground/80">(XXX) XXX-XXXX</p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <p className="text-primary-foreground/80">info@ourmijos.com</p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Service Area</h3>
              <p className="text-primary-foreground/80">DFW & North Texas</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="cta" className="text-lg">
            <Phone className="mr-2 h-5 w-5" />
            Request Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

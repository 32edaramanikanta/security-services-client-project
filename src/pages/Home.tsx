import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Clock, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-security.jpg";
import ClientMarquee from "@/components/ClientMarquee";

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Security Guards",
      description: "Trained and verified security personnel for residential and commercial properties."
    },
    {
      icon: Users,
      title: "Housekeeping Staff",
      description: "Professional housekeeping and maintenance services for offices and facilities."
    },
    {
      icon: Clock,
      title: "Event Security",
      description: "Specialized security services for events, functions, and special occasions."
    },
    {
      icon: Shield,
      title: "Industrial Security",
      description: "Comprehensive security solutions for industrial facilities and warehouses."
    }
  ];

  const whyChooseUs = [
    "24/7 Response Team Available",
    "Trained & Verified Guards",
    "100% Reliability Guaranteed",
    "Licensed & Insured Services",
    "Customized Security Solutions",
    "Professional Management"
  ];

  const clients = [
    "Corporate Offices",
    "Residential Complexes",
    "Educational Institutions",
    "Healthcare Facilities",
    "Industrial Units",
    "Event Venues"
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Sri Sai Prabhu Security Services Tenali | Reliable Security & Manpower Agency</title>
      <meta 
        name="description" 
        content="Professional security services in Tenali. Security guards, housekeeping manpower, event security & industrial security solutions. Contact: 7337420359" 
      />
      <meta name="keywords" content="security services Tenali, housekeeping manpower, event security Guntur, security guards Andhra Pradesh" />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Sri Sai Prabhu
            <br />
            <span className="text-3xl md:text-5xl">Security Services & Man Power Agency</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Reliable Security & Housekeeping Manpower Solutions in Tenali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white backdrop-blur-sm" asChild>
              <a href="tel:7337420359">Call Now: 9912341209</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">About Our Company</Badge>
              <h2 className="text-3xl font-bold mb-6">Your Trusted Security Partner in Tenali</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mr. Koteswararao Mandapati management postgraduate having huge experience in security safety vigilent and experienced administrator is also experienced  coordinating and training, is established sai prabu security service agencies, he started with a little security services.Now created a squad of expertise security guards that offer the best services to our client according to their requirements.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our professional team delivers reliable security and housekeeping services tailored to 
                your specific needs, backed by 24/7 support and 100% reliability guarantee.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-primary/10 p-8 rounded-lg">
                <Shield className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Professional Excellence</h3>
                <p className="text-muted-foreground">
                  Delivering world-class security and manpower services with unwavering commitment to quality and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl font-bold mb-4">Comprehensive Security & Manpower Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From security guards to housekeeping staff, we provide trained professionals for all your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Sri Sai Prabhu?</h2>
              <p className="text-lg opacity-90 mb-8">
                We stand out in the security industry with our commitment to excellence, 
                professional approach, and customer-first mindset.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success-green flex-shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="opacity-90 mb-6">Contact us for a free consultation and custom security solution.</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>7337420359 / 9912341209</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>sspsecurities23@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Tenali, Andhra Pradesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Clients</Badge>
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Organizations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We proudly serve diverse sectors with our professional security and manpower services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium text-muted-foreground">{client}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/clients">View All Clients</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <ClientMarquee />
    </>
  );
};

export default Home;
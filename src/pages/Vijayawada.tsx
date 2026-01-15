import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import guard from "@/assets/guard.jpeg"
import housekeeper from "@/assets/housekeeper.jpeg"
import eventsecurity from "@/assets/eventsecurity.jpg"
import industry from "@/assets/industry.jpeg"
import {
  Shield,
  Users,
  Clock,
  Building,
  Home,
  Factory,
  Calendar,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

type MainService = {
  image?: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  applications: string[];
  icon?: LucideIcon;
};

const mainServices: MainService[] = [
  {
    image: guard,
    title: "Bilingual Security Guards",
    subtitle: "Professional Security Personnel",
    description:
      "We can provide you with locally recruited bilingual security guards who can speak to your customers and employees in Telugu/Hindi/English languages.",
    features: [
      "24/7 Security Coverage",
      "Background Verified Guards",
      "Uniformed Personnel",
      "Regular Training Programs",
      "Incident Reporting",
      "Emergency Response",
    ],
    applications: [
      "Corporate Offices",
      "Residential Complexes",
      "Educational Institutions",
      "Healthcare Facilities",
    ],
  },
  {
    image: housekeeper,
    title: "Housekeeping Staff",
    subtitle: "Professional Cleaning & Maintenance",
    description:
      "We provide expert housekeeping and maintenance services to keep your facilities clean, organized, and well-maintained.",
    features: [
      "Daily Cleaning Services",
      "Deep Cleaning Solutions",
      "Facility Maintenance",
      "Waste Management",
      "Sanitization Services",
      "Equipment Maintenance",
    ],
    applications: [
      "Office Buildings",
      "Hospitals",
      "Schools",
      "Industrial Facilities",
    ],
  },
  {
    
    image: eventsecurity,
    title: "Event Security",
    subtitle: "Specialized Event Protection",
    description:
      "We provide comprehensive security solutions for events, functions, and special occasions to ensure smooth and safe proceedings.",
    features: [
      "Crowd Management",
      "VIP Protection",
      "Access Control",
      "Emergency Planning",
      "Venue Security",
      "Coordination Services",
    ],
    applications: ["Corporate Events", "Weddings", "Conferences", "Cultural Programs"],
    icon: Calendar,
  },
  {
    image: industry,
    title: "Industrial Security",
    subtitle: "Heavy-Duty Industrial Protection",
    description:
      "We provide specialized security services for industrial facilities, warehouses, and manufacturing units with unique security needs.",
    features: [
      "Perimeter Security",
      "Asset Protection",
      "Safety Compliance",
      "Access Management",
      "Surveillance Integration",
      "Risk Assessment",
    ],
    applications: [
      "Manufacturing Units",
      "Warehouses",
      "Chemical Plants",
      "Power Plants",
    ],
  },
];

const additionalServices = [
  {
    icon: Home,
    title: "Residential Security",
    description:
      "Comprehensive security solutions for residential communities and individual homes.",
  },
  {
    icon: Building,
    title: "Corporate Security",
    description:
      "Tailored security services for corporate offices and business establishments.",
  },
  {
    icon: Briefcase,
    title: "Executive Protection",
    description:
      "Personal security services for executives and high-profile individuals.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description:
      "Round-the-clock monitoring and response services for continuous protection.",
  },
];

const Services = () => {
  return (
    <div className="py-16">
      {/* SEO Meta Tags */}
      <title>
        Security Services - Sri Sai Prabhu | Security Guards, Housekeeping &
        Event Security Vijayawada
      </title>
      <meta
        name="description"
        content="Professional security services in Vijayawada - Security Guards, Housekeeping Staff, Event Security, Industrial Security. Licensed & trained personnel. Call 7337420359"
      />
      <meta
        name="keywords"
        content="security guards Vijayawada, housekeeping services, event security Vijayawada, industrial security Andhra Pradesh"
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services in Vijayawada
          </Badge>
          <h1 className="text-4xl font-bold mb-6">
            Comprehensive Security & Manpower Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sri Sai Prabhu Security Services is a ISO certified professional security agency
            providing trained and bilingual security guards in Guntur for
            factories, offices, apartments, hospitals, and commercial
            establishments.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-12 mb-16">
          {mainServices.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary/5 p-8 flex flex-col items-center justify-center text-center">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-48 w-48 object-contain mb-4"
                    />
                  ) : service.icon ? (
                    <service.icon className="h-16 w-16 text-primary mb-4" />
                  ) : null}

                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {service.subtitle}
                  </p>
                </div>
                <div className="md:col-span-2 p-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-secondary">
                        Applications
                      </h4>
                      <ul className="space-y-2">
                        {service.applications.map((app, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We also provide specialized services to meet specific security and
              operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <Card className="bg-primary text-primary-foreground mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                We deliver exceptional value through our professional approach,
                trained personnel, and commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                <p className="text-sm opacity-90">
                  Sri Sai Prabhu Security Services is an ISO certified and trusted security agency providing trained and reliable security guards in Vijayawada and surrounding areas. We offer professional security services for apartments, residential buildings, schools, colleges, hospitals, shopping complexes, offices, industries, warehouses, and events.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Trained Professionals</h3>
                <p className="text-sm opacity-90">
                  As an ISO certified security service provider, we follow standard operating procedures, quality management practices, and strict discipline to ensure safety and reliability. Our security personnel are well-trained and experienced in both day and night duties.
                   We provide 8-hour and 12-hour security guard services as per client requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Operations & Support</h3>
                <p className="text-sm opacity-90">
                  Round-the-clock customer support and emergency response
                  services.
                  Customer safety, punctuality, transparency, and quality service are our top priorities.
                   Contact us today for ISO certified professional security guard services in Vijayawada.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure Your Premises?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized security
            solution tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:7337420359">Call: 7337420359</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

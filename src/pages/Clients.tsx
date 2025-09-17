import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, GraduationCap, Heart, Factory, Home, Calendar, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Clients = () => {
  const clientCategories = [
    {
      icon: Building,
      title: "Corporate Offices",
      count: "15+",
      description: "Leading businesses trust us with their security needs",
      services: ["Security Guards", "Reception Services", "Access Control", "Surveillance"]
    },
    {
      icon: Home,
      title: "Residential Complexes",
      count: "20+",
      description: "Safe and secure living environments for families",
      services: ["24/7 Security", "Visitor Management", "Housekeeping", "Maintenance"]
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      count: "8+",
      description: "Protecting students, staff, and educational assets",
      services: ["Campus Security", "Event Security", "Cleaning Services", "Safety Protocols"]
    },
    {
      icon: Heart,
      title: "Healthcare Facilities",
      count: "5+",
      description: "Specialized security for medical environments",
      services: ["Hospital Security", "Patient Safety", "Sanitization", "Emergency Response"]
    },
    {
      icon: Factory,
      title: "Industrial Units",
      count: "10+",
      description: "Heavy-duty security for manufacturing facilities",
      services: ["Perimeter Security", "Asset Protection", "Safety Compliance", "Shift Coverage"]
    },
    {
      icon: Calendar,
      title: "Event Venues",
      count: "50+",
      description: "Successful events with professional security management",
      services: ["Crowd Control", "VIP Security", "Event Coordination", "Emergency Planning"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "General Manager",
      company: "Tech Solutions Pvt Ltd",
      testimonial: "Sri Sai Prabhu Security Services has been exceptional in providing reliable security for our office complex. Their guards are professional, well-trained, and always alert.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Facility Manager",
      company: "Green Valley Apartments",
      testimonial: "We have been using their services for over 2 years now. The housekeeping staff is efficient and the security team is very reliable. Highly recommended!",
      rating: 5
    },
    {
      name: "Dr. Venkat Rao",
      position: "Hospital Administrator",
      company: "City Care Hospital",
      testimonial: "Their specialized healthcare security services are outstanding. They understand the unique requirements of a medical facility and deliver accordingly.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "Corporate Campus Security",
      client: "Leading IT Company",
      challenge: "Needed comprehensive security for a 5-building corporate campus with 1000+ employees",
      solution: "Deployed 15 trained security guards with 24/7 coverage, CCTV monitoring, and access control systems",
      result: "Zero security incidents in 18 months, improved employee confidence, and streamlined visitor management"
    },
    {
      title: "Residential Complex Management",
      client: "Premium Housing Society",
      challenge: "Required complete security and housekeeping services for 200-unit residential complex",
      solution: "Provided integrated security and housekeeping team with resident-friendly protocols",
      result: "95% resident satisfaction rate, reduced maintenance issues, and enhanced property value"
    }
  ];

  return (
    <div className="py-16">
      {/* SEO Meta Tags */}
      <title>Our Clients - Sri Sai Prabhu Security Services | Trusted by 50+ Organizations in Tenali</title>
      <meta 
        name="description" 
        content="Sri Sai Prabhu Security Services trusted by 50+ organizations in Tenali - Corporate offices, residential complexes, hospitals, schools, and industrial units." 
      />
      <meta name="keywords" content="security services clients Tenali, corporate security, residential security, hospital security Guntur" />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Clients</Badge>
          <h1 className="text-4xl font-bold mb-6">Trusted by Leading Organizations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We proudly serve diverse sectors with our professional security and manpower services, 
            building long-term partnerships based on trust, reliability, and excellence.
          </p>
        </div>

        {/* Client Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clientCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <Badge variant="secondary" className="text-xs">{category.count} Clients</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div>
                  <h4 className="font-medium mb-2 text-sm">Services Provided:</h4>
                  <div className="flex flex-wrap gap-1">
                    {category.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <div className="flex ml-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-warning-orange text-warning-orange" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.testimonial}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real challenges, practical solutions, and measurable results from our client partnerships.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="bg-primary/5 p-1">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-primary">{study.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">Client: {study.client}</p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Challenge</h4>
                            <p className="text-sm text-muted-foreground">{study.challenge}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Our Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-success-green">Results Achieved</h4>
                        <p className="text-sm text-muted-foreground">{study.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Stats */}
        <Card className="bg-primary text-primary-foreground mb-16">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact in Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">24+</div>
                <p className="opacity-90">Satisfied Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <p className="opacity-90">Security Personnel</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="opacity-90">Support Coverage</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99%</div>
                <p className="opacity-90">Client Retention Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Family of Satisfied Clients</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference that professional, reliable security and manpower services can make 
            for your organization. Contact us today for a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Become Our Client</Link>
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

export default Clients;
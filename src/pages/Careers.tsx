import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Shield, Clock, MapPin, Phone, Mail, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: ""
  });

  const jobOpenings = [
    {
      title: "Security Guard",
      type: "Full Time",
      location: "Tenali, Andhra Pradesh",
      requirements: [
        "Minimum 10th pass",
        "Physical fitness required",
        "Previous security experience preferred",
        "Good communication skills"
      ],
      responsibilities: [
        "Monitor premises and patrol assigned areas",
        "Check identification and maintain visitor logs",
        "Respond to alarms and emergency situations",
        "Write detailed incident reports"
      ]
    },
    {
      title: "Housekeeping Staff",
      type: "Full Time",
      location: "Tenali & Guntur",
      requirements: [
        "Basic education required",
        "Experience in housekeeping preferred",
        "Attention to detail",
        "Reliability and punctuality"
      ],
      responsibilities: [
        "Maintain cleanliness of assigned areas",
        "Handle cleaning equipment safely",
        "Report maintenance issues",
        "Follow safety and hygiene protocols"
      ]
    },
    {
      title: "Supervisor",
      type: "Full Time",
      location: "Tenali, Andhra Pradesh",
      requirements: [
        "Graduate preferred",
        "2+ years supervisory experience",
        "Leadership and management skills",
        "Good command of Telugu and English"
      ],
      responsibilities: [
        "Supervise security and housekeeping staff",
        "Conduct training sessions",
        "Ensure quality service delivery",
        "Handle client communications"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const message = `Career Application from Website:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.position}
Experience: ${formData.experience}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/917337420359?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <title>Careers - Sri Sai Prabhu Security Services | Join Our Team in Tenali</title>
      <meta 
        name="description" 
        content="Join Sri Sai Prabhu Security Services team in Tenali. We offer careers in security services, housekeeping, and supervision with competitive benefits." 
      />
      <meta name="keywords" content="security jobs Tenali, housekeeping jobs Andhra Pradesh, careers Guntur, security guard jobs" />

      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/11 to-primary/5 opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-4">Join Our Team</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Your Career with Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Join Sri Sai Prabhu Security Services and grow your career in the security and manpower industry
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Growing Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Professional Training</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Flexible Hours</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Current Openings</Badge>
            <h2 className="text-3xl font-bold mb-4">Available Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for dedicated professionals to join our team and serve our clients with excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <Badge variant="secondary">{job.type}</Badge>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Requirements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Responsibilities:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {job.responsibilities.slice(0, 2).map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Apply Now</Badge>
              <h2 className="text-3xl font-bold mb-4">Submit Your Application</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Position Applied For *</Label>
                      <Select value={formData.position} onValueChange={(value) => handleInputChange('position', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="security-guard">Security Guard</SelectItem>
                          <SelectItem value="housekeeping">Housekeeping Staff</SelectItem>
                          <SelectItem value="supervisor">Supervisor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5+">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about yourself, your skills, and why you want to join our team..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Alternative Application Method
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    You can also send your resume directly to us via:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>sspsecurities23@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>7337420359 / 9912341209</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Employee Benefits</Badge>
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in taking care of our employees and providing them with opportunities to grow and succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Job Security",
                description: "Stable employment with growth opportunities in the security industry."
              },
              {
                icon: Users,
                title: "Professional Training",
                description: "Comprehensive training programs to enhance your skills and career prospects."
              },
              {
                icon: Clock,
                title: "Flexible Schedules",
                description: "Various shift options to suit your lifestyle and preferences."
              },
              {
                icon: MapPin,
                title: "Multiple Locations",
                description: "Work opportunities across Tenali, Guntur, and surrounding areas."
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
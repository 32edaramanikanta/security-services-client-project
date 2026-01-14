import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Shield, label: "Years of Experience", value: "5+" },
    { icon: Users, label: "Trained Staff", value: "100+" },
    { icon: Award, label: "Satisfied Clients", value: "24+" },
    { icon: Clock, label: "24/7 Support", value: "Always" }
  ];

  const values = [
    {
      title: "Reliability",
      description: "As an ISO certified security service provider, we follow standard operating procedures, quality management practices, and strict discipline to ensure safety and reliability. "
    },
    {
      title: "Professional Excellence",
      description: "Our security personnel are well-trained and experienced in both day and night duties. We provide 8-hour and 12-hour security guard services as per client requirements. "},
    {
      title: "Customer First",
      description: "Customer safety, punctuality, transparency, and quality service are our top priorities. Contact us today for ISO certified professional security guard services in Vijayawada, Guntur, Tenali "
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency, honesty, and ethical practices in all our business dealings."
    }
  ];

  return (
    <div className="py-16">
      {/* SEO Meta Tags */}
      <title>About Us - Sri Sai Prabhu Security Services | Professional Security Company Tenali</title>
      <meta 
        name="description" 
        content="Learn about Sri Sai Prabhu Security Services - leading security and manpower agency in Tenali with 5+ years experience, 100+ trained staff, and 24/7 support." 
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Our Company</Badge>
          <h1 className="text-4xl font-bold mb-6">Sri Sai Prabhu Security Services & Man Power Agency</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established as a trusted name in security and manpower services, we have been serving Tenali 
            and surrounding areas with dedication, professionalism, and unwavering commitment to safety.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Mr. Koteswararao Mandapati is a management postgraduate and social engineer having huge experience in the field of security, safety, social vigilance and experienced Administrator. He is also experienced in co-coordinating and training, he established sai prabhu security service agencies.He started with a little security services, now created a squad of expertise security guards that offer the best services to our client according to their requirements.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our journey began with a simple mission: to bridge the gap between security needs and reliable 
              service delivery. Over the years, we have built a strong reputation for our professional approach, 
              trained personnel, and commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we serve a diverse range of clients across various sectors, providing customized security 
              and manpower solutions that meet their specific requirements while maintaining the highest standards 
              of service quality.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="bg-primary/5 p-6 rounded-lg mb-6">
              <p className="text-lg">
                "To provide world-class security and manpower services that ensure complete peace of mind 
                for our clients, while maintaining the highest standards of professionalism, reliability, 
                and customer satisfaction."
              </p>
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground mb-6">
              To be the leading security and manpower service provider in Andhra Pradesh, recognized for 
              our excellence, innovation, and unwavering commitment to client safety and satisfaction.
            </p>
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-muted-foreground">
              We are committed to delivering services that exceed expectations, building long-term 
              partnerships with our clients, and continuously improving our service standards through 
              training, technology, and innovation.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide our operations and define our approach to serving our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Management Section */}
        <div className="bg-muted/30 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Professional Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced management team brings together years of expertise in security services, 
              human resources, and business operations to ensure exceptional service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Security Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Deep understanding of security challenges and industry best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">HR Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Skilled in recruitment, training, and management of professional staff.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Committed to maintaining the highest standards of service quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
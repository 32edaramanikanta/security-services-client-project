import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Optional: Send WhatsApp message
      const whatsappMessage = `Hi, I'm ${formData.name}. ${formData.message} Please contact me at ${formData.phone} or ${formData.email}`;
      const whatsappUrl = `https://wa.me/917337420359?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16">
      {/* SEO Meta Tags */}
      <title>Contact Us - Sri Sai Prabhu Security Services | Get Free Quote | Tenali Security Company</title>
      <meta 
        name="description" 
        content="Contact Sri Sai Prabhu Security Services in Tenali for free quote. Call 7337420359 or email sspsecurities23@gmail.com for security and manpower services." 
      />
      <meta name="keywords" content="contact security services Tenali, free security quote, security company contact Guntur, Tenali security services phone" />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl font-bold mb-6">Get in Touch with Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your premises? Contact us today for a free consultation and customized 
            security solution tailored to your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone Numbers</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>
                        <a href="tel:7337420359" className="hover:text-primary transition-colors">
                          7337420359
                        </a>
                      </div>
                      <div>
                        <a href="tel:9912341209" className="hover:text-primary transition-colors">
                          9912341209
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email Address</p>
                    <a 
                      href="mailto:sspsecurities23@gmail.com" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      sspsecurities23@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Tenali, Guntur District<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <div className="text-sm text-muted-foreground">
                      <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Emergency Support: 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button className="w-full justify-start" asChild>
                      <a href="tel:7337420359">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={`https://wa.me/917337420359?text=Hi, I'm interested in your security services.`}>
                        <MessageSquare className="h-4 w-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a customized solution.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your security requirements, location, and any specific needs..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and consent to be contacted 
                    regarding our security services.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
            <p className="text-muted-foreground">
              Visit us at our office in Tenali or contact us for an on-site consultation.
            </p>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d596.2497655786713!2d80.6372315313443!3d16.233992992522932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1758203579519!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Sai Prabhu Security Services Location"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Service Areas */}
        <div className="text-center bg-muted/30 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We provide security and manpower services across Tenali and surrounding areas in Guntur district.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Tenali","Repalle" , "Ponnur", "Guntur", "Mangalagiri", "Amaravati", "Vijayawada", "Chilakaluripet", "Narasaraopet", "Bapatla"].map((area) => (
              <Badge key={area} variant="secondary" className="text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
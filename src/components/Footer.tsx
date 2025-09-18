import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
               <img
  src="https://image2url.com/images/1758211412516-36356edc-c624-48ac-9301-cf6643c6190c.jpg"
  alt="Sri Sai Prabhu Logo"
  width={100}
  height={32}
  className="object-contain"
/>
              <div>
                <h3 className="text-xl font-bold">Sri Sai Prabhu Security Services</h3>
                <p className="text-sm opacity-90">& Man Power Agency</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4 max-w-md">
              Your trusted partner for comprehensive security and manpower solutions. 
              We deliver professional services with 100% reliability and 24/7 support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/clients" className="opacity-90 hover:opacity-100 transition-opacity">Clients</Link></li>
              <li><Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact</Link></li>
              <li><Link to="/careers" className="opacity-90 hover:opacity-100 transition-opacity">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90 hover:opacity-100 transition-opacity">Tenali , Repalle , Ponnur, Guntur , Mangalagiri</li>
              <li className="opacity-90 hover:opacity-100 transition-opacity">Vijayawada , Amaravati , Chilakaluripet , Narasaraopet , Bapatla</li>
         
              
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Tenali, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="opacity-90">
                  <div>7337420359</div>
                  <div>9912341209</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">sspsecurities23@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Sri Sai Prabhu Security Services & Man Power Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
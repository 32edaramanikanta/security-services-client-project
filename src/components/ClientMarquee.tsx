import { Card, CardContent } from "@/components/ui/card";
import indoRestaurantLogo from "@/assets/logos/indorestaurant.jpg";
import BarcusRestaurant   from "@/assets/logos/barcus.jpg";
import HondaLogo from "@/assets/logos/honda.jpeg";
import VillageLogo from "@/assets/logos/villagekitchen.jpeg";

const ClientMarquee = () => {
  const clients = [
    { name: "Barkaas Arabic Restaurant", logo: "BR", logoImage: indoRestaurantLogo },
    { name: "Barcus restaurant", logo: "" , logoImage: BarcusRestaurant },
    { name: "Honda ShowRoom Tenali", logo: "" , logoImage: HondaLogo },
    { name: "Village Kitchen Restaurant", logo: "SSP" ,logoImage: VillageLogo},
    
  ];

  return (
    <div className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Organizations</h2>
          <p className="text-lg text-muted-foreground">
            Join 100+ satisfied clients who trust us with their security needs
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee space-x-6">
          {[...clients, ...clients].map((client, index) => (
            <Card key={index} className="flex-shrink-0 w-48">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {client.logoImage ? (
                    <img
                      src={client.logoImage}
                      alt={client.name}
                      className="w-15 h-15 object-contain"
                    />
                  ) :
                  (
                    <span className="text-xl font-bold text-primary">{client.logo}</span>
                  )}
                </div>
                <p className="font-medium text-sm">{client.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
import { Card, CardContent } from "@/components/ui/card";

const ClientMarquee = () => {
  const clients = [
    { name: "TechCorp Solutions", logo: "TC" },
    { name: "Global Industries", logo: "GI" },
    { name: "Secure Mall", logo: "SM" },
    { name: "Elite Residency", logo: "ER" },
    { name: "Medical Center", logo: "MC" },
    { name: "Educational Institute", logo: "EI" },
    { name: "Banking Services", logo: "BS" },
    { name: "Hotel Paradise", logo: "HP" },
    { name: "Manufacturing Unit", logo: "MU" },
    { name: "IT Park", logo: "IP" },
    { name: "Shopping Complex", logo: "SC" },
    { name: "Corporate Tower", logo: "CT" }
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
                  <span className="text-xl font-bold text-primary">{client.logo}</span>
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
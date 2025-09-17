import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/917337420359?text=Hi, I'm interested in your security services.`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-[#25D366] hover:bg-[#20BD5A] text-white border-0 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:animate-pulse"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 hidden sm:inline">WhatsApp</span>
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
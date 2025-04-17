
import { Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const WatchPartyButton = () => {
  const [isPartyMode, setIsPartyMode] = useState(false);

  const togglePartyMode = () => {
    setIsPartyMode(!isPartyMode);
    if (!isPartyMode) {
      toast({
        title: "Watch Party Mode Activated! 🎉",
        description: "Imagine watching with friends! React with emojis below.",
      });
    }
  };

  return (
    <Button
      onClick={togglePartyMode}
      variant={isPartyMode ? "default" : "outline"}
      className={`${
        isPartyMode ? "bg-netflix-red" : "border-netflix-red text-netflix-red"
      } hover:bg-netflix-red hover:text-white transition-all duration-300`}
    >
      <Users className="mr-2" size={16} />
      {isPartyMode ? "Leave Party" : "Start Party"}
    </Button>
  );
};

export default WatchPartyButton;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { detectRegion } from "@/lib/region";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const region = detectRegion();
    navigate(`/${region}`, { replace: true });
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary">
      <div className="text-center text-primary-foreground animate-pulse">
        <h1 className="text-3xl font-heading font-bold mb-2">
          NRS <span className="text-accent">Fynser</span>
        </h1>
        <p className="text-sm text-primary-foreground/60">Loading...</p>
      </div>
    </div>
  );
};

export default Index;

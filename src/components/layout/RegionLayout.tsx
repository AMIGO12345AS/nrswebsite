import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Region } from "@/lib/region";
import { useEffect } from "react";
import { applySeo } from "@/lib/seo";

interface RegionLayoutProps {
  region: Region;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      filter: { duration: 0.4 },
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(4px)",
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function RegionLayout({ region }: RegionLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    applySeo(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar region={region} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            onAnimationStart={() => window.scrollTo(0, 0)}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer region={region} />
    </div>
  );
}

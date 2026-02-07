import { ReactNode } from "react";
import PrimaryNav from "../navigation/PrimaryNav";
import SiteFooter from "./SiteFooter";

interface SiteFrameProps {
  children: ReactNode;
}

const SiteFrame = ({ children }: SiteFrameProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Consistent shell keeps navigation and footer behavior uniform across pages. */}
      <PrimaryNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
};

export default SiteFrame;

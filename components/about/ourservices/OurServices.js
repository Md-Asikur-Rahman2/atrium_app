import HaveAproject from "@/components/home/HaveAproject";
import HomeFooter from "@/components/home/HomeFooter";
import Services from "@/components/home/services";
import CommonDropdown from "@/pages/CommonDropdown";
import Dropdown from "@/pages/Dropdown";
import { ArrowRightAltRounded, KeyboardBackspace } from "@mui/icons-material";
import React from "react";

const OurServices = () => {
  return (
    <div className="OurServices">
      <CommonDropdown title="Our Services" path="Our Services" />
      <div className="OurServices-container">
        <div className="OurServices-header">
          {/* <Services/> */}
        </div>
      </div>
      <HaveAproject />
      <HomeFooter />
    </div>
  );
};

export default OurServices;

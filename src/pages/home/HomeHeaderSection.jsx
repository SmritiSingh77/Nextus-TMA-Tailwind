import React from "react";
import profile from "../../assets/images/icon/profile.png";
import settings from "../../assets/images/icon/settings.png";
import bell from "../../assets/images/icon/bell.png";
import { useNavigate } from "react-router-dom";

const HomeHeaderSection = () => {
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  return (
    // Header container with items spaced between
    <div className="flex justify-between items-center mb-[10px]">
      
      {/* Profile Icon */}
      <div className="blur-sm-btn">
        <img className="w-[16px] h-[16px]" src={profile} alt="profile icon" />
      </div>

      {/* Notifications and Settings Icons */}
      <div className="flex gap-2 items-center">
        <div className="blur-sm-btn">
          <img className="w-[16px] h-[16px]" src={bell} alt="notifications icon" />
        </div>
        <div
          className="blur-sm-btn cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          <img className="w-[16px] h-[16px]" src={settings} alt="settings icon" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderSection;

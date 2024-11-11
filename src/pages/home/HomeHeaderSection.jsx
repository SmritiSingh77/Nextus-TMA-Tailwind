import React from "react";
import profile from "../../assets/images/icon/profile.png";
import settings from "../../assets/images/icon/settings.png";
import bell from "../../assets/images/icon/bell.png";
import { useNavigate } from "react-router-dom";

const HomeHeaderSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-[15px]">
      <div className="bg-opacity-20 bg-white p-2 rounded">
        <img className="w-[16px] h-[16px]" src={profile} alt="profile" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-opacity-20 bg-white p-2 rounded">
          <img className="w-[16px] h-[16px]" src={bell} alt="notifications" />
        </div>
        <div
          className="bg-opacity-20 bg-white p-2 rounded cursor-pointer"
          onClick={() => navigate("/settings")}
        >
          <img className="w-[16px] h-[16px]" src={settings} alt="settings" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderSection;

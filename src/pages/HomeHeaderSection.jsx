import profile from "../assets/images/icon/profile.png";
import settings from "../assets/images/icon/settings.png";
import bell from "../assets/images/icon/bell.png";

const HomeHeaderSection = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="bg-opacity-20 bg-white p-2 rounded">
        <img className="w-6 h-6" src={profile} alt="profile" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-opacity-20 bg-white p-2 rounded">
          <img className="w-6 h-6" src={bell} alt="notifications" />
        </div>
        <div className="bg-opacity-20 bg-white p-2 rounded">
          <img className="w-6 h-6" src={settings} alt="settings" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderSection;

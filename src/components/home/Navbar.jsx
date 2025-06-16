import React from "react";

import logo from "../../assets/logo.png";
import HomeIcon from "../../assets/homeIcon.svg";
import GroupIcon from "../../assets/groupIcon.svg";
import CalendarIcon from "../../assets/calendarIcon.svg";
import ChatIcon from "../../assets/chatBubbleIcon.svg";
import CreditCardIcon from "../../assets/creditCardIcon.svg";
import Doctor from "../../assets/doctor.png";
import SettingsIcon from "../../assets/settingsIcon.svg";
import VertIcon from "../../assets/vertIcon.svg";

const navItems = [
  { icon: HomeIcon, label: "Overview" },
  { icon: GroupIcon, label: "Patients" },
  { icon: CalendarIcon, label: "Schedule" },
  { icon: ChatIcon, label: "Message" },
  { icon: CreditCardIcon, label: "Transactions" },
];

const NavItem = ({ icon, label }) => (
  <div className="flex gap-2 items-center cursor-pointer p-2 px-3 rounded-full hover:bg-[#00F0D0] transition-colors">
    <img src={icon} alt={`${label} icon`} />
    <p>{label}</p>
  </div>
);

const Navbar = () => {
  return (
    <div className="bg-white rounded-3xl flex justify-between items-center text-sm px-8 p2-4 shadow-xs">

      <div className="cursor-pointer">
        <img src={logo} alt="Clinic Logo" className="w-48 h-14 py-1" />
      </div>


      <div className="flex gap-6">
        {navItems.map((item) => (
          <NavItem key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <img src={Doctor} alt="Doctor Avatar" className="w-9 h-9 rounded-full" />

        <div className="pr-4 border-r border-gray-200">
          <p>Dr. Jose Simmons</p>
          <span className="text-gray-500">General Practitioner</span>
        </div>

        <img src={SettingsIcon} alt="Settings" className="cursor-pointer px-1" />
        <img src={VertIcon} alt="More Options" className="cursor-pointer px-1" />
      </div>
    </div>
  );
};

export default Navbar;

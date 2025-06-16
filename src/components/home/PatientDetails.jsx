import React from "react";

import BirthIcon from "../../assets/birthIcon.svg";
import FemaleIcon from "../../assets/femaleIcon.svg";
import MaleIcon from "../../assets/maleIcon.svg";
import PhoneIcon from "../../assets/phoneIcon.svg";
import InsuranceIcon from "../../assets/insuranceIcon.svg";

const InfoItem = ({ icon, label, value, alt }) => (
  <div className="flex items-center space-x-4">
    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
      <img src={icon} alt={alt} className="w-8 h-8" loading="lazy" />
    </div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const PatientDetails = ({ patient }) => {
  if (!patient) return null;

  const GenderIcon = patient.gender === "Female" ? FemaleIcon : MaleIcon;

  return (
    <section
      aria-label={`Patient details for ${patient.name}`}
      className="bg-white rounded-3xl shadow-sm p-8 space-y-8 "
    >
      <div className="flex flex-col items-center text-center ">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <img
            src={patient.profile_picture}
            alt={`${patient.name}'s avatar`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <h2 className="text-lg font-bold text-gray-900">{patient.name}</h2>
      </div>

      <div className="space-y-6">
        <InfoItem
          icon={BirthIcon}
          label="Date Of Birth"
          value={patient.date_of_birth}
          alt="Date of Birth icon"
        />
        <InfoItem
          icon={GenderIcon}
          label="Gender"
          value={patient.gender}
          alt="Gender icon"
        />
        <InfoItem
          icon={PhoneIcon}
          label="Contact Info."
          value={patient.phone_number}
          alt="Contact phone icon"
        />
        <InfoItem
          icon={PhoneIcon}
          label="Emergency Contacts"
          value={patient.emergency_contact}
          alt="Emergency contact phone icon"
        />
        <InfoItem
          icon={InsuranceIcon}
          label="Insurance Provider"
          value={patient.insurance_type}
          alt="Insurance icon"
        />
      </div>

      <div className="flex justify-center">
        <div
          type="button"
          className="cursor-pointer py-3 px-6 bg-[#00F0D0] text-sm text-black rounded-full transition-colors duration-200 font-semibold hover:bg-[#00d5b8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00F0D0]"
          aria-label="Show all patient information"
        >
          Show All Information
        </div>
      </div>
    </section>
  );
};

export default PatientDetails;

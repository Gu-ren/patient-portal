import React from 'react';
import HorizIcon from "../../assets/horizIcon.svg";

const PatientCard = ({ patient, onSelect,selected }) => {
  return (
    <div 
      className={`flex items-center justify-between  p-4 border-b border-gray-100 cursor-pointer transition-colors duration-200 ${
        selected ? 'bg-emerald-50' : 'hover:bg-gray-50'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={patient.profile_picture} 
            alt={`${patient.name}'s avatar`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm">{patient.name}</h3>
          <p className="text-gray-500 text-xs">{patient.gender}, {patient.age}</p>
        </div>
      </div>
      <div>


      <img src={HorizIcon} alt="Options icon"  />
      </div>
    </div>
  );
};

export default PatientCard;
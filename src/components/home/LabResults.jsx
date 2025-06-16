import React from "react";
import DownloadIcon from "../../assets/downloadIcon.svg";

const LabResults = ({ patient }) => {
  if (!patient?.lab_results) return null;
  return (
    <div className="bg-white rounded-3xl shadow-xs p-6    ">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Lab Results</h2>
      <div className="space-y-2 overflow-y-scroll">
        <div className="h-[20vh]  overflow-y-scroll">
          {patient.lab_results.map((test, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 cursor-pointer text-sm hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-gray-900 font-medium">{test}</span>
              <div>
              <img src={DownloadIcon} alt="DownloadIcon Icon"  />

                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabResults;

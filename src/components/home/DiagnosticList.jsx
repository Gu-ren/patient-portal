import React from 'react';

const DiagnosticList = ({ patient }) => {
  if (!patient?.diagnostic_list?.length) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 ">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Diagnostic List</h2>
      <div className="overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 rounded-3xl">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <h3 className="text-sm font-semibold text-gray-900">Problem/Diagnosis</h3>
            </div>
            <div className="col-span-6">
              <h3 className="text-sm font-semibold text-gray-900">Description</h3>
            </div>
            <div className="col-span-3">
              <h3 className="text-sm font-semibold text-gray-900">Status</h3>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-100 h-[20vh]  overflow-y-scroll">
          {patient.diagnostic_list.map((diagnosis, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                  <p className="text-sm font-medium text-gray-900">{diagnosis.name}</p>
                </div>
                <div className="col-span-6">
                  <p className="text-sm text-gray-600">{diagnosis.description}</p>
                </div>
                <div className="col-span-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    diagnosis.status === 'Actively being treated' ? 'bg-blue-100 text-blue-800' :
                    diagnosis.status === 'Under observation' ? 'bg-yellow-100 text-yellow-800' :
                    diagnosis.status === 'Untreated' ? 'bg-red-100 text-red-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {diagnosis.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;
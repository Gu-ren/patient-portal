import React, { useState, useEffect } from "react";
import Navbar from "../components/home/Navbar";
import DiagnosisHistory from "../components/home/DiagnosisHistory";
import DiagnosticList from "../components/home/DiagnosticList";
import PatientDetails from "../components/home/PatientDetails";
import LabResults from "../components/home/LabResults";
import PatientList from "../components/home/patientList";
import { fetchPatients } from "../api/patient";
import logo from "../assets/logo.png";

const Home = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
        setFilteredPatients(data);

        const jessica = data.find((p) => p.name === "Jessica Taylor");
        setSelectedPatient(jessica || data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  if (loading)
    return (
      <div className="p-4 flex justify-center  h-screen ">
        <div className="  self-center ">
          <img
            src={logo}
            alt="Clinic Logo"
            className="self-auto animate-pulse w-94 h-36 p-6 "
          />
        </div>
      </div>
    );
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-8 grid-rows-1 gap-4 min-h-screen bg-[#f6f7f8] p-4 text-black">
      <div className="col-span-10">
        <Navbar />
      </div>
      <div className="col-span-2 row-span-4 row-start-2">
        <PatientList
          patients={filteredPatients}
          onSelectPatient={handleSelectPatient}
          selectedPatientId={selectedPatient?.phone_number}
        />
      </div>
      <div className="col-span-4 row-span-4 col-start-3 row-start-2">
        <div className="flex flex-col gap-4">
          <DiagnosisHistory patient={selectedPatient} />
          <DiagnosticList patient={selectedPatient} />
        </div>
      </div>
      <div className="col-span-4 row-span-4 col-start-7 row-start-2">
        <div className="flex flex-col gap-4">
          <PatientDetails patient={selectedPatient} />
          <LabResults patient={selectedPatient} />
        </div>
      </div>
    </div>
  );
};

export default Home;

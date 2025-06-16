
import PatientCard from "./PatientCard";
import SearchIcon from "../../assets/searchIcon.svg";


const PatientList = ({ patients,onSelectPatient,selectedPatientId }) => {
  return (
    <div className=" rounded-3xl bg-white shadow-xs  ">
        <div className="flex justify-between text-2xl font-bold p-4 pt-4">
        <p className="">Patients</p>
        <img src={SearchIcon} alt="Clinic Logo" />
        </div>
      
        <div className="divide-y divide-gray-100 max-h-[100vh]  overflow-y-scroll ">

        {patients.map(patient => (
          <PatientCard 
            key={patient.phone_number} 
            patient={patient}
            selected={patient.phone_number === selectedPatientId}
            onSelect={() => onSelectPatient(patient)}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientList;

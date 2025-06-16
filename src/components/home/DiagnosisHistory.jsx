import React from "react";
import LungsIcon from "../../assets/lungsIcon.svg";
import HeartIcon from "../../assets/heartBPM.svg";
import TempIcon from "../../assets/temperature.svg";
import ArrowUp from "../../assets/arrowUp.svg";
import ArrowDown from "../../assets/arrowDown.svg";
import ArrowRight from "../../assets/arrowRight.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getStatusIcon = (level) => {
  switch (level) {
    case "Higher than Average":
      return <img src={ArrowUp} className="w-3 h-3" alt="up" />;
    case "Lower than Average":
      return <img src={ArrowDown} className="w-3 h-3" alt="down" />;
    default:
      return <img src={ArrowRight} className="w-5 h-5" alt="right" />;
  }
};

const DiagnosisHistory = ({ patient }) => {
  if (!patient?.diagnosis_history) return null;

  const currentReading = patient.diagnosis_history[0];
  const chartData = [...patient.diagnosis_history].reverse().slice(0, 6);

  const data = {
    labels: chartData.map((d) => d.month),
    datasets: [
      {
        label: "Systolic",
        data: chartData.map((d) => d.blood_pressure.systolic.value),
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: chartData.map((d) => d.blood_pressure.diastolic.value),
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 h-[68vh]">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Diagnosis History
      </h2>

      <div className="bg-purple-50 rounded-xl p-4 mb-4 flex justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Blood Pressure
            </h3>
            <select className="px-3 py-2 text-xs">
              <option>Last 6 months</option>
            </select>
          </div>
          <div className="w-112 h-48">
            <Line options={options} data={data} />
          </div>
        </div>

        <div>
          <div className="mt-4 grid gap-4">
            <div className="border-b border-gray-300 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#e66fd2]"></div>
                <span className="text-sm text-gray-600">Systolic</span>
              </div>
              <div className="mt-1 flex flex-col gap-1">
                <span className="text-xl font-bold">
                  {currentReading.blood_pressure.systolic.value}
                </span>
                <span className="flex items-center text-gray-600">
                  {getStatusIcon(currentReading.blood_pressure.systolic.levels)}
                  <span className="ml-1 text-xs">
                    {currentReading.blood_pressure.systolic.levels}
                  </span>
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#8C6FE6]"></div>
                <span className="text-sm text-gray-600">Diastolic</span>
              </div>
              <div className="mt-1 flex flex-col gap-1">
                <span className="text-xl font-bold">
                  {currentReading.blood_pressure.diastolic.value}
                </span>
                <span className="flex items-center text-gray-600">
                  {getStatusIcon(
                    currentReading.blood_pressure.diastolic.levels
                  )}
                  <span className="ml-1 text-xs">
                    {currentReading.blood_pressure.diastolic.levels}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-xl p-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
            <img src={LungsIcon} loading="lazy" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900">
            Respiratory Rate
          </h3>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                {currentReading.respiratory_rate.value}
              </span>
              <span className="text-xs text-gray-600">bpm</span>
            </div>
            <span className="mt-1 text-xs text-gray-600">
              {currentReading.respiratory_rate.levels}
            </span>
          </div>
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
            <img src={TempIcon} loading="lazy" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900">Temperature</h3>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                {currentReading.temperature.value}
              </span>
              <span className="text-xs text-gray-600">°F</span>
            </div>
            <span className="mt-1 text-xs text-gray-600">
              {currentReading.temperature.levels}
            </span>
          </div>
        </div>

        <div className="bg-pink-50 rounded-xl p-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
            <img src={HeartIcon} loading="lazy" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900">Heart Rate</h3>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                {currentReading.heart_rate.value}
              </span>
              <span className="text-xs text-gray-600">bpm</span>
            </div>
            <span className="mt-1 text-xs text-gray-600">
              {currentReading.heart_rate.levels}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;

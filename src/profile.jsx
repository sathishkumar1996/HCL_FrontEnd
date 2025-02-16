import { useState } from 'react';
import { POSSILBE_ALERGIES } from './utils/constants';
import { useEffect } from 'react';
const Profile = () => {
  const [patientData, setPatientData] = useState([]);

  const handleAlergyToggle = (param) => {
    if (patientData.find((item) => item.id === param)) {
      setPatientData((prev) => prev.filter((item) => item.id !== param));
    } else {
      setPatientData((prev) => [
        ...prev,
        POSSILBE_ALERGIES.find((item) => item.id === param),
      ]);
    }
  };

  const handleUpdate = () => {
    console.log(patientData);
  };

  return (
    <div className="w-full h-[calc(100vh-3rem)] overflow-y-auto grid grid-cols-[300px_1fr]  max-w-[1200px] mx-auto pt-12 pb-2">
      {/* View Edit profile */}

      <div className="w-full flex flex-col items-center gap-2">
        <img
          src="dummyProfileImage.jfif"
          alt=""
          className="w-24 h-24 rounded-fulls"
        />
        <div>Username</div>
        <div>212</div>
      </div>
      <div className="pl-2 border-l-2 border-black/40 overflow-y-auto">
        <div className="fle flex-col gap-2">
          <h2 className="text-lg flex justify-between">
            <span>Personal Alergies</span>
            <button
              className="text-base hover:cursor-pointer bg-black px-3 rounded-md py-2  text-white"
              onClick={handleUpdate}
            >
              Update
            </button>
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {POSSILBE_ALERGIES.map((item) => (
              <div
                className="flex gap-1"
                key={item.id}
                onClick={() => handleAlergyToggle(item.id)}
                defaultChecked={patientData.find((i) => i.id === item.id)}
              >
                <input type="checkbox" />
                <label>{item.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

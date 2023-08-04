import React, { ChangeEvent } from "react";

interface PersonalInfoCardProps {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (number: string) => void;
  nextState: () => void;
}
const PersonalnfoCard: React.FC<PersonalInfoCardProps> = ({
  setName,
  setEmail,
  setPhone,
  nextState,
}) => {
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleNextStep = () => {
    nextState();
  };
  return (
    <div className="z-50 bg-white p-5 m-5 rounded-lg  flex flex-col">
      <div>
        <h1 className="text-MarineBlue text-xl font-bold">Personal info</h1>
        <p className="text-CoolGray">
          Please provide your name, email, address, and phone number.
        </p>
        <form>
          <div className="flex flex-col">
            <label className="text-blue">Name</label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              onChange={handleNameChange}
              className="border border-LightGray px-2 py-1 font-semibold"
            />
          </div>
          <div className="flex flex-col">
            <label>Email address</label>
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              onChange={handleEmailChange}
              className="border border-LightGray px-2 py-1 font-semibold"
            />
          </div>
          <div className="flex flex-col">
            <label>Phone number</label>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              onChange={handlePhoneChange}
              className="border border-LightGray px-2 py-1 font-semibold"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end bottom-0 right-0">
        <button
          onClick={handleNextStep}
          className="text-white py-1 px-4 bg-MarineBlue rounded-md"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonalnfoCard;

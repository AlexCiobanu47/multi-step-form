import React, { ChangeEvent, useState } from "react";

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
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const pattern: RegExp = /\w\s\w/;
    if (!pattern.test(event.target.value)) {
      setNameError("Enter a valid name");
    } else {
      setNameError("");
    }
    setName(event.target.value);
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const pattern: RegExp = /\w@\w/;
    if (!pattern.test(event.target.value)) {
      setEmailError("Enter a valid email");
    } else {
      setEmailError("");
    }
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const pattern: RegExp = /\d{10}/;
    if (!pattern.test(event.target.value)) {
      setPhoneNumberError("Enter a valid phone number");
    } else {
      setPhoneNumberError("");
    }
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
            <div className="flex justify-between">
              <label className="text-blue">Name</label>
              {nameError && <span className="text-red-500">{nameError}</span>}
            </div>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              onChange={handleNameChange}
              className={`border-2 rounded-md px-2 py-1 font-semibold 
              ${nameError ? "border-red-500" : "border-LightGray"}`}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label>Email address</label>
              {emailError && <span className="text-red-500">{emailError}</span>}
            </div>
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              onChange={handleEmailChange}
              className={`border-2 rounded-md px-2 py-1 font-semibold 
              ${emailError ? "border-red-500" : "border-LightGray"}`}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label>Phone number</label>
              {phoneNumberError && (
                <span className="text-red-500">{phoneNumberError}</span>
              )}
            </div>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              onChange={handlePhoneChange}
              className={`border-2 rounded-md px-2 py-1 font-semibold 
              ${phoneNumberError ? "border-red-500" : "border-LightGray"}`}
            />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end bottom-0 right-0 my-5">
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

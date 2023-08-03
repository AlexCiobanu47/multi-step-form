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
    <div className="bg-white p-5">
      <h1>Personal info</h1>
      <p>Please provide your name, email, address, and phone number.</p>
      <form>
        <div className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Email address</label>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Phone number</label>
          <input
            type="text"
            placeholder="e.g. +1 234 567 890"
            onChange={handlePhoneChange}
          />
        </div>
      </form>
      <div>
        <button onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default PersonalnfoCard;

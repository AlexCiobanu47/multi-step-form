import React from "react";
import { inputData } from "../types/inputData";
interface FinishCardProps {
  data: inputData;
  previousState: () => void;
  nextState: () => void;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}
const FinishCard: React.FC<FinishCardProps> = ({
  data,
  previousState,
  nextState,
  onlineService,
  largerStorage,
  customizableProfile,
}) => {
  const handlePreviousStep = () => {
    previousState();
  };
  const handleNextStep = () => {
    nextState();
  };
  return (
    <div className="z-50 bg-white p-5 m-5 rounded-lg shadow-lg flex flex-col">
      <h1 className="text-MarineBlue text-xl font-bold">Finishing up</h1>
      <p className="text-CoolGray">
        Double-check everything looks OK before confirming
      </p>
      <div>
        <div className="border-b-2 flex items-center justify-between py-4">
          <div>
            <div className="flex text-MarineBlue font-semibold">
              <div>
                {data.plan == 1 && <h2>Arcade</h2>}
                {data.plan == 2 && <h2>Advanced</h2>}
                {data.plan == 3 && <h2>Pro</h2>}
              </div>
              <div>
                {data.monthlyPlan && <span>(Monthly)</span>}
                {!data.monthlyPlan && <span>(Yearly)</span>}
              </div>
            </div>
            <button className="text-CoolGray font-semibold underline">
              Change
            </button>
          </div>
          <p>$90/yr</p>
        </div>
        <div className="flex flex-col gap-2 my-2">
          {onlineService && (
            <div className="flex items-center justify-between">
              <p className="text-CoolGray">Online service</p>
              <p className="text-MarineBlue font-medium">+$1/mo</p>
            </div>
          )}
          {largerStorage && (
            <div className="flex items-center justify-between">
              <p className="text-CoolGray">Larger storage</p>
              <p className="text-MarineBlue font-medium">+$2/mo</p>
            </div>
          )}
          {customizableProfile && (
            <div className="flex items-center justify-between">
              <p className="text-CoolGray">Customizable profile</p>
              <p className="text-MarineBlue font-medium">+$2/mo</p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-CoolGray">Total(per year)</p>
          <p className="text-PurplishBlue font-semibold">$120/yr</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handlePreviousStep}
          className="text-white py-1 px-4 bg-MarineBlue rounded-md"
        >
          Go back
        </button>
        <button
          onClick={handleNextStep}
          className="text-white py-1 px-4 bg-MarineBlue rounded-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FinishCard;

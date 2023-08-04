import React from "react";
import advancedIcon from "../assets/images/icon-advanced.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import proIcon from "../assets/images/icon-pro.svg";
interface PlanCardProps {
  setOption: (optionNumber: number) => void;
  previousState: () => void;
  nextState: () => void;
  setMonthly: () => void;
  isMonthly: boolean;
}
const PlanCard: React.FC<PlanCardProps> = ({
  setOption,
  nextState,
  previousState,
  setMonthly,
  isMonthly,
}) => {
  const handleOption1Click = () => {
    setOption(1);
  };
  const handleOption2Click = () => {
    setOption(2);
  };
  const handleOption3Click = () => {
    setOption(3);
  };
  const handlePlanPeriodChange = () => {
    setMonthly();
  };
  const handlePreviousStep = () => {
    previousState();
  };
  const handleNextStep = () => {
    nextState();
  };
  const arcadePrice = 9;
  const advancedPrice = 12;
  const proPrice = 15;
  return (
    <div className="z-50 bg-white p-5 m-5 rounded-lg flex flex-col">
      <h1 className="text-MarineBlue text-xl font-bold">Select your plan</h1>
      <p className="text-CoolGray">
        You have the option of monthly or yearly billing.
      </p>
      <form className="my-5">
        <div className="flex flex-col gap-3">
          <div
            className={`border rounded-lg cursor-pointer flex gap-5 p-2 `}
            onClick={handleOption1Click}
          >
            <img src={arcadeIcon} alt="" />
            <div>
              <h2 className="text-MarineBlue font-semibold">Arcade</h2>
              <h3 className="text-CoolGray">
                $
                {isMonthly ? (
                  <span>{arcadePrice}/mo</span>
                ) : (
                  <span>{arcadePrice * 10}/yr</span>
                )}
              </h3>
            </div>
          </div>
          <div
            className={`border rounded-lg cursor-pointer flex gap-5 p-2 `}
            onClick={handleOption2Click}
          >
            <img src={advancedIcon} alt="" />
            <div>
              <h2 className="text-MarineBlue font-semibold">Advanced</h2>
              <h3 className="text-CoolGray">
                $
                {isMonthly ? (
                  <span>{advancedPrice}/mo</span>
                ) : (
                  <span>{advancedPrice * 10}/yr</span>
                )}
              </h3>
            </div>
          </div>
          <div
            className={`border rounded-lg cursor-pointer flex gap-5 p-2 `}
            onClick={handleOption3Click}
          >
            <img src={proIcon} alt="" />
            <div>
              <h2 className="text-MarineBlue font-semibold">Pro</h2>
              <h3 className="text-CoolGray">
                $
                {isMonthly ? (
                  <span>{proPrice}/mo</span>
                ) : (
                  <span>{proPrice * 10}/yr</span>
                )}
              </h3>
            </div>
          </div>
        </div>
        <div className="my-5">
          <span>Monthly</span>
          <input type="checkbox" onChange={handlePlanPeriodChange} />
          <span>Yearly</span>
        </div>
      </form>
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
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

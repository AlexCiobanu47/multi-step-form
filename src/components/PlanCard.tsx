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
  plan: number;
}
const PlanCard: React.FC<PlanCardProps> = ({
  setOption,
  nextState,
  previousState,
  setMonthly,
  isMonthly,
  plan,
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
        <div className="flex flex-col sm:flex-row gap-3">
          <div
            className={`border-2 ${
              plan === 1 ? "border-MarineBlue bg-LightGray" : "border-CoolGray"
            } rounded-lg cursor-pointer flex sm:flex-col sm:flex-1 gap-5 p-2 `}
            onClick={handleOption1Click}
          >
            <img src={arcadeIcon} alt="" className="sm:w-10 sm:h-10" />
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
              <p
                className={`${
                  isMonthly ? "text-transparent" : "text-MarineBlue"
                }`}
              >
                2 months free
              </p>
            </div>
          </div>
          <div
            className={`border-2 ${
              plan === 2 ? "border-MarineBlue bg-LightGray" : "border-CoolGray"
            } rounded-lg cursor-pointer flex sm:flex-col sm:flex-1 gap-5 p-2 `}
            onClick={handleOption2Click}
          >
            <img src={advancedIcon} alt="" className="sm:w-10 sm:h-10" />
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
              <p
                className={`${
                  isMonthly ? "text-transparent" : "text-MarineBlue"
                }`}
              >
                2 months free
              </p>
            </div>
          </div>
          <div
            className={`border-2 ${
              plan === 3 ? "border-MarineBlue bg-LightGray" : "border-CoolGray"
            } rounded-lg cursor-pointer flex sm:flex-col sm:flex-1 gap-5 p-2 `}
            onClick={handleOption3Click}
          >
            <img src={proIcon} alt="" className="sm:w-10 sm:h-10" />
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
              <p
                className={`${
                  isMonthly ? "text-transparent" : "text-MarineBlue"
                }`}
              >
                2 months free
              </p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <span>Monthly</span>
          <input
            onChange={handlePlanPeriodChange}
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
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

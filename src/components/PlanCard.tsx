import React from "react";
interface PlanCardProps {
  setOption: (optionNumber: number) => void;
  setPeriod: () => void;
}
const PlanCard: React.FC<PlanCardProps> = ({ setOption, setPeriod }) => {
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
    setPeriod();
  };
  return (
    <div className="bg-white p-5">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <form>
        <div>
          <div className="border cursor-pointer" onClick={handleOption1Click}>
            <img src="" alt="" />
            <div>
              <h2>Arcade</h2>
              <h3>$9/mo</h3>
            </div>
          </div>
          <div className="border cursor-pointer" onClick={handleOption2Click}>
            <img src="" alt="" />
            <div>
              <h2>Advanced</h2>
              <h3>$12/mo</h3>
            </div>
          </div>
          <div className="border cursor-pointer" onClick={handleOption3Click}>
            <img src="" alt="" />
            <div>
              <h2>Pro</h2>
              <h3>$15/mo</h3>
            </div>
          </div>
        </div>
        <span>Monthly</span>
        <input type="checkbox" onChange={handlePlanPeriodChange} />
        <span>Yearly</span>
      </form>
      <div>
        <button>Go back</button>
        <button>Next Step</button>
      </div>
    </div>
  );
};

export default PlanCard;

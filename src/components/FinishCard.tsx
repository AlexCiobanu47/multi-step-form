import React from "react";
import { inputData } from "../types/inputData";
interface FinishCardProps {
  data: inputData;
  previousState: () => void;
  nextState: () => void;
}
const FinishCard: React.FC<FinishCardProps> = ({
  data,
  previousState,
  nextState,
}) => {
  const handlePreviousStep = () => {
    previousState();
  };
  const handleNextStep = () => {
    nextState();
  };
  return (
    <div className="bg-white p-5">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>
      <div>
        <div className="border-b-2">
          <div>
            <h2>
              {data.plan}
              {data.monthlyPlan && <span>(Monthly)</span>}
              {!data.monthlyPlan && <span>(Yearly)</span>}
            </h2>
            <button>Change</button>
          </div>
          <p>$90/yr</p>
        </div>
        <div>
          TO DO: update inputData.addon to include and object with addonName and
          price, instead of a boolean
        </div>
        <div>
          <p>Total(per year)</p>
          <p>$120/yr</p>
        </div>
      </div>
      <div>
        <button onClick={handlePreviousStep}>Go back</button>
        <button onClick={handleNextStep}>Confirm</button>
      </div>
    </div>
  );
};

export default FinishCard;

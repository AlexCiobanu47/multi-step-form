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
          {onlineService && <p>online service</p>}
          {largerStorage && <p>larger storage</p>}
          {customizableProfile && <p>customizable profile</p>}
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

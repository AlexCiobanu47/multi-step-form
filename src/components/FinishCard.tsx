import React, { useEffect, useState } from "react";
interface FinishCardProps {
  previousState: () => void;
  nextState: () => void;
  plan: number;
  isMonthly: boolean;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}
const FinishCard: React.FC<FinishCardProps> = ({
  previousState,
  nextState,
  plan,
  isMonthly,
  onlineService,
  largerStorage,
  customizableProfile,
}) => {
  const arcadePrice = 9;
  const advancedPrice = 12;
  const proPrice = 15;
  const [total, setTotal] = useState(0);
  const [planPrice, setPlanPrice] = useState(arcadePrice);
  const handlePreviousStep = () => {
    previousState();
  };
  const handleNextStep = () => {
    nextState();
  };
  const calculatePlanPrice = () => {
    switch (plan) {
      case 1:
        setPlanPrice(arcadePrice);
        break;
      case 2:
        setPlanPrice(advancedPrice);
        break;
      case 3:
        setPlanPrice(proPrice);
        break;

      default:
        break;
    }
  };
  const calculateTotal = () => {
    calculatePlanPrice();
    setTotal(planPrice);
    if (onlineService) setTotal((prev) => prev + 1);
    if (largerStorage) setTotal((prev) => prev + 2);
    if (customizableProfile) setTotal((prev) => prev + 2);
    if (!isMonthly) setTotal((prev) => prev * 10);
  };
  useEffect(() => {
    calculateTotal();
  }, []);
  return (
    <div className="z-50 bg-white p-10 m-5 rounded-lg flex flex-col">
      <h1 className="text-MarineBlue text-xl font-bold">Finishing up</h1>
      <p className="text-CoolGray">
        Double-check everything looks OK before confirming
      </p>
      <div>
        <div className="border-b-2 flex items-center justify-between py-4">
          <div>
            <div className="flex text-MarineBlue font-semibold">
              <div>
                {plan == 1 && <h2>Arcade</h2>}
                {plan == 2 && <h2>Advanced</h2>}
                {plan == 3 && <h2>Pro</h2>}
              </div>
              <div>
                {isMonthly ? <span>(Monthly)</span> : <span>(Yearly)</span>}
              </div>
            </div>
            <button className="text-CoolGray font-semibold underline">
              Change
            </button>
          </div>
          <p>${isMonthly ? `${planPrice}/mo` : `${planPrice * 10}/yr`}</p>
        </div>
        <div className="flex flex-col gap-2 my-2">
          {onlineService && (
            <div className="flex items-center justify-between">
              <p className="text-CoolGray">Online service</p>
              <p className="text-MarineBlue font-medium">
                +${isMonthly ? "1/mo" : "10/yr"}
              </p>
            </div>
          )}
          {largerStorage && (
            <div className="flex items-center justify-between">
              <p className="text-CoolGray">Larger storage</p>
              <p className="text-MarineBlue font-medium">
                +${isMonthly ? "2/mo" : "20/yr"}
              </p>
            </div>
          )}
          {customizableProfile && (
            <div className="flex items-center justify-between">
              <p className="text-CoolGray">Customizable profile</p>
              <p className="text-MarineBlue font-medium">
                +${isMonthly ? "2/mo" : "20/yr"}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-CoolGray">
            Total(per {isMonthly ? "month" : "year"})
          </p>
          <p className="text-PurplishBlue font-semibold">
            {isMonthly ? <span>${total}/mo</span> : <span>${total}/yr</span>}
          </p>
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

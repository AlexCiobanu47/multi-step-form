import React from "react";
interface AddonsCardProps {
  previousState: () => void;
  nextState: () => void;
  changeOnlineService: () => void;
  changeLargerStorage: () => void;
  changeCustomizableProfile: () => void;
  isMonthly: boolean;
}
const AddonsCard: React.FC<AddonsCardProps> = ({
  previousState,
  nextState,
  changeOnlineService,
  changeLargerStorage,
  changeCustomizableProfile,
  isMonthly,
}) => {
  const handleClick1 = () => {
    changeOnlineService();
  };
  const handleClick2 = () => {
    changeLargerStorage();
  };
  const handleClick3 = () => {
    changeCustomizableProfile();
  };
  const handlePreviousStep = () => {
    previousState();
  };
  const handleNextStep = () => {
    nextState();
  };
  const option1Price = 1;
  const option2Price = 2;
  const option3Price = 2;
  return (
    <div className="z-50 bg-white p-5 m-5 flex flex-col">
      <h1 className="text-MarineBlue text-xl font-bold">Pick add-ons</h1>
      <p className="text-CoolGray">
        Add-ons help enhance your gaming experience.
      </p>
      <form>
        <div>
          <div className="flex flex-col gap-5 my-5">
            <div
              className="flex items-center gap- justify-around border cursor-pointer rounded-lg"
              onClick={handleClick1}
            >
              <input type="checkbox" />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-MarineBlue font-semibold">
                  Online service
                </h2>
                <h3 className="text-CoolGray">Access to multiplayer games</h3>
              </div>
              <p className="text-PurplishBlue">
                +$
                {isMonthly ? (
                  <span>{option1Price}/mo</span>
                ) : (
                  <span>{option1Price * 10}/yr</span>
                )}
              </p>
            </div>
            <div
              className="flex items-center gap- justify-around border cursor-pointer rounded-lg"
              onClick={handleClick2}
            >
              <input type="checkbox" />
              <div className="flex flex-col items-center justify-start">
                <h2 className="text-MarineBlue font-semibold">
                  Larger storage
                </h2>
                <h3 className="text-CoolGray">Extra 1TB of cloud save</h3>
              </div>
              <p className="text-PurplishBlue">
                +$
                {isMonthly ? (
                  <span>{option2Price}/mo</span>
                ) : (
                  <span>{option2Price * 10}/yr</span>
                )}
              </p>
            </div>
            <div
              className="flex items-center gap- justify-around border cursor-pointer rounded-lg"
              onClick={handleClick3}
            >
              <input type="checkbox" />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-MarineBlue font-semibold">
                  Customizable profile
                </h2>
                <h3 className="text-CoolGray">Custom theme on your profile</h3>
              </div>
              <p className="text-PurplishBlue">
                +$
                {isMonthly ? (
                  <span>{option3Price}/mo</span>
                ) : (
                  <span>{option3Price * 10}/yr</span>
                )}
              </p>
            </div>
          </div>
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

export default AddonsCard;

import React from "react";
interface AddonsCardProps {
  previousState: () => void;
  nextState: () => void;
  changeOnlineService: () => void;
  changeLargerStorage: () => void;
  changeCustomizableProfile: () => void;
}
const AddonsCard: React.FC<AddonsCardProps> = ({
  previousState,
  nextState,
  changeOnlineService,
  changeLargerStorage,
  changeCustomizableProfile,
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
  return (
    <div className="bg-white p-5">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <form>
        <div>
          <div>
            <div className="flex items-center border" onClick={handleClick1}>
              <input type="checkbox" />
              <div className="flex flex-col items-center justify-center">
                <h2>online service</h2>
                <h3>Access to multiplayer games</h3>
              </div>
              <p>+$1/mo</p>
            </div>
            <div className="flex items-center border" onClick={handleClick2}>
              <input type="checkbox" />
              <div className="flex flex-col items-center justify-start">
                <h2>Larger storage</h2>
                <h3>Extra 1TB of cloud save</h3>
              </div>
              <p>+$2/mo</p>
            </div>
            <div className="flex items-center border" onClick={handleClick3}>
              <input type="checkbox" />
              <div className="flex flex-col items-center justify-center">
                <h2>Customizable profile</h2>
                <h3>Custom theme on your profile</h3>
              </div>
              <p>+$2/mo</p>
            </div>
          </div>
        </div>
      </form>
      <div>
        <button onClick={handlePreviousStep}>Go back</button>
        <button onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default AddonsCard;

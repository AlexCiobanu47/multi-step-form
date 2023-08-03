import React from "react";
interface AddonsCardProps {
  setAddons: (addonNumber: number) => void;
}
const AddonsCard: React.FC<AddonsCardProps> = ({ setAddons }) => {
  const handleClick1 = () => {
    setAddons(0);
  };
  const handleClick2 = () => {
    setAddons(1);
  };
  const handleClick3 = () => {
    setAddons(2);
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
        <button>Go back</button>
        <button>Next Step</button>
      </div>
    </div>
  );
};

export default AddonsCard;

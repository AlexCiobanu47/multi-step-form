import React from "react";

const PlanCard = () => {
  return (
    <div className="bg-white p-5">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <form>
        <div>
          <div className="border">
            <img src="" alt="" />
            <div>
              <h2>Arcade</h2>
              <h3>$9/mo</h3>
            </div>
          </div>
          <div className="border">
            <img src="" alt="" />
            <div>
              <h2>Advanced</h2>
              <h3>$12/mo</h3>
            </div>
          </div>
          <div className="border">
            <img src="" alt="" />
            <div>
              <h2>Pro</h2>
              <h3>$15/mo</h3>
            </div>
          </div>
        </div>
        <span>Monthly</span>
        <input type="checkbox" />
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

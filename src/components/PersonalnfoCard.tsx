import React from "react";

const PersonalnfoCard = () => {
  return (
    <div className="bg-white p-5">
      <h1>Personal info</h1>
      <p>Please provide your name, email, address, and phone number.</p>
      <form>
        <div className="flex flex-col">
          <label>Name</label>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>
        <div>
          <label>Email address</label>
          <input type="text" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div>
          <label>Phone number</label>
          <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>
      </form>
      <div>
        <button>Next Step</button>
      </div>
    </div>
  );
};

export default PersonalnfoCard;

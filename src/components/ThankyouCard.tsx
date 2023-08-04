import React from "react";
import successIcon from "../assets/images/icon-thank-you.svg";
const ThankyouCard = () => {
  return (
    <div className="z-50 bg-white p-5 m-5 rounded-lg flex flex-col items-center justify-center">
      <img src={successIcon} alt="" className="w-10 h-10 mt-10 mb-3" />
      <h1 className="text-MarineBlue font-bold text-xl mb-2">Thank you!</h1>
      <p className="text-CoolGray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankyouCard;

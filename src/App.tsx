import { useState } from "react";
import "./App.css";
import desktopSidebar from "./assets/images/bg-sidebar-desktop.svg";
import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg";
import AddonsCard from "./components/AddonsCard";
import FinishCard from "./components/FinishCard";
import PersonalnfoCard from "./components/PersonalnfoCard";
import PlanCard from "./components/PlanCard";
import ThankyouCard from "./components/ThankyouCard";
function App() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [currentState, setCurrentState] = useState(1);
  const [plan, setPlan] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargetStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);
  const setName = (name: string) => {
    const currentData = inputData;
    currentData.name = name;
    setInputData(currentData);
  };
  const setEmail = (email: string) => {
    const currentData = inputData;
    currentData.email = email;
    setInputData(currentData);
  };
  const setPhone = (phoneNumber: string) => {
    const currentData = inputData;
    currentData.phoneNumber = phoneNumber;
    setInputData(currentData);
  };
  const setOption = (optionNumber: number) => {
    setPlan(optionNumber);
  };
  const setMonthly = () => {
    setIsMonthly(!isMonthly);
  };

  const incrementState = () => {
    setCurrentState((prev) => prev + 1);
  };
  const decrementState = () => {
    setCurrentState((prev) => prev - 1);
  };
  const changeOnlineService = () => {
    setOnlineService(!onlineService);
  };
  const changeLargerStorage = () => {
    setLargetStorage(!largerStorage);
  };
  const changeCustomizableProfile = () => {
    setCustomizableProfile(!customizableProfile);
  };
  return (
    <div className=" flex flex-col max-w-3xl bg-LightGray items-start justify-start sm:flex-row sm:p-5 shadow-lg">
      <img src={mobileSidebar} alt="" className="w-full sm:hidden" />
      <img src={desktopSidebar} alt="" className="hidden sm:inline-block" />
      <div className="-mt-32 sm:-mt-0 mb-24 sm:mb-0 sm:-ml-52 sm:mr-14 self-center">
        <ul className="flex sm:flex-col gap-5 w-40">
          <li className="flex items-center justify-between gap-5 w-30 h-30">
            <div
              className={`w-10 h-10 rounded-full border border-white flex items-center justify-center ${
                currentState == 1
                  ? "bg-LightBlue text-MarineBlue border-none"
                  : "bg-transparent text-white "
              }`}
            >
              <p className="font-bold">1</p>
            </div>
            <div className="hidden sm:flex sm:flex-col">
              <p className="text-xs text-LightGray font-semibold">STEP 1</p>
              <p className="text-xs text-white font-bold">YOUR INFO</p>
            </div>
          </li>
          <li className="flex items-center justify-between gap-5 w-30 h-30">
            <div
              className={`w-10 h-10 rounded-full border border-white flex items-center justify-center ${
                currentState == 2
                  ? "bg-LightBlue text-MarineBlue border-none"
                  : "bg-transparent text-white "
              }`}
            >
              <p className="font-bold">2</p>
            </div>
            <div className="hidden sm:flex sm:flex-col">
              <p className="text-xs text-LightGray font-semibold">STEP 2</p>
              <p className="text-xs text-white font-bold">SELECT PLAN</p>
            </div>
          </li>
          <li className="flex items-center justify-between gap-5 w-30 h-30">
            <div
              className={`w-10 h-10 rounded-full border border-white flex items-center justify-center ${
                currentState == 3
                  ? "bg-LightBlue text-MarineBlue border-none"
                  : "bg-transparent text-white "
              }`}
            >
              <p className="font-bold">3</p>
            </div>
            <div className="hidden sm:flex sm:flex-col">
              <p className="text-xs text-LightGray font-semibold">STEP 3</p>
              <p className="text-xs text-white font-bold">ADD-ONS</p>
            </div>
          </li>
          <li className="flex items-center justify-between gap-5 w-30 h-30">
            <div
              className={`w-10 h-10 rounded-full border border-white flex items-center justify-center ${
                currentState >= 4
                  ? "bg-LightBlue text-MarineBlue border-none"
                  : "bg-transparent text-white "
              }`}
            >
              <p className="font-bold">4</p>
            </div>
            <div className="hidden sm:flex sm:flex-col">
              <p className="text-xs text-LightGray font-semibold">STEP 4</p>
              <p className="text-xs text-white font-bold">SUMMARY</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="-mt-20 sm:-mt-0 ">
        {currentState == 1 && (
          <PersonalnfoCard
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            nextState={incrementState}
          />
        )}
        {currentState == 2 && (
          <PlanCard
            setOption={setOption}
            previousState={decrementState}
            nextState={incrementState}
            setMonthly={setMonthly}
            isMonthly={isMonthly}
            plan={plan}
          />
        )}
        {currentState == 3 && (
          <AddonsCard
            previousState={decrementState}
            nextState={incrementState}
            changeOnlineService={changeOnlineService}
            changeLargerStorage={changeLargerStorage}
            changeCustomizableProfile={changeCustomizableProfile}
            isMonthly={isMonthly}
            onlineService={onlineService}
            largerStorage={largerStorage}
            customizableProfile={customizableProfile}
          />
        )}
        {currentState == 4 && (
          <FinishCard
            previousState={decrementState}
            nextState={incrementState}
            plan={plan}
            isMonthly={isMonthly}
            onlineService={onlineService}
            largerStorage={largerStorage}
            customizableProfile={customizableProfile}
          />
        )}
        {currentState == 5 && <ThankyouCard />}
      </div>
    </div>
  );
}

export default App;

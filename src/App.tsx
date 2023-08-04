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
    console.log(inputData);
  };
  const setEmail = (email: string) => {
    const currentData = inputData;
    currentData.email = email;
    setInputData(currentData);
    console.log(inputData);
  };
  const setPhone = (phoneNumber: string) => {
    const currentData = inputData;
    currentData.phoneNumber = phoneNumber;
    setInputData(currentData);
    console.log(inputData);
  };
  const setOption = (optionNumber: number) => {
    setPlan(optionNumber);
  };
  const setMonthly = () => {
    setIsMonthly(!isMonthly);
  };

  const incrementState = () => {
    setCurrentState(currentState + 1);
  };
  const decrementState = () => {
    setCurrentState(currentState - 1);
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
    <div className=" flex flex-col max-w-3xl bg-white items-center justify-center sm:flex-row sm:p-5 shadow-lg">
      <img src={mobileSidebar} alt="" className="w-full sm:hidden" />
      <img src={desktopSidebar} alt="" className="hidden sm:inline-block" />
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

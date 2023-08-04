import { useState } from "react";
import AddonsCard from "./components/AddonsCard";
import FinishCard from "./components/FinishCard";
import PersonalnfoCard from "./components/PersonalnfoCard";
import PlanCard from "./components/PlanCard";
function App() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    plan: 0,
    monthlyPlan: true,
  });
  const [currentState, setCurrentState] = useState(1);
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
    const currentData = inputData;
    currentData.plan = optionNumber;
    setInputData(currentData);
    console.log(inputData);
  };
  const setPlanPeriod = () => {
    const currentData = inputData;
    currentData.monthlyPlan = !currentData.monthlyPlan;
    setInputData(currentData);
    console.log(inputData);
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
    <div>
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
          setPeriod={setPlanPeriod}
          previousState={decrementState}
          nextState={incrementState}
        />
      )}
      {currentState == 3 && (
        <AddonsCard
          previousState={decrementState}
          nextState={incrementState}
          changeOnlineService={changeOnlineService}
          changeLargerStorage={changeLargerStorage}
          changeCustomizableProfile={changeCustomizableProfile}
        />
      )}
      {currentState == 4 && (
        <FinishCard
          data={inputData}
          previousState={decrementState}
          nextState={incrementState}
          onlineService={onlineService}
          largerStorage={largerStorage}
          customizableProfile={customizableProfile}
        />
      )}
    </div>
  );
}

export default App;

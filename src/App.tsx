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
    addOns: [false, false, false],
  });
  const [currentState, setCurrentState] = useState(1);
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
  const setAddon = (addonNumber: number) => {
    const currentData = inputData;
    const currentAddons = inputData.addOns;
    switch (addonNumber) {
      case 0:
        currentAddons[0] = !currentAddons[addonNumber];
        break;
      case 1:
        currentAddons[1] = !currentAddons[addonNumber];
        break;
      case 2:
        currentAddons[2] = !currentAddons[addonNumber];
        break;
      default:
        break;
    }
    currentData.addOns = currentAddons;
    setInputData(currentData);
    console.log(inputData);
  };
  const incrementState = () => {
    setCurrentState(currentState + 1);
  };
  const decrementState = () => {
    setCurrentState(currentState - 1);
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
          setAddons={setAddon}
          previousState={decrementState}
          nextState={incrementState}
        />
      )}
      {currentState == 4 && (
        <FinishCard
          data={inputData}
          previousState={decrementState}
          nextState={incrementState}
        />
      )}
    </div>
  );
}

export default App;

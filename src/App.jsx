import { useState } from "react";
import CheckboxesCard from "./components/CheckboxesCard";
import OutputBox from "./components/OutputBox";
import { data } from './data.jsx'

function App() {
  const licenses = [
    "Discover",
    "Engage: Digital",
    "Engage: Direct",
    "Engage: Email",
    "Engage: Email Testing",
    "Plan",
    "Engage: Optimize",
  ];

  let roles = [];
  for (let i = 0; i < data.length; i++) {
    roles.push(data[i][0].role);
  }
  
  const [roleCheckedState, setRoleCheckedState] = useState(
    new Array(roles.length).fill(false)
  );

  const addRolesHandler = (position) => {
    const updatedCheckedState = roleCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    setRoleCheckedState(updatedCheckedState);
  };

  const [licensesCheckedState, setLicensesCheckedState] = useState(
    new Array(roles.length).fill(false)
  );

  const addLicensesHandler = (position) => {
    const updatedCheckedState = licensesCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    setLicensesCheckedState(updatedCheckedState);
  };

  return (
    <>
      <h1>Roles and Capabilities Search Tool</h1>
      <div className="control-bar">
        <input type="button" className="control" value="Show Table"></input>
        <input
          type="button"
          className="control"
          value="Copy"
          onClick={() => {
            navigator.clipboard.writeText(document.getElementById("text-output").innerHTML);
          }}
        ></input>
        <input type="text" className="control" value="Filter"></input>
      </div>
      <div className="flexbox-container">
        <CheckboxesCard
          id="licenses"
          cardName="Licenses"
          data={licenses}
          onCheckBox={addLicensesHandler}
        ></CheckboxesCard>
        <CheckboxesCard
          id="roles"
          cardName="Roles"
          data={roles}
          onCheckBox={addRolesHandler}
          selectedLicenses={licensesCheckedState}
        ></CheckboxesCard>
        <OutputBox selectedRoles={roleCheckedState}></OutputBox>
      </div>
    </>
  );
}

export default App;

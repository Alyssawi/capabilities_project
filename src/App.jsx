import { useState } from "react";
import RolesFilter from "./components/RolesFilter";
import LicensesFilter from "./components/LicensesFilter";
import OutputBox from "./components/OutputBox";
import CheckboxesCard from "./components/CheckboxesCard";
import { data } from "./data.jsx";

function App() {
  // DATA PARSING --------------------------------------------------------------
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

  //----------------------------------------------------------------------------

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
    new Array(licenses.length).fill(false)
  );

  const addLicensesHandler = (position) => {
    const updatedCheckedState = licensesCheckedState.map((item, index) =>
      index === position ? !item : item
    );

    setLicensesCheckedState(updatedCheckedState);
  };

  const [outputFormat, setOutputFormat] = useState(1);

  return (
    <>
      <h2>Roles and Capabilities Search Tool</h2>
      <div className="control-bar">
        <input
          type="button"
          className="control"
          value="Copy"
          onClick={() => {
            navigator.clipboard.writeText(
              document.getElementById("text-output").innerHTML
            );
          }}
        ></input>
        <input
          type="button"
          className="control"
          value="Clear"
          onClick={() => {
            setRoleCheckedState(new Array(roles.length).fill(false));
            setLicensesCheckedState(new Array(licenses.length).fill(false));
          }}
        ></input>
        <div>
          {outputFormat == 0 && (
            <input
              type="button"
              className="control toggle"
              value="Show Table"
              onClick={() => setOutputFormat(1)}
            ></input>
          )}
          {outputFormat == 1 && (
            <input
              type="button"
              className="control toggle"
              value="Show JSON"
              onClick={() => setOutputFormat(0)}
            ></input>
          )}
        </div>
      </div>
      <div className="flexbox-container">
        <CheckboxesCard className="licenses">
          <LicensesFilter
            data={licenses}
            onCheckBox={addLicensesHandler}
            checkedState={licensesCheckedState}
          ></LicensesFilter>
        </CheckboxesCard>
        <CheckboxesCard className="roles">
          <RolesFilter
            data={roles}
            onCheckBox={addRolesHandler}
            licenses={licenses}
            selectedLicenses={licensesCheckedState}
            checkedState={roleCheckedState}
            setCheckedState={setRoleCheckedState}
          ></RolesFilter>
        </CheckboxesCard>
        <OutputBox selectedRoles={roleCheckedState} outputFormat={outputFormat}></OutputBox>
      </div>
    </>
  );
}

export default App;

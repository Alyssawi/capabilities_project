import { useState } from 'react'
import CheckboxesCard from './components/CheckboxesCard'
import OutputBox from "./components/OutputBox"
import FormatOutput from './FormatOutput'

function App() {
  const licenses = ["Discover", "Engage: Digital", "Engage: Direct", 
                    "Engage: Email", "Engage: Email Testing", "Plan", 
                    "Engage: Optimize"]

  const roles = ['Super admin (assigned in App Central only)', 'Support Viewer', 'Configuration Admin', 'Discover Admin', 'Engage Super User', 'Insights Viewer', 'Reports Viewer', 'Asset Designer', 'Asset Manager', 'Asset Viewer', 'Engage Viewer', 'Email Designer', 'Web Designer', 'Mobile Designer', 'Direct Marketing Designer', 'External System Task Designer', '**Publisher', 'Creative Designer', 'Spot Designer', 'Event Designer', '**Engage Direct Admin (formerly Export File Designer)', 'Activity Designer', 'Segment Designer', 'Input Data Designer', 'Scenarios Designer', 'Plan Super User', 'Plan Viewer', 'Workflow Manager', 'Workflow Contributor', 'Plan Financials Creator', 'Plan Planning Creator', 'Plan Financials Viewer', 'Planning Viewer', 'Plan API User', '**Engage Financials Creator', '**Engage Planning Creator', '**Engage Financials and Planning Viewer', '**Approvals Creator', '**Approver', 'Lock Manager', '**Diagnostics Admin', 'Commitment Manager', 'Commitment Viewer', 'Invoice Viewer', 'Invoice Manager', 'JavaScript Spot Admin', 'JavaScript Spot User', '**Permissions Manager', '**Alert Notification Manager', 'Audience Source Designer', 'Audience Designer', 'Audience Viewer', 'Audience Data Viewer', 'Advertising Task Designer', 'Custom Task Designer']
  
  const [roleCheckedState, setRoleCheckedState] = useState(
    new Array(roles.length).fill(false)
  );

  const addRolesHandler = (position) => { // add role parameter 
    const updatedCheckedState = roleCheckedState.map((item, index) => 
        index === position ? !item : item 
    );

    setRoleCheckedState(updatedCheckedState);

    console.log("In App.jsx");
    console.log("Roles");
    console.log(roleCheckedState.toString())
    // console.log() add log for role parameter?
  }

  // do these have to be two different handlers?
  const addLicensesHandler = (roleCheckedState) => {
    console.log("In App.jsx");
    console.log("Licenses");
  }

  return (
    <>
      <h1>Roles and Capabilities Search Tool</h1>
      <div className="control-bar">
        <input type="button" className="control" value="Show Table"></input>
        <input type="button" className="control" value="Copy"></input>
        <input type="text" className="control" value="Filter"></input>
      </div>
      <div className="flexbox-container">
        <CheckboxesCard cardName="Licenses" data={licenses} onCheckBox = {addLicensesHandler}></CheckboxesCard>
        <CheckboxesCard cardName="Roles" data={roles} onCheckBox = {addRolesHandler}></CheckboxesCard>
        <OutputBox selectedRoles={roleCheckedState}></OutputBox>
      </div>
    </>
  )
}

export default App

import { useState, useEffect } from "react";

import RolesToCaps from "./components/RolesToCapabilities/RolesToCaps";
import CapsToRoles from "./components/CapabilitiesToRoles/CapsToRoles";

function App() {
  // State for whether the page is showing Roles to Capabilities or Capabilities
  // to Roles
  const [toggleTool, setToggleTool] = useState(0);

  // Restore which page was toggled after a refresh 
  useEffect(() => {
    let option = localStorage.getItem("toggleOption");
    setToggleTool(option);
    if (option == 0) {
      document.getElementById("RTCButton").style.backgroundColor = "#13478c";
      document.getElementById("CTRButton").style.backgroundColor = "#0379ce";
    } else {
      document.getElementById("RTCButton").style.backgroundColor = "#0379ce";
      document.getElementById("CTRButton").style.backgroundColor = "#13478c";
    }
  }, []);

  const toggleHandler = (option) => {
    localStorage.setItem( "toggleOption", option );
    setToggleTool(option);
  }

  return (
    <>
      <div className="navBar">
        <p className="navTitle">Roles and Capabilities Tool</p>
        <input
          type="button"
          className="navButton"
          id="RTCButton"
          value="Roles to Capabilities"
          onClick={() => {
            toggleHandler(0)
            document.getElementById("RTCButton").style.backgroundColor = "#13478c";
            document.getElementById("CTRButton").style.backgroundColor = "#0379ce";
          }}
        ></input>
        <input
          type="button"
          className="navButton"
          id="CTRButton"
          value="Capabilities to Roles"
          onClick={() => {
            toggleHandler(1)
            document.getElementById("RTCButton").style.backgroundColor = "#0379ce";
            document.getElementById("CTRButton").style.backgroundColor = "#13478c";
          }}
        ></input>
      </div>
      {(toggleTool == 0) &&
        <RolesToCaps></RolesToCaps>
      }
      {(toggleTool == 1) &&
        <CapsToRoles></CapsToRoles>
      }
    </>
  );
}

export default App;
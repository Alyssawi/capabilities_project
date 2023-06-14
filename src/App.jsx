import RolesToCaps from "./components/RolesToCapabilities/RolesToCaps";
import CapsToRoles from "./components/CapabilitiesToRoles/CapsToRoles";
import { useState } from "react";

function App() {
  const [toggleTool, setToggleTool] = useState(0);

  return (
    <>
      <div className="navBar">
        <p className="navTitle">Roles and Capabilities Tool</p>
        <input type="button" className="navButton" value="Roles to Capabilities" onClick={() => setToggleTool(0)}></input>
        <input type="button" className="navButton" value="Capabilities to Roles" onClick={() => setToggleTool(1)}></input>
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
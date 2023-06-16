/* RolesToCaps - Display Roles to Capabilities page. Users can select desired
 *               roles and enabled capabilities will be outputted. 
 */

import { useState } from "react";

import RolesFilter from "./RolesFilter";
import LicensesFilter from "./LicensesFilter";
import OutputBox from "./OutputBox";
import CheckboxesCard from "../CheckboxesCard";

import "./RolesToCaps.css";

// Contains data from CI360 Roles and Capabilities table
import { data } from "../../data.jsx";

function RolesToCaps() {
    // DATA PARSING ------------------------------------------------------------
    const licenseNames = [
        "Discover",
        "Engage: Digital",
        "Engage: Direct",
        "Engage: Email",
        "Engage: Email Testing",
        "Plan",
        "Engage: Optimize",
    ];

    // Getting the role names from data 
    let roleNames = [];
    for (let i = 0; i < data.length; i++) {
        roleNames.push(data[i][0].role);
    }

    // ROLES FILTER ------------------------------------------------------------

    // Array of true/false - true if the corresponding checkbox is selected,
    //                       false otherwise
    const [roleCheckedState, setRoleCheckedState] = useState(
        new Array(roleNames.length).fill(false)
    );

    // When checkbox is clicked, update state 
    const addRolesHandler = (position) => {
        const updatedCheckedState = roleCheckedState.map((item, index) =>
            index === position ? !item : item
        );

        setRoleCheckedState(updatedCheckedState);
    };

    // LICENSES FILTER ---------------------------------------------------------

    // Array of true/false - true if the corresponding checkbox is selected,
    //                       false otherwise
    const [licensesCheckedState, setLicensesCheckedState] = useState(
        new Array(licenseNames.length).fill(false)
    );

    // When checkbox is clicked, update state 
    const addLicensesHandler = (position) => {
        const updatedCheckedState = licensesCheckedState.map((item, index) =>
            index === position ? !item : item
        );

        setLicensesCheckedState(updatedCheckedState);
    };

    //--------------------------------------------------------------------------

    // State for whether output is showing the table, or the JSON 
    const [outputFormat, setOutputFormat] = useState(1);

    return (
        <>
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
                        setRoleCheckedState(new Array(roleNames.length).fill(false));
                        setLicensesCheckedState(new Array(licenseNames.length).fill(false));
                    }}
                ></input>
                {outputFormat == 0 && (
                    <input
                        type="button"
                        className="control"
                        value="Show Table"
                        onClick={() => setOutputFormat(1)}
                    ></input>
                )}
                {outputFormat == 1 && (
                    <input
                        type="button"
                        className="control"
                        value="Show JSON"
                        onClick={() => setOutputFormat(0)}
                    ></input>
                )}
            </div>
            <div className="flexbox-container">
                <CheckboxesCard className="licenses">
                    <LicensesFilter
                        licenseNames={licenseNames}
                        onCheckBox={addLicensesHandler}
                        checkedState={licensesCheckedState}
                    ></LicensesFilter>
                </CheckboxesCard>
                <CheckboxesCard className="roles">
                    <RolesFilter
                        roleNames={roleNames}
                        checkedState={roleCheckedState}
                        setCheckedState={setRoleCheckedState}
                        onCheckBox={addRolesHandler}
                        licenseNames={licenseNames}
                        selectedLicenses={licensesCheckedState}
                    ></RolesFilter>
                </CheckboxesCard>
                <OutputBox selectedRoles={roleCheckedState} outputFormat={outputFormat}></OutputBox>
            </div>
        </>
    );
}

export default RolesToCaps;

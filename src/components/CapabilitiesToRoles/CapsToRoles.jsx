// CapsToRoles - displays tool for Capabilities to Roles direction 

import { useState } from "react";

import CapabilitiesFilter from "./CapabilitiesFilter";
import CheckboxesCard from "../CheckboxesCard";
import CTROutputTable from "./CTROutputTable";

import "./CapsToRoles.css";

import { data } from '../../data.jsx';

function CapsToRoles(props) {
    // Retrieving capability names for the checkboxes from data file 
    let capabilityNames = [];
    for (let key in data[0][1]) {
        capabilityNames.push(key);
    }

    // State of the capability checkboxes 
    const [capsCheckedState, setCapsCheckedState] = useState(
        new Array(capabilityNames.length).fill(false)
    );

    // When a checkbox is selected, update the capabilities 
    const addCapsHandler = (position) => {
        const updatedCheckedState = capsCheckedState.map((item, index) =>
            index === position ? !item : item
        );
        setCapsCheckedState(updatedCheckedState);
    }

    return (
        <>
            <div className="control-bar">
                <input
                    type="button"
                    className="control"
                    value="Clear"
                    onClick={() => {
                        setCapsCheckedState(new Array(capabilityNames.length).fill(false));
                    }}
                ></input>
            </div>
            <div className="flexbox-container">
                <CheckboxesCard>
                    <CapabilitiesFilter
                        cardName="capabilities"
                        labels={capabilityNames}
                        checkedState={capsCheckedState}
                        onCheckBox={addCapsHandler}
                    ></CapabilitiesFilter>
                </CheckboxesCard>
                <div className="ctrTable">
                    <CTROutputTable
                        capsCheckedState={capsCheckedState}
                    ></CTROutputTable>
                </div>
            </div>
        </>
    );
}

export default CapsToRoles;
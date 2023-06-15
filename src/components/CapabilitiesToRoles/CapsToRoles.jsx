import { useState } from "react";

import CapabilitiesFilter from "./CapabilitiesFilter";
import CheckboxesCard from "../CheckboxesCard";
import RolesOutput from "./RolesOutput";
import LicensesOutput from "./LicensesOutput";
import CTROutputTable from "./CTROutputTable";

import "./CapsToRoles.css";

import { data } from '../../data.jsx';

function CapsToRoles(props) {
    let capabilities = [];
    const [outputRoles, setOutputRoles] = useState([]);
    const [roleIndexes, setRoleIndexes] = useState([])

    for (let key in data[0][1]) {
        capabilities.push(key);
    }

    const [capsCheckedState, setCapsCheckedState] = useState(
        new Array(capabilities.length).fill(false)
    );

    const addCapsHandler = (position) => {
        const updatedCheckedState = capsCheckedState.map((item, index) =>
            index === position ? !item : item
        );
        setCapsCheckedState(updatedCheckedState);
    }

    return (
        <>
            <h3 className="toolTitle">Capabilities to Roles</h3>
            <div className="control-bar">
                {/* <input
                    type="button"
                    className="control"
                    value="Copy"
                    onClick={() => {
                        navigator.clipboard.writeText(
                            document.getElementById("text-output").innerHTML
                        );
                    }}
                ></input> */}
                <input
                    type="button"
                    className="control"
                    value="Clear"
                    onClick={() => {
                        setCapsCheckedState(new Array(capabilities.length).fill(false));
                    }}
                ></input>
            </div>
            <div className="ctr-container">
                <CheckboxesCard>
                    <CapabilitiesFilter
                        cardName="capabilities"
                        labels={capabilities}
                        checkedState={capsCheckedState}
                        onCheckBox={addCapsHandler}
                    ></CapabilitiesFilter>
                </CheckboxesCard>
                <div className="ctrTable">
                    <CTROutputTable
                        capsCheckedState={capsCheckedState}
                    ></CTROutputTable>
                </div>
                {/* <div className="ctrOutput rolesOutput">
                    <RolesOutput
                        selectedCaps={capsCheckedState}
                        output={outputRoles}
                        setOutput={setOutputRoles}
                        setRoleIndexes={setRoleIndexes}
                    ></RolesOutput>
                </div>
                <div className="ctrOutput licensesOutput">
                    <LicensesOutput
                        // outputRoles={outputRoles}
                        roleIndexes={roleIndexes}
                    ></LicensesOutput>
                </div> */}
            </div>
        </>
    );
}

export default CapsToRoles;
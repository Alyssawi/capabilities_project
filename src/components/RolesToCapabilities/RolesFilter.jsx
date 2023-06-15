// RolesFilter - displays the checkboxes for the roles

import { useEffect, useState } from "react";

import './RolesFilter.css';

import { data } from '../../data.jsx'

function RolesFilter(props) {
    // Array of true/false - true if the corresponding checkbox is disabled, 
    //                       false otherwise
    const [disabledState, setDisabledState] = useState(
        new Array(props.roleNames.length).fill(false)
    );

    // When the selected licenses changes, updates role checkboxes so that all 
    // roles not associated with any of the selected licenses are disabled
    // If a checkbox is disabled, it also becomes unchecked 
    useEffect(() => {
        let updatedDisabled = new Array(props.roleNames.length).fill(false);
        let updatedChecked = props.checkedState;

        // If none of the licenses are selected, all roles are still enabled 
        if (props.selectedLicenses.includes(true)) {
            for (let i = 0; i < props.roleNames.length; i++) {
                let disabled = true

                // Check if the role is associated with any of the selected
                // licenses
                let currLicenses = data[i][0].assoc_products;
                for (let license of currLicenses) {
                    let index = props.licenseNames.indexOf(license);
                    if (props.selectedLicenses[index]) {
                        disabled = false
                    }
                }
                updatedDisabled[i] = disabled
                if (disabled) {
                    updatedChecked[i] = false;
                }
            }
        }
        setDisabledState(updatedDisabled);
        props.setCheckedState(updatedChecked);
    }, [props.selectedLicenses]);

    return (
        <div>
            <h3>Roles</h3>
            <p>
                Number of roles selected: {props.checkedState.filter(x => x === true).length}
            </p>
            <input
                type="button"
                value="Select All"
                onClick={() => {
                    let updatedCheckedState = disabledState.map(value => !value);
                    props.setCheckedState(updatedCheckedState)
                }}
                style={{float: "right"}}
            ></input>
            <ul>
                {props.roleNames.map((label, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <input
                                    type="checkbox"
                                    id={`${props.cardName}-checkbox-${index}`}
                                    name={label}
                                    value={label}
                                    onChange={() => props.onCheckBox(index)}
                                    disabled={disabledState[index]}
                                    checked={props.checkedState[index]}
                                ></input>
                                <label htmlFor={`${props.cardName}-checkbox-${index}`}>{label}</label>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default RolesFilter;
import './RolesFilter.css';
import { useEffect, useState } from "react";
import { data } from '../data.jsx'


function RolesFilter(props) {
    const checkboxLabels = props.data;
  
    const licenseNames = props.licenses

    const [disabledState, setDisabledState] = useState(
        new Array(checkboxLabels.length).fill(false)
    );

    useEffect(() => {
        let updatedDisabled = new Array(checkboxLabels.length).fill(false);
        let updatedChecked = props.checkedState;

        if (props.selectedLicenses.includes(true)) {
            for (let i = 0; i < checkboxLabels.length; i++) {
                let disabled = true
                let currLicenses = data[i][0].assoc_products;
                for (let license of currLicenses) {
                    let index = licenseNames.indexOf(license);
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
                Number of roles selected: {props.checkedState.filter(x => x===true).length}
            </p>
            <ul>
                {checkboxLabels.map((label, index) => {
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
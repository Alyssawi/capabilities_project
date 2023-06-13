import './LicensesFilter.css';
import { useState } from 'react'

function LicensesFilter(props) {
    const checkboxLabels = props.data

    return (
        <div>
        <h3>Licenses</h3>
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
                            disabled={false}
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

export default LicensesFilter;
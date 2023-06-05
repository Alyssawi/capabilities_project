import './CheckboxesCard.css';
import { useState } from 'react'

function CheckboxesCard(props) {
    const checkboxLabels = props.data

    return (
        <div className="checkboxesCard">
        <h3>{props.cardName}</h3>
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

export default CheckboxesCard;
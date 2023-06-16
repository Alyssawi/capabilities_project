// LicensesFilter - displays the checkboxes for the licenses 
function LicensesFilter(props) {
    return (
        <div>
            <h3>Licenses</h3>
            <ul>
                {props.licenseNames.map((label, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <input
                                    type="checkbox"
                                    id={`${props.cardName}-checkbox-${index}`}
                                    name={label}
                                    value={label}
                                    onChange={() => props.onCheckBox(index)}
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
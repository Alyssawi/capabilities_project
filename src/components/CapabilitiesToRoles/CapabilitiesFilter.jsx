// CapabilitiesFilter - checkboxes for the capabilities

function CapabilitiesFilter(props) {
    return (
        <div>
        <h3>Capabilities</h3>
        <ul>
        {props.labels.map((label, index) => {
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
    );
}

export default CapabilitiesFilter;
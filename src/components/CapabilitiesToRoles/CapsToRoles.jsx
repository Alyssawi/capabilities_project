import CapabilitiesFilter from "./CapabilitiesFilter";
import CheckboxesCard from "../../CheckboxesCard";
import "./CapsToRoles.css";
import { data } from '../../data.jsx'

function CapsToRoles(props) {
    let capabilities = [];
    for (let key in data[0][1]) {
        capabilities.push(key);
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
                        setRoleCheckedState(new Array(roles.length).fill(false));
                        setLicensesCheckedState(new Array(licenses.length).fill(false));
                    }}
                ></input>
            </div>
            <div className="ctr-container">
                <CheckboxesCard>
                    <CapabilitiesFilter cardName="capabilities" labels={capabilities}></CapabilitiesFilter>
                </CheckboxesCard>
                <div className="ctrOutput rolesOutput">
                    <h3>Roles</h3>
                    <p>Pretend there's content here</p>
                </div>
                <div className="ctrOutput licensesOutput">
                    <h3>Licenses</h3>
                    <p>You're gonna have to stay with me here</p>
                </div>
            </div>
        </>
    );
}

export default CapsToRoles;
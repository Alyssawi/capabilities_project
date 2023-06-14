import CapabilitiesFilter from "./CapabilitiesFilter";
import CheckboxesCard from "../../CheckboxesCard";
import { data } from '../../data.jsx'

function CapsToRoles(props) {
    let capabilities = [];
    for (let key in data[0][1]) {
        capabilities.push(key);
    }

    return (
        <>
            <div className="flexbox-container">
                <CheckboxesCard>
                    <CapabilitiesFilter cardName="capabilities" labels={capabilities}></CapabilitiesFilter>
                </CheckboxesCard>
            </div>
        </>
    );
}

export default CapsToRoles;
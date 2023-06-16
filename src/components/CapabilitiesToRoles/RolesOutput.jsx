import { useState, useEffect } from "react";
import { data } from '../../data.jsx';



function RolesOutput(props) {
    useEffect(() => {
        var qualifyingRoles = [];
        var roleIndexes = [];
        for (let i = 0; i < data.length; i++) {
            let roleData = data[i];
            let qualifies = true;
            let enabledCaps = roleData[1];

            let j = 0;
            for (let key in enabledCaps) {
                if (props.selectedCaps[j] && !enabledCaps[key]) {
                    qualifies = false;
                }
                j++;
            }

            if (qualifies) {
                qualifyingRoles.push(roleData[0].role);
                roleIndexes.push(i);
            }
        }
        props.setOutput(qualifyingRoles);
        props.setRoleIndexes(roleIndexes);
    }, [props.selectedCaps]);

    return (
        <>
            <h3>Roles</h3>
            <p>{props.output.join('\r\n')}</p>
        </>
    );
}

export default RolesOutput;
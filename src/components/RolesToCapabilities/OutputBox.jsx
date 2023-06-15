// OutputBox - container for both the output formats - the table and the JSON 

import { useEffect, useState } from "react";

import OutputTable from "./OutputTable";

import "./OutputBox.css"

import { data } from '../../data.jsx';

function OutputBox(props) {
    // Role object with all capabilities set to false 
    let voidRole = JSON.parse(JSON.stringify(data[0][1]));
    for (let key in voidRole) {
        voidRole[key] = false
    }

    // Role object with the combined capabilities of all selected roles 
    const [output, setOutput] = useState(voidRole);
    // Store filter state of the AGGrid table so that filter settings saves when
    // toggling between table and JSON view
    const [filterModel, setFilterModel] = useState(undefined);

    // When the selected roles change, update the output's enabled capabilities
    useEffect(() => {
        // Make an array of capability objects from each selected role 
        var selectedCapabilities = [voidRole];
        for (let i = 0; i < props.selectedRoles.length; i++) {
            if (props.selectedRoles[i]) {
                selectedCapabilities.push(data[i][1]);
            }
        }

        // Making a deep copy of the void role
        let updatedOutput = JSON.parse(JSON.stringify(voidRole));
        for (let key in updatedOutput) { // For every capability
            // See if any of the selected roles grant that capability
            let i = 1;
            while (!updatedOutput[key] && i < selectedCapabilities.length) {
                updatedOutput[key] = selectedCapabilities[i][key]
                i++;
            }
        }
        setOutput(updatedOutput);
    }, [props.selectedRoles]);

    return (
        <>
            {(props.outputFormat == 0) &&
                <div className="output" id="text-output">
                    {JSON.stringify(output, null, " \t")}
                </div>
            }
            {(props.outputFormat == 1) &&
                <div className="table">
                    <OutputTable
                        output={output}
                        filterModel={filterModel}
                        setFilterModel={setFilterModel}
                    ></OutputTable>
                </div>
            }
        </>
    );
}

export default OutputBox;
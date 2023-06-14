import "./OutputBox.css"
import { useEffect, useState } from "react";
import { data } from '../../data.jsx'
import OutputTable from "./OutputTable";

function OutputBox(props) {
    let voidRole = JSON.parse(JSON.stringify(data[0][1]));
    for (let key in voidRole) {
        voidRole[key] = false
    }

    const [output, setOutput] = useState(voidRole);
    const [filterModel, setFilterModel] = useState(undefined);

    useEffect(() => {
        var selectedCapabilities = [voidRole];
        for (let i = 0; i < props.selectedRoles.length; i++) {
            if (props.selectedRoles[i]) {
                selectedCapabilities.push(data[i][1]);
            }
        }

        let updatedOutput = JSON.parse(JSON.stringify(selectedCapabilities[0]));
        for (let key in updatedOutput) { // for every capability
            // see if any of the selected roles grant that capability
            for (let i = 1; i < selectedCapabilities.length; i++) {
                updatedOutput[key] = updatedOutput[key] || selectedCapabilities[i][key];
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
                        data={output}
                        filterModel={filterModel}
                        setFilterModel={setFilterModel}
                    ></OutputTable>
                </div>
            }
        </>
    );
}

export default OutputBox;
import { useMemo, useState, useEffect } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { data } from '../../data.jsx';

function CTROutputTable(props) {
    const containerStyle = useMemo(() => ({ width: "100%", height: "100%"}), []);
    const gridStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);

    const [rowData, setRowData] = useState();

    useEffect(() => {
        let updatedRowData = [];

        for (let i = 0; i < data.length; i++) {
            let roleData = data[i];
            let qualifies = true;
            let enabledCaps = roleData[1];

            let j = 0;
            for (let key in enabledCaps) {
                if (props.capsCheckedState[j] && !enabledCaps[key]) {
                    qualifies = false;
                }
                j++;
            }

            if (qualifies) {
                updatedRowData.push(roleData[0]);
            }
        }

        setRowData(updatedRowData);
    }, [props.capsCheckedState]);

    const columnDefs = [
        {
            field: "role",
            headerName: "Roles"
        },
        {
            field: "assoc_products",
            headerName: "Licenses"
        }
    ]

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            sortable: true,
            wrapText: true,
            autoHeight: true
        }
    })

    return (
        <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine">
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                ></AgGridReact>
            </div>
        </div>
    );
}

export default CTROutputTable;
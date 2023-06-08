import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useCallback, useMemo, useRef, useState, useEffect } from 'react';

function OutputTable(props) {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const [rowData, setRowData] = useState(() => {
        let voidRole = [];

        for (let key in props.data) {
            let curr = {};
            curr["capability"] = key;
            curr["enabled"] = props.data[key];
            voidRole.push(curr);
        }
    });

    useEffect(() => {
        let updatedRowData = [];

        for (let key in props.data) {
            let curr = {};
            curr["capability"] = key;
            curr["enabled"] = props.data[key];
            updatedRowData.push(curr);
        }

        setRowData(updatedRowData);
    }, [props.data]);

    // const rowData = [
    //     {
    //         capability: "ShowUserRoles",
    //         enabled: true
    //     },
    //     {
    //         capability: "ShowAPIUsers",
    //         enabled: true
    //     },
    //     {
    //         capability: "ShowBasicConfigurations",
    //         enabled: false
    //     }
    // ]

    const columnDefs = [
        {
            field: "capability"
        },
        {
            field: "enabled"
        }
    ]

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            sortable: true,
            filter: true,
        };
    }, []);

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

export default OutputTable;
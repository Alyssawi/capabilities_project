// OutputTable - displays AGGrid table for the capabilities output

import { useMemo, useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import BooleanFilter from './BooleanFilter';
import FloatingBooleanFilter from './FloatingBooleanFilter';

import "./RTCOutputTable.css";

function OutputTable(props) {
    // Styling to give AGGrid
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);

    // State of the content in the grid 
    const [rowData, setRowData] = useState();

    // Storing the filter state when it changes
    const onFilterChanged = params => {
        props.setFilterModel(params.api.getFilterModel());
    }

    // Restoring previous filter state when toggling back to the table view 
    const onFirstDataRendered = params => {
        params.api.setFilterModel(props.filterModel);
    }

    // Gives the HTML for a green dot to represent true and a red dot for false
    const displayDot = p => {
        if (p.value) {
            return <div id="greenDot"></div>
        } else {
            return <div id="redDot"></div>
        }
    }

    // Updates the table content when the output changes
    useEffect(() => {
        let updatedRowData = [];

        // The format of the original JSON object and the desired format for 
        // AGGrid differ, so a new object must be made
        for (let key in props.output) {
            let curr = {};
            curr["capability"] = key;
            curr["enabled"] = props.output[key];
            updatedRowData.push(curr);
        }

        setRowData(updatedRowData);
    }, [props.output]);

    // Defines the columns, which field from the JSON to use, as well as filter
    // properties 
    const columnDefs = [
        {
            field: "capability",
            floatingFilter: true,
            filter: true,
            // filter: "agTextColumnFilter",
            // floatingFilterComponent: TextFilter,
            debounceMs: 0,
            filterParams: {
                buttons: ['reset']
            },
        },
        {
            field: "enabled",
            cellRenderer: displayDot,
            filter: BooleanFilter,
            floatingFilter: true,
            floatingFilterComponent: FloatingBooleanFilter
        }
    ]

    // Default column definition, contains properties that apply to both columns
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            sortable: true,
            suppressMenu: true,
            floatingFilterComponentParams: {
                suppressFilterButton: true
            },
            suppressMovable: true
        };
    }, []);

    return (
        <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine">
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onFirstDataRendered={onFirstDataRendered}
                    onFilterChanged={onFilterChanged}
                ></AgGridReact>
            </div>
        </div>
    );
}

export default OutputTable;
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import "./OutputTable.css";
import BooleanFilter from './BooleanFilter';
import FloatingBooleanFilter from './FloatingBooleanFilter';
import TextFilter from './TextFilter';

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

    const onFilterChanged = params => {
        props.setFilterModel(params.api.getFilterModel());
    }

    const onFirstDataRendered = params => {
        params.api.setFilterModel(props.filterModel);
    }

    const displayDot = p => {
        if (p.value) {
            return <div id="greenDot"></div>
        } else {
            return <div id="redDot"></div>
        }
    }

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
            field: "enabled", cellRenderer: displayDot,
            filter: BooleanFilter,
            floatingFilter: true,
            floatingFilterComponent: FloatingBooleanFilter
        }
    ]

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            sortable: true,
            suppressMenu: true,
            floatingFilterComponentParams: {
                suppressFilterButton: true
            }
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
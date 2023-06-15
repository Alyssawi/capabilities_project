// BooleanFilter - Performs the actual filters and stores filter data

import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';

export default forwardRef((props, ref) => {
    // Stores its own filter state. Default it both (all results)
    //    0 - True
    //    1 - False
    //    2 - Both 
    const [filterState, setFilterState] = useState(2)

    useImperativeHandle(ref, () => {
        return {
            isFilterActive() {
                return true;
            },
            doesFilterPass(params) {
                return (params.data.enabled && filterState == 0) || (!params.data.enabled && filterState == 1) || (filterState == 2);
            },
            getModel() {
                return {state: filterState}
            },
            setModel(model) {
                if (model == null) {
                    setFilterState(2);
                } else {
                    setFilterState(model.state)
                }
            },
            setValue(value) {
                setFilterState(value);
            }
        };
    });

    useEffect(() => props.filterChangedCallback(), [filterState]);

    // Does not return an actual component, because the filter menu is being 
    // supressed anyway
    return (
        <>
        </>
    );
})
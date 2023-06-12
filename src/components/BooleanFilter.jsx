import { forwardRef, useCallback, useImperativeHandle, useState, useEffect } from 'react';

export default forwardRef((props, ref) => {
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

    return (
        <>
        </>
    );
})
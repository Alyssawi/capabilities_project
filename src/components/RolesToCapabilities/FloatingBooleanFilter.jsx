// FloatingBooleanFilter - Displays the UI part of the filter, while 
// BooleanFilter does the actual filtering

// ** Note: I know having two components for three radio buttons is ridiculous,
//          but I genuinely couldn't find a way around it 

import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';

export default forwardRef((props, ref) => {
    // State for which radio button is selected 
    const [value, setValue] = useState(2);

    useImperativeHandle(ref, () => {
        return {
            onParentModelChanged(parentModel) {
                if (parentModel) {
                    setValue(parentModel.state);
                } else {
                    setValue();
                }
            }
        };
    });

    // Changes state for this component as well as parent component
    const radioListener = useCallback((value) => {
        props.parentFilterInstance(instance => {
            instance.setValue(value);
        });
        setValue(value);
    }, []);

    return (
        <div>
            <label>
                <input
                    type="radio" name="rbBooleanFilter"
                    onChange={() => radioListener(0)}
                    checked={value == 0}>
                </input>
                True
            </label>
            <label>
                <input
                    type="radio" name="rbBooleanFilter"
                    onChange={() => radioListener(1)}
                    checked={value == 1}
                ></input>
                False
            </label>
            <label>
                <input
                    type="radio" name="rbBooleanFilter"
                    onChange={() => radioListener(2)}
                    checked={value == 2}
                ></input>
                Both
            </label>
        </div>
    );
});
import { forwardRef, useCallback, useImperativeHandle, useState, useEffect } from 'react';

export default forwardRef((props, ref) => {
    console.log(props);

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

    const radioListener = useCallback((value) => {
        props.parentFilterInstance(instance => {
            instance.setValue(value);
        });
        setValue(value);
    }, []);

    return (
        <div>
            <label>
                True
                <input
                    type="radio" name="rbBooleanFilter"
                    onChange={() => radioListener(0)}
                    checked={value == 0}>
                </input>
            </label>
            <label>
                False
                <input
                    type="radio" name="rbBooleanFilter"
                    onChange={() => radioListener(1)}
                    checked={value == 1}
                ></input>
            </label>
            <label>
                Both
                <input
                    type="radio" name="rbBooleanFilter"
                    onChange={() => radioListener(2)}
                    checked={value == 2}
                ></input>
            </label>
        </div>
    );
});
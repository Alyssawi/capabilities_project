import { forwardRef, useCallback, useImperativeHandle, useState, useEffect } from 'react';

export default forwardRef((props, ref) => {
    const [value, setValue] = useState("");

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

    const textListener = useCallback((input) => {
        if (input === "") {
            props.parentFilterInstance((instance) => {
                instance.onFloatingFilterChanged(null, null);
            });
            return;
        }    
        setValue(input);
        props.parentFilterInstance(instance => {
            instance.onFloatingFilterChanged(value);
        });
    }, []);

    return (
        <div>
            <input
                type="text"
                id="textFilter"
                onChange={() => textListener(document.getElementById("textFilter").value)}
            ></input>
        </div>
    );
});

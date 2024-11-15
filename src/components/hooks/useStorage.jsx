import { useState } from "react";

const useStorage = (initialValue, itemKey) => {
    const itemValue = localStorage.getItem(itemKey);

    if (itemValue === null) {
        localStorage.setItem(itemKey, JSON.stringify(initialValue));
    }

    const [value, setValue] = useState(
        itemValue === null ? initialValue : JSON.parse(itemValue)
    );

    const setStorageValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(itemKey, JSON.stringify(newValue));
    };

    return [value, setStorageValue];
};

export default useStorage;

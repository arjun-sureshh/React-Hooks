import React, { useContext } from 'react';
import { MyContext } from './Manager';

const ChildOne = () => {
    const { setChange } = useContext(MyContext);

    const handleChange = (event) => {
        setChange(event.target.value);
    };

    return (
        <div>
            <input type="text" name="" id="" onChange={handleChange} />
        </div>
    );
};

export default ChildOne;
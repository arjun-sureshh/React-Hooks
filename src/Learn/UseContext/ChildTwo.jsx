import React, { useContext } from 'react';
import { MyContext } from './Manager';

const ChildTwo = () => {
    const { change } = useContext(MyContext);

    return (
        <div>
            {change}
        </div>
    );
};

export default ChildTwo;
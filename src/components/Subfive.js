import React from 'react';

const Subfive = (props) => {
    const { fiveDown } = props;

    return (
        <div>
            <button onClick={fiveDown}>Subtract Five</button>
        </div>
    );
};

export default Subfive;
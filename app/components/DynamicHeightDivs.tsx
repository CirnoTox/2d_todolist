import React, { useState } from 'react';

const DynamicHeightDivs = ({ topDiv, bottomDiv }: { topDiv: JSX.Element, bottomDiv: JSX.Element; }) => {
    // State to store the heights of the divs
    const [topHeight, setTopHeight] = useState(50);  // Initial height in percentage
    const [bottomHeight, setBottomHeight] = useState(50);  // Initial height in percentage

    // Handle slider change
    const handleSliderChange = (event: any) => {
        const newHeight = parseInt(event.target.value);
        setTopHeight(newHeight);
        setBottomHeight(100 - newHeight);  // Ensure total height remains consistent
    };

    return (
        <div className="flex flex-col h-screen pl-10">
            <div className={`flex-1 overflow-auto transition-height duration-500 ease-in-out`} style={{ height: `${topHeight}vh` }}>
                {topDiv}
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={topHeight}
                onChange={handleSliderChange}
                className="my-2"
            />
            <div className={`overflow-auto transition-height duration-500 ease-in-out`} style={{ height: `${bottomHeight}vh` }}>
                {bottomDiv}
            </div>
        </div>
    );
};

export default DynamicHeightDivs;

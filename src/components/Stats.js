import React, { useState } from "react";


function Stats({ items }) {
    const itemLength = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage = itemLength > 0 ? Math.round((packedItems / itemLength) * 100) : 0;

    return (
        <footer className="stats">
            {/* <em>You have {itemLength} items in the list. You already packed {packedItems} ({packedPercentage}%).</em> */}
            {packedPercentage === 100 ?
                (<em>You got everything!</em>) : (<em>You have {itemLength} items in the list. You already packed {packedItems} ({packedPercentage}%).</em>)}
        </footer>
    );
}

export default Stats;
import React from 'react'
import _ from 'lodash'
export default function LodashFlatten() {
    // phân tách mảng 
    const flatten = [[1,[2,[3.[4]],5]]]
    console.log('tách 1 mảng',_.flatten(flatten))
    console.log('tách từ nhiều mảng',_.flattenDeep(flatten))
    return (
        <div>
            
        </div>
    )
}

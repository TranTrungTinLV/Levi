import _ from 'lodash'
import React from 'react'

export default function Lodashiclude() {
    // kiểm tra đúng sai của phần tử trong mảng
    const arr = {id:5 , name:'Nam' , age:12}

    console.log('Kết quả :',_.includes(arr,'Nam'))
    return (
        <div>
            
        </div>
    )
}

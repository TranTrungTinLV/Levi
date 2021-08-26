import React from 'react'
import _, { identity } from 'lodash'
export default function JoinDemo() {
         // cho mảng sau :
    let arr = ['Khải','Nam','Tín']
            // yêu cầu nối các mảng lại với nhau
    // Tìm tên
    let arrPerson = [
        { id:1 , name : 'Khải'},
        { id:2 , name : 'Nam'},
        { id:3 , name : 'Tín'},

    ]
    // Cách xử lý của CS6
    const resulf = arr.join('-')

    // Cách xử lỷ của Lodash
    const ResulfLodash = _.join(arr,'&')
    // Ngoài ra còn có thể tìm tên trong danh sách mảng
    const person = _.find(arrPerson,item => item.id === 2)
    return (
        <div>
            <h3 className = "text-sm font-bold bg-gray-500 text-green-400 text-center mt-5">Cách xử lý của CS6</h3>
            {resulf}
            <br/>
            <h3 className = "text-sm font-bold bg-gray-500 text-red-500 mt-4 text-center">Cách xử lý của Lodash</h3>

            {ResulfLodash}
            {/* {name} */}
            <div>
                <p>
                    Name:{person.name} - id{person.id}
                </p>
            </div>
        </div>
    )
}

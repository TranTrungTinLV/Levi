import React from 'react'
import _ from 'lodash'
export default function Lodashfill() {
    // thay thế phần tử này thành phẩn tử khác
    const reusult1 = [1,2,3]
    const resuult2 = _.fill(reusult1,'A')
    console.log('Kết quả là',resuult2)

    const result3 = [1,2,3,4]
    const result4 = _.fill(result3,'*',1,4)

    console.log(result4)


    // bài tập khác 
    const smart = [
        {id:1, name:'Iphone'}, //0
        {id:2, name:'Galaxya'},//1
        {id:3, name:'Asus'},//2

    ]
    _.fill(smart,{id:4 , name:'Nokia'},0,1)
        // trong đó : 0 là vị trí bắt đầu và 1 là vị trí kết thúc 
        // thay thế Iphone thành Galaxy
        
    console.log("thay thế ",smart)
    return (
        <div>
            
        </div>
    )
}

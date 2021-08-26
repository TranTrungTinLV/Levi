import React from 'react'
import _, { result } from 'lodash'
export default function LodashComePareArrayObject() {
    // so sánh các phần tử trong mảng có bằng nhau không
    const Resutl1 = [1,2,3,4]
    const Resutl2 = [2,1,4,3]
    const Resutl = _.isEqual(Resutl1.sort(),Resutl2.sort())
    console.log('kết quả so sánh',Resutl)

    // // Giống nhau 
    // const arrObject1 = [{id:'1' , name:'Khải'},{id:'2',name:'Tín'}]
    // const arrObject2 = [{id:'1' , name:'Khải'},{id:'2',name:'Tín'}]
    // const result_1 = _.differenceWith(arrObject1,arrObject2,_.isEqual) 
    // Khác nhau
    // const arrObject1 = [{id:'1' , name:'Khải'},{id:'2',name:'Tín'}]
    // const arrObject2 = [{id:'1' , name:'Khải'},{id:'2',name:'Nam'}]
    // const result_2 = _.differenceWith(arrObject1,arrObject2,_.isEqual) 
    // // console.log('So Sánh mảng 1 và 2',result_1)
    // console.log('2 mảng khác nhau', result_2)
    // Khác nhau nữa nè
    const arrObject1 = [{id:'1' , name:'Khải'},{id:'2',name:'Tín'}]
    const arrObject2 = [{id:'1' , name:'Khải'},{id:'2',name:'Nam'},{id:3,name:'Thu'}]
    const result_1 = _.differenceWith(arrObject1,arrObject2,_.isEqual)
    console.log('Khác nhau :',result_1)
   
    return (
        <div>
            
        </div>
    )
}

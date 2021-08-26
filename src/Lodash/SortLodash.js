import React from 'react'
import _ from 'lodash'
export default function SortLodash() {
    const users = [
        // sắp xếp theo thứ tự từ trên xuống
        {id:5,age :20,name:'Baket'},
        {id: 4 , age :40,name:'Fruit'},
        {id: 7,age :50,name:'JAson'},
        {id:3 ,age :80,name:'Rock'},
        {id:10,age :57,name:'Time'},
    ]
    const SortByAge = _.sortBy(users,[item=>item.age])
    console.log('Age',SortByAge)
    const result = _.sortBy(users,['name','id'])
    console.log('result',result)
    return (
        <div>
            
        </div>
    )
}

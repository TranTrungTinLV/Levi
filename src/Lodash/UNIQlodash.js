import React from 'react'
import _ from 'lodash'
export default function UNIQlodash() {
    // Loại bỏ các phần trùng nhau
    const arr = [1,2,3,4,5,5,6,7,7,8,9,1,2,3,4,56,7,83,23,1,3,4]
    console.log('phần tử hoàn thiện :',_.uniq(arr))

    const uniq = [
        {id:1, name:'Iphone'}, //0
        {id:1, name:'Iphone'}, //0
        {id:1, name:'Iphone'}, //0
        {id:2, name:'Galaxya'},//1
        {id:3, name:'ProMac'},
        {id:4, name:'MacBook'},
        {id:2, name:'Galaxya'},//1
        {id:3, name:'Asus'},//2
        {id:3, name:'Asus'},//2
        {id:3, name:'ProMac'},
    ]
    console.log('kết quả 2 :',_.uniqBy(uniq,['id']))
    return (
        <div>
            
        </div>
    )
}

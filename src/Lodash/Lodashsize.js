import React from 'react'
import _ from 'lodash'
export default function Lodashsize() {
    const smart = [ 
        {id:1, name:'Iphone'}, //0
        {id:2, name:'Galaxya'},//1
        {id:3, name:'Asus'},//2
    ]
    // đếm phần tử trong mảng const
    console.log('size : ',_.size(smart))
    //
    return (
        <div>
            
        </div>
    )
}

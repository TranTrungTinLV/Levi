import React from 'react'
import _ from 'lodash'
export default function Lodashlastendmethod() {
    const arrStudent = [
        {id:1, name:'Nam'},
        {id:2, name:'Trung'},
        {id:3, name:'Ngọc'},
    ]
    // in phần tử đầu trong mảng
    const firstname = _.first(arrStudent) 
    // in phần tử sau trong mảng
    const lastname = _.last(arrStudent)
    
    // Cách Lodash 
    const arr = [['001','Aclice'],['002','Pop'],['003','Young']]

    const [id,name] = _.first(arr)
    const [id1,name1] = _.last(arr)
    return (
        <div>
            <div>firstname : {firstname.name}</div>
            <div>Lastname : {lastname.name}</div>

            <hr/>

            <div>firstname : {id}-{name}</div>
            <div>lastname : {id1}-{name1}</div>

        </div>
    )
}

import _ from 'lodash'
import React from 'react'

export default function LodashEnd() {
    // _has dùng để kiểm tra xem path có phải thuộc tính trực tiếp của đối tượng không
    // var object = {'a': {'b' : 2}}
    // var other = _.create({'a': _.create({'b' : 2}) })
    // console.log('Object',_.has(object,'a'))
    // console.log('Object',_.has(object,['a','b']))
    // console.log('Object',_.has(object,'a.b'))
    // console.log('Other',_.has(other,'a'))
    // _findkey tìm và trả về vị trí đó
    var users = {
        'barney':  { 'age': 36, 'active': true },
        'fred':  { 'age': 40, 'active': false },
        'prebbles':  { 'age': 10,  'active': true }
      };
    console.log('Kết quả cần trả',_.findKey(users,function(o){return o.age < 40}))
    
    // _.pick dùng để thêm cho đủ các phần tử 

    var addon = {'a': 1 , 'b' : 2 , 'c' : 3}
    console.log('thêm phần tử thiếu',_.pick(addon,['a','b']))

    return (

        <div>
            
        </div>
    )
}

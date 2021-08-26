import React from 'react'
import _, { chunk } from 'lodash'


export default function Lodashchunk() {
    const arr = ['id',1,'name','Tín','info','CyberSoft']
    // {dùng để tạo ma trận làm thuật toán}
    const result = _.chunk(arr,2)

    console.log("kết quả tách :",result)
    // tiếp theo là phân ma trận

    const arrString = ["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13"]
    const resultMatrix = _.chunk(arrString,3)
    console.log('kết quả ma trận là',resultMatrix)
    return (
        
        <div>
            {/* lodash này có liên quan đến thuật toán và game,.... */}
        </div>
    )
}

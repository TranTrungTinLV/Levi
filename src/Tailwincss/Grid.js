import React from 'react'

export default function Grid() {
    return (
        <div className = "container">
            <div className = "grid grid-cols-sm-6 gap-4"> {/* Grid-cols- là chia bao nhiêu cột cũng dc , gap là dùng chi khoảng cách các cột*/}
            {/*text-colors-số là màu chữ */}
                <div className = "bg-green-400">1</div>
                <div className = "bg-red-400">2</div>
                <div className = "bg-purple-400">3</div>
                <div className = "bg-pink-400">1</div>
                <div className = "bg-gray-900 text-red-400">2</div>
                <div className = "bg-gray-400" >3</div>
            </div>
            
        </div>
    )
}

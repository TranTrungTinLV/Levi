import React from 'react'
// dùng Css thì import vào
import './Customcss.css'
export default function Customcss() {
    return (
        <div className = "container mt-1">
            <article className = "bg-gray-300 p-5 shadow-lg">
                {/* article là dùng để tạo 1 làm 1 bài viết độc lập */}
                <p className = "text-2xl text-red-300 ">Responsive Design</p>
                <p className = "text-small text-green-500 ">Using responsive utility variants to build adaptive user interfaces.</p>
                <hr noshade="1" size="5" width="50%"/>
                <p className = "content">Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML. 
                There are five breakpoints by default, inspired by common device resolutions:</p>
            </article>
            <button class ="hover p-5 animation-scale">Hover me</button>
            <br></br>
            <button class ="stop p-5 animation-scale mt-10">Stop</button>
        </div>
    )
    // link tham khảo https://tailwindcss.com/docs/transition-property
}

import React from 'react'

export default function Paddingtailwindcss() {
    return (
        <div className = "container">
            {/* p-n pt-n pl-n pr-n px-n py-n (trong đó n = 0.25 rem) */}
            <div className = "bg-red-300 p-5 pl-20 text-center"> 
                <h3>Chào Tín đẹp troai</h3>
            </div>
            <br></br>
            <div className = "bg-red-300 pt-3"> 
                <h3>Chào Tín đẹp troai</h3>
            </div>
            <br></br>
            <div className = "bg-red-300 pl-7"> 
                <h3>Chào Tín đẹp troai</h3>
            </div>
        </div>
    )
}

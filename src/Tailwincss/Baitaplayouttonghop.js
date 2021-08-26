

import React from 'react'
import Card from './Card';

export default function Baitaplayouttonghop() {
    return (
        <div className = "container">
            <h1 className = "text-center text-green-400 text-2xl mt-5">Welcome to CyberSoft frontend with tailwindcss</h1>
            <div className = "grid grid-cols-3 gap-4 my-3 mx-20">
                <div className = "text-center mt-10 ml-5">
                    <Card/>
                </div>
                <div className = "text-center mt-10 ml-5">
                    <Card/>
                </div>
                <div className = "text-center mt-10 ml-5">
                    <Card/>
                </div>
            </div>
        </div>
    )
}


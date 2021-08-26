import React from 'react'

export default function Card() {
    return (
        <div className = "card w-full">
            <div className = "content bg-gray-200 py-8 rounded-tl-lg ronded-tr-lg">
                <h3 className = "text-purple-900 font-bold">Category</h3>
                <p className = "font-bold text-2xl text-black ">CyberSoft Develeper</p>
                <p className = "text-black text-sm">Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, sed natus. Doloribus, assumenda! Animi nisi asperiores libero ratione iusto illum.</p>
            </div>
            <div className = "footer rounded-br-lg rounded-bl-lg flex justify-between bg-gray-300 p-2">
            <button className = "bg-white-100 ml-2 " type = "button" value = "button">1BTC</button>
            <button className = "bg-purple-400 p-3 mt-1 rounded-lg transition hover:text-blue-500 hover:bg-gray-500 duration:500" type = "button" value = "button">Register</button>

            </div>
        </div>
        
    )
}


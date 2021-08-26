import React from 'react'

export default function Flex() {
    return (
        <div className = "bg-blue-300 w-screen h-screen ">
            {/* ngoài justify-enter thì còn có end start between around */}
            <div className = "flex h-1/2 w-full bg-green-300 justify-center ">
                <div className = "fitem h-10 w-10 bg-red-400  ">Jobs</div>
                <div className = "fitem h-10 w-10 bg-blue-400  ">Jobs</div>
                <div className = "fitem h-10 w-10 bg-yellow-400 ">Jobs</div>
            </div>

            <br></br>
            <div className = "flex flex-col h-1/2 w-full bg-green-300 justify-center items-end ">
                <div className = "fitem h-10 w-10 bg-red-400  ">Jobs</div>
                <div className = "fitem h-10 w-10 bg-blue-400  ">Jobs</div>
                <div className = "fitem h-10 w-10 bg-yellow-400 ">Jobs</div>
            </div>
        </div>
    )
}

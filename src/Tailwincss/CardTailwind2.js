import React from 'react'

export default function GridTailwind2() {
    return (
        <div className = "flex justify-between">
            <div className = "card">
                <p className = "text-xs text-black">Endtirehouse</p>
                <p className = "font-bold text-black text-xl">Beach House In CollindWood</p>
                <p className = "mt-3 flex"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> </svg><a className = "font-bold text-black text-md ml-3">4.94(128)</a><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
</svg><a className = "font-bold text-black text-md ml-3">Colling Wood,Ontario</a></p>
                <p className =" flex ml-1 mt-20"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg><a className = "font-bold text-black text-xs">Hosted by Kevin Trash</a></p>
                <p className = "text-black font-bold text-sm ml-3 mt-3">Check avaibility</p>
            </div>
            <div className = "grid grid-rows-3 grid-flow-col gap-2">
                <div className = "row-span-3">
                    <img src = "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/213642085_637030084356873_3103922474470870264_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WDBebCJTsEcAX_53BbY&tn=iCmPnWsATmAgmMR9&_nc_ht=scontent.fsgn2-6.fna&oh=f1701ecabcb2cbcbb9a7810eef22eca4&oe=612690D8" className = "w-90 h-80 rounded-lg mt-1"/>
                </div>
                <div class="row-span-3">
                    <img src = "https://lh3.googleusercontent.com/NDwBz60oaWiUxHgvRzRwWluEOmtIgCE1jf5b9LYH4xeK6Hjmrx8KMta4km7hBT3asLg_UD8RAT-KbAmc32nHbOLZOzs9X3ygEhlsKud4Dy9hTSEkGFLmvw_EiY5UY8b7qi0jgPNyRrKG8Lt3Kf4CbY7dBeU2UeUqoL_O4LIIGM4U9cYFP9W9EPX6CGgJcbdlfw8T4h5BIJXAFsZ_pBMqlmAYHxuQ0PnBuC_e50TlCAE9RWPhd93qpVoeCAbwUVXZT968dfBLu0N2tBmTapHuc4vty2jvr6ojc6VqW78cW5mMtFHTBzvSTAtN8iohra26oxWwufVbvmpV0udr2Hw2PQKorrba10J-WlRQwDeukqSdDzLgYfRkYIYLjpdmWrjRfqJ0YMaKtlSZUfsN0YqAcShgmk03pbSbOO1jdDVhvyg8qSyNmck4tnkxli9kfvn3psYfOD_6HDwN92D-fV4qzsMsHXXFvw9vkwKvmF_Jne4oMDALN0oqBTQCZC-kQI2vJyOdFgTXwr2Enn87_FLPdb6RQvKaGbeMRKWeffZRymWCGiOYHa9wR1aP9J4TPYWuwHUFpKufSpDmZ_mkoCKazwbS00iJEEjJBoLczparspz3VgZPEoSYwkr0emjbr0ukydQG6m2HfZmKqiOSAdX8ySlpHJkksWgaOCS6ghycoUiXgd-tq24d_zaBZbt7amTWpLj6w0Q2cYsHbLPw0Il5qDg=w678-h903-no?authuser=0" className = "w-40 h-40 rounded-lg"/>
                    <img src = "https://lh3.googleusercontent.com/42EPAmtNwi5vJCYHMQdrGyD0S0SB-Mhiodweit0xtmgWGEVsGHVL4D62gQpvpqJGNbC8O2NH6M5cRgtxwHAcpgrv0FmxIv8kc-SL2m1DexladkTh6f7bhPhVgE-3JFn7FmirntPfi4cA-_jVhnNpt3sxtLe3NAZmU3WYQQqKOSlElV8eZN4ZcDq0BVJcxX-sMJ5HsE3VEqiuMY1Nj39_NOL3QNmQ5XQT08X4kCB01KRU7m8zktqiY6vksXUZfRF9wOor_iptgH9U8tyidPi5Ak9Ca-ZDBOsja3tkYBIyG5IYD1qYEkFSxulMSeWojnYr4b3OW6BqHE7Ks2bbIgPwOcoXNi1WKpjueeJU_IJ90v7B3UsU7vN_fQyCFVpDN3eAQwCxZSOsOGqNJJTps5lPouu4K0BsW1be23GGvaur4oO8H43s_QiO7RJ-_3ktBvEOP2ewEul36FSwWwMviW-b3gpeN4ad8Q05i_xjG3p1XYVg2EQxNf6dXmm8PCuFa40MaqEalJrPEfiy4r6ojc9pQe00vrIudIHMVxmH8AvMPzmCjCch16oS0fybJd_SW1ukqTH9Gw_Dfhz1gg9tymkJ_Tn9PA2qpqk8C6cqOsbdGp3Wq6grDW3mDb6aWDhsu5XNr0NMRMvUwUohzL5bjPN4HaMm14JqsQzfz7enLn7ngw9MrLPcYhYrRMnQeehz5m10PjL4HPiZu8EvdcjnK7DybQk=w678-h903-no?authuser=0   " className = "w-30 h-40 rounded-lg mt-1"/>
                </div>
            </div>
        </div>
    )
}
    
                                        
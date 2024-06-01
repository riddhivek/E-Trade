import { useState } from "react";


const Hook = () => {
    // let count = 0;

const [count , setCount] = useState(1);

    const next = () => {
        setCount(count+1)
      }
      const pre = () => {
        setCount(count-1)
      }
       return (
        <>
            <button className="button h-7 w-7 leading-6 bg-gray-300 rounded-full font-semibold  text-xl border-2 border-white hover:border-blue-500" onClick={pre}>-</button>
            <div className="button font-semibold ps-4 text-2xl">{count}</div>
            <button className="button h-7 w-7 leading-6 bg-gray-300 rounded-full font-bold me-24 ms-4 text-xl border-2 border-white hover:border-blue-500" onClick={next}>+</button>
        </>
       )
}

export default Hook;
import { Link } from "react-router-dom"

const Order = () => {
    return (
        <>
            <div className="">
                <table className="w-full text-left">
                    <tr>
                        <th>Order</th>
                        <th className="">Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td className="text-red-600">#6523</td>
                        <td>september 10,2020</td>
                        <td>Proccecing</td>
                        <td>$326.63 for 3 items</td>
                        <button className="mb-8 h-10 w-20 hover:bg-blue-600 hover:text-white font-medium rounded-lg  border-2 border-black">View</button>
                        {/* <Link to={" /ScrollToTop"} className="mb-8 h-10 w-20 hover:bg-blue-600 hover:text-white font-medium rounded-lg  border-2 border-black">View</Link> */}
                    </tr>

                    <tr>
                        <td className="text-red-600">#6523</td>
                        <td>september 10,2020</td>
                        <td>On Hold</td>
                        <td>$326.63 for 3 items</td>
                        <button className="mb-8 h-10 w-20 hover:bg-blue-600 hover:text-white font-medium rounded-lg  border-2 border-black">View</button>
                    </tr>

                    <tr>
                        <td className="text-red-600">#6523</td>
                        <td>september 10,2020</td>
                        <td>Proccecing</td>
                        <td>$326.63 for 3 items</td>
                        <button className="mb-8 h-10 w-20 hover:bg-blue-600 hover:text-white font-medium rounded-lg  border-2 border-black">View</button>
                    </tr>

                    <tr>
                        <td className="text-red-600">#6523</td>
                        <td>september 10,2020</td>
                        <td>Proccecing</td>
                        <td>$326.63 for 3 items</td>
                        <button className="mb-8 h-10 w-20 hover:bg-blue-600 hover:text-white font-medium rounded-lg  border-2 border-black">View</button>
                    </tr>

                    <tr>
                        <td className="text-red-600">#6523</td>
                        <td>september 10,2020</td>
                        <td>Proccecing</td>
                        <td>$326.63 for 3 items</td>
                        <button className="mb-8 h-10 w-20 hover:bg-blue-600 hover:text-white font-medium rounded-lg  border-2 border-black">View</button>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Order
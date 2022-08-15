import { useEffect, useState } from "react";
import { useChart } from "../../hooks";

const TopUsersTable = () => {

    const [topusers, setTopusers] = useState([]);
    const { topUsersByUsage } = useChart();
    useEffect(() => {
        topUsersByUsage().then((res) => setTopusers(res.data)).catch((err) => console.log(err.message))
    },[]);

    return ( 
        <table className="table-fixed w-full">
            <tbody>
                {topusers.map((user, index) => (
                    <tr key={index}>
                        <td className="py-2 font-semibold text-red-500">{user.username}</td>
                        <td className="py-2 text-gray-600">{user.country}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    );
}

export default TopUsersTable;
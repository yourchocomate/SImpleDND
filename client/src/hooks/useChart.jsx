import { useState } from "react"
import { useChartBySegmentation, useTopUsersGet } from "../services/user"

export const useChart = () => {
    const [chartdata, setChartdata] = useState([]);

    const chartBySegmentation = (segmentation) => {
        return useChartBySegmentation(segmentation).then((res) => setChartdata(res.data)).catch((err) => console.log(err.message))
    }

    const topUsersByUsage = async() => {
        return (await useTopUsersGet());
    }

    return { chartBySegmentation, topUsersByUsage, chartdata};
}
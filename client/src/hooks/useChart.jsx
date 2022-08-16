import { useState } from "react"
import { useChartBySegmentation, useTopUsersGet } from "../services/user"
import { useBase } from "./useBase";

export const useChart = () => {

    const [chartdata, setChartdata] = useState({dau: {name: "No data", value: 1}});
    const { charts, setCharts, setChartLayout, initialChartLayouts } = useBase();

    const resetChartGridLayout = () => {
        setChartLayout(initialChartLayouts);
        localStorage.setItem("chart-grid-layouts", JSON.stringify(initialChartLayouts));
    }

    const handleChartGridLayoutChange = (layout, layouts) => {
        setChartLayout(layouts);
        localStorage.setItem("chart-grid-layouts", JSON.stringify(layouts));
    };

    const chartBySegmentation = async(segmentation) => {
        return useChartBySegmentation(segmentation).then((res) => setChartdata(res.data)).catch((err) => console.log(err.message))
    }

    const topUsersByUsage = async() => {
        return (await useTopUsersGet());
    }

    const getCharts = () => {
        const saved = localStorage.getItem("charts");
        return saved ? JSON.parse(saved) : charts;
    }


    const toggleDau = () => {
        const chart = getCharts();
        const charts = {...chart, dau: chart.dau ? false : true}
        setCharts(charts);
        localStorage.setItem("charts", JSON.stringify(charts));
        resetChartGridLayout()
    }

    const toggleWau = () => {
        const chart = getCharts();
        const charts = {...chart, wau: chart.wau ? false : true}
        setCharts(charts);
        localStorage.setItem("charts", JSON.stringify(charts));
        resetChartGridLayout()
    }

    const toggleMau = () => {
        const chart = getCharts();
        const charts = {...chart, mau: chart.mau ? false : true}
        setCharts(charts);
        localStorage.setItem("charts", JSON.stringify(charts));
        resetChartGridLayout()
    }
    
    const toggleTop = () => {
        const chart = getCharts();
        const charts = {...chart, top: chart.top ? false : true}
        setCharts(charts);
        localStorage.setItem("charts", JSON.stringify(charts));
        resetChartGridLayout()
    }

    return { 
        chartdata, 
        chartBySegmentation, 
        topUsersByUsage, 
        getCharts, 
        resetChartGridLayout, 
        toggleDau, 
        toggleMau, 
        toggleWau, 
        toggleTop,
        handleChartGridLayoutChange
    };
}
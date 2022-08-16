import { useContext, useState } from "react";
import { layouts as initialChartLayouts } from "../components/sections/AUChartLayouts";
import { BaseContext } from "../contexts";


export const useProvideBase = () => {


    const [modal, setModal] = useState({show: false,type: '', message: ''});
    const [chartSegmentation, setChartSegmentation] = useState("country");
    const [charts, setCharts] = useState({dau: true, wau: true, mau: true, top: true});
    

    const getChartGridLayout = () => {
        const saved = localStorage.getItem("chart-grid-layouts");
        return saved && saved != null ? JSON.parse(saved) : initialChartLayouts;
    }

    const [chartLayout, setChartLayout] = useState(getChartGridLayout());

    return { 
        modal, 
        setModal, 
        chartSegmentation, 
        setChartSegmentation, 
        charts,
        setCharts,
        chartLayout,
        setChartLayout,
        initialChartLayouts
    };
}

export const useBase = () => {
    return useContext(BaseContext);
}
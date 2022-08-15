import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBase } from "../../hooks";
import { SwitchCheckBox } from "../ui";
import { layouts } from "./AUChartLayouts";

const AUSetting = () => {

    const {charts, setCharts} = useBase();
    const navigate = useNavigate();

    const getCharts = () => {
        const saved = localStorage.getItem("charts");
        return saved ? JSON.parse(saved) : charts;
    }

    const reset = () => {
        localStorage.setItem("chart-grid-layouts", JSON.stringify(layouts));
        navigate('/')
    }

    const chart = getCharts();

    const toggleDau = () => {
        let newData = {}
        if(chart.dau) {
            newData = {...chart, dau: false}
        }
        else {
            newData = {...chart, dau: true}
        }
        setCharts(newData);
        localStorage.setItem("charts", JSON.stringify(newData));
        reset()

    }

    const toggleWau = () => {
        let newData = {}
        if(chart.wau) {
            newData = {...chart, wau: false}
        }
        else {
            newData = {...chart, wau: true}
        }
        setCharts(newData);
        localStorage.setItem("charts", JSON.stringify(newData));
        reset()

    }

    const toggleMau = () => {
        let newData = {}
        if(chart.mau) {
            newData = {...chart, mau: false}
        }
        else {
            newData = {...chart, mau: true}
        }
        setCharts(newData);
        localStorage.setItem("charts", JSON.stringify(newData));
        reset()
    }
    
    const toggleTop = () => {
        let newData = {}
        if(chart.top) {
            newData = {...chart, top: false}
        }
        else {
            newData = {...chart, top: true}
        }
        setCharts(newData);
        localStorage.setItem("charts", JSON.stringify(newData))
        reset()
    }

    useEffect(() => {
        const saved = localStorage.getItem("charts");
        if(saved) setCharts(JSON.parse(saved))
    },[])

    return (
        <div className="flex flex-col">
            <a className="group flex justify-between items-center px-2 py-2">
                <span className="text-gray-600  text-sm font-medium mr-3">Show DAU</span>
                <SwitchCheckBox checked={charts.dau} onChange={toggleDau}/>
            </a>
            <a className="group flex justify-between items-center px-2 py-2">
                <span className="text-gray-600  text-sm font-medium mr-3">Show WAU</span>
                <SwitchCheckBox checked={charts.wau} onChange={toggleWau}/>
            </a>
            <a className="group flex justify-between items-center px-2 py-2">
                <span className="text-gray-600  text-sm font-medium mr-3">Show MAU</span>
                <SwitchCheckBox checked={charts.mau} onChange={toggleMau} />
            </a>
            <a className="group flex justify-between items-center px-2 py-2">
                <span className="text-gray-600  text-sm font-medium mr-3">Show TOP AU</span>
                <SwitchCheckBox checked={charts.top} onChange={toggleTop} />
            </a>
        </div>
    )
}

export default AUSetting;
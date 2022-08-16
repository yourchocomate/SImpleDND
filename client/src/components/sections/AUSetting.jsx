import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBase, useChart } from "../../hooks";
import { SwitchCheckBox } from "../ui";
import { layouts } from "./AUChartLayouts";

const AUSetting = () => {

    const { charts, setCharts } = useBase();
    const { toggleDau, toggleWau, toggleMau, toggleTop, getCharts} = useChart();

    useEffect(() => {
        setCharts(getCharts());
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
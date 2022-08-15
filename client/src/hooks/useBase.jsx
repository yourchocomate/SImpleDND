import { useContext, useState } from "react";
import { BaseContext } from "../contexts";

export const useProvideBase = () => {
    const [modal, setModal] = useState({show: false,type: '', message: ''});
    const [chartSegmentation, setChartSegmentation] = useState("country");
    const [charts, setCharts] = useState({dau: true, wau: true, mau: true, top: true});
    return { modal, setModal, chartSegmentation, setChartSegmentation, charts, setCharts};
}

export const useBase = () => {
    return useContext(BaseContext);
}
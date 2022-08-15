import React, { lazy, Suspense, useEffect } from 'react';
import { useBase, useChart } from '../../hooks';
import { layouts } from "./AUChartLayouts";
import TopUsersTable from './TopUsersTable';

const PieChartComponent = lazy(() => import("../recharts/PieChart"));
const Tiles = lazy(() => import( "../gridLayout/Tiles"));

    
const AUCharts = () => {
    
    const { chartSegmentation, charts } = useBase();
    const { chartBySegmentation, chartdata } = useChart();
      
    useEffect(() => {
        chartBySegmentation(chartSegmentation)
    },[chartSegmentation])

    return (
        <div>
            <Suspense fallback={<div>Page is Loading...</div>}>
                <Tiles layouts={layouts}>
                    {charts.dau && (
                        <div className="card" key="dau">
                            <div className="flex flex-col items-center w-full absolute top-2 left-0 h-5 cursor-move handle-drag">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </div>
                            <h2 className="text-gray-400 font-semibold">Daily Active Users</h2>
                            <div className="w-full h-full flex justify-center items-center">
                                {chartdata.dau ? (
                                    <PieChartComponent data={chartdata.dau}/>
                                ) : (
                                    <p className="text-gray-400 font-semibold">No Data</p>
                                 )}
                            </div>
                        </div>
                    )}
                    {charts.wau && (
                        <div className="card" key="wau">
                            <div className="flex flex-col items-center w-full absolute top-2 left-0 h-5 cursor-move handle-drag">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </div>
                            <h2 className="text-gray-400 font-semibold">Weekly Active Users</h2>
                            <div className="w-full h-full flex justify-center items-center">
                                {chartdata.wau ? (
                                    <PieChartComponent data={chartdata.wau}/>
                                ) : (
                                    <p className="text-gray-400 font-semibold">No Data</p>
                                 )}
                            </div>
                        </div>
                    )}
                    {charts.mau && (
                        <div className="card" key="mau">
                            <div className="flex flex-col items-center w-full h-5 absolute top-2 left-0 cursor-move handle-drag">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </div>
                            <h2 className="text-gray-400 font-semibold">Monthly Active Users</h2>
                            <div className="w-full h-full flex justify-center items-center">
                                {chartdata.mau ? (
                                    <PieChartComponent data={chartdata.mau}/>
                                ) : (
                                    <p className="text-gray-400 font-semibold">No Data</p>
                                 )}
                            </div>
                        </div>
                    )}
                    {charts.top && (
                    <div className="card overflow-hidden" key="top">
                        <div className="flex flex-col items-center w-full h-5 absolute top-2 left-0 cursor-move handle-drag">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </div>
                        <h2 className="text-gray-400 font-semibold">Top 15 Active Users</h2>
                        <div className="w-full h-[90%] no-scrollbar overflow-y-auto px-4 mt-4">
                            <TopUsersTable/>
                        </div>
                    </div>
                    )}
                </Tiles>
            </Suspense>
        </div>
    );
}

export default AUCharts;
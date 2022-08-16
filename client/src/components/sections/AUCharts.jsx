import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useBase, useChart } from '../../hooks';
import { Loader } from '../ui';
import TopUsersTable from './TopUsersTable';

const PieChartComponent = lazy(() => import("../recharts/PieChart"));
const Tiles = lazy(() => import( "../gridLayout/Tiles"));

const AUCharts = () => {
    const [isBusy, setIsBusy] = useState(true);
    const { chartSegmentation, charts, chartLayout } = useBase();
    const { handleChartGridLayoutChange, chartBySegmentation, chartdata } = useChart();
      
    useEffect(() => {
        chartBySegmentation(chartSegmentation).then(() => setIsBusy(false))
    },[chartSegmentation])

    return (
        <Suspense fallback={<Loader/>}>
                <Tiles layouts={chartLayout} onLayoutChange={handleChartGridLayoutChange}>
                    {charts.dau && (
                        <div className="card" key="dau">
                            <div className="flex flex-col items-center w-full absolute top-2 left-0 h-5 cursor-move handle-drag">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#999" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </div>
                            <h2 className="text-gray-400 font-semibold">Daily Active Users</h2>
                            <div className="w-full h-full flex justify-center items-center">
                                {isBusy ? (<p className="text-gray-400">...loading</p>) : (<PieChartComponent data={chartdata.dau}/>)}
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
                                {isBusy ? (<p className="text-gray-400">...loading</p>) : (<PieChartComponent data={chartdata.wau}/>)}
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
                                {isBusy ? (<p className="text-gray-400">...loading</p>) : (<PieChartComponent data={chartdata.mau}/>)}
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
                            {isBusy ? (<p className="text-gray-400">...loading</p>) : (<TopUsersTable/>)}
                        </div>
                    </div>
                )}
            </Tiles>
        </Suspense>
    );
}

export default AUCharts;
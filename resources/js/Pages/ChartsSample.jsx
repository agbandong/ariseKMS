import React, { useState } from 'react';
import BarChart from '@/Components/BarChart';
import {Chart as ChartJS} from 'chart.js/auto';
import {UserData} from '../Data';
import LineChart from '@/Components/LineChart';


export default function ChartsSample(){
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Users Lost",
            data: UserData.map((data) => data.userLost),
            backgroundColor: ["red"],
            borderColor: "gray",
            borderWidth: 2
        }] 
    })
    return (
        <div className='App'>
            <div className='w-1/2'><BarChart chartData={userData} options={null}/></div>
            <div className='w-1/2'><LineChart chartData={userData} options={null}/></div>
        </div>
    );
}
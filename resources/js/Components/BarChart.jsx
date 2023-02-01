import React from 'react';
import {Bar} from 'react-chartjs-2';

export default function BarChart({chartData, chartOptions}) {
    return <Bar data={chartData} options={chartOptions}/>;
}

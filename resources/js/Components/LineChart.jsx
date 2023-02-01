import React from 'react';
import {Line} from 'react-chartjs-2';

export default function LineChart({chartData, chartOptions}) {
    return <Line data={chartData} options={chartOptions}/>;
}

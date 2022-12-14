import React from 'react';
import { Area, AreaChart, Bar, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './StackedAreaChart.css'

const StackedAreaChart = () => {

    const data =[
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 2410,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 4230,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 7260,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 5290,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 6010,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 6700,
            "revenue": 61000
        }
    ]


    return (
        <div className='chart-area'>
            <div className='chart-title'>
                <h2>Invesment - Sell - Revenue</h2>
                <h5>Last 6 months</h5>
            </div>
            <div>
                <AreaChart
                    width={650}
                    height={450}
                    // data={data}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* <XAxis dataKey="name" /> */}
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
        </div>
    );
};

export default StackedAreaChart;
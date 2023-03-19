import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
} from 'chart.js'
import { CreateData } from '@/utils/randomData';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

export default function ChartTable() {
    const dateList = [ '01/07', '11/07', '21/07', '31/07', '10/08', '20/08', '30/8' ];
    const dataLength = 7;

    const [ data1, setData1 ] = useState( CreateData( dataLength, 40, 500 ) );
    const [ data2, setData2 ] = useState( CreateData( dataLength, 40, 500 ) );
    const [ data3, setData3 ] = useState( CreateData( dataLength, 40, 500 ) );

    useEffect( () => {
        // create interval
        const interval = setInterval(
            // set number every 5s
            () => {
                setData1( CreateData( dataLength, 40, 500 ) );
                setData2( CreateData( dataLength, 40, 500 ) );
                setData3( CreateData( dataLength, 40, 500 ) );
            },
            5000
        );

        // clean up interval on unmount
        return () => {
            clearInterval( interval );
        };
    }, [] );


    const data = {
        labels: dateList,
        datasets: [ {
            label: 'Quỹ Tăng trưởng',
            data: data1,
            backgroundColor: "#e87722",
            borderColor: "#e87722",
            pointBorderColor: "#e87722",
        },
        {
            label: 'Quỹ Cân bằng',
            data: data2,
            backgroundColor: "#6eceb2",
            borderColor: "#6eceb2",
            pointBorderColor: "#6eceb2",
        },
        {
            label: 'Quỹ Bảo toàn',
            data: data3,
            backgroundColor: "#fed141",
            borderColor: "#fed141",
            pointBorderColor: "#fed141",
        } ]
    }

    // const getOrCreateTooltip = (chart) => {
    //     let tooltipEl = chart.canvas.parentNode.querySelector('div');

    // }

    // const ExternalToolTipHandler = (context) => {
    //     const {chart, tooltip} = context;
    //     const tooltipEl = getOrCreateTooltip(chart)
    // }

    const options = {
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                displayColors: false,
                backgroundColor: '#0a3b32',
                callbacks: {
                    title: function ( item, everything ) {
                        console.log( item );
                        return 'Ngày: ' + item[ 0 ].label;
                    },
                    label: function ( item ) {
                        let fundAmount = item.raw.toLocaleString();
                        let label = 'Giá trị quỹ: ' + fundAmount;
                        return label;
                    },
                }
                // external: ExternalToolTipHandler
            },
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    strokeStyle: 'none',
                    boxWidth: 15,
                    boxHeight: 15,
                    font: {
                        color: 'black',
                        size: '15rem',
                        weight: 'bold'
                    }
                }
            }
        },
        scales: {
            y: {
                min: 0,
                max: 500
            }
        }
    }

    return (
        <div className='fund-table chart-table display-flex ' style={{ marginBottom: "2rem" }}>
            <div>
                <Line
                    data={data}
                    options={options}
                >
                </Line>
            </div>

        </div>
    )
}

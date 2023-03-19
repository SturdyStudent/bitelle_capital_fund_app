import React from 'react'
import { StyledSelect } from './styledComponents'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip
} from 'chart.js'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip
)
import { Bar } from 'react-chartjs-2'

export default function FundChangeTable() {
    const data = {
        labels: [ '' ],
        datasets: [
            {
                label: 'Quỹ Tăng trưởng',
                data: [ 25 ],
                backgroundColor: "#e87722",
                borderColor: "#e87722",
                pointBorderColor: "#e87722",
            },
            {
                label: 'Quỹ Cân bằng',
                data: [ 50 ],
                backgroundColor: "#6eceb2",
                borderColor: "#6eceb2",
                pointBorderColor: "#6eceb2",
            },
            {
                label: 'Quỹ Bảo toàn',
                data: [ -25 ],
                backgroundColor: "#fed141",
                borderColor: "#fed141",
                pointBorderColor: "#fed141",
            }
        ]
    }


    const options = {
        categoryPercentage: 1.1,
        barPercentage: 0.9,
        maintainAspectRatio: false,
        indexAxis: 'y',
        legend: {
            display: false
        },
        plugins: {
            tooltip: {
                display: false
            },
            legend: {
                display: false
            }
        },
        scales: {
            yAxes: [ {
                ticks: {
                    display: false
                }
            } ],
            y: {
                min: 0,
                max: 5
            }
        }
    }

    return (
        <div>
            <table className='fund-table fund-change-table'>
                <colgroup>
                    <col width={'20%'} />
                    <col width={'30%'} />
                    <col width={'50%'} />
                </colgroup>
                <tr className='fund-change-cell'>
                    <th colSpan={3}>Thay đổi của giá trị quỹ</th>
                </tr>
                <tr>
                    <td colSpan={2}><h3 className='display-flex justify-start'>Từ lúc thành lập quỹ</h3></td>
                    <td className='border-left'>
                        <div className='display-flex space-between align-center'>
                            <h3>Thời gian</h3>
                            <div>
                                <StyledSelect>
                                    <option>6 Tháng qua</option>
                                    <option>12 Tháng qua</option>
                                    <option>36 Tháng qua</option>
                                </StyledSelect>
                            </div>
                        </div>

                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='display-flex justify-start'>Quỹ Tăng trưởng</div>
                    </td>
                    <td rowSpan={4}>
                        <Bar
                            data={data}
                            options={options}
                        ></Bar>
                    </td>
                    <td className='border-left'>
                        <div className='display-flex space-between'>
                            <div>Quỹ Tăng trưởng</div>
                            <div>+5.87%</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='display-flex justify-start'>Quỹ Cân bằng</div>
                    </td>
                    <td className='border-left'>
                        <div className='display-flex space-between'>
                            <div>Quỹ Cân bằng</div>
                            <div>+65.32%</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='display-flex justify-start'>Quỹ Bảo toàn</div>
                    </td>
                    <td className='border-left'>
                        <div className='display-flex space-between'>
                            <div>Quỹ Bảo toàn</div>
                            <div>+15.12%</div>
                        </div>
                    </td>
                </tr>
                <tr style={{ height: "2rem" }}>
                    <td></td>
                    <td className='border-left'></td>
                </tr>
            </table>
        </div>
    )
}

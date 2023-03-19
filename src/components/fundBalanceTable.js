import React from 'react'

export default function FundBalanceTable() {
  return (
    <table className='fund-balance-table fund-table'>
      <tr>
        <th style={{ textAlign: "left" }}>Tên quỹ</th>
        <th>Ngày bắt đầu</th>
        <th>Ngày kết thúc</th>
        <th>Tăng/giảm (%)</th>
      </tr>
      <tr>
        <td className='fund-name'>Quỹ tăng trưởng</td>
        <td>335.0</td>
        <td>230.88</td>
        <td>+30%</td>
      </tr>
      <tr>
        <td className='fund-name'>Quỹ Cân bằng</td>
        <td>335.0</td>
        <td>230.88</td>
        <td>+45%</td>
      </tr>
      <tr>
        <td className='fund-name'>Quỹ Bảo toàn</td>
        <td>110.23</td>
        <td>230.8</td>
        <td>+12%</td>
      </tr>
    </table>
  )
}

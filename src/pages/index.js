import '../styles/MainCss.module.css'
import FundBalanceTable from '@/components/fundBalanceTable'
import FundChangeTable from '@/components/fundChangeTable'
import FilterBar from '@/components/filterBar'
import ChartTable from '@/components/chartTable'


export default function Home() {
  return (
    <div >
      <FilterBar />
      <ChartTable />
      <FundBalanceTable />
      <div style={{ height: "30px" }}></div>
      <FundChangeTable />
      <div style={{ height: "100px" }}></div>
    </div>
  )
}

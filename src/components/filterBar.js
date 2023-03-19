import React, { useState } from 'react'
import { StyledSearchButton, StyledSelect, StyledButton } from './styledComponents'
import { DatePicker } from 'antd'
import IconButton from 'rsuite/IconButton';
import 'antd/dist/reset.css'
import { ButtonToolbar } from 'rsuite';
import TrendIcon from '@rsuite/icons/legacy/Trend';
import TableIcon from '@rsuite/icons/Table';
import moment from 'moment'

const { RangePicker } = DatePicker;

function FilterBar() {
    const [ dates, setDates ] = useState( [] );

    return (
        <div style={{ margin: "2rem 0px" }}>
            <div className='filter-bar space-between'>
                <div className='display-flex'>
                    <div>
                        <StyledSelect >
                            <option>Tất cả các quỹ</option>
                            <option>Quỹ Tăng trưởng</option>
                            <option>Quỹ Cân bằng</option>
                            <option>Quỹ Bảo toàn</option>
                        </StyledSelect>
                    </div>
                    <div>
                        <RangePicker
                            style={{
                                WebkitTextFillColor: "#e87722",
                                WebkitTextStroke: "0.4px #e87722",
                            }}

                            placeholder={[ "Ngày bắt đầu", "Ngày kết thúc" ]}
                            className='range-picker'
                            format={'DD-MM-YYYY'}
                            onChange={( values ) => {
                                setDates( values ?? values.map( item => {
                                    return moment( item ).format( 'DD-MM-YYYY' )
                                } ) )
                            }}
                        />
                    </div>
                    <div>
                        <StyledSearchButton>
                            TRA CỨU
                        </StyledSearchButton>
                    </div>
                </div>
                <div className='display-flex'>
                    <ButtonToolbar>
                        <IconButton style={{
                            border: "none",
                            backgroundColor: "transparent",
                            color: "#e87722",
                            margin: "0.5rem 1.6rem"
                        }} icon={<TrendIcon style={{ fontSize: "1.7rem" }} />} />
                        <IconButton style={{
                            border: "none",
                            backgroundColor: "transparent",
                            color: "#e87722"
                        }} icon={<TableIcon style={{ fontSize: "1.7rem" }} />} />
                    </ButtonToolbar>
                </div>
            </div>
        </div>
    )
}

export default FilterBar
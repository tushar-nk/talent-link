import React, { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import theme from '../../@core/theme/palette/index'
import { TextField, Button, FormControl, Select, MenuItem, SelectChangeEvent, Typography } from '@mui/material'

interface TYPE {
  dateTimeFilter?: (e: any) => void
}

const CommonDateRangePicker = ({ dateTimeFilter }: TYPE) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const formattedStartDate = state[0].startDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })
  const formattedEndDate = state[0].endDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })

  const [showCustomPicker, setShowCustomPicker] = useState<boolean>(false)

  const handleCustomButtonClick = () => {
    setShowCustomPicker(true)
  }

  return (
    <div>
      <div className='dateDropdown'>
        <div className='showDateRange' onClick={handleCustomButtonClick}>
          <Typography className='date-range'>{formattedStartDate}</Typography>-
          <Typography className='date-range'>{formattedEndDate}</Typography>
        </div>
        {showCustomPicker && (
          <div className='dateRange'>
            <DateRangePicker
              onChange={item => {
                setState([item.selection])
                if (dateTimeFilter) {
                  dateTimeFilter([item.selection])
                }
              }}
              showSelectionPreview={false}
              // moveRangeOnFirstSelection={false}
              showDateDisplay={false}
              showMonthAndYearPickers={false}
              showMonthArrow={true}
              showPreview={false}
              months={2}
              ranges={state}
              editableDateInputs={true}
              color={theme().primary.main}
              staticRanges={[]}
              inputRanges={[]}
              rangeColors='#ffff'
              direction='horizontal'
              monthDisplayFormat='MMMM yyyy'
            />
            <div className='selected-range '>
              <div>
                <TextField value={formattedStartDate} className='' />
                <TextField value={formattedEndDate} className='' />
              </div>
              <div>
                <Button variant='contained' onClick={() => setShowCustomPicker(false)} className='apply'>
                  APPLY
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommonDateRangePicker

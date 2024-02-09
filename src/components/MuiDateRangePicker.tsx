import {Box} from '@mui/material'
import {DateRangePicker, DateRange} from '@mui/lab'
import { useState } from 'react'

const MuiDateRangePicker = () => {
  const [value,setValue] = useState<DateRange<Date>>([null,null])
  return (
    <Box>
      <DateRangePicker 
        startText="Start Date"
        endText="End Date"
        value={value}
        onChange={(newValue: any) => setValue(newValue)}
        renderInput={(startProps: any, endProps: any) => (
          <>
            <input {...startProps} />
            <input {...endProps} />
          </>
        )}
        />
    </Box>
  )
}

export default MuiDateRangePicker

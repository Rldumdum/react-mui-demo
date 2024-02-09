import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  console.log(selectedDate);
  console.log({selectedTime});
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue: any) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="Time Picker"
        value={selectedTime}
        onChange={(newValue: any) => {
          setSelectedTime(newValue);
        }}
      />
    </Stack>
  );
};

export default MuiPicker;

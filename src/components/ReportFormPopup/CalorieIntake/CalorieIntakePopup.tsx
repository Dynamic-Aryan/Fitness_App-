import React from 'react'
import '../popup.css'
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DatePicker from 'react-horizontal-datepicker'
import dayjs,{Dayjs} from 'dayjs';
import { TimeClock} from '@mui/x-date-pickers/TimeClock'
import { LocalizationProvider, TimeField } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import { calculateSizeAdjustValues } from 'next/dist/server/font-utils';
interface CaloriIntakePopupProps{
  setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalorieIntakePopup: React.FC<CaloriIntakePopupProps> = ({setShowCalorieIntakePopup}) => {
  const color='aqua'
const [date,setDate]=React.useState<any>(new Date())
const selectedDay=(val: any)=>{
  console.log(val)
}

const [value,setValue]=React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  return (
    <div className='popupout'>
     
        
       <div className='popupbox'>
       <button className='close'
       onClick={()=>{
          setShowCalorieIntakePopup(false)
       }}
      
      >
       <AiOutlineClose/>
      </button>
           <DatePicker 
             getSelectedDay={selectedDay}
             endDate={100}
             selectDate={new Date()}
             labelFormat={'MMMM'}
             color={color}
           />

      <TextField id='filled-basic' label='Food item name' variant='filled' color="info" focused /> 
      <TextField id='filled-basic' label='Food item name (in gms)' variant='filled' color="info" focused /> 
      
      <div className='timebox'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
     <TimeClock value={value} onChange={(newValue) => setValue(newValue)}/>
     
     
     </LocalizationProvider>
        </div> 
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />  */}
    
     <Button variant='contained' color='info'>
     Save
     </Button>
     <div className='hrline'></div>
     <div className='items'>
          <div className='item'>
            <h3>Apple</h3>
            <h3>100 gms</h3>
            <button> <AiFillDelete /></button>
          </div>
          <div className='item'>
            <h3>Banana</h3>
            <h3>200 gms</h3>
            <button> <AiFillDelete /></button>

          </div>
          <div className='item'>
            <h3>Rice</h3>
            <h3>300 gms</h3>
            <button> <AiFillDelete /></button>

          </div>
        </div>
        </div> 
      </div>
  )
}

export default CalorieIntakePopup
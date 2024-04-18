import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
const [interest,setInterest] = useState(0)
const [pirnciple,setPirnciple] = useState(0)
const [rate,setRate] = useState(0)
const [year,setYear] = useState(0)

const [principleAmountValid,setPirncipleAmountValid]=useState(true)
const [rateAmountValid,setRateAmountValid]=useState(true)
const [YearAmountValid,setYearAmountValid]=useState(true)
const handleReset = ()=>{
  console.log("inside heandlereset");
  // reset all state
  setInterest(0)
  setPirnciple(0)
  setRate(0)
  setYear(0)
  setPirncipleAmountValid(true)
  setRateAmountValid(true)
  setYearAmountValid(true)
}
const handleValidation=(e)=>{
  console.log("inside handleValidation");
  const {value,name} = e
  console.log(value,name);
console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
if(!!value.match(/^\d*\.?\d+$/)){
  if(name=="principle"){
    setPirnciple(value)
    setPirncipleAmountValid(true)
  }else if(name=="rate"){
    setRate(value)
    setRateAmountValid(true)
  }else{
    setYear(value)
    setYearAmountValid(true)
  }
}else{
  if(name=="principle"){
    setPirnciple(value)
    setPirncipleAmountValid(false)
  }else if(name=="rate"){
    setRate(value)
    setRateAmountValid(false)
  }else{
    setYear(value)
    setYearAmountValid(false)
  }
}
}

const handleCalculate=()=>{
  if(pirnciple&&rate&&year){
 setInterest(pirnciple*rate*year/100)
  }
  else{
    alert('please fill the form completely!!! ')
  }
}
  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light p-5 rounded'>
         <h3>Simple Interest Calculator</h3>
         <p>Calculate your simple interest Easily</p>
         <div className="d-flex justify-content-center align-items-center bg-warning p-3 rounded shadow text-light flex-column">
          <h1> ₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple interest</p>
         </div>

         <form className='mt-5'>

          <div className="mb-3">
          <TextField value={pirnciple || ""} onChange={e=>handleValidation(e.target)} className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" name='principle' />
          </div>
          {!principleAmountValid&& <div className="text-danger mb-3">Invalide User input</div>}

          <div className="mb-3">
          <TextField value={rate  ||""} onChange={e=>handleValidation(e.target)} className='w-100' id="outlined-basic-rate" label="Rate of interest (p.a) %" variant="outlined" name='rate'/>
          </div>
          { !rateAmountValid && <div className="text-danger mb-3">Invalide User input</div>}

          <div className="mb-3">
          <TextField value={year  ||""} onChange={e=>handleValidation(e.target)} className='w-100' id="outlined-basic-time" label="Time Period (Yr)" variant="outlined" name='year'/>
          </div>
          { ! YearAmountValid && <div className="text-danger mb-3">Invalide User input</div>}

          <Stack direction="row" spacing={2}>
          <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !YearAmountValid} style={{width:"50%",height:"70px"}}  className="bg-dark" variant="contained">CALCULATE</Button>
           <Button onClick={handleReset} style={{width:"50%",height:"70px"}} variant="outlined">RESET</Button>
          </Stack>
          
         </form>
      </div>
    </div>
  )
}

export default App

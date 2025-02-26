import {useState} from 'react'
import axios from 'axios'

const Weather = () => {
  const [data,setData]=useState({})
  const [Location,setLocation]=useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=6f0151da060723a6434520b2718f1ec8`

 const SearchLocation =(e)=>{
 if(e.key==='Enter'){
  axios.get(url).then((response)=>{
    setData(response.data)
    console.log(response.data);
  })
  setLocation('')
 }
 }

 const celsius = data.main ? (data.main.temp - 273.15).toFixed(1) : null;


  return (
  <div className="w-full  relative text-[#fff] bg-[rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url(assets/sunset.jpg)] before:bg-no-repeat before:bg-cover before:bg-center before:z-[-1] ">
    <div className='text-center pt-4'>
      <input type="text" value={Location} onChange={e=>setLocation(e.target.value)}
      placeholder='Enter Location'
      onKeyDown={SearchLocation}
      className='text-xl p-2 rounded-3xl border border-[rgba(255,255,255,0.8)] bg-[rgba(255,255,255,0.1)] placeholder:border-[rgba(255,255,255,0.8)]'
      />
      </div>
  
  
    <div className='max-w-[700px] h-[680px] m-auto py-0 px-4 relative top-[10%] flex flex-col justify-between '>
       
       
        <div className="w-full my-4 mx-auto  ">  
        {/* name */}
        <div>
        <p className='text-2xl'>{data.name}</p>
        </div>

    {/* Temp */}
        <div >
        {celsius !== null ? <h1 className="text-7xl font-bold">{celsius}°C</h1> : null}        </div>


    {/* description */}
        <div >
          {data.weather?<p className='text-2xl'>{data.weather[0].main}</p>:null}
        </div>
        </div>








       {data.name !== undefined && <div className="flex justify-evenly text-center my-2 mx-auto w-full p-4 rounded-2xl bg-[rgba(255,255,255,0.2)]">
          <div className="feels">
          {data.main ? <p className='text-[20] font-bold'>{data.main.feels_like.toFixed()}°F</p> : null}
          <p>Feels Like</p>
          </div>
         
         
          <div>
          {data.main ? <p className='text-[20] font-bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
    
    <div>
    {data.wind ? <p className='text-[20] font-bold'>{data.wind.speed.toFixed()}MPH</p> : null}
    <p>Wind speed</p>
       </div>
        </div>}

    </div>
  </div>
  )
}

export default Weather
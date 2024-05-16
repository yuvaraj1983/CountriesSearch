import axios from 'axios';
import React, { useEffect, useState } from 'react'

import   "./CountriesSearch.css";

const CountriesSaerch = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const url = 'https://restcountries.com/v3.1/all';


    useEffect(() => {
        if(!search){
            axios(url).then((res) => res.data)
        .then((data) => {
            console.log(data)
            setCountries(data)
        })
        .catch((err) => console.log(err))
        } else {
            // const filteredData = countries.filter((country) => country.name.common.match(search))
            const filteredData = countries.filter((country) => 
                country.name.common.toLowerCase().includes(search.toLowerCase())
            );
            setCountries(filteredData);
        }
        
    },[search])
  return (
<>
    <div style={{textAlign:'center', margin:'20px'}}>
            <input style={{width:'500px'}} type='text' onChange={(e) => setSearch(e.target.value) } />
    </div>
    
{ Boolean(countries.length)  && 
 <div className='countryCardHdr'>
 {

countries.map((country) => (
 <div key={country.name.common} className='countryCard'>
    
         <img style={{margin:'10px',width:'100px', height:'100px'}} src={country.flags.png} alt={country.flags.alt} />
         <p>{country.name.common}</p>
 </div>
)) 

}
</div>
}
      
   
    
    </>
  )
}

export default CountriesSaerch
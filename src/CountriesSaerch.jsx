import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
            const filteredData = countries.filter((country) => country.name.common.match(search))
            setCountries(filteredData);
        }
        
    },[search])
  return (
<>
    <div style={{textAlign:'center', margin:'20px'}}>
            <input style={{width:'500px'}} type='text' onChange={(e) => setSearch(e.target.value) } />
    </div>
    

      
        <div style={{ display: 'flex', justifyContent:'center', alignItems:'center',height:"100vh",flexWrap:'wrap'}}>
            {
        countries.map((country) => (
            <div key={country.name.common} style={{ border:'1px solid grey', margin:'5px',borderRadius:'5px', width:'200px', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
               
                    <img style={{margin:'10px',width:'100px', height:'100px'}} src={country.flags.png} alt={country.flags.alt} />
                    <h5>{country.name.common}</h5>
            </div>
        ))
    }
        </div>
    
    </>
  )
}

export default CountriesSaerch
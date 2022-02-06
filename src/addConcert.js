import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AddConcert = () => {
    const [results, setResults] = useState([])
    const [term, setTerm] = useState('')
    const [data, setData] = useState([])
    const [concert, setConcert] = useState([])
const [filter, setFilter] = useState('') 
const [list] = useState([])
// useEffect(()=>{axios.get('http://localhost:3500/api/added').then(res => (setData(res.data)))}, [])

const submitConcert = () => {
    console.log('hit add concerts')
   axios.post('http://localhost:3500/api/add', {
       term: term
   } ).then(res=>setResults(res.data)) 
    alert('Concert Added')
}

// const handleSubmit = () => {
//     axios.get('http://localhost:3500/api/AddedConcerts', {
//         term: term
//     } ).then(res=>setResults(res.data))
// }

const handleSearch = () => {


    axios.post('http://localhost:3500/api/search', {
        term: term
    }).then(res=>setResults(res.data)) 
    {data.map(element => {
      return( 
        <h3>{element}</h3>
      )
    })}
    
    setConcert(list.filter(item => item.includes(filter)));
      }
    
    console.log(results)






console.log('hit add concerts')
console.log(results)
return(
    <div>
<h1>Add new concert to the archives</h1>
<input type="text" placeholder="Name of band" onChange={e=>setTerm(e.target.value)}></input>
<input type="text" placeholder="Location" onChange={e=>setTerm(e.target.value)}></input>
<input type="date" placeholder="Date" onChange={e=>setTerm(e.target.value)}></input>
<button onClick={submitConcert}>Add Concert</button>
<br>
</br>

<button onClick={handleSearch}>Search</button>
    {results.map((element) => {
    return(
    <div>
      <h2>{element.band_name}</h2>
      <h2>{element.location}</h2>
      <h2>{element.date}</h2>
    </div>
    )
  })}

</div>
)

}

export default AddConcert


// useEffect(()=>{axios.get('http://localhost:3500/api/added').then(res => (setData(res.data)))}, [])

{/* <input type='text' placeholder='Find concert' onChange={e=>setTerm(e.target.value)} />
    <button onClick={handleSubmit()}>Search</button> */}


// let body = {
//     band_name: band_name.value,
//     location: location.value,
//     date: date.value
// }

{/* {data.map((element)=> {
    return <h3>{element.location}</h3>})}
{data.map((element)=> {
    return <h2>{element.band_name}</h2>
})}
{data.map((element)=> {
    return <h2>{element.date}</h2>
})} */}





// import React, {useState, useEffect} from 'react'
// import axios from 'axios'

// const AddConcert = () => {
//     const [user, setUser] = useState({
//         band_name: '',
//         location: '',
//         date: ''
//     });

//

// const enterConcert = e => {
//     setUser({...user, [e.target.name]: e.target.value})
// }
// useEffect(()=>{axios.get('http://localhost:3500/api/concerts').then(res => (setData(res.data)))}, [])

// const addConcert = async e => {
//     e.preventDefault();
//    axios.post('http://localhost:3500/api/concerts')
//     alert('Concert Added')
// }

// return(
//     <div>
// <h1>Add new concert to the archives</h1>
// <input type="text" placeholder="Name of band" onChange={e=>enterConcert(e)}></input>
// <input type="text" placeholder="Location"></input>
// <input type="date" placeholder="Date"></input>
// <button onSubmit={(e)=>addConcert(e)}>Add Concert</button>

// </div>
// )

// }

// export default AddConcert
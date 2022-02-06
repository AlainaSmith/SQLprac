import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './concert.css';

const Show = () => {
    
const [data, setData] = useState([])
const [concert, setConcert] = useState([])
const [filter, setFilter] = useState('') 
const [results, setResults] = useState([])
const [term, setTerm] = useState('')
const [list] = useState([])

useEffect(()=>{axios.get('http://localhost:3500/api/concerts').then(res => (setData(res.data)))}, [])

//we need to create an object,
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



return(
    <div>
    <h1>Search concert archive by typing one of the following:
    </h1>
    <h1 className = 'listOption'>
        <ul>-Name of band
        <br>
        </br>
        -Location
        <br>
        </br>
        -Concert date
        </ul>
    </h1>
     <input type='text' placeholder='Find concert' onChange={e=>setTerm(e.target.value)} />
    <button onClick={()=>{handleSearch()}}>Search</button>
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


export default Show

//I want this function to loop through the database and return all of the keywords with the 
//same value that was input by the user
//.map()
// setConcert(concert.filter(item => item.includes(filter)));

// {concert.map((term, index) => {
//   return(
//     <h2 key={index}>
//       {term}
//     </h2>
//   )
// })}

//for everything inside of data, were going to do something with that
//in this case, were returning an h3, that returns the location, this is what .map will do
//.map
//

// return(
//     <>
//     {data.map((element)=> {
//         return <h3>{element.location}</h3>})}
//     <input id="noteinput" style={{width: '20%', height: '25px'}} type='text' placeholder='Enter A New Note' />
//     </>
//     )
// }



//server-->nodemon
//.then statement will assign my array toa  state

// export default class Show extends Component {
//     state = {
//       persons: []
//     }
  
//     componentDidMount() {
//       axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(res => {
//           const persons = res.data;
//           this.setState({ persons });
//         })
//     }
  
//     render() {
//       return (
//         <ul>
//           {
//             this.state.persons
//               .map(person =>
//                 <li key={person.id}>{person.name}</li>
//               )
//           }
//         </ul>
//       )
//     }
//   }






//useEffect(combines lifecyles of all components
//second argument to useEffect is dpenecacy arrary(monitors variabls, anytime those variables change it will trigger the useEffect which will re r enderf component)






// <input id="noteinput" style={{width: '20%', height: '25px'}} type='text' placeholder='Find concert' />
import React, {useState} from 'react';

// import App from '../../app-3/src/App';


const ConcertLoop = () => {
  const [filter, setFilter] = useState('')
  const [list] = useState(['alaina', 'hello'])
  const [listToDisplay, setList] = useState([])

  const filterNames = () => {
   setList(list.filter(item => item.includes(filter)));
  }

return(
  <>
  <input type="text" placeholder='find concert' onChange={e=>setFilter(e.target.value)}></input>
  <button onClick={filterNames}>Filter</button>
  {listToDisplay.map((item, index) => {
    return(
      <h2 key={index}>
        {item}
      </h2>
    )
  })}
  </>
)

}

export default ConcertLoop;


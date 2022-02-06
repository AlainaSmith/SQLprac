    // let values = {
//     band_name: '',
//     location: '',
//     date: ''
// }  

const [band_name, setBand_Name] = useState('')
const [location, setLocation] = useState('')
const [date, setDate] = useState('')

let concertTags = {
    band_name: band_name,
    location: location,
    date: date,
}
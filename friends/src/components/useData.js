// import  { useEffect, useState } from 'react'
// import axios from 'axios'

// export const useData = () => {

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios 
//             .get('http://localhost:5000/api/friends')
//             .then(res => {
//                 console.log(res.data)
//                 setData(res.data)
//             })
//             .catch(err => console.log(err))
//     }, [])

//     return [data];
// }
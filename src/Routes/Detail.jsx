import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {

  const [odontologo, setOdontologo] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setOdontologo(res.data))
    .catch(error => console.log(error))
  }, [id])
  
  console.log(odontologo);

  return (
    <>
      <h1>dentista {id}</h1>
      <table>
        <tr>
          <th>nombre</th>
          <th>Correo</th>
          <th>Numero telefonico</th>
          <th>pagina web</th>
        </tr>
        <tr>
          <td>{odontologo?.name}</td>
          <td>{odontologo?.email}</td>
          <td>{odontologo?.phone}</td>
          <td>{odontologo?.website}</td>
        </tr>
      </table>
    </>
  )
}

export default Detail
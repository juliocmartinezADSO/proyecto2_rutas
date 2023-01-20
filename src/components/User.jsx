import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as API from '../services/launches'

const User = () => {
    const {id} = useParams()
    const [pueblo, setPueblo] = useState([])

    useEffect(()=>{
        getDatos()

    },[])

const getDatos = async()=>{
    const data = await fetch(`${API.API_URL}/${id}`)
    const users = await data.json()
    setPueblo(users)

}

return (
    <div>
        <h3>{pueblo.name}</h3>
        <p>{pueblo.username}</p>

    </div>
  )
}

export default User
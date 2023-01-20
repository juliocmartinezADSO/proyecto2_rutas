import React from "react";
import * as API from "../services/launches";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
export function Nosotros() {
    const [post, setPost] = useState([])


    useEffect(() => {
        API.getDatos().then(setPost)
    }, [])

    return (<>
        <h1>Consumiendo API</h1>

        <ul>
            {post.map((user) => (
                <li key={user.id}>
                        <Link to={`/nosotros/${user.id}`}>
                            {user.username} - {user.name}

                        </Link>

                </li>

            ))}
        </ul>
    </>);
}

import React from "react";

export const API_URL = `https://jsonplaceholder.typicode.com/users`

export async function getDatos() {
        const data = await fetch(API_URL)
        const datos = await data.json()
        return datos
}
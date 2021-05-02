import React, {useEffect, useState} from 'react'
import style from "./PageOne.module.css";
import axios from "axios";

export const PageOne = () => {
    const [users,setUser]=useState<any[]>([])
    useEffect(() => {
axios.get("http://localhost:8888/users").then(res=>{
    setUser(res.data)
})
    }, [])



    return (

        <div className={style.xxx}>
            {users.map(u=><div>{u.name}</div>)}
        </div>
    )
}
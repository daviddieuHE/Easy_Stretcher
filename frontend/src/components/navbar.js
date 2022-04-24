import React from "react"
import "./navbar.css"
import logo from "../img/logo.png"
import { resetTable } from "../request"
import {useMutation, useQueryClient} from "react-query"

function Navbar({logout,jour, handleChange}) {
    const queryClient = useQueryClient()

    const resetMutation = useMutation(resetTable, {
        onSuccess: () => queryClient.refetchQueries("patients")
    })

    return (
        <div className="navbar">
            <img src={logo} />
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <DayPicker handleChange={handleChange} jour={jour} />
                <button onClick={resetMutation.mutate} style={{marginLeft: 10}}>Reset</button>
            </div>
            <button id='logout' onClick={logout}>Logout</button>
        </div>
    )
}

function DayPicker({jour, handleChange}) {
    return (
        <select value={jour} className="day-picker" onChange={handleChange}>
            <option>Lundi</option>
            <option>Mardi</option>
            <option>Mercredi</option>
            <option>Jeudi</option>
            <option>Vendredi</option>
            <option>Samedi</option>
            <option>Dimanche</option>
        </select>
    )
}

export default Navbar
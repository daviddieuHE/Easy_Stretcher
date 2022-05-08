import React from "react"
import "./navbar.css"
import logo from "../../img/logo.png"
import { resetTable } from "../../request"
import {useMutation, useQueryClient} from "react-query"


//Composant de la bar de vavigation. Contient Logo, button Logout, selection du jour et button Reset.
function Navbar({logout,date, handleChange, token}) {
    const queryClient = useQueryClient()

    const resetMutation = useMutation(() => resetTable(token), {
        onSuccess: () => queryClient.refetchQueries("patients")
    })

    return (
        <div className="navbar">
            <img src={logo} />
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <input data-testid="dayPicker" type="date" value={date} onChange={(e) => handleChange(e.target.value)} />
                <button onClick={resetMutation.mutate} style={{marginLeft: 10}}>Reset</button>
            </div>
            <button id='logout' onClick={logout}>Logout</button>
        </div>
    )
}

export default Navbar
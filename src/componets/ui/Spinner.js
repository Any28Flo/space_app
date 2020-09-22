import React from "react"
import './../../sources/styles/main.css'
const Spinner = () =>{
    return(
        <button type="button" className="bg-indigo-600 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Cargando
        </button>
    )
}
export default Spinner
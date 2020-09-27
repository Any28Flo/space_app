import React from 'react';
import Launche from './Launche'
import '../../sources/styles/main.css'

const Launches = ({launches}) =>{
    return(
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            {
                launches.map( (launche, index) => <Launche key={index} data={launche}/>)
            }
        </div>
    )
}
export default Launches;
import React from 'react';
import Launche from './Launche'
const Launches = ({launches}) =>{
    console.log(launches)
    return(
        <div>
            <h2>Launches</h2>
            {
                launches.map( (launche, index) => <Launche key={index} data={launche}/>)
            }
        </div>
    )
}
export default Launches;
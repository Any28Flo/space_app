import React from 'react';

const Launche = ({data}) =>{
    console.log(data)
    const {flight_number , links, launch_site , name} = data;
    console.log()
    return(
        <div className="bg-white rounded-lg p-6">
            <img className="h-16 w-16 rounded-full mx-auto" src={`${links.patch.small}`} alt="launch_image"/>
            <div>
                <h2 className="text-lg">{flight_number}</h2>
                <div className="text-gray-600">{launch_site}</div>
                <div className="text-gray-600">{name}</div>
            </div>
        </div>
    )
}
export default Launche
import React , {Fragment}from 'react'
import {useSelector} from "react-redux";
import './../sources/styles/main.css'

function Home (){
    const {data} = useSelector(state => state.launches)
    console.log(data)
    function renderRocket (){
      //  let rocket =  rockets[0];

        return(
            <div className="bg-white rounded-lg p-6">
                <img className="h-16 w-16 rounded-full mx-auto" src="avatar.jpg"/>
                <div>
                  <h2 className="text-lg">Erin Lindford</h2>
              <div className="text-purple-500">Product Engineer</div>
              <div className="text-gray-600">erinlindford@example.com</div>
             <div className="text-gray-600">(555) 765-4321</div>
            </div>
          </div>
    )
    }

    return (
        <div>
            <h1>Home</h1>
            <Fragment>

                {renderRocket()}
            </Fragment>
        </div>

    )

}
export default Home
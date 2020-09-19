import React , {Fragment}from 'react'
import {useSelector} from "react-redux";


function Home ({rockets}){
    const counter = useSelector(state => state.launches.launches)
    console.log(counter[0])
    function renderRocket (){
      //  let rocket =  rockets[0];

        return(
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                            et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
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
import React , {Fragment}from 'react'
import {useSelector} from "react-redux";
import '../../sources/styles/main.css'
import Spinner from "../ui/Spinner";
import Launches from "../Launches/Launches";
function Home (){
    const {data,loading} = useSelector(state => state.launches)

    return (
        <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">

            <h1>Home</h1>
            {
                loading ? <Spinner/> : <Launches launches={data}/>
            }

        </div>

    )

}
export default Home
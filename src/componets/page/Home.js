import React , {Fragment}from 'react'
import {useSelector} from "react-redux";
import '../../sources/styles/main.css'
import Spinner from "../ui/Spinner";
import Launches from "../Launches/Launches";
function Home (){
    const {data,loading} = useSelector(state => state.launches)

    return (
        <div>
            <h1>Home</h1>
            {
                loading ? <Spinner/> : <Launches launches={data}/>
            }
       {/*     <Fragment>


                {renderRocket()}
            </Fragment>*/}
        </div>

    )

}
export default Home
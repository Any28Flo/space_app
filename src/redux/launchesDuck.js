import axios from 'axios'

//constant
const initState ={
    fetching:false,
    launches : [],
    current: {}
}
const URL = 'https://api.spacexdata.com/v4'

let GET_LAUCH = "GET_LAUCH";
let GET_LAUCH_SUCESS = "GET_LAUNCH_SUCESS"
let GET_LAUCH_ERROR = "GET_LAUCH_ERROR"
//Reducer
export default function reducer(state=initState, actions){
    switch (actions.type) {
        case GET_LAUCH:
        case  GET_LAUCH_SUCESS:
            return {...state , launches: actions.payload}
        case GET_LAUCH_ERROR:
        default: return state;

    }
}

//Actions
export let getCharactersAction = () =>(dispatch, getState) =>{
    return axios.get(  `${URL}/launches`)
        .then(res =>{
            console.log(res)
                dispatch({
                    type: GET_LAUCH_SUCESS,
                    payload : res.data
                })
        })
}
import axios from 'axios'

//constant
const initState ={
    loading: false,
    data: [],
    error: null
}
const URL = 'https://api.spacexdata.com/v4'

let GET_LAUCH = "GET_LAUCH";
let GET_LAUCH_SUCESS = "GET_LAUNCH_SUCESS"
let GET_LAUCH_ERROR = "GET_LAUCH_ERROR"
//Reducer
export default function reducer(state=initState, actions){
    switch (actions.type) {
        case GET_LAUCH:
            return {...state,fetching : true}
        case  GET_LAUCH_SUCESS:
            return {...state , launches: actions.payload, fetching: false }
        case GET_LAUCH_ERROR:
            return {...state , fetching: false, error: actions.payload}
        default: return state;

    }
}

//Actions
export let getCharactersAction = () =>(dispatch, getState) =>{
    dispatch({
        type: GET_LAUCH
    })
    return axios.get(  `${URL}/launches`)
        .then(res =>{
                dispatch({
                    type: GET_LAUCH_SUCESS,
                    payload : res.data
                })
        })
        .catch(error =>{
            dispatch({
                type : GET_LAUCH_ERROR,
                payload : error.response.message
            })
        })
}
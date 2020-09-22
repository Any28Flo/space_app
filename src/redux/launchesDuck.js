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
export default function launchesReducer(state=initState, actions){
    switch (actions.type) {
        case GET_LAUCH:
            return {...state,loading: true}
        case  GET_LAUCH_SUCESS:
            return {...state , data: actions.payload, loading: false }
        case GET_LAUCH_ERROR:
            return {...state , loading: false, error: actions.payload}
        default: return state;

    }
}
//action (action creator)
export const getLaunchesStart = () => ({
    type: GET_LAUCH,
});
export const getLaunchSucess = (payload)=>({
    type: GET_LAUCH_SUCESS,
    payload
})
export const getLaunchError = payload =>({
    type: GET_LAUCH_ERROR,
    payload
})
//Actions

export let getCharactersAction = () => async (dispatch) =>{
   dispatch(getLaunchesStart())
    try{
       const {data} =await  axios.get(  `${URL}/launches`)
        const array = data.filter( element => element.upcoming === true)
        dispatch(getLaunchSucess(data))
    }catch (e) {
        dispatch(getLaunchError(e))
    }

}
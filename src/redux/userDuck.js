//constant
const initState={
    isLogged : false
}
let LOGIN = "LOGIN"
//Reducer
export default function reducer(state=initState, action ={}){
    switch (action.type) {
        //do reducer stuff
        case LOGIN:
        default: return state;
    }
}

//Actions
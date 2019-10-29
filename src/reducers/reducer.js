import {ADD_LIST, REMOVE_LIST, EDIT_LIST} from '../contants/actionType'

const initState=[]

const listReducer=(state=initState,action)=>{
    if(action.type===ADD_LIST){
        return state.concat(action.payload)
    }
    if(action.type===REMOVE_LIST){
        return state.filter((el,i)=>i!==action.payload)
    }
    if(action.type===EDIT_LIST){
        console.log(action.index)
        return state.map((el,i)=>{if(i===action.index) {
            console.log(i)
           return el=action.payload}
        else return el})
    }

    return state
}
export default listReducer
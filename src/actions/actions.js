import {ADD_LIST, REMOVE_LIST, EDIT_LIST} from '../contants/actionType'

export const addList=(payload)=>{

    return {type:ADD_LIST, payload}

}

export const removeList=(payload)=>{
    
    return {type:REMOVE_LIST, payload}
}

export const editList=(payload,index)=>{
    return {type:EDIT_LIST, index,payload}
}
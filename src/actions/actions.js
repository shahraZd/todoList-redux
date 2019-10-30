import {ADD_LIST, REMOVE_LIST, EDIT_LIST,CHECK_LIST} from '../contants/actionType'

export const addList=(payload)=>{

    return {type:ADD_LIST, payload}

}

export const removeList=(payload)=>{
    
    return {type:REMOVE_LIST, payload}
}

export const editList=(payload,index)=>{
    return {type:EDIT_LIST, index,payload}
}
export const checkList=(index)=>{
    return {type:CHECK_LIST, index}
}
import React, { Component } from 'react'
import TodoList from './toDoList'
import Add from "./Add"

export default class App extends Component {
    render() {
        return (
            <div>
                <Add/>
                <TodoList/>
                
                
            </div>
        )
    }
}

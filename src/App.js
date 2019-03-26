import React from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import TodoItem from "./components/TodoItem"

function App() {
    return (
        <div className="App-wrap">
            <Header />

            <div className="todo-list">
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>


            <Footer />
        </div>
    )
}

export default App
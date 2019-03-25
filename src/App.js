import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App-wrap">
            <Header />
            <MainContent/>
            <Footer />
        </div>
    )
}

export default App
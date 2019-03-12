import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    <a
                        className="App-link"
                        href="https://www.google.com.ua"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        chek
                    </a>
                    <form action="">
                        <input type="text"/>
                    </form>
                </header>
                <div className="App-block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, iusto.
                </div>
            </div>

        );
    }
}


export default App;

import React from 'react';
import Header from './components/Header';
import { unmountComponentAtNode } from 'react-dom';

// Componente
// Propriedade
// Estado
function App () {
    return (
    <>
        <Header title="Homepage">
            <ul>
                <li>HomePage</li>
                <li>Projects</li>
            </ul>
        </Header>
        <Header title="Projects">
            <ul>
                <li>HomePage</li>
                <li>Projects</li>
                <li>Login</li>
            </ul>
        </Header>
    </>
    )
}

export default App;
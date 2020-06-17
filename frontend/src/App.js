import React, { userState, useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

// Componente
// Propriedade
// Estado

// useState retorna arrey com 2 posições
// 1 posição retorna a variavel com o valor atual
// 2 posição é uma função para alterar seu valor.

function App () {

    const [projects, setProjects] = useState(['Desenvolvimento de app','Front-end web']);

    function handleAddProject(){
         //Conceito de imutabilidade
        // Spread tras tudo.
        setProjects([...projects, `Novo projeto ${Date.now()}`])
    }

    return (
        <>
            <Header title="Homepage" />

            <img width={300} src={backgroundImage}/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;
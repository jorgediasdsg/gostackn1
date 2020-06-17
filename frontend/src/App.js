import React, { useEffect, useState } from 'react';
import api from './services/api'

import './App.css';

import Header from './components/Header';

// Componente
// Propriedade
// Estado

// useState retorna arrey com 2 posições
// 1 posição retorna a variavel com o valor atual
// 2 posição é uma função para alterar seu valor.

function App () {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject(){
         //Conceito de imutabilidade
        // Spread tras tudo.
        // setProjects([...projects, `Novo projeto ${Date.now()}`])
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: `User ${Date.now()}`
        })

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Homepage" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;
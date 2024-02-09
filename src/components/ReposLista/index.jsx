import { useEffect, useState } from "react";

const ReposList =() => {

    const [repos, setRepos] = useState([])
    const [ estaCarregando, setEstaCarregando ] = useState(true);
    
    useEffect(() => {
        setEstaCarregando(true);
        fetch('https://api.github.com/users/zingrad/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false),
                setRepos(resJson)
            }, 3000)
        })
    }, []);

    return (
        <div>
            {estaCarregando ? (
                <h2>Carregando...</h2>
            ) : (
                <ul >
                    {repos.map(({ id, name, html_url}) => (
                        <li key={id}>
                            <div>
                                <b>Nome:</b> {name}
                            </div>
                            <a target="_blank" href={html_url} rel="noreferrer">Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};



export default ReposList;
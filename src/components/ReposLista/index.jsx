import { useEffect, useState } from "react";

import styles from './ReposLista.module.css'

const ReposList =({nomeUsuario}) => {

    const [repos, setRepos] = useState([])
    const [ estaCarregando, setEstaCarregando ] = useState(true);
    
    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false),
                setRepos(resJson)
            }, 1000)
        })
    }, [nomeUsuario]);

    return (
        <div className='container'>
            {estaCarregando ? (
                <h2>Carregando...</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, html_url}) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                              <a className={styles.itemLink} target="_blank" href={html_url} rel="noreferrer">Visitar no Github</a>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};



export default ReposList;
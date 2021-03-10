const repositoryName = 'teste';

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>forms in react</p>
                    <a href="">
                        acessar repositórios
                    </a>
                </li>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>forms in react</p>
                    <a href="">
                        acessar repositórios
                    </a>
                </li>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>forms in react</p>
                    <a href="">
                        acessar repositórios
                    </a>
                </li>
            </ul>

        </section>
    );
}
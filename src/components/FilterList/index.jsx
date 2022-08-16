import './styles.css'

export default function FilterList({ setFilter }) {
    return(
        <>
            <div className="resumo">
                <h3>Resumo financeiro</h3>
                <div className="buttons">
                    <button onClick={() => setFilter('todos')}>Todos</button>
                    <button onClick={() => setFilter('entrada')}>Entradas</button>
                    <button onClick={() => setFilter('saída')}>Despesas</button>
                </div>
            </div>
        </>
    )
}


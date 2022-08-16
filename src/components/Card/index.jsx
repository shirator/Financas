import './styles.css'

export default function Card({transaction, setListTransactions}) {
    // function removeTransaction() {
    //     setListTransactions([...])
    // }

    if(transaction.type === 'entrada') {
        return(
            <>
                <div className="card cardEntrada">
                    <div className="description">
                        <h3>{transaction.description}</h3>
                        <p>{transaction.type}</p>
                    </div>
                    <div className="value">
                        <p>R$ {transaction.value}</p>
                        <button>X</button>
                    </div>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className="card cardSaida">
                    <div className="description">
                        <h3>{transaction.description}</h3>
                        <p>{transaction.type}</p>
                    </div>
                    <div className="value">
                        <p>R$ {transaction.value}</p>
                        <button>X</button>
                    </div>
                </div>
            </>
        )
    }
    
}
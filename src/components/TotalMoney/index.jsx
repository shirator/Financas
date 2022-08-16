import "./styles.css"

export default function TotalMoney({ listTransactions }) {
    const valorTotal =  listTransactions.reduce((previous, current) => {
        return previous + Number(current.value);
    }, 0);

    return(
        <>
            <div className="containerValor">
                <div className="valorTotal">
                    <h3>Valor Total:</h3>
                    <h3>R$ {valorTotal}</h3>
                </div>
                <small>O valor refere-se ao saldo</small>
            </div>
        </>
    )
};
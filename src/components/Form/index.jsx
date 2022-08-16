import './styles.css'

export default function Form({ listTransaction, setListTransactions }) {
    function handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target.form;
        let formValor;
        const formDescricao = form.descricao.value;
        const formTipo = form.tipo.value;

        if(formTipo === 'entrada') {
            formValor = form.valor.value;
        }
        else{
            formValor= -form.valor.value;
        }
        const newData = {
            description: formDescricao,
            type: formTipo,
            value: formValor,
        };
        setListTransactions([...listTransaction, newData])
    }
    return(
        <>
            <form className="form">
                <label>Descriçao</label>
                <input type="text" placeholder="Digite aqui sua descriçao" id='descricao'/>
                <small>Ex: Compra de roupas</small>

                <div className="containerValue">
                    <div className="value">
                        <label>Valor</label>
                        <input type="number" placeholder="1" className='valor' id='valor'/>
                        <span>R$</span>
                    </div>
                    <div className="value">
                        <label>Tipo de valor</label>
                        <select id='tipo'>
                            <option value="entrada">Entrada</option>
                            <option value="saída">Saida</option>
                        </select>
                    </div>
                </div>
                <button onClick={handleFormSubmit}>Inserir valor</button>
            </form>
        </>
    )
}
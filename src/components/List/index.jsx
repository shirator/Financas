import Card from "../Card"

export default function List({ listTransactions, filterTransactions }) {
    return(
        (filterTransactions.length > 0 ? filterTransactions : listTransactions).map((transaction, index) => <Card transaction={transaction} key={index} />)
    );
};
import { useState, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import FilterList from './components/FilterList';
import TotalMoney from './components/TotalMoney';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
    { description: "Conta de internet", type: "saída", value: -300 },
    { description: "FGTS", type: "entrada", value: 1200 }
]);
  const [filterTransactions, setFilterTransactions] = useState([]);
  const [filter, setFilter] = useState('todos')

  useEffect(() => {setFilterTransactions((listTransactions.filter(elem => elem.type === filter)))}, [filter, listTransactions]);

  if(isLoggedIn) {
    return (
      <div className="App">
        <Header setLoggedIn={setLoggedIn}></Header>
        <div className="containerApp">
          <main>
            <Form listTransaction={listTransactions} setListTransactions={setListTransactions}></Form>
            <TotalMoney listTransactions={listTransactions}></TotalMoney>
          </main>
          <aside>
            <FilterList setFilter={setFilter}></FilterList>
            <List listTransactions={listTransactions} filterTransactions={filterTransactions}></List>
          </aside>
        </div>
      </div>
    );
  }
  else {
    return(
      <div className="App">
      <LandingPage setLoggedIn={setLoggedIn}></LandingPage>
    </div>
    )
  }
}

export default App;

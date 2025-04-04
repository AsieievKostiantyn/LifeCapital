import cls from './Investments.module.scss';
import { InvestmentCardBackSide } from '../../components/InvestmentCard/InvestmentCard';
import InvestmentsShareRow from './InvestmentsShareRow';
import InvestmentCardPropTable from './InvestmentCardPropTable';
import useLocalStorage from '../../service/useLocalStorage';
import { listOfSmallInvestments } from '../../data/smallInvestments';
import { listOfLargeInvestments } from '../../data/largeInvestments';
import { useState, useEffect } from 'react';
import PreButtonIcon from '../../components/PreButtonIcon/PreButtonIcon';
import shuffleList from '../../service/shuffleList';

const initialData = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  code: '',
  packetCoast: '',
  sharePrice: '',
  numberOfShares: '',
}));

const Investments = () => {
  const [largeInvestments, setLargeInvestments] = useState(
    shuffleList(listOfLargeInvestments)
  );
  const [isInvested, setIsInvested] = useState(false);
  const [tableData, setTableData] = useLocalStorage(
    'investmentsShareTable',
    initialData
  );

  const handleChange = (index, field, value) => {
    setTableData((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  };

  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [boughtInvestment, setBoughtInvestment] = useState(() => {
    const savedInvestments = localStorage.getItem('boughtInvestment');
    return savedInvestments ? JSON.parse(savedInvestments) : [];
  });
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    localStorage.setItem('boughtInvestment', JSON.stringify(boughtInvestment));
  }, [boughtInvestment]);

  const handleRandomSmallInvestment = () => {
    const randomIndex = Math.floor(
      Math.random() * listOfSmallInvestments.length
    );
    setSelectedInvestment(listOfSmallInvestments[randomIndex]);

    setIsInvested(false);
  };

  const handleRandomLargeInvestment = () => {
    if (largeInvestments.length === 0) return;

    const nextInvestment = largeInvestments.shift();
    largeInvestments.push(nextInvestment);

    setSelectedInvestment(nextInvestment);
    setIsInvested(false);
  };

  const buyInvestment = () => {
    if (
      selectedInvestment &&
      !boughtInvestment.some(
        (investment) => investment.id === selectedInvestment.id
      )
    ) {
      setBoughtInvestment((prevInvestments) => [
        ...prevInvestments,
        { ...selectedInvestment, inputValue: '' }, // Додаємо поле для input
      ]);
    }

    setIsInvested(true);
  };
  const sellInvestment = (investmentId) => {
    setBoughtInvestment(
      boughtInvestment.filter((value) => value.id !== investmentId)
    );
  };

  const handleInputChange = (investmentId, newValue) => {
    setBoughtInvestment((prevInvestments) =>
      prevInvestments.map((investment) =>
        investment.id === investmentId
          ? { ...investment, inputValue: newValue }
          : investment
      )
    );
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Забороняємо перезавантаження сторінки

    const foundInvestment =
      listOfSmallInvestments.find(
        (inv) => inv.id.toLowerCase() === searchId.toLowerCase()
      ) ||
      listOfLargeInvestments.find(
        (inv) => inv.id.toLowerCase() === searchId.toLowerCase()
      );

    if (foundInvestment) {
      setSelectedInvestment(foundInvestment);
    } else {
      alert('Інвестиція не знайдена!');
    }
  };

  return (
    <>
      <div className={`container borderBottom`}>
        <form action="getInvestmentCard">
          <div className={cls.searchInvestmentForm}>
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Введіть ID інвестиції"
            />
            <button onClick={handleSearch}>Знайти</button>
          </div>
        </form>
        <div className={cls.chooseCard}>
          <div className={cls.getRandomInvestmentButtons}>
            <button
              onClick={handleRandomSmallInvestment}
              className={cls.investmentCardBorder}
            >
              <PreButtonIcon bgColor={'rgba(221, 146, 6, 0.845)'} />
              Маленькі інвестиції
            </button>
            <button
              onClick={handleRandomLargeInvestment}
              className={cls.investmentCardBorder}
            >
              <PreButtonIcon bgColor={'rgba(221, 146, 6, 0.845)'} />
              <PreButtonIcon bgColor={'rgba(221, 146, 6, 0.845)'} />
              Великі інвестиції
            </button>
          </div>
          <div style={{ width: '100%' }}>
            {selectedInvestment ? (
              <div
                className={`card ${cls.investmentCardBorder} ${cls.investmentCard}`}
              >
                <p>ID: {selectedInvestment.id}</p>
                <p className={cls.amountOfExpenses}>
                  {selectedInvestment.title}
                </p>
                <p
                  className={cls.description}
                  dangerouslySetInnerHTML={{
                    __html: selectedInvestment.description,
                  }}
                />
                <InvestmentCardPropTable investment={selectedInvestment} />
                {isInvested ? (
                  <button
                    onClick={buyInvestment}
                    disabled={isInvested}
                    style={{ border: '1px solid grey' }}
                  >
                    <PreButtonIcon bgColor="grey" />
                    Інвестовано
                  </button>
                ) : (
                  <button
                    onClick={buyInvestment}
                    disabled={isInvested}
                    style={{ border: '1px solid green' }}
                  >
                    <PreButtonIcon bgColor="green" />
                    Інвестувати
                  </button>
                )}
              </div>
            ) : (
              <InvestmentCardBackSide />
            )}
          </div>
        </div>
      </div>
      <div className={`${cls.myInvestments} borderBottom`}>
        <h2>Мої інвестиції</h2>
        <div>
          <h3 className="table-header">Бізнес та нерухомість</h3>
          {boughtInvestment.length ? (
            boughtInvestment.map((value) => (
              <div
                className={`card ${cls.investmentCardBorder} ${cls.boughtInvestmentCard}`}
                key={value.id}
              >
                <p>ID: {value.id}</p>
                <p>{value.title}</p>
                <p
                  className={cls.description}
                  dangerouslySetInnerHTML={{
                    __html: value.description,
                  }}
                />
                <InvestmentCardPropTable key={value.id} investment={value} />
                <input
                  type="text"
                  value={value.inputValue}
                  onChange={(e) => handleInputChange(value.id, e.target.value)}
                  placeholder="Інформація про угоду"
                />
                <button
                  onClick={() => sellInvestment(value.id)}
                  style={{ border: '1px solid red' }}
                >
                  <PreButtonIcon bgColor={'red'} />
                  Продати
                </button>
              </div>
            ))
          ) : (
            <p>У вас немає жодної інвестиції</p>
          )}
        </div>
        <div className={cls.tableContainer}>
          <div>
            <h3 className="table-header">Цінні папери</h3>
            <table>
              <thead>
                <tr>
                  <th>Код</th>
                  <th>Вартість пакета</th>
                  <th>Вартість однієї акції (пая)</th>
                  <th>Кількість</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <InvestmentsShareRow
                    key={row.id}
                    row={row}
                    index={index}
                    handleChange={handleChange}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investments;

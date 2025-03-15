import cls from './Investments.module.scss';

const InvestmentCardPropTable = ({ investment }) => {
  return (
    <table className={cls.investmentCardTableWrapper}>
      <thead>
        <tr>
          {investment.type === 'shares' ? (
            <>
              <th>Дивіденди</th>
              <th>Ціна акцій сьогодні</th>
              <th>Діапазон цін</th>
            </>
          ) : investment.type === 'currency' ? (
            <>
              <th>Курс</th>
              <th>Діапазон цін</th>
            </>
          ) : (
            <>
              <th>Вартість</th>
              <th>Внесок</th>
              <th>Кредит</th>
              <th>ПД</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          {investment.type === 'shares' ? (
            <>
              <td>{investment.dividends}</td>
              <td>{investment.currentlyPrice}</td>
              <td>{investment.priceRange}</td>
            </>
          ) : investment.type === 'currency' ? (
            <>
              <td>{investment.exchangeRate}</td>
              <td>{investment.priceRange}</td>
            </>
          ) : (
            <>
              <td>{investment.cost}</td>
              <td>{investment.firstPayment}</td>
              <td>{investment.credit}</td>
              <td>{investment.passiveIncome}</td>
            </>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default InvestmentCardPropTable;

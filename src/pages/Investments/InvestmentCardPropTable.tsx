import { InvestmentType } from './Investments';

interface InvestmentCardPropTableProps {
  investment: InvestmentType;
}

const InvestmentCardPropTable = ({
  investment,
}: InvestmentCardPropTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {investment.type === 'shares' ? (
            <>
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
              <th>Код</th>
              <th>Перший внесок</th>
              <th>Вартість</th>
              <th>Інвестор</th>
              <th>ПД</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          {investment.type === 'shares' ? (
            <>
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
              <td>{investment.code}</td>
              <td>{investment.firstPayment}</td>
              <td>{investment.cost}</td>
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

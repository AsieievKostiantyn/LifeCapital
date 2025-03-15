import cls from './styles/PlayerLegend.module.scss';
import { useState } from 'react';
import { listOfPlayersLegends } from '../data/playerLegend';

const PlayerLegend = () => {
  const [selectedLegend, setSelectedLegend] = useState(() => {
    const savedLegend = localStorage.getItem('selectedLegend');
    return savedLegend ? JSON.parse(savedLegend) : null;
  });

  const getRandomLegend = () => {
    const randomIndex = Math.floor(Math.random() * listOfPlayersLegends.length);
    const randomLegend = listOfPlayersLegends[randomIndex];

    setSelectedLegend(randomLegend);
    localStorage.setItem('selectedLegend', JSON.stringify(randomLegend));
  };

  return (
    <>
      <div className={cls.container}>
        <div className={cls.tableContainer}>
          <button onClick={getRandomLegend}>Отримати легенду</button>
          {selectedLegend ? (
            <div className={cls.tableContainer}>
              <div>
                <h3 className="table-header">Загальна інформація</h3>
                <table className={cls.table}>
                  <tbody>
                    <tr>
                      <th>Професія</th>
                      <td className="summary-td">
                        {selectedLegend.profession}
                      </td>
                    </tr>
                    <tr>
                      <th>Оплата праці</th>
                      <td className="summary-td">{selectedLegend.salary}</td>
                    </tr>
                    <tr>
                      <th>Кількість дітей</th>
                      <td className="summary-td">{selectedLegend.children}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="table-header">Активи</h3>
                <table className={cls.table}>
                  <tbody>
                    <tr>
                      <th>Депозитний банківський рахунок</th>
                      <td className="summary-td">
                        {selectedLegend.assets.deposit}
                      </td>
                    </tr>
                    <tr>
                      <th>Банківське золото</th>
                      <td className="summary-td">
                        {selectedLegend.assets.gold}
                      </td>
                    </tr>
                    <tr>
                      <th>Накопичувальне страхування</th>
                      <td className="summary-td">
                        {selectedLegend.assets.savingsInsurance}
                      </td>
                    </tr>
                    <tr>
                      <th>Ризикове страхування</th>
                      <td className="summary-td">
                        {selectedLegend.assets.riskInsurance}
                      </td>
                    </tr>
                    <tr>
                      <th>Інтелектуальна власність</th>
                      <td className="summary-td">
                        {selectedLegend.assets.intellectualProperty}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="table-header">Витрати</h3>
                <table className={cls.table}>
                  <tbody>
                    <tr>
                      <th>Податок на доходи</th>
                      <td className="summary-td">
                        {selectedLegend.costs.incomeTax}
                      </td>
                    </tr>
                    <tr>
                      <th>Оплата комунальних послуг</th>
                      <td className="summary-td">
                        {selectedLegend.costs.utilities}
                      </td>
                    </tr>
                    <tr>
                      <th>Щомісячні побутові витрати</th>
                      <td className="summary-td">
                        {selectedLegend.costs.householdExpenses}
                      </td>
                    </tr>
                    <tr>
                      <th>Додаткові витрати</th>
                      <td className="summary-td">
                        {selectedLegend.costs.otherExpenses}
                      </td>
                    </tr>
                    <tr>
                      <th>Витрати на одну дитину</th>
                      <td className="summary-td">
                        {selectedLegend.costs.childExpenses}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className={cls.table}>
                  <thead>
                    <tr>
                      <th>Кредити</th>
                      <th>Сума кредита</th>
                      <th>Сплата, %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>На нерухомість</td>
                      <td>
                        {selectedLegend.costs.credits.realEstate.amountOfCredit}
                      </td>
                      <td>
                        {selectedLegend.costs.credits.realEstate.interest}
                      </td>
                    </tr>
                    <tr>
                      <td>На автомобіль</td>
                      <td>{selectedLegend.costs.credits.car.amountOfCredit}</td>
                      <td>{selectedLegend.costs.credits.car.interest}</td>
                    </tr>
                    <tr>
                      <td>На побутову техніку</td>
                      <td>
                        {selectedLegend.costs.credits.machinery.amountOfCredit}
                      </td>
                      <td>{selectedLegend.costs.credits.machinery.interest}</td>
                    </tr>
                    <tr>
                      <td>На меблі</td>
                      <td>
                        {selectedLegend.costs.credits.furniture.amountOfCredit}
                      </td>
                      <td>{selectedLegend.costs.credits.furniture.interest}</td>
                    </tr>
                    <tr>
                      <td>Інші кредити</td>
                      <td>
                        {
                          selectedLegend.costs.credits.otherCredits
                            .amountOfCredit
                        }
                      </td>
                      <td>
                        {selectedLegend.costs.credits.otherCredits.interest}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className={cls.container}>
              <h2 className="table-header">
                Отримайте легенду натиснувши на кнопку
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PlayerLegend;

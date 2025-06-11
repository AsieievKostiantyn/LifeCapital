import cls from './styles/PlayerLegend.module.scss';
import { useEffect, useState } from 'react';
import { listOfPlayersLegends, PlayerLegendType } from '../data/playerLegend';
import { useSessionLocalStorage } from '../service/hooks/useSessionLocalStorage';

const PlayerLegend = () => {
  const [selectedLegend, setSelectedLegend] = useState<PlayerLegendType | null>(
    null
  );
  const [selectedProfession, setSelectedProfession] =
    useSessionLocalStorage<string>('legend-ProfessionName', '');

  useEffect(() => {
    if (selectedProfession) {
      const legend = listOfPlayersLegends.find(
        (legend): legend is PlayerLegendType =>
          legend.profession === selectedProfession
      );
      setSelectedLegend(legend ?? null);
    }
  }, [selectedProfession]);

  const getRandomLegend = () => {
    const randomIndex = Math.floor(Math.random() * listOfPlayersLegends.length);
    const randomLegend = listOfPlayersLegends[randomIndex];

    setSelectedLegend(randomLegend as PlayerLegendType);
    setSelectedProfession(randomLegend.profession);
  };

  return (
    <>
      <div className="container">
        <button onClick={getRandomLegend}>Отримати легенду</button>
        {selectedLegend ? (
          <div style={{ width: '100%' }} className="container">
            <div>
              <h3 className="table-header">Загальна інформація</h3>
              <table className={cls.table}>
                <tbody>
                  <tr>
                    <th>Професія</th>
                    <td className="summary-td">{selectedLegend.profession}</td>
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
                    <td className="summary-td">{selectedLegend.assets.gold}</td>
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
                  <tr>
                    <th>Інтелектуальна власність ПД</th>
                    <td className="summary-td">
                      {selectedLegend.assets.intellectualPropertyIncome}
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
                    <th>Щомісячні побутові витрати</th>
                    <td className="summary-td">
                      {selectedLegend.costs.totalExpenses}
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
                    <td>{selectedLegend.costs.credits.realEstate.interest}</td>
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
                      {selectedLegend.costs.credits.otherCredits.amountOfCredit}
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
    </>
  );
};

export default PlayerLegend;

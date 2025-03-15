import cls from './AirBag.module.scss';

const IncomeRow = ({ row, index, handleChange }) => {
  return (
    <tr>
      <td className={cls.tdIndexStyle}>{row.id}</td>
      <td className={cls.tdStyle}>
        <input
          type="text"
          value={row.source}
          onChange={(e) => handleChange(index, 'source', e.target.value)}
        />
      </td>
      <td className={cls.tdStyle}>
        <input
          type="text"
          value={row.replenishment}
          onChange={(e) => handleChange(index, 'replenishment', e.target.value)}
        />
      </td>
      <td className={cls.tdStyle}>
        <input
          type="text"
          value={row.accumulatedAmount}
          onChange={(e) =>
            handleChange(index, 'accumulatedAmount', e.target.value)
          }
        />
      </td>
    </tr>
  );
};

export default IncomeRow;

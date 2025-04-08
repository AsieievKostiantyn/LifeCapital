import { IncomeRowType } from './AirBag';
import cls from './AirBag.module.scss';

interface IncomeRowProps {
  row: IncomeRowType;
  index: number;
  handleChange: (
    index: number,
    field: keyof IncomeRowType,
    value: string
  ) => void;
}

const IncomeRow = ({ row, index, handleChange }: IncomeRowProps) => {
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

import cls from '../../AirBag/AirBag.module.scss';
import { AirBagTableRowType } from '../../../types/db';
import { getChangeClass } from '../../../service/utils/getChangeClass';

interface AbTableRowProps {
  row: AirBagTableRowType;
  changes?: Partial<
    Record<keyof AirBagTableRowType, 'changed' | 'added' | 'removed'>
  >;
}

const AbTableRow = ({ row, changes = {} }: AbTableRowProps) => {
  return (
    <tr>
      <td className={cls.tdIndexStyle}>{row.id}</td>
      <td className={`${cls.tdStyle} ${getChangeClass('source', changes)}`}>
        <input name="source" type="text" value={row.source} readOnly />
      </td>
      <td
        className={`${cls.tdStyle} ${getChangeClass('replenishment', changes)}`}
      >
        <input
          name="replenishment"
          type="text"
          value={row.replenishment}
          readOnly
        />
      </td>
      <td
        className={`${cls.tdStyle} ${getChangeClass('accumulatedAmount', changes)}`}
      >
        <input
          type="accumulatedAmount"
          value={row.accumulatedAmount}
          readOnly
        />
      </td>
    </tr>
  );
};

export default AbTableRow;

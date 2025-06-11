import { BusinessTableRowType } from '../../../types/db';
import { getChangeClass } from '../../../service/utils/getChangeClass';

interface FinBusinessTableRowProps {
  row: BusinessTableRowType;
  changes?: Partial<
    Record<keyof BusinessTableRowType, 'changed' | 'added' | 'removed'>
  >;
}

const FinBusinessTableRow = ({
  row,
  changes = {},
}: FinBusinessTableRowProps) => {
  return (
    <tr>
      <td className={getChangeClass('code', changes)}>
        <input name="code" type="text" value={row.code} readOnly />
      </td>
      <td className={getChangeClass('firstPayment', changes)}>
        <input
          name="firstPayment"
          type="text"
          value={row.firstPayment}
          readOnly
        />
      </td>
      <td className={getChangeClass('cost', changes)}>
        <input name="cost" type="text" value={row.cost} readOnly />
      </td>
      <td className={getChangeClass('credit', changes)}>
        <input name="credit" type="text" value={row.credit} readOnly />
      </td>
      <td className={getChangeClass('passiveIncome', changes)}>
        <input
          name="passiveIncome"
          type="text"
          value={row.passiveIncome}
          readOnly
        />
      </td>
    </tr>
  );
};

export default FinBusinessTableRow;

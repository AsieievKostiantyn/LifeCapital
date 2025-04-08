import { businessTableRowType } from './FinancesIncome';

interface BusinessTableRowProps {
  row: businessTableRowType;
  index: number;
  handleChange: (
    index: number,
    field: keyof businessTableRowType,
    value: string
  ) => void;
}

const BusinessTableRow = ({
  row,
  index,
  handleChange,
}: BusinessTableRowProps) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          value={row.code}
          onChange={(e) => handleChange(index, 'code', e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={row.firstPayment}
          onChange={(e) => handleChange(index, 'firstPayment', e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={row.cost}
          onChange={(e) => handleChange(index, 'cost', e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={row.credit}
          onChange={(e) => handleChange(index, 'credit', e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={row.passiveIncome}
          onChange={(e) => handleChange(index, 'passiveIncome', e.target.value)}
        />
      </td>
    </tr>
  );
};

export default BusinessTableRow;

import { ShareTableRowType } from '../../types/db';

interface InvestmentsShareRowProps {
  row: ShareTableRowType;
  index: number;
  handleChange: (
    index: number,
    field: keyof ShareTableRowType,
    value: string
  ) => void;
}

const InvestmentsShareRow = ({
  row,
  index,
  handleChange,
}: InvestmentsShareRowProps) => {
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
          value={row.packetCoast}
          onChange={(e) => handleChange(index, 'packetCoast', e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={row.sharePrice}
          onChange={(e) => handleChange(index, 'sharePrice', e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={row.numberOfShares}
          onChange={(e) =>
            handleChange(index, 'numberOfShares', e.target.value)
          }
        />
      </td>
    </tr>
  );
};

export default InvestmentsShareRow;

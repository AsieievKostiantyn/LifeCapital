import { ShareTableRowType } from '../../../types/db';
import { getChangeClass } from '../../../service/utils/getChangeClass';

interface InvShareTableRowProps {
  row: ShareTableRowType;
  changes?: Partial<
    Record<keyof ShareTableRowType, 'changed' | 'added' | 'removed'>
  >;
}

const InvShareTableRow = ({ row, changes = {} }: InvShareTableRowProps) => {
  return (
    <tr>
      <td className={`${getChangeClass('code', changes)}`}>
        <input name="code" type="text" value={row.code} readOnly />
      </td>
      <td className={`${getChangeClass('packetCoast', changes)}`}>
        <input
          name="packetCoast"
          type="text"
          value={row.packetCoast}
          readOnly
        />
      </td>
      <td className={`${getChangeClass('sharePrice', changes)}`}>
        <input name="sharePrice" type="text" value={row.sharePrice} readOnly />
      </td>
      <td className={`${getChangeClass('numberOfShares', changes)}`}>
        <input
          name="numberOfShares"
          type="text"
          value={row.numberOfShares}
          readOnly
        />
      </td>
    </tr>
  );
};

export default InvShareTableRow;

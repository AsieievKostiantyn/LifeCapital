interface Row {
  businessName: string;
  cost: string;
  insurance: string;
  passiveIncome: string;
}
interface SecondPartTableRowProps {
  row: Row;
  index: number;
  onChange: (index: number, field: keyof Row, value: string) => void;
}

const SecondPartTableRow = ({
  row,
  index,
  onChange,
}: SecondPartTableRowProps) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          value={row.businessName}
          onChange={(e) => onChange(index, 'businessName', e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={row.cost}
          onChange={(e) => onChange(index, 'cost', e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={row.insurance}
          onChange={(e) => onChange(index, 'insurance', e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={row.passiveIncome}
          onChange={(e) => onChange(index, 'passiveIncome', e.target.value)}
        />
      </td>
    </tr>
  );
};

export default SecondPartTableRow;

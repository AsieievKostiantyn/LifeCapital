const SecondPartTableRow = ({ row, index, handleChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          value={row.businessNmae}
          onChange={(e) => handleChange(index, 'businessNmae', e.target.value)}
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
          value={row.insurence}
          onChange={(e) => handleChange(index, 'insurence', e.target.value)}
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

export default SecondPartTableRow;

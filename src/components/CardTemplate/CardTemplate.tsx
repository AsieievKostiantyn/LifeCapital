const CardTemplate = ({ borderColor, children }) => {
  return (
    <div
      className="card-template"
      style={{ border: `1px solid ${borderColor}` }}
    >
      {children}
    </div>
  );
};

export default CardTemplate;

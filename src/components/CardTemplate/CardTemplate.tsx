interface CardTemplateProps {
  borderColor: string;
  children?: React.ReactNode;
}

const CardTemplate = ({ borderColor, children }: CardTemplateProps) => {
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

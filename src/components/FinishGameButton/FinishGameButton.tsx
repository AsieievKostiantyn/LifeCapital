const FinishGameButton = () => {
  return (
    <button
      style={{ border: '1px solid red' }}
      onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    >
      Завершити гру
    </button>
  );
};

export default FinishGameButton;

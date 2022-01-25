const Alert = ({ message, background, text }) => {
  return (
    <div
      className={`text-base font-bold mb-4 p-3 rounded text-center ${text} ${background}`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Alert;

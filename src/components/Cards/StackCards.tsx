import "../../main.scss";

const StackCards = () => {
  return (
    <div className='stack-cards'>
      <div className='container'>
        <div className='card' style={{ "--i": -1 } as React.CSSProperties}>
          <h2>Card One</h2>
        </div>
        <div className='card' style={{ "--i": 0 } as React.CSSProperties}>
          <h2>Card Two</h2>
        </div>
        <div className='card' style={{ "--i": 1 } as React.CSSProperties}>
          <h2>Card Three</h2>
        </div>
      </div>
    </div>
  );
};

export default StackCards;

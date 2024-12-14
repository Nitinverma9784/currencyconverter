import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const styles = {
    appContainer: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage:
        "url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      margin: 'auto',
      border: '1px solid rgba(0,0,0,0.2)',
      borderRadius: '12px',
      padding: '20px',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255,255,255,0.3)',
    },
    buttonSwap: {
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid white',
      borderRadius: '6px',
      backgroundColor: '#2563eb', // Tailwind's blue-600
      color: 'white',
      padding: '4px 8px',
      cursor: 'pointer',
    },
    buttonConvert: {
      width: '100%',
      backgroundColor: '#2563eb', // Tailwind's blue-600
      color: 'white',
      padding: '12px 16px',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.card}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div style={{ marginBottom: '8px' }}>
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onAmountChange={(value) => setAmount(value)}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />
          </div>
          <div style={{ position: 'relative', height: '0.5px', marginBottom: '8px' }}>
            <button type="button" style={styles.buttonSwap} onClick={swap}>
              Swap
            </button>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button type="submit" style={styles.buttonConvert}>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

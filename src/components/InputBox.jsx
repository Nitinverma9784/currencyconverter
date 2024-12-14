import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {
  const amountInputId = useId();

  const styles = {
    container: {
      backgroundColor: "white",
      padding: "12px",
      borderRadius: "8px",
      fontSize: "14px",
      display: "flex",
      flexWrap: "wrap",
    },
    label: {
      color: "rgba(0, 0, 0, 0.4)",
      marginBottom: "8px",
      display: "inline-block",
    },
    input: {
      outline: "none",
      width: "100%",
      backgroundColor: "transparent",
      padding: "6px 0",
    },
    select: {
      borderRadius: "8px",
      padding: "4px 8px",
      backgroundColor: "#f3f3f3",
      cursor: "pointer",
      outline: "none",
    },
    rightContainer: {
      width: "50%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      textAlign: "right",
    },
    rightLabel: {
      color: "rgba(0, 0, 0, 0.4)",
      marginBottom: "8px",
      width: "100%",
    },
    leftContainer: {
      width: "50%",
    },
  };

  return (
    <div style={{ ...styles.container, ...className }}>
      <div style={styles.leftContainer}>
        <label htmlFor={amountInputId} style={styles.label}>
          {label}
        </label>
        <input
          id={amountInputId}
          style={styles.input}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div style={styles.rightContainer}>
        <p style={styles.rightLabel}>Currency Type</p>
        <select
          style={styles.select}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

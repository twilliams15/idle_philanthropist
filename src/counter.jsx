import React from "react";

const CounterContext = React.createContext(0);

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = React.useState(0);
  const [incAmount, setIncAmount] = React.useState(0);
  const [amountDonated, setAmountDonated] = React.useState(0);
  const increment = React.useCallback(
    (value) => {
      setCounter(counter + value);
    },
    [counter]
  );

  const decrementCounter = React.useCallback(
    (value) => {
      setCounter(counter - value);
    },
    [counter]
  );

  const increaseIncAmount = (value) => {
    setIncAmount(incAmount + value);
  };

  const increaseAmountDonated = (value) => {
    setAmountDonated(amountDonated + value);
  };

  React.useEffect(() => {
    const interval = setInterval(increment, 1000, incAmount);
    return () => clearInterval(interval);
  }, [increment, incAmount]);

  return (
    <CounterContext.Provider
      value={{
        counter,
        decrementCounter,
        increment,
        increaseIncAmount,
        incAmount,
        increaseAmountDonated,
        amountDonated
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export function useCounter() {
  const context = React.useContext(CounterContext);
  if (!context) throw Error("component must be used in context");
  return context;
}

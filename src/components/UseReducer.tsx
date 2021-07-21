import React, { useReducer } from 'react';

enum CountActionsTypes {
  increase = 'increase',
  decrease = 'decrease',
}

interface CountAction {
  type: CountActionsTypes;
  payload: number;
}

interface CountState {
  count: number;
}

const counterReducer = (state: CountState, action: CountAction) => {
  const { type, payload } = action;
  switch (type) {
    case CountActionsTypes.increase:
      return { ...state, count: state.count + payload };
    case CountActionsTypes.decrease:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

const UseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <h3>Exemplo com useReducer</h3>
      <p>Count: {state.count}</p>
      <button
        onClick={() =>
          dispatch({ type: CountActionsTypes.increase, payload: 1 })
        }
      >
        Adicionar
      </button>
      <button
        onClick={() =>
          dispatch({ type: CountActionsTypes.decrease, payload: 1 })
        }
      >
        Diminuir
      </button>
    </>
  );
};

export default UseReducer;

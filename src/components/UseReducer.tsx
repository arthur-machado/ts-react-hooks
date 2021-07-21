import React, { useReducer, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/* enumera os tipos de ações */
enum CountActionsTypes {
  increase = 'increase',
  decrease = 'decrease',
}

/* Define o tipo das ações e 'payload' referente a 
quanto queremos aumentar/diminuir */
interface CountAction {
  type: CountActionsTypes;
  payload: number;
}

/* Define a tipagem do número */
interface CountState {
  count: number;
}

/* cria a função reducer */
const counterReducer = (state: CountState, action: CountAction) => {
  const { type, payload } = action;
  switch (type) {
    case CountActionsTypes.increase:
      return { count: state.count + payload };
    case CountActionsTypes.decrease:
      return { count: state.count - payload };
    default:
      return state;
  }
};

const UseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const context = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: `${context?.theme.background}`,
        color: `${context?.theme.text}`,
      }}
    >
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
    </div>
  );
};

export default UseReducer;

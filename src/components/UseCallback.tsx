import React, { useState, useCallback } from 'react';

const UseCallback: React.FC = () => {
  const [count, setCount] = useState(0);

  /* Quando chamamos essa função, ela exibe no
  log sempre o valor atualizado de 'count', pois
  está no array de dependências.
  */
  const callbackAtualizado = useCallback(() => {
    console.log('callbackAtualizado: ', count);
  }, [count]);

  /* Aqui temos um warning pois não incluímos
  o state 'count' dentro do array de dependências,
  mas isso é proposital. Percebemos que mesmo com
  o count se alterando no state,
  ele ainda exibe 0 no console.log
  */
  const callbackNaoAtualizado = useCallback(() => {
    console.log('callbackNaoAtualizado', count);
  }, []);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Exemplo com UseCallback</h3>
      <span>(Observar o console para ver isso funcionar)</span>
      <p>Contador: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={callbackNaoAtualizado}>Sem Callback</button>
      <button onClick={callbackAtualizado}>Com Callback</button>
      <hr />
    </div>
  );
};

export default UseCallback;

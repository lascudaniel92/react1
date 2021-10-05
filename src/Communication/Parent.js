import { Child1 } from './Child1';
import { Child2 } from './Child2';
import { useState } from 'react';

export function Parent() {
  const [mesaj, setMesaj] = useState('');
  const [childMessage, setChildMessage] = useState('');

  //   function handleChildMessage(){
  //       //mult code
  //       setChildMessage();
  //   }

  return (
    <>
      <h1>Parent</h1>
      <output>
        Output in parent: {childMessage}
        <span></span>
      </output>
      <button onClick={(e) => setMesaj('Mesaj din parinte')}>Send message to children</button>
      <Child1 message={mesaj} onMessage={setChildMessage} />
      <Child2 message={childMessage || mesaj} />
    </>
  );
}

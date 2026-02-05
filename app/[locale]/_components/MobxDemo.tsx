'use client';

import { observer } from 'mobx-react-lite';
import { makeAutoObservable } from 'mobx';
import { useMemo } from 'react';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = (): void => {
    this.count += 1;
  };
}

export const MobxDemo = observer(() => {
  const store = useMemo(() => new CounterStore(), []);

  return (
    <div style={{ padding: 8, border: '1px solid #ccc', margin: 4 }}>
      <span>MobX: {store.count}</span>
      <button type="button" onClick={store.increment}>
        +1
      </button>
    </div>
  );
});

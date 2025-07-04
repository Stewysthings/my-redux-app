import { Provider } from 'react-redux';
import Counter from './src/Counter';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

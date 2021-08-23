import logo from './logo.svg';
import './App.css';
import store from './lib/redux';
import InboxScreen from './components/InboxScreen';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;

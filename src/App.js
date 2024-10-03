import './App.scss';
import './style/style.scss'
import { Provider, useDispatch, useSelector } from 'react-redux';
import  store  from './redux/store';
import AppRouter from './routers';

const  App = () => {
  return (
    <Provider store={store()}>
        <AppRouter />
    </Provider>
  );
}

export default App;
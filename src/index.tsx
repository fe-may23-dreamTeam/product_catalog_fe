import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { Root } from './Root';
import { store } from './redux';
import './localization/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <Root />
  </Provider>,
);

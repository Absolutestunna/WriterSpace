import ReactDOM from 'react-dom';
import routeConfig from './root';
import './index.css';


ReactDOM.render(
  routeConfig,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept()
}

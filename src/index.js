import { AppRegistry } from 'react-native';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});

registerServiceWorker();
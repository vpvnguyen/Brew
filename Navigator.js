import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import MapView from './src/screens/MapView'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  MapView: {screen: MapView}
})

const App = createAppContainer(MainNavigator)

export default App

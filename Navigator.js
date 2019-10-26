import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import EnterLocation from './src/screens/EnterLocation'
import MapScreen from './src/screens/MapScreen'
import MoreInfo from './src/screens/MoreInfo'
import HomeScreen from './src/screens/HomeScreen'

const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  EnterLocation: {screen: EnterLocation},
  MapScreen: {screen: MapScreen},
  MoreInfo: {screen: MoreInfo},
})

const App = createAppContainer(MainNavigator)

export default App

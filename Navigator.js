import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import MapScreen from './src/screens/MapScreen'
import MoreInfo from './src/screens/MoreInfo'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  MapScreen: {screen: MapScreen},
  MoreInfo: {screen: MoreInfo}
})

const App = createAppContainer(MainNavigator)

export default App

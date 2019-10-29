import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SelectorScreen from './src/screens/SelectorScreen'
import MapScreen from './src/screens/MapScreen'
import MoreInfo from './src/screens/MoreInfo'
import HomeScreen from './src/screens/HomeScreen'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  SelectorScreen: {screen: SelectorScreen},
  MapScreen: {screen: MapScreen},
  MoreInfo: {screen: MoreInfo}
})

const App = createAppContainer(MainNavigator)

export default App

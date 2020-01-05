import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComparisonScreen from './src/screens/ComparisonScreen';

const navigator = createStackNavigator({
  Comparison: ComparisonScreen
}, {
  initialRouteName: 'Comparison',
  defaultNavigationOptions: {
    title: 'Freshwater Compatibility'
  }
});

export default createAppContainer(navigator);
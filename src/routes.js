import { createStackNavigator, createAppContainer } from 'react-navigation';

import pingTest from './pages/pingtest';
import speedTest from './pages/speedtest';
import about from './pages/about';
import results from './pages/results';
import coffee from './pages/coffee';

const AppNavigator = createStackNavigator({
    Home: pingTest,
    About: about,
    Speed: speedTest,
    Results: results,
    Coffee: coffee,
},{
    initialRouteName: "Home"
});

export default AppNavigator;
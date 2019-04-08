import { createStackNavigator, createAppContainer } from 'react-navigation';

import pingTest from './pages/pingtest';
import speedTest from './pages/speedtest';
import about from './pages/about';
import results from './pages/results';

const AppNavigator = createStackNavigator({
    Home: pingTest,
    About: about,
    Speed: speedTest,
    Results: results,
},{
    initialRouteName: "Home"
});

export default AppNavigator;
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../app/home';
import DetailScreen from '../app/home/details';

const activeColor = '#F15C53';
const color = '#373737';

export const HomeRouting = createStackNavigator({
    Home:{
        screen: HomeScreen,
    },
    DetailScreen:{
        screen: DetailScreen,
    }
},{
    mode: 'modal',
    headerMode:'none'
})
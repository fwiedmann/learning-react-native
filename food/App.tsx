import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/searchScreen";
import {createAppContainer} from "react-navigation";
import ResultShowScreen from "./src/screens/ResultShowScreen";


const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ResultShow: ResultShowScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Foods'
        },

    }
);

export default createAppContainer(navigator)
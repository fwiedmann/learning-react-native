import {createStackNavigator} from "react-navigation-stack";
import SearchScreen from "./src/screens/searchScreen";
import {createAppContainer} from "react-navigation";


const navigator = createStackNavigator(
    {
        Search: SearchScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Foods'
        },

    }
);

export default createAppContainer(navigator)
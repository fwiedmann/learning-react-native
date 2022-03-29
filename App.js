import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/componentScreen";
import ListScreen from "./src/screens/listScreen";
import imageScreen from "./src/screens/imageScreen";
import CounterScreen from "./src/screens/counterScreen";
import ColorScreen from "./src/screens/colorScreen";
import SquareScreen from "./src/screens/SquareScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentScreen,
        List: ListScreen,
        Images: imageScreen,
        Counter: CounterScreen,
        Color: ColorScreen,
        Square: SquareScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "Felix learning React Native ❤️ ",
        },
    }
);

export default createAppContainer(navigator);

import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import ColorCounter from "../components/ColorCounter";


const SquareScreen = () => {
    const [red, setRed] = useState(255)
    const [blue, setBlue] = useState(255)
    const [green, setGreen] = useState(255)

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;

            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(blue + change);
                return;
            default:
                return;
        }
    }

    return <View>
        <ColorCounter colorName="red"
                      onIncrease={() => setColor('red', 10)}
                      onDecrease={() => setColor('red', -10)}/>

        <ColorCounter colorName="blue"
                      onIncrease={() => setColor('blue', 10)}
                      onDecrease={() => setColor('blue', -10)}/>

        <ColorCounter colorName="green"
                      onIncrease={() => setColor('green', 10)}
                      onDecrease={() => setColor('green', -10)}/>
        <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>;
};

const styles = StyleSheet.create({});

export default SquareScreen;
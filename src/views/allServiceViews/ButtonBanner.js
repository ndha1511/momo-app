import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonBanner(props) {
    const [buttonStates, setButtonStates] = useState(true);
    const handleButtonClick = () => {
        setButtonStates(false)
    }
      
        

    return (
        <TouchableOpacity 
            style={[styles.btn, { backgroundColor: buttonStates ? '#f0f0f0' : 'pink', 
            borderColor: buttonStates ? '' : 'blue',
            borderWidth: buttonStates ? 0 : 3}]}
            onPress={handleButtonClick} 
        >
            <Text style={[styles.txt, {color: buttonStates ? 'black' : 'red'}]}>{props.content}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        //backgroundColor: '#f0f0f0',
        marginRight: 10,
        borderRadius: 18,
        width: "auto",
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    txt: {
        fontSize: 16
    },
});
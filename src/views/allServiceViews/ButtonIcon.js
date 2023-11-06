import { Image, StyleSheet, Text,TouchableOpacity} from "react-native";

export default function ButtonIcon(props) {
    return (
        <TouchableOpacity style={styles.iconButton}>
            <Image source={props.srcImg} style={styles.imgIcon}></Image>
            <Text style={styles.txtIcon}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        width: 85,
        height: 80,
        alignItems: 'center',
        marginHorizontal: 8,
        
    },
    imgIcon: {
        width: 40,
        height: 40
    },
    txtIcon: {
        textAlign: 'center',
        marginTop: 3,
        fontSize: 10
    },
});
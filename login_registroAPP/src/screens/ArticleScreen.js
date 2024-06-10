import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";


export default function Article() {
    return(
        <View style={styles.container}>
            <Text>Article</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
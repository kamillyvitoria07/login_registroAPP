import { Avatar, Button, Card } from 'react-native-paper';
import { View, Text, StyleSheet } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function HomeScreen() {
    return(
       <View>
           
           <Card style={styles.card}>
                <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={LeftContent}
                />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover
                    source={{ uri: "https://picsum.photos/700" }}
                    style={styles.img}
                />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    card: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    }
})
import { StyleSheet, View } from "react-native";
import FAB from "./FAB";

export default function App() {
    const displayAlert = () => {
        alert("Welcome to GeeksforGeeks");
    };

    return (
        <View style={styles.container}>
            <FAB onPress={displayAlert} title="Add" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";

interface AppInputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export default function AppInput({ label, error, ...props }: AppInputProps) {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput style={[styles.input, error && { borderColor: "red" }]} {...props} />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    label: {
        marginBlock: 6,
        fontWeight: "600"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 14,
        borderRadius: 10
    },
    error: {
        marginTop: 4,
        fontSize: 12,
        color: "red"
    }
})

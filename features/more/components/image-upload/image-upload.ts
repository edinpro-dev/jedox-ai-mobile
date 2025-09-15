import * as ImagePicker from "expo-image-picker";


export const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        quality: 1
    });

    if (!result.canceled) {
        const fileUri = result.assets[0].uri;
        return fileUri;
    }
    return null;
}
import * as DocumentPicker from "expo-document-picker";

export const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
        type: [
            "application/vnd.ms-excel", //.xls
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" //.xlsx
        ],
        copyToCacheDirectory: true
    });

    if (!result.canceled) {
        const file = result.assets[0].uri;
        return file;
    }

    return null;
}
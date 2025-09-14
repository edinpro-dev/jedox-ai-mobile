import { useTheme } from "@/lib/theme";
import { useState } from "react";
import { pickImage } from "../components/file-upload/file-upload";

const inspectionTypeData = [
    { label: "Start of Shift Inspection", value: "start-of-shift" },
    { label: "End of Shift Inspection", value: "end-of-shift" },
    { label: "On Hire Check", value: "on-hire-check" },
    { label: "Off Hire Check", value: "off-hire-check" }

]

export const useAssessment = () => {

    const [licensePlateImage, setLicensePlateImage] = useState<string | null>(null);

    const { colors } = useTheme();

    const handlePickImage = async () => {
        const uri = await pickImage();
        if (!uri) return;
        setLicensePlateImage(uri);
    }

    return {
        colors,
        inspectionTypeData,
        licensePlateImage,
        handlePickImage
    };
};

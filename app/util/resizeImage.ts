import * as ImageManipulator from "expo-image-manipulator";

const resizeImage = async (uri: string) => {
    const result = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { height: 64, width: 64 } }],
        {
            compress: 0.2,
            format: ImageManipulator.SaveFormat.JPEG,
        }
    );

    return result.uri;
};

export default resizeImage;

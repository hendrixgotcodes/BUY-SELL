import resizeImage from "../util/resizeImage";
import firebase from "./firebase";

const bucket = firebase.storage();
const storageRef = bucket.ref();

const getBlob = async (uri:string) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    return blob;
};

const pushMedia = async (fileName:string, filePath:string, imgUri:string, onUploadProgress: (progress:string)=>void) => {
        // get and upload thumnbnail of image
        const thumbNail = await resizeImage(imgUri);
        const tb_blob = await getBlob(thumbNail);
        const tn_ref = storageRef.child(`${filePath}tn_${fileName}`);
        const tn_snapshot = await tn_ref.put(tb_blob);
        const tn_url = tn_snapshot.ref.getDownloadURL();

        // upload image itself in full
        const imgBlob = await getBlob(imgUri);
        const imgRef = storageRef.child(filePath + fileName);
        const imgUploadTask = imgRef.put(imgBlob);

        // watch image upload
        imgUploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (
                    snapshot.bytesTransferred / snapshot.totalBytes
                ).toFixed(2);
                onUploadProgress(progress);

                // console.log(`pushMedia(): ${progress}` );
            },
            // () => {}
            // async ()=>{

            // }
        );

        return {
            url: await (await imgUploadTask).ref.getDownloadURL(),
            thumbnail: await tn_url,
        };
};

export default pushMedia;

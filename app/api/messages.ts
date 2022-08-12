import client from "./client";

// Fields
const endPoint = "/messages";

const get = async () => {
    try {
        const response = await client.get(endPoint);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

const send = async (message:any, listingId:string) => {
    try {
        const response = await client.post(endPoint, {
            message,
            listingId,
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export default {
    send,
    get,
};

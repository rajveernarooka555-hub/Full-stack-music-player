import Imagekit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

const imagekit = new Imagekit({
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    urlEndpoint: process.env.URL_ENDPOINT,
});

export default imagekit;
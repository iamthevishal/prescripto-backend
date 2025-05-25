import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: 'drsw3onpd',
        api_key: '631676559476584',
        api_secret: 'jvGKZD3p8PTBdYTQW6JutsuWekg'
    });

}

export default connectCloudinary;
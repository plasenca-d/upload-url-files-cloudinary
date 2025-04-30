import { v2 as cloudinary } from "cloudinary";
import { envs } from "./config/envs";

cloudinary.config({
  cloud_name: envs.CLOUD_NAME,
  api_key: envs.API_KEY,
  api_secret: envs.API_SECRET,
});

export default cloudinary;

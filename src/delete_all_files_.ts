import cloudinary from "./cloudinary";
import { envs } from "./config/envs";

async function deleteAllImages() {
  await cloudinary.api.delete_resources_by_prefix(envs.DIRECTORY_NAME);
}

deleteAllImages();

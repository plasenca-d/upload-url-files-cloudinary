# upload-url-files-cloudinary

This project uploads images from a list of URLs in a CSV file to Cloudinary.

## Setup

1. **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd upload-url-files-cloudinary
    ```

2. **Install dependencies:**

    ```bash
    bun install
    ```

3. **Configure Environment Variables:**
    Create a `.env` file in the root directory of the project. You'll need to add your Cloudinary credentials and specify the target folder. Add the following lines to the `.env` file, replacing the placeholder values with your actual information:

    ```dotenv
      CLOUD_NAME=""
      API_KEY=""
      API_SECRET=""
      DIRECTORY_NAME="your_cloudinary_folder_name"
    ```

    * Replace `API_KEY`, `API_SECRET`, and `CLOUD_NAME` with your Cloudinary account details.
    * Replace `your_cloudinary_folder_name` with the name of the folder you want to upload the images to in Cloudinary.

4. **Prepare Data:**
    Place your CSV file containing the image URLs in the `src/data/` directory and name it `urls.csv`. Each URL should be on a new line or separated by commas within lines.

## To run

```bash
bun run src/index.ts
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

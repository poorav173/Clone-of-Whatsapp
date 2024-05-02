import axios from "axios";

// const cloud_name = process.env.REACT_APP_CLOUD_NAME2;
// const cloud_secret = process.env.REACT_APP_CLOUD_SECRET2;
// const cloud_name = 'dbdcgxt0g';
const cloud_name = 'hbohmdqc';
const cloud_secret = 'Q0h1zKTUP_Uba0UGyCE6q-M57uo'
const cloud_Apikey = '966278311889245' 
export const uploadFiles = async (files) => {
  let formData = new FormData();
  // formData.append("upload_preset", "default-preset");
  let uploaded = [];
  for (const f of files) {
    const { file, type } = f;
    formData.append("file", file);
    formData.append("upload_preset", cloud_name);
    formData.append("cloud_name", cloud_name);
    // formData.append("cloud_api", cloud_Apikey);
    let res = await uploadToCloudinary(formData);
    uploaded.push({
      file: res,
      type: type,
    });
  }
  return uploaded;
};
const uploadToCloudinary = async (formData) => {
  return new Promise(async (resolve) => {
    return await axios
      .post(
        `https://api.cloudinary.com/v1_1/dbdcgxt0g/image/upload`,
        formData,
        // {headers: { "X-Requested-With": "XMLHttpRequest" }}

      )
      .then(({ data }) => {
        console.log(data, "from uplod......");
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
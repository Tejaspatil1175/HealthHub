import app from "./app.js";
import cloudinary from "cloudinary";


app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});

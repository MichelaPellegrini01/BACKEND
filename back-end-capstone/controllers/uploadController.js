import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
        console.log("FILE RICEVUTO:", req.file);
      return res.status(400).json({
        message: "Nessun file ricevuto",
      });
    }

    const stream = cloudinary.uploader.upload_stream( 
      { 
        folder: "happyTail",
      },
      (error, result) => {
        if (error) {
          return res.status(500).json(error);
        }

        return res.status(200).json({
          imageUrl: result.secure_url,
        });
      }
    );
    

    streamifier.createReadStream(req.file.buffer).pipe(stream);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
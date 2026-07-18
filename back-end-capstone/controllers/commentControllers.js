import Comment from "../models/Comment.js";

export async function getCommentsByDog(req, res) {
  try {
    const comments = await Comment.find({
      dog: req.params.dogId,
    });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      message: "Errore recupero commenti",
      error: error.message,
    });
  }
}

export async function createComment(req, res) {
  try {
    const newComment = new Comment(req.body);

    const savedComment = await newComment.save();

    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({
      message: "Errore nella creazione del commento",
      error: error.message,
    });
  }
}
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "Email già esistente",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Utente registrato con successo",
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log("Utente trovato:", user);
console.log("isAdmin:", user.isAdmin);

    if (!user) {
      return res.status(400).json({
        message: "Email o password non validi",
      });
    }

    const passwordOk = await bcrypt.compare(password, user.password);

    if (!passwordOk) {
      return res.status(400).json({
        message: "Email o password non validi",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
         isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    console.log("Risposta inviata:", {
  token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  },
});

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
         isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
}
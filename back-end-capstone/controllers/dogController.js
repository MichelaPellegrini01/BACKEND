import Dog from "../models/Dog.js";

export const getDogs = async (req, res) => {
    try {
  const dogs = await Dog.find();

  res.status(200).json(dogs);
} catch (error) {
  res.status(500).json({
    message: "Errore recupero dei cani",
    error: error.message,
  });
}

};

export const createDog = async (req, res) => {
    try {
    const newDog = new Dog(req.body);

    await newDog.save();

    res.status(201).json(newDog);

  } catch (error) {
    res.status(500).json({
      message: "Errore nella creazione del cane",
      error: error.message,
    });
  }
};
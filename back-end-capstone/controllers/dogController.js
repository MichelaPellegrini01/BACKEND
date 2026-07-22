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

    const savedDog = await newDog.save();

res.status(201).json(savedDog);

  } catch (error) {
    res.status(500).json({
      message: "Errore nella creazione del cane",
      error: error.message,
    });
  }
};

export const getDogById = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);

    res.status(200).json(dog);

  } catch (error) {
    res.status(500).json({
      message: "Errore nel recupero del cane",
      error: error.message,
    });
  }
};

export const updateDog = async (req, res) => {
  try {
    const updatedDog = await Dog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedDog);

  } catch (error) {
    res.status(500).json({
      message: "Errore nell'update del cane",
      error: error.message,
    });
  }
};

export const deleteDog = async (req, res) => {
  try {
    const deletedDog = await Dog.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Cane eliminato con successo",
      deletedDog,
    });

  } catch (error) {
    res.status(500).json({
      message: "Errore nell'eliminazione del cane",
      error: error.message,
    });
  }
};
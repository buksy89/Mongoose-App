import mongoose from "mongoose";

// create a function to connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lukagambo622:oU9TYwEVBeVe8dPL@cluster0.daxbevv.mongodb.net/mongoose-checkpoint?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB Connected Successfully`);
    console.log("creating user document");
    createPerson();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
// create a person prototype
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  favoriteFood: [String],
});

//task 2: create a person model
const Person = mongoose.model("Person", PersonSchema);

// Task 2b: create a person document
async function createPerson() {
  try {
    const Person = new Person({
      name: "Luka",
      age: 30,
      favoriteFood: ["Pizza", "Hamburger"],
    });
    await person.save();
    console.log(person);
  } catch (error) {
    console.log(error);
  }
}

// Task 3: create many people with `model.create()`
const createManyPeople = async () => {
  let arrayOfPeople = [
    { name: "Yusuf", age: 107, favoriteFood: ["Noodle", "Rice", "Eba"] },
    {
      name: "Aisha",
      age: 27,
      favoriteFood: ["Papper soup", "Hamburger", "Pasta"],
    },
    { name: "Fatima", age: 14, favoriteFood: ["Pizza", "suppagety", "eba"] },
  ];
  try {
    const result = await Person.create(arrayOfPeople);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Task 4: use `model.find()` to search your database
const findPeopleByName = async () => {
  try {
    const person = await Person.find({ name: "Yusuf" });
    console.log(person);
  } catch (error) {
    console.log(error);
  }
};

//  Task 5: use `Model.findOne()` to return a single Matching document from your database
const findOnePerson = async () => {
  try {
    const person = await Person.findOne({ favoriteFood: "Pizza" });
    console.log(person);
  } catch (error) {
    console.log(error);
  }
};
// Task 6: Use `Model.findById()` to search database by 'id'
const findPersonById = async () => {
  try {
    const person = await Person.findPersonById("669154265071c3d9144c5430");
    console.log(person);
  } catch (error) {
    console.log(error);
  }
};

// Task 7: performed  classice updates by Runing find, edit then save

const findEditThenSave = async () => {
  try {
    const person = await Person.findPersonById("669154265071c3d9144c5430");
    person.favoriteFood.push("Beans");
    await person.save();
    console.log(person);
  } catch (error) {
    console.log(error);
  }
};

// task 8: perform New updates on a Document using `model.findOneAndUpdate()`

const findAndUpdate = async () => {
  try {
    const person = await Person.findAndUpdate(
      { name: "Yusuf" },
      { age: 1000 },
      { new: true }
    );
    console.log(person);
  } catch (error) {
    console.log(error);
  }
};

// Task 9: Delete one Document using `Model.findByIdAndRemove()`
const removedById = async () => {
  try {
    const person = await Person.findByIdAndDelete("669154265071c3d9144c5430");
    console.log(person);
  } catch (error) {
    console.log(error);
  }
};

// Task 10: MongoDB and Mongoose - Delete Many Document with `model.remove()`
const removeManyPeople = async () => {
  try {
    const person = await Person.deleteMany({ name: "mary" });
    console.log(person);
  } catch (error) {
    console.log(error);
  }
};

//Task 11: chain search Query Helpers to Narrow Search Results
const queryChain = async () => {
  try {
    const person = await Person.find({ favoriteFood: "Pizza" })
      .sort({ name: "asc" })
      .limit(2)
      .select("-age")
      .exec();
  } catch (error) {
    console.log(error);
  }
};

connectDB();

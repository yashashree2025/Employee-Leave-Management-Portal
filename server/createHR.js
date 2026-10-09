const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Employee = require("./models/Employee");

const createHR = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingHR = await Employee.findOne({
      email: "hr@gmail.com",
    });

    if (existingHR) {
      console.log("HR account already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("hr@12345", 10);

    const hr = new Employee({
      name: "HR",
      department: "HR",
      email: "hr@gmail.com",
      password: hashedPassword,
      role: "HR",
    });

    await hr.save();

    console.log("HR account created successfully");
    console.log("Email: hr@gmail.com");
    console.log("Password: hr@12345");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

createHR();
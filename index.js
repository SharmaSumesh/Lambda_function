how to do crud operation using lambda 
step 1) addd all config varible 
import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
  name: String, 

});
const Item = mongoose.model("Item", itemSchema);

export const handler = async (event) => {
  const dbUri = process.env.uri || "mongodb+srv://somo:1234@cluster0.xhx5oqc.mongodb.net/your_db_name";

  try {
    await mongoose.connect(dbUri);
    console.log("Connected to MongoDB");

    const newItem = new Item({ name: "sumesh" }); 
      console.log("Done");
     newItem.save();
  
    console.log("Item saved:", newItem);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Item created successfully", item: newItem }),
    };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error connecting to MongoDB or saving item", error: error.message }),
    };
  }
};
 

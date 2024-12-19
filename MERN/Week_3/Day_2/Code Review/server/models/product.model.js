import {model, Schema} from "mongoose"


const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [2, "Name must be at least 2 characters"],
      maxLength: [120, "Name must be less than 120 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [1, "Price must be greater than 1$"]
    },
    picture: {
      type: String,
      required: [true, "Picture is required"],
      minLength: [2, "Picture name must be at least 2 characters"],
    },
    availableInStock: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minLength: [2, "Description must be at least 2 characters"],
      maxLength: [225, "Description must be less than 225 characters"],
    },
    expireDate: {
      type: Date,
      required: [true, "Expire Date is required"],
      min: [Date.now(), "Expire date must be in the future"],
    },
  },
  { timestamps: true }
);

const Product = model("Product", ProductSchema);
export default Product;
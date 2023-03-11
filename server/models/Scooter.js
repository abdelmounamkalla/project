import mongoose from "mongoose";

const ScooterSchema = new mongoose.Schema(
    {
       battery: Number,
       model: String,
       status:Boolean,
       location:
       {
        lat:Number,
        long:Number,
       },      
    },
    { timestamps: true }
);

const Scooter = mongoose.model("Scooter", ScooterSchema);
export default Scooter;
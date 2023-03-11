import mongoose from "mongoose";

const RentSchema = new mongoose.Schema(
    {
        scooter:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Scooter',
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        start_time:Date,
        end_time:Date,
        destination:String,
    },
    { timestamps: true }
);

const Rent = mongoose.model("Rent", RentSchema);
export default Rent;
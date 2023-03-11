import mongoose from "mongoose";

const AgencySchema = new mongoose.Schema(
    {
        location:
       {
        lat:Number,
        long:Number,
       },
       agent:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Agent',
       },
       scooter:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Scooter',

        }
       ],
    },
    { timestamps: true }
);

const Agency = mongoose.model("Agency", AgencySchema);
export default Agency;
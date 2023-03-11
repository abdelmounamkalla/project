import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
          },
          email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
          },
          password: {
            type: String,
            required: true,
            min: 8,
            max:32,
          },
          phoneNumber: String,
        
    },
    { timestamps: true }
);

const Agent = mongoose.model("Agent", AgentSchema);
export default Agent;
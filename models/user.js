import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim : true
        },

        email: {
            type: String,
            required : true,
            unique : true,
            lowercase: true
        },

        password: {
            type: String,
            required: true,
            minlength: 6
        }, 

        role: {
            type : String,
            enum: ["user", "admin"],
            default: "user"
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps : true,
        strict: true
    }

);

userSchema.pre("save", async function () {
    console.log("HASHING PASSWORD");
    if (!this.isModified("password")) {
        return;
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
        throw new Error("Error hashing password: " + error.message);
    }
});

const User = mongoose.model("User", userSchema);
export default User;
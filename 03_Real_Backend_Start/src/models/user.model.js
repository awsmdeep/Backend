import mongoose, { Schema } from "mongoose"; // Import mongoose and Schema constructor
import jwt from "jsonwebtoken"; // Import jsonwebtoken for generating tokens
import bcrypt from "bcrypt"; // Import bcrypt for hashing passwords

// Define the schema for the User model
const userSchema = new Schema(
    {
        // Define the username field
        username: {
            type: String, // Field type is String
            required: true, // Field is required
            unique: true, // Value must be unique in the database
            lowercase: true, // Convert to lowercase
            trim: true, // Remove leading and trailing whitespace
            index: true // Create an index for faster searches
        },
        // Define the email field
        email: {
            type: String, // Field type is String
            required: true, // Field is required
            unique: true, // Value must be unique in the database
            lowercase: true, // Convert to lowercase
            trim: true // Remove leading and trailing whitespace
        },
        // Define the fullname field
        fullname: {
            type: String, // Field type is String
            required: true, // Field is required
            trim: true, // Remove leading and trailing whitespace
            index: true // Create an index for faster searches
        },
        // Define the avatar field (URL to user's avatar image)
        avatar: {
            type: String, // Field type is String
            required: true // Field is required
        },
        // Define the coverImage field (URL to user's cover image)
        coverImage: {
            type: String // Field type is String
        },
        // Define the watchHistory field (array of references to Video documents)
        watchHistory: [
            {
                type: Schema.Types.ObjectId, // Type is ObjectId (reference to another document)
                ref: "Video" // Reference to the Video model
            }
        ],
        // Define the password field
        password: {
            type: String, // Field type is String
            required: [true, "password is required"] // Field is required with a custom error message
        },
        // Define the refreshToken field (optional)
        refreshToken: {
            type: String // Field type is String
        }
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Middleware to hash the password before saving the user document
userSchema.pre("save", async function(next) {
    // Check if the password is modified
    if (!this.isModified("password")) return next(); // If not modified, proceed to next middleware
    // Hash the password with a salt rounds of 10
    this.password = await bcrypt.hash(this.password, 10);
    next(); // Proceed to the next middleware
});

// Method to compare a given password with the hashed password
userSchema.methods.isPasswordCorrect = async function(password) {
    // Compare the given password with the hashed password
    return await bcrypt.compare(password, this.password);
};

// Method to generate an access token for the user
userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id, // Include the user's ID
            email: this.email, // Include the user's email
            username: this.username, // Include the user's username
            fullname: this.fullname // Include the user's full name
        },
        process.env.ACCESS_TOKEN_SECRET, // Secret key for signing the token
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY // Set the token expiry time
        }
    );
};

// Method to generate a refresh token for the user
userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id // Include the user's ID
        },
        process.env.REFRESH_TOKEN_SECRET, // Secret key for signing the token
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY // Set the token expiry time
        }
    );
};

// Create and export the User model based on the schema
export const User = mongoose.model("User", userSchema);

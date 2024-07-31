import mongoose, { Schema } from "mongoose"; // Import mongoose and Schema constructor
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; // Import aggregate pagination plugin

// Define the schema for the Video model
const videoSchema = new Schema(
    {
        // Define the videoFile field (URL to the video file)
        videoFile: {
            type: String, // Field type is String
            required: true // Field is required
        },
        // Define the thumbnail field (URL to the video thumbnail image)
        thumbnail: {
            type: String, // Field type is String
            required: true // Field is required
        },
        // Define the title field (title of the video)
        title: {
            type: String, // Field type is String
            required: true // Field is required
        },
        // Define the description field (description of the video)
        description: {
            type: String, // Field type is String
            required: true // Field is required
        },
        // Define the duration field (duration of the video in seconds)
        duration: {
            type: Number, // Field type is Number
            required: true // Field is required
        },
        // Define the views field (number of views the video has received)
        views: {
            type: Number, // Field type is Number
            default: 0 // Default value is 0
        },
        // Define the isPublished field (whether the video is published or not)
        isPublished: {
            type: Boolean, // Field type is Boolean
            default: true // Default value is true
        },
        // Define the owner field (reference to the User who owns the video)
        owner: {
            type: Schema.Types.ObjectId, // Field type is ObjectId (reference to another document)
            ref: "User" // Reference to the User model
        }
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Apply the aggregate pagination plugin to the video schema
videoSchema.plugin(mongooseAggregatePaginate);

// Create and export the Video model based on the schema
export const Video = mongoose.model("Video", videoSchema);

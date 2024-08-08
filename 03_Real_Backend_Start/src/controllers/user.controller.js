import asyncHandler from "../utils/asynchandler.js"
import { ApiError } from "../utils/apierror.js";
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiresponse.js";

const registerUser=asyncHandler(async(req,res)=>{
    //get user details from the frontend
    // validation - not empty
    //check if the user already exists : username or email check
    //check for images 
    //check for avatar
    //upload them in cloudinary,avatar 
    //create user object - create entry in db
    //remove password and  refresh token field from response 
    //check for user creation
    //return response
  

    //-------------------------------------------

    const {fullname,email,username,password}=req.body;
    console.log("email:",email);
    
    if(fullname===""){
        throw new ApiError(400,"fullname is required")
    }
    if(email===""){
        throw new ApiError(400,"email is required")
    }
    if(username === ""){
        throw new ApiError(400,"username is required")
    }
    if(password===""){
        throw new ApiError(400,"password is requried")
    }

    const existedUser =  User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"User with email or username already exists")
    }

    const avatarLocalPath=req.files?.avatar[0]?.path
    const coverImageLocalPath=req.files?.coverImage[0].path

    if(!avatarLocalPath){
        throw new ApiError(400,"avatar file is required")
    }
    const avatar=await uploadOnCloudinary(avatarLocalPath);
    const cover=await uploadOnCloudinary(coverImageLocalPath);
    if(!avatar){
        throw new ApiError(400,"avatar file is required")
    }

    const user=await User.create({
        fullname,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })
   const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"
   )
   if(createdUser){
    throw new ApiError(500,"something went wrong while registering the users")
   }

   return res.status(201).json(
    new ApiResponse(200,createdUser,"user registered succesfully")
   )


})

export {registerUser};
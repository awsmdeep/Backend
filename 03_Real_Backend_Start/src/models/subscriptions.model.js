import mongoose, {Schema}from "mongoose"


const subscriptionsSchema= new Schema(
    
    {
        subscriber:{
            type:Schema.Types.ObjectId,// one who is subscrbing
            ref:"User"
        },
        channel:{
            type:Schema.Types.ObjectId,//one whoes channel
            ref:"User"
        }



    },{timestamps:true})




export const Subscription=mongoose.model("Subscription",subscriptionsSchema)
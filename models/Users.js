import mongoose, { Schema, connect, mongo } from "mongoose";

mongoose.connect(process.env.MONGO_URI)
mongoose.Promise= global.Promise;

const userSchema = new Schema({
    fullName: String,
    email: String,
    number: Number,
    igUrl: String,
    linkedinUrl: String,
    fcbUrl: String,
    desc: String,
    file: {
        data: Buffer,
        contentType: String,
      },
    service1: String,
    service2: String,
    service3: String,
    service4: String,
    service5: String,
    service6: String,
}
)
const Dentists= mongoose.models.Dentists || mongoose.model("Dentists", userSchema)
export default Dentists

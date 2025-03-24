import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
export const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isDeleted: { type: Boolean, required: false, default: false },
  passwordChengeAt: {
    type: Date,
    required: false,
    default: new Date(),
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    require: false,
    default: "user",
  },
  status: {
    type: String,
    enum: ["actived", "deactivate"],
    require: false,
    default: "actived",
  },

},

  { timestamps: true }
)

userSchema.pre("save", async function (next) {
  const password = this.password;
  if (!password) {
    throw new Error("password is requred");
  }

  const hasPassword = await bcrypt.hash(password, 10);
  if (!hasPassword) {
    throw new Error(" bcrypt solt generate problem ");
  }
  this.password = hasPassword;
  next();
});
export const UserModel = model<TUser>("users", userSchema);
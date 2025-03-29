import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (payload: Partial<TUser>) => {
    const isUserExist = await UserModel.findOne({ email: payload.email })
    
    if (isUserExist) {
        throw new Error("this user alredy exist ");
    }
    const result = await UserModel.create(payload)
    return result
}
const updateSingleUserIntoDb = async (
    userId: string,
    paylood: Partial<TUser>
) => {
    const result = await UserModel.findByIdAndUpdate(userId, paylood, {
        new: true,
        runValidators: true,
    });
    return result;
}


const getAllUserFromDB = async () => {
    const result = await UserModel.find({})
    return result
}

const getSingleUserFormDb = async (userId: string) => {
    const result = await UserModel.findById(userId);
    return result;
};

const deletedSingleUserForDb = async (userId: string) => {
    const result = await UserModel.findByIdAndDelete(userId, { new: true });
    return result;
};


const blockSingleUsersIntoDb = async (userId: string) => {
    const result = await UserModel.updateOne(
      { _id: userId },
      {
        $set: { status: "deactivate" },
      }
    ).select("-password");
    return result;
  };

  const activekSingleUsersIntoDb = async (userId: string) => {
    const result = await UserModel.updateOne(
      { _id: userId },
      {
        $set: { status: "actived" },
      }
    ).select("-password");
    return result;
  };
export const userServices = {
    createUserIntoDB, getAllUserFromDB,
    getSingleUserFormDb, updateSingleUserIntoDb,
    deletedSingleUserForDb,blockSingleUsersIntoDb,
    activekSingleUsersIntoDb
}
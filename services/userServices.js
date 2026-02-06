import User from "../models/user.js";


// CREATE USER
export const createUserService = async (data) => {

    const newUser = await User.create(data);

    return newUser;
};


// GET ALL USERS
export const getAllUsersService = async () => {
    return await User.find();
};


// GET SINGLE USER
export const getUserService = async (id) => {
    return await User.findById(id);
};


// UPDATE USER
export const updateUserService = async (id, data) => {

    const updatedUser = await User.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );

    return updatedUser;
};


// DELETE USER
export const deleteUserService = async (id) => {
    return await User.findByIdAndDelete(id);
};

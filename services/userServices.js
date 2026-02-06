import User from "../models/user.js";


export const createUserService = async (data) => {

    const newUser = await User.create(data);

    return newUser;
};


export const getAllUsersService = async () => {
    return await User.find();
};


export const getUserService = async (id) => {
    return await User.findById(id);
};


export const updateUserService = async (id, data) => {

    const updatedUser = await User.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );

    return updatedUser;
};


export const deleteUserService = async (id) => {
    return await User.findByIdAndDelete(id);
};


export const findUserByEmailService = async (email) => {
    return await User.findOne({ email });
};



import {
    createUserService,
    getAllUsersService,
    updateUserService,
    deleteUserService
} from "../services/userServices.js";


export const createUser = (req, res) => {

    try {
        const { name, email } = req.body;

        const newUser = createUserService(name, email);

        res.status(201).json({
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};


export const getUsers = (req, res) => {

    const users = getAllUsersService();

    res.status(200).json({
        message: "Users fetched successfully",
        data: users
    });
};


export const updateUser = (req, res) => {

    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const updatedUser = updateUserService(id, name, email);

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};


export const deleteUser = (req, res) => {

    try {
        const { id } = req.params;

        const deletedUser = deleteUserService(id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

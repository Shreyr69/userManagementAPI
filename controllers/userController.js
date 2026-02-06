import {
    createUserService,
    getAllUsersService,
    getUserService,
    updateUserService,
    deleteUserService,
    findUserByEmailService
} from "../services/userServices.js";


// CREATE USER
export const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const newUser = await createUserService({
            name,
            email,
            password,
            role
        });

        res.status(201).json({
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET ALL USERS
export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsersService();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// GET SINGLE USER
export const getUser = async (req, res) => {
    try {
        const user = await getUserService(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// UPDATE USER
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await updateUserService(
            req.params.id,
            req.body
        );

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
        res.status(500).json({ message: error.message });
    }
};


// DELETE USER
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await deleteUserService(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const findUserByEmail = async (req, res) => {

    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        const user = await findUserByEmailService(email);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User found",
            data: user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

let users = [];


export const createUser = (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required"
            });
        }

        const newUser = {
            id: Date.now(),
            name,
            email
        };

        users.push(newUser);

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
    try {
        res.status(200).json({
            message: "Users fetched successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};



export const getUser = (req, res) => {
    try {
        const { id } = req.params;

        const user = users.find(u => u.id == id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User fetched successfully",
            data: user
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};


export const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const user = users.find(u => u.id == id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (name) user.name = name;
        if (email) user.email = email;

        res.status(200).json({
            message: "User updated successfully",
            data: user
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

        const userIndex = users.findIndex(u => u.id == id);

        if (userIndex === -1) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const deletedUser = users.splice(userIndex, 1);

        res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser[0]
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};


export const validateUserById = (req, res) => {

    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({
                message: "User ID is required"
            });
        }

        const user = users.find(u => u.id == id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "User is valid",
            data: user
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};


let users = [];


export const createUserService = (name, email) => {

    const newUser = {
        id: Date.now(),
        name,
        email
    };

    users.push(newUser);

    return newUser;
};


export const getAllUsersService = () => {
    return users;
};


export const updateUserService = (id, name, email) => {

    const user = users.find(u => u.id == id);

    if (!user) {
        return null;
    }

    if (name) user.name = name;
    if (email) user.email = email;

    return user;
};


export const deleteUserService = (id) => {

    const userIndex = users.findIndex(u => u.id == id);

    if (userIndex === -1) {
        return null;
    }

    const deletedUser = users.splice(userIndex, 1);

    return deletedUser[0];
};

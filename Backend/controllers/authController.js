const signup = async (req, res) => {
    try {
        //Get the data from the frontend
        const { name, email, password, avatar } = req.body;
        //Check data is correct or not ?
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, E-mail id & Password are required" });
        }
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "Email id already exists" });
        }
        let avatarUrl = "";
        if (avatar) {
            const uploadResponse = await imagekit.upload({
                file: avatar,
                fileName: 'avatar',
                folder: "./mern-music-player",
            });
            avatarUrl = uploadResponse.url;
        }

        const user = await User.create({
            name,
            email,
            password,
            avatar: avatarUrl,
        });
        res.status(201).json({
            message: "User created successfully", user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
            },
        });
    } catch (error) {
        console.error("Signup not successfull");
        res.status(500).json({ message: "Failed to Signup" });
    }
};


export { signup };
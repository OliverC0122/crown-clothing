const User = require('../models/user');

module.exports.registerUser = async (req,res, next) => {

    try{
        console.log(req.body);
        const {username, email, password} = req.body;
        const user = new User({email,username});
        console.log(user);
    
        const registeredUser =  await User.register(user,password);
        console.log(registeredUser);

        req.login(registeredUser, (err) => {
            if (err) return next(err);
        })
        
        res.json(registeredUser);
        
    } catch (err) {
        console.log(err);
    }

};


module.exports.loginUser = (req,res) => {
    const user = req.user; // Passport attaches the authenticated user to req.user
    res.status(200).json({ message: 'Login successful', user });

};

module.exports.logoutUser = (req,res,next)=> {
    req.logOut((err)=>
    {
        if(err) return next(err);
    });
    res.status(200).json({ message: 'Logout successful' });
};
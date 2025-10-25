import AuthService from "../services/auth.service.js";

class AuthController{
    async userSignUp (req,res){
        try {
            const {name, email, password} = req.body
            const user = await AuthService.userSignUp(name,email,password)
            res.status(200).json({user:user})
        } catch (error) {
            res.status(500).json({error: "Failed to sign up"});
        }
    }
    async userLogin (req,res){
        try {
            const {email, password} = req.body
            const data = await AuthService.userLogin(email,password)
            res.status(200).json({user:data.user, idToken: data.idToken})
        } catch (error) {
            res.status(500).json({error: "Failed to sign up"});
        }
    }
}

export default new AuthController();
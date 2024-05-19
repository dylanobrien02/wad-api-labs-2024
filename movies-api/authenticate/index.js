import jwt from 'jsonwebtoken';
import User from '../api/users/userModel';

const authenticate = async (request, response, next) => {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new Error('No authorization header');
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            throw new Error('Bearer token not found');
        }

        const decoded = jwt.verify(token, process.env.SECRET); // Synchronously verify token
        console.log(decoded);

        const user = await User.findByUserName(decoded.username); // Assuming the token contains username
        if (!user) {
            throw new Error('User not found');
        }

        request.user = user; // Attach user to request object
        next();
    } catch (err) {
        next(new Error(`Verification Failed: ${err.message}`));
    }
};

export default authenticate;

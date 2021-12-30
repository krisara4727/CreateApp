import jwt from 'jsonwebtoken';

export function generateToken(user) {
    return jwt.sign({
        ...user
    },
        process.env.JWT_SECRET || 'secret',
        {
            expiresIn: '2d'
        }
    )
}

export const isAuth = (req,res,next) => {
    const authorization = req.headers.authorization;
    if( authorization){
        const token = authorization.slice(7,authorization.length);
        jwt.verify(token,'secret', (err,decode) => {
            if(err){
                res.status(401).send({
                    message:'Invalid token'
                });
            }
            else{
                req.user=decode;
                next();
            }
        });
    }
    else{
        res.status(401).send({message:'No TOken'});
    }
}
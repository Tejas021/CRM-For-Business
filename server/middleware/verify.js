const jwt = require("jsonwebtoken")

const verifyToken= async(req,res,next)=>{
    const authHeader = req.headers.token

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        console.log(token)
        if(token === "" || token === undefined){
          console.log("no token")
        } else{
          jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            console.log(req.user)
            next();
          });
        }
        
      } else {
        return res.status(401).json("You are not authenticated!");
      }

//     const token1 = req.header("x-auth-token")    
//     try{
      
//         if( token1){
            



//             jwt.verify(token1.split(" ")[1],process.env.SECRET_KEY,(err,user)=>{
//                 if(err)res.status(404).json("not Authorized")
//                 else{
//                     req.user=user
//                     next()
//                 }
//             })
//         }
//         else{
           
//             res.status(401).json("not Authenticated")
//         }
//     }
//     catch(err){
//         console.log(err)
//         res.status(400).json(err)
//     }
   

}


const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id||req.user.isAdmin===true){
            next()
        }
        else{
            res.status(403).json("unauthroized")
        }
    })
}


const verifyTokenAndEmployee = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id && req.user.role==="employee" ||req.user.isAdmin===true){
            next()
        }
        else{
            res.status(403).json("unauthroized")
        }
    })
}



const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin===true){
            next()
        }
        else{
            res.status(403).json("unauthroized")
        }
    })
}


module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin,verifyTokenAndEmployee}
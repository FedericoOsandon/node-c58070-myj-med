import { Router } from 'express';

const router = Router();

const users = [];
// A04 El controlador en su archivo
router.post('/register',(req,res)=>{
    const user = req.body;

    console.log(user); // -> log  no debería estar A04
    if(users.length===0) user.id = 1;
    // a07 no hay encriptación de contraseña
    else user.id = users[users.length-1].id+1;
    users.push(user);
    // no debería devolver el password
    res.send({status:"success",payload:user})
})

export default router;
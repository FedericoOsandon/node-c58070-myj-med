import { Router } from "express";

const router = Router();
// Diseño -> falta separar por capas -> Insecure Design A04
router.get('/',(req,res)=>{
    res.render('register');
})

export default router;
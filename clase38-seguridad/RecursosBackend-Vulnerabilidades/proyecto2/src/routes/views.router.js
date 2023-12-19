import { Router } from "express";

const router = Router();
// falta implementar arquitectura de controller A04 diseño inseguro
router.get('/',(req,res)=>{
    res.render('register');
})

router.get('/login',(req,res)=>{
    res.render('login');
})
export default router;
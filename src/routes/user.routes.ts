import { Router } from "express";
const routes = Router();

routes.get('/listAll', (req, res)=>
{
    return res.status(200).json({users:['Felipe', 'Felipe', 'Felipe']});
})

export { routes as userRoutes};
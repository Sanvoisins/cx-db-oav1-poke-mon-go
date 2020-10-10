import { Application, Request, Response } from 'express';
import { error, info, success } from '../helpers/display'
import Pokemon from '../database/schemas/pokemon'
import bodyParser from 'body-parser'
import cors from 'cors'

export class Routes {       
    public routes(app: Application): void { 
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json());
        app.use(cors())
        app.listen( process.env.API_PORT, () => {
            info(`Server started at http://localhost:${ process.env.API_PORT }`)
        })
        app.route('/').get((req: Request, res: Response) => {            
            res.status(200).send({
                message: "Poke-mon-go"
            })
        })          
        app.route('/pokemons').get((req: Request, res: Response) => {    
            const query = Pokemon.find();
            query.exec((err, pokemons) => {
                if(err) {
                    error("Probléme de récuperation des pokemons")
                    res.status(500).send({success: false})
                }
                res.status(200).send(pokemons)
            })
        })          
        app.route('/pokemons/:id').get((req: Request, res: Response) => {     
            const query = Pokemon.findOne({number: req.params.id});
            query.exec((err, pokemons) => {
                if(err) {
                    error("Probléme de récuperation des pokemons")
                    res.status(500).send({success: false})
                }
                res.status(200).send(pokemons)
            })
        })   
        app.route('/pokemons/:id').put((req: Request, res: Response) => {
            const query = Pokemon.updateOne({number: req.params.id}, req.body);
            query.exec((err) => {
                if(err) {
                    error("Probléme de suppresion d'un pokemon")
                    res.status(500).send({success: false})
                }
                res.status(200).send({success: true})
            })
        });    
        app.route('/pokemons/:id').delete((req: Request, res: Response) => {
            const query = Pokemon.deleteOne({number: req.params.id});
            query.exec((err) => {
                if(err) {
                    error("Probléme de suppresion d'un pokemon")
                    res.status(500).send({success: false})
                }
                res.status(200).send({success: true})
            })
        });                
    }
}
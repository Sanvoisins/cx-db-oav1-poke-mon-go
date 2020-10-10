import { error, info, success } from './helpers/display'
import checkEnv from './helpers/checkEnv'
import { connect } from './database'
import express from 'express'
import { Routes } from "./routes/routes"
import Pokemon from './database/schemas/pokemon'
import dataPokemon from '../data/dataPokemon'

const app = express();
const routes = new Routes();
async function main() {
  try {
    checkEnv(['DATABASE_URI'])
    info('\nServer initialization...')
    await connect(process.env.DATABASE_URI as string)
    success('Database successfully connected!')
    routes.routes(app); 
    // Pokemon.insertMany(dataPokemon, (error, docs) => {
    //   if (error) {
    //     error("Pokemon are not charged")
    //   }
    //   success("Pokemon are charged")
    // })
  } catch (e) {
    error(e.message)
  }
}

// Entry point 😎
main()

import express from 'express'
import { computers } from './computers.js'
import { computerId } from './computerID.js'
import { orders } from './orders.js'
import { orderUser } from './userOrders.js'

export const APProuter =  express.Router()

APProuter.get('/computers' , computers)
APProuter.get('/computers/:id' , computerId)
APProuter.get('/computers/orders/userOrders' , orderUser)
APProuter.post('/computers/orders' , orders )
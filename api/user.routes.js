import express from 'express'

const router = express.Router()

router.get('/test', (req, res) => {
    res.send("hello test")
})

export default router
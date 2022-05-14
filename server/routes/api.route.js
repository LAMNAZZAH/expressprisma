const router = require('express').Router();
const { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient()

router.get('/', async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({});
    res.json(products)
  } catch (error) {
    next(error)
  }
});

router.get('/products', async (req, res, next) => {
  res.send({})
})

router.post('/products', async (req, res, next) => {
  res.send({})
})

router.get('/products/:id', async (req, res, next) => {
  res.send({})
})

router.delete('/products/:id', async (req, res, next) => {
  res.send({})
})

router.patch ('/products/:id', async (req, res, next) => {
  res.send({})
})

module.exports = router;

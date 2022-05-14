const router = require('express').Router();
const { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient()

router.get('/', async (req, res, next) => {
 
});

router.get('/products', async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true }
    });
    const categories = await prisma.category.findMany({})
    res.json({products, categories})
  } catch (error) {
    next(error)
  }
})

router.post('/products', async (req, res, next) => {
  try {
    const { name, price, categoryId } = req.body 
    const createProduct = await prisma.product.create({
      data: { name, price, categoryId }
    });
    res.json(createProduct)
  } catch (err) {
    next(err)
  }
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

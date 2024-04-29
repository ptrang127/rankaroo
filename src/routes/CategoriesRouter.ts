import express from 'express';
import CategoriesService from '@src/services/CategoriesService';


const categoryRouter = express.Router();

categoryRouter.use(express.json());

// Define routes
categoryRouter.get('/', async function (req, res) {
  const categories = await CategoriesService.getAllCategories();
  res.send(categories);
});

categoryRouter.get('/:id', async function (req, res) {
  const categoryId: number = parseInt(req.params.id);
  const category = await CategoriesService.getCategoryById(categoryId);
  res.send(category);
});

export default categoryRouter;

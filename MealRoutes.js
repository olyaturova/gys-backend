const { Router } = require('express');
const { getMeal, saveMeals, editMeal, deleteMeal} = require('./MealController');

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/deleteMeal', deleteMeal);
router.post('/editMeal', editMeal);

module.exports = router;
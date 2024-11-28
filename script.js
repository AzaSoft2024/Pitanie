// Функция для фильтрации рецептов по выбранным категориям и кухне
function filterRecipes() {
    // Получаем значения из фильтров
    const category = document.getElementById('categoryFilter').value;
    const cuisine = document.getElementById('cuisineFilter').value;

    // Находим все карточки рецептов
    const recipes = document.querySelectorAll('.recipe-card');

    // Проходим по всем рецептам и скрываем или показываем в зависимости от выбранных фильтров
    recipes.forEach(recipe => {
        const recipeCategory = recipe.getAttribute('data-category');
        const recipeCuisine = recipe.getAttribute('data-cuisine');

        if ((category === '' || category === recipeCategory) && 
            (cuisine === '' || cuisine === recipeCuisine)) {
            recipe.style.display = 'block'; // Показываем рецепт
        } else {
            recipe.style.display = 'none'; // Скрываем рецепт
        }
    });
}

// Функция для добавления рецепта в избранное
function addToFavorites(button) {
    // Получаем родительский элемент рецепта
    const recipe = button.parentNode.parentNode;
    
    // Находим раздел избранного
    const favoritesList = document.getElementById('favoritesList');

    // Создаем клон карточки рецепта, чтобы добавить в список избранных
    const recipeClone = recipe.cloneNode(true);
    
    // Убираем кнопку добавления в избранное из клонированной карточки
    recipeClone.querySelector('.favorite-button').remove();

    // Добавляем клон в список избранных
    favoritesList.appendChild(recipeClone);
}

// Заглушка для функции скачивания плана в PDF
function downloadPlan() {
    alert('Функция загрузки плана в PDF будет добавлена позже.');
}

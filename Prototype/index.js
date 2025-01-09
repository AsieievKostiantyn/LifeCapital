// Функція для збереження даних
function saveData(input) {
    const fieldId = input.id; // Унікальний ідентифікатор поля
    const value = input.value; // Значення поля
    localStorage.setItem(fieldId, value); // Збереження у localStorage
}

// Функція для завантаження даних при завантаженні сторінки
function loadData() {
    const inputs = document.querySelectorAll('input'); // Знаходимо всі інпути
    inputs.forEach(input => {
        const fieldId = input.id; // Унікальний ідентифікатор поля
        const savedValue = localStorage.getItem(fieldId); // Отримуємо значення з localStorage
        if (savedValue !== null) {
            input.value = savedValue; // Заповнюємо поле збереженими даними
        }
    });
}

// Виклик завантаження даних після завантаження сторінки
window.onload = loadData;
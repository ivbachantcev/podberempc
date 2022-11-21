// конфигурация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBtMII-GTgUTez_YM-nuIilqwhmF4hAL94",
    authDomain: "artem-bd3e2.firebaseapp.com",
    projectId: "artem-bd3e2",
    storageBucket: "artem-bd3e2.appspot.com",
    messagingSenderId: "107862085191",
    appId: "1:107862085191:web:50de82e036567fb7e96b62",
    measurementId: "G-BT6FYTK3L5"
  };
// комплектующие
const detailsPC = {
    Frame: "Корпус",
    Memory: "Накопитель",
    Motherboard: "Материнская плата",
    Processor: "Процессор",
    RAM: "Оперативная память",
    cooling: "Куллер",
    powerUnit: "Блок питания",
    videoCard: "Видео карта"
};
// Все возможные конфигурации
const allConfiguration = {
    modelling: "3D моделирование",
    gaming: "Гейминг",
    forHome: "Для дома",
    forMining: "Для майнинга",
    forOffice: "Для офиса",
    forCalculators: "Для тяжёлых вычислений",
    photoProcessing: "Для обработки фото",
    videoProcessing: "Для обработки видео"
};
// Все возможные виды сборок
const allLevels = {
    beginner: "Начинающий",
    standart: "Стандартный",
    professional: "Профессионал"
};
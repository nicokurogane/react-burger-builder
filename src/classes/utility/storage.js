const BURGER_ARRAY_KEY = "burger";

class Storage {
  static saveBurgerToLocalStorage(arrayTaskToAdd) {
    localStorage.setItem(BURGER_ARRAY_KEY, JSON.stringify(arrayTaskToAdd));
  }

  static getBurgerFromLocalStorage() {
    if (localStorage.getItem(BURGER_ARRAY_KEY) !== null)
      return JSON.parse(localStorage.getItem(BURGER_ARRAY_KEY));
    else return [];
  }
}

export default Storage;

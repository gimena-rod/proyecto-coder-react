async function getData() {
  return fetch("/public/mock/data.json")
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
        console.error({ error })
        throw error;
    });
}

export function getProductById(idParam) {
  return new Promise((resolve) => {
    const itemRequested = getData().then((productos) => productos.find((item) => String(item.id) === idParam));
    setTimeout(() => {
      resolve(itemRequested);
    }, 1000);
  });
}

export function getProductsByCategory(catParam) {
  return new Promise((resolve, reject) => {
    const itemsRequested = getData().then((productos) => productos.filter(
      (item) => item.category === catParam
    ));
    if (itemsRequested.length === 0) {
      reject("No se encontro el producto");
    }
    setTimeout(() => {
      resolve(itemsRequested);
    }, 1000);
  });
}

export default getData;

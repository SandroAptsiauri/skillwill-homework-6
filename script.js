function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function makeToys(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("Undefected");
      } else {
        reject("Defected");
      }
    }, delay);
  });
}

function sellToys(status, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status == "Undefected") {
        if (Math.random() > 0.7) {
          resolve("Toy has been sold");
        } else {
          reject("Toy was unsuccessful");
        }
      }
    }, delay);
  });
}

function deliverToys(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Toy delivered");
    }, delay);
  });
}

async function processToys() {
  try {
    const status = await makeToys(3000);
    const result = await sellToys(status, 1000);
    console.log(result);
    const deliveryStatus = await deliverToys(2000);
    console.log(deliveryStatus);
  } catch (error) {
    console.log(error);
  }
}

processToys();

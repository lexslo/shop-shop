export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open connection to the database shop-shop, set version to 1
    const request = window.indexedDB.open('shop-shop', 1);

    // create variables to hold reference to database, transaction, and object store
    let db, tx, store;

    // if version has changed OR 1st time, run this methosd and create 3 object stores
    request.onupgradeneeded = function(e) {
      const db = request.result;
      // create object store for each type of data
      // set "primary" key index to be the _id
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });
    }

    // handle any errors with connecting
    request.onerror = function(e) {
      console.log('There was an error')
    }

    // on database open success
    request.onsuccess = function(e) {
      // save reference to database in db variable
      db = request.result;
      // open transaction to do whatever is passed into storeName, must match one of the object store names
      tx = db.transaction(storeName, 'readwrite');
      // save reference to that object store
      store = tx.objectStore(storeName);

      db.onerror = function(e) {
        console.log('error', e);
      }

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      // close transaction on completion
      tx.oncomplete = function() {
        db.close();
      }
    }

  });
}

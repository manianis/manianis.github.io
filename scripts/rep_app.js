var dbPromise = idb.open('serie_1', 1, function (db) {
  if (!db.objectStoreNames.contains('reponses')) {
    const os = db.createObjectStore('reponses', { keyPath: 'timestamp' });
  }
});

function putReponse(reponse) {
  return dbPromise.then((db) => {
    const store = db.transaction('reponses', 'readwrite')
      .objectStore('reponses');
    store.put(reponse);
  });
}

function getLastReponse() {
  return dbPromise.then(db => {
    return db.transaction('reponses')
      .objectStore('reponses')
      .openCursor(null, 'prev');
  })
  .then(cursor => {
    if (cursor == null) {
      return null;
    }
    return new Reponse(cursor.value);
  });
}

function getTopReponses(n) {
  if (!n) {
    n = 10;
  }
  var reponses = [];
  return dbPromise.then(db => {
    return db.transaction('reponses')
      .objectStore('reponses')
      .openCursor(null, 'prev');
  })
  .then(function nextItem(cursor) {
    if (cursor == null) {
      return null;
    }
    if(n > 0) {
      n--;
      reponses.push(new Reponse(cursor.value));
      return cursor.continue().then(nextItem);
    }
  })
  .then(() => reponses);
}

function Reponse(obj) {
  if (!obj) {
    obj = {
      data: {},
      exercice: 0,
      timestamp: new Date().getTime()
    };
  }
  this.data = {};
  this.count = 76;
  for (let i = 0; i < this.count; i++) {
    const name = 'ctrl_' + i;
    this.data[name] = obj.data[name] || '';
  }
  this.exercice = obj.exercice || 0;
  this.timestamp = obj.timestamp || new Date().getTime();
}

Reponse.prototype.equals = function (other) {
  for (let i = 0; i < this.count; i++) {
    const name = 'ctrl_' + i;
    if (this.data[name] != other.data[name]) {
      return false;
    }
  }
  return true;
};

Reponse.prototype.progression = function () {
  let count = 0;
  for (let i = 0; i < this.count; i++) {
    const name = 'ctrl_' + i;
    if (this.data[name] === '') {
      count++;
    }
  }
  return [count, this.count - count];
};

function formatDateTime(date) {
  var str = "";
  str += (date.getDate() < 10) ? '0' : '';
  str += date.getDate() + '/';
  str += (date.getMonth() < 9) ? '0' : '';
  str += (date.getMonth() + 1) + '/';
  str += (date.getFullYear() < 10) ? '0' : '';
  str += date.getFullYear() + ' ';
  str += (date.getHours() < 10) ? '0' : '';
  str += date.getHours() + ':';
  str += (date.getMinutes() < 10) ? '0' : '';
  str += date.getMinutes();
  return str;
}

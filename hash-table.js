class HashTable {
  constructor(hashFunc) {
    this.table = new Array(127);
    this.size = 0;
    this._hash = hashFunc
      ? hashFunc
      : (key) => {
          let hash = 0;
          for (let index = 0; index < key.length; index++) {
            hash += key.charCodeAt(index);
          }
          return hash % this.table.length;
        };
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index]?.push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index]?.push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index]?.find((i) => i[0] === key);
  }

  remove(key) {
    const index = this._hash(key);
    const initialLength = this.table[index]?.length;
    if (this.table[index] && this.table[index]?.length) {
      const newArr = this.table[index]?.filter((i) => i[0] !== key);
      if (newArr && initialLength && newArr.length < initialLength) {
        this.table[index] = newArr;
        this.size--;
        return true;
      }
      return false;
    } else {
      return false;
    }
  }
}

// Hash Table
const table = new HashTable();

table.set("one", "one");
table.set("eno", "one");
table.remove("eno");

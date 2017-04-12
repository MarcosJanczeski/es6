class Message {
  constructor(tx = 'default', cr) {
    this.text = tx;
    this.created = cr;
  }

  set created(created) {
    if (isNaN(created)) {
      console.log('Valor inválido');
      this._created = Date.now();
    }
  }


  toString() {
    return `text = ${this.text}, created = ${this.created}, _created = ${this._created}`;
  }
}

var emptyMessage = new Message(null, Date.now()-24*60*60);
var otherMessage = new Message('', 'texto');
console.log(String(emptyMessage));
console.log(String(otherMessage));
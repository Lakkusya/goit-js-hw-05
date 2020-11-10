 // Write code under this line
 // Write code under this line
 class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this.append(str)
    this.prepend(str)
  }
}  
console.log(typeof StringBuilder);
// console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');
// const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'
// builder.append('^');
// console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
// builder.prepend('^');
// console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='
// builder.pad('=');
// console.log(builder.value); // '=^.^='

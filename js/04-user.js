/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

class User {
  #login;
  #email;

  constructor(data) {
    this.email = data.email;
    this.login = data.login;
  }

  set login(value) {
    console.log('Set Login:', value);
    this.#login = value;
  }
  set email(value) {
    this.#email = value;
  }

  get login() {
    return this.#login;
  }
  get email() {
    return this.#email;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie

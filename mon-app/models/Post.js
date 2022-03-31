const db = require("../src/server.js");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  static findAll() {
    let sql = "SELECT id_patient, nom, prenom, date_naiss FROM tb_patients WHERE jour ='Lundi'";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM tb_patients WHERE id = ${id};`;

    return db.execute(sql);
  }
}

console.log(Post.findAll);

module.exports = Post;
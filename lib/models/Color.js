const pool = require('../utils/pool');

module.exports = class Color {
  id;
  year;
  name;
  value;
  hex;

  constructor(row) {
    this.id = row.id;
    this.year = row.year;
    this.name = row.name;
    this.value = row.value;
    this.hex = row.hex;
  }
  static async getAll() {
    const { rows } = await pool.query(
      `
            SELECT * FROM colors
        `
    );
    return rows.map((row) => new Color(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
            SELECT * FROM colors
            WHERE id = $1
        `,
      [id]
    );
    return new Color(rows[0]);
  }
};

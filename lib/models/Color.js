const pool = require('../utils/pool');

module.exports = class Color {
  id;
  name;
  value;
  hex;

  constructor(row) {
    this.id = row.id;
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
};

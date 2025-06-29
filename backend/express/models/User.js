const db = require('../config/database');

class User {
  static async create(userData) {
    const query = `
      INSERT INTO users (email, password_hash, full_name, phone, gender, country, address, language, role)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id, email, full_name, role, created_at
    `;
    
    const values = [
      userData.email,
      userData.passwordHash,
      userData.fullName,
      userData.phone,
      userData.gender,
      userData.country,
      userData.address,
      userData.language,
      userData.role
    ];

    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await db.query(query, [email]);
    return result.rows[0];
  }

  static async findById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  static async update(id, userData) {
    const fields = [];
    const values = [];
    let paramCount = 1;

    Object.keys(userData).forEach(key => {
      if (userData[key] !== undefined) {
        fields.push(`${key} = $${paramCount}`);
        values.push(userData[key]);
        paramCount++;
      }
    });

    if (fields.length === 0) {
      throw new Error('No fields to update');
    }

    const query = `
      UPDATE users 
      SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE id = $${paramCount}
      RETURNING *
    `;
    
    values.push(id);
    const result = await db.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM users WHERE id = $1';
    await db.query(query, [id]);
  }

  static async getStats() {
    const query = `
      SELECT 
        COUNT(*) as total_users,
        COUNT(CASE WHEN role = 'affiliate' THEN 1 END) as affiliates,
        COUNT(CASE WHEN role = 'vendor' THEN 1 END) as vendors,
        COUNT(CASE WHEN role = 'customer' THEN 1 END) as customers,
        COUNT(CASE WHEN status = 'active' THEN 1 END) as active_users
      FROM users
    `;
    
    const result = await db.query(query);
    return result.rows[0];
  }
}

module.exports = User;
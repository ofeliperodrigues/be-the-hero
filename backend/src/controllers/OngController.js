const crypto = require('crypto');
const dbConnection = require('../database/connection');

module.exports = {
  async index (req, res) {
      const ongs = await dbConnection('ongs').select('*');
      return res.json(ongs);
  },

  async create (req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(8).toString('HEX');
  
    await dbConnection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
  
    return res.json({ id });
  },
}
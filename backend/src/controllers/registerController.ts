import { Request, Response } from 'express'; // Tuodaan Expressin tyypit
import bcrypt from 'bcryptjs'; // Salasanan salaamiseen
import pool from '../config/db';

// Rekisteröinti
export const registerUser = async (
  req: Request,
  res: Response,
): Promise<any> => {
  const { email, password } = req.body;

  // Tarkistetaan, että kaikki kentät on täytetty
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Email ja salasana ovat pakollisia.' });
  }

  try {
    // Tarkistetaan, onko käyttäjä jo olemassa tietokannassa
    const result = await pool.query('SELECT * FROM account WHERE email = $1', [
      email,
    ]);
    if (result.rows.length > 0) {
      return res.status(400).json({ error: 'Käyttäjä on jo olemassa' });
    }

    // Salataan salasana
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Tallennetaan uusi käyttäjä tietokantaan
    const newUser = await pool.query(
      'INSERT INTO account (email, password) VALUES ($1, $2) RETURNING *',
      [email, hashedPassword],
    );

    // Palautetaan vastaus
    return res
      .status(201)
      .json({ message: 'Käyttäjä luotu', user: newUser.rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Sisäinen virhe' });
  }
};

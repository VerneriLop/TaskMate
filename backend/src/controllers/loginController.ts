import { Request, Response } from 'express'; // Tuodaan Expressin tyypit
import bcrypt from 'bcryptjs'; // Salasanan vertaamiseen
import jwt from 'jsonwebtoken'; // JWT-tokenin luomiseen
import pool from '../config/db'; // Tietokannan yhteys

// Kirjautuminen
export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  // Tarkistetaan, että sähköposti ja salasana on annettu
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Email ja salasana ovat pakollisia.' });
  }

  try {
    // Haetaan käyttäjä tietokannasta sähköpostin perusteella
    const result = await pool.query('SELECT * FROM account WHERE email = $1', [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Käyttäjää ei löytynyt.' });
    }

    const user = result.rows[0]; // Haetaan käyttäjä tuloksista

    // Tarkistetaan, että salasana on oikein
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Väärä salasana.' });
    }

    // Luodaan JWT-token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '1h', // Token on voimassa 1h
    });

    // Palautetaan token
    return res.status(200).json({ message: 'Kirjautuminen onnistui', token });
  } catch (err) {
    console.error(err);
    // Jos virhe, palautetaan sisäinen virhe
    return res.status(500).json({ error: 'Sisäinen virhe' });
  }
};

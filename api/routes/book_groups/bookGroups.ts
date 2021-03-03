import { Request, Response } from 'express';
import { UserInfoRequest } from '../../middleware/requests';
import pool from '../../configDB/config';

export const getBookGroups = async (request: UserInfoRequest, response: Response) => {
  try {
    const userId: number = request.user;
    const {
      rows,
    } = await pool.query('SELECT * FROM book_groups WHERE (is_public=TRUE) OR (user_id=$1) ORDER BY id ASC', [userId]);
    response.status(200).json(rows);
  } catch (err) {
    response.status(500).json(err);
  }
};

export const getBookGroup = async (req: Request, res: Response) => {
  await pool
    .query('SELECT * FROM book_groups WHERE (id=$1)', [req.params.id])
    .then(results => res.status(200).json(results.rows))
    .catch(error => res.status(500).json(error.message));
};

import express from 'express'
import pool from "./config/db.js";
import cors from 'cors'

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(cors());

/* CRUD usuarios */

app.get('/datos/:id', async (req, res) => {
    const id = req.params.id;
    const query = `SELECT usuarios.username, usuarios.email FROM usuarios WHERE usuarios.id = ?`;

    try {

        const connection = await pool.getConnection();
        const [rows] = await connection.query(query, [id]);
        connection.release();
        res.json(rows);
        
    } catch (error) {
        res.send(500).send('internal server error')
    }
})

app.post('/registro', async (req, res) => {
    const usuario = req.body;

    const query = `INSERT INTO usuarios SET ?`

    try {

        const connection = await pool.getConnection();
        const [rows] = await connection.query(query, [usuario]);
        connection.release();
        res.send(`usuario creado con id: ${rows.insertId}`);
        
    } catch (error) {
        res.send(500).send('internal server error')
    }
})

app.put('/changePassword/:id', async (req, res) => {
    const id = req.params.id;
    const producto = req.body;

    const query = `UPDATE usuarios SET ? WHERE id = ?`;

    try {

        const connection = await pool.getConnection();
        const [rows] = await connection.query(query, [producto, id]);
        connection.release();
        res.send(`usuario actualizado con id: ${id}`);
        
    } catch (error) {
        res.send(500).send('internal server error')
    }
})

/* CRUD Productos */
app.get('/productos', async (req, res) => {
    const query = `SELECT * FROM productos`
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query(query);
        connection.release();
        res.json(rows)
    } catch (error) {
        
    }
})

app.get('/producto/:categoria', async (req, res) => {
    const categoria = req.params.categoria;
    const query = `SELECT productos.nombre, productos.stock, productos.precio FROM productos WHERE productos.categoria = ?`;

    try {

        const connection = await pool.getConnection();
        const [rows] = await connection.query(query, [categoria]);
        connection.release();
        res.json(rows);
        
    } catch (error) {
        res.send(500).send('internal server error')
    }
})

app.post('/productos', async (req, res) => {

    const producto = req.body;

    const query = `INSERT INTO productos SET ?`

    try {

        const connection = await pool.getConnection();
        const [rows] = await connection.query(query, [producto]);
        connection.release();
        res.send(`producto creado con id: ${rows.insertId}`);
        
    } catch (error) {
        res.send(500).send('internal server error')
    }
})

app.put('/productos/:id', async (req, res) => {
    const id = req.params.id;
    const producto = req.body;

    const query = `UPDATE productos SET ? WHERE id = ?`;

    try {

        const connection = await pool.getConnection();
        const [rows] = await connection.query(query, [producto, id]);
        connection.release();
        res.send(`producto actualizado con id: ${id}`);
        
    } catch (error) {
        res.send(500).send('internal server error')
    }
})

app.delete('/productos/:id', async (req, res) => {
    const id = req.params.id;

    const query = `DELETE FROM productos WHERE id = ?`;

    try {

        const connection = await pool.getConnection();
        const [rows] = await connection.query(query, [id]);
        connection.release();
        res.send(`producto borrado con id: ${id}`);
        
    } catch (error) {
        res.send(500).send('internal server error')
    }
})

/* CRUD Pedidos */



const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

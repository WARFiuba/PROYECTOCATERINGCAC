import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'mysql-warfiuba.alwaysdata.net',
    user: 'warfiuba',
    password: '29jun24qwe+',
    database: 'warfiuba_cac',
    connectionLimit: 5
});

pool.getConnection()
    .then(connection => {
        console.log('db conectada');
        connection.release();
    })
    .catch(error => {
        console.log('error', error);
    });  

export default pool;
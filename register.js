const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configura los detalles de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Holykrons1991',
  database: 'tdatabase'
});

// Conéctate a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Configura el middleware para analizar los datos del formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura la ruta para recibir los datos del formulario
app.post('/api/formulario', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  

  // Almacena los datos en la base de datos
  const query = 'INSERT INTO teachers (nombre, email) VALUES (?, ?)';
  connection.query(query, [name, email], (err, result) => {
    if (err) {
      console.error('Error al almacenar los datos en la base de datos: ', err);
      res.status(500).send('Error al almacenar los datos en la base de datos');
      return;
    }
    console.log('Datos almacenados con éxito en la base de datos');
    res.status(200).send('Datos almacenados con éxito en la base de datos');
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});

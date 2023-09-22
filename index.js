const express= require('express')
const app = express ()
const port= 3005
const fs = require('fs');
const http = require('http');

//midddelware
app.use(express.static('public'))// Intercepta la petición para dar respuesta
app.use (express.static('data'))
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send('Hola desde express')
})
app.get('/unicosta',(req,res)=>{
    res.send('Hola desde unicosta')
})

app.post('/formulario',(req,res)=>{
    console.log(req.body);
    const{nombre, apellido, id, titulo, autor, editorial, año}= req.body
    const info = `1.Nombre: ${nombre}, 2.Apellido: ${apellido}, 3.Id: ${id}, 4.Titulo: ${titulo}, 5.Autor: ${autor}, 6.Editorial: ${editorial} , 7.Año: ${año}`
    if(!nombre.trim() || !apellido.trim() || !id.trim() || !titulo.trim() || !autor.trim() || !editorial.trim() || !año.trim()) return res.redirect('/error.html');
fs.appendFile('./data/id_123.txt', info + '\n' , function (error) {
    if (error) throw error;
    console.log('Saved!');
    res.download('./data/id_123.txt')
  });
})
app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port}`))


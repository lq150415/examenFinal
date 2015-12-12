//Registro de Contacto
//verificar si es un contacto correcto
//req = peticion
//res = respuesta
var models = require('../models/model.js');

exports.registroPost = function (req, res){
	var post = models.Posts.build({ nombres: "Nombres",
									post: "post"
									});

	res.render('registroPost', {titulo:'Registro de Post', post: post});
}
exports.guardarPost = function (req, res){
	res.render('guardarPost', {titulo:'Registro de Post', mensaje: 'Post Recibido'});
}

//escribir el codigo para devolver respuesta

//Escribir el codigo para guardar los datos

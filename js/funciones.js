function actualizaNotificaciones(id) {
	console.log(`usuario ${id} actualizado`);
}

function obtenerUsuarios() {
	console.log('Leyendo nuevos usuarios');
	min = 12345;
	max = 23456;
	return Math.floor(Math.random()*(max - min)) + min;
}

// Primer Paso para obtener el numero de usuarios

// let idUsuarios = [];
// let totalUsuarios = idUsuarios.length;

// for (var i = 0; i < idUsuarios.length; i++) {
// 	actualizaNotificaciones(idUsuarios[i]);
// }	

// setInterval(() => {
// 	console.log('agregando usuarios');
// 	idUsuarios.push(obtenerUsuarios());
// },3000)

// Segundo paso para los usuarios
// let idUsuarios = [];
// idUsuarios.push(obtenerUsuarios());


// setInterval(() => {
// 	console.log('enviando notificaciones');
// 	for (var i = 0; i < idUsuarios.length; i++) {
// 		actualizaNotificaciones(idUsuarios[i]);
// 	}	
// },5000);

// setInterval(() => {
// 	console.log('agregando usuarios');
// 	idUsuarios.push(obtenerUsuarios());
// },3000)


//Paso 3 Intervalos 

// let idUsuarios = [];
// let totalUsuarios = idUsuarios.length;
// idUsuarios.push(obtenerUsuarios());


// setInterval(() => {
// 	console.log('enviando notificaciones');
// 	if (idUsuarios.length > totalUsuarios) {
// 		for (var i = totalUsuarios; i < idUsuarios.length; i++) {
// 			actualizaNotificaciones(idUsuarios[i]);
// 		}	
// 		totalUsuarios = idUsuarios.length;
// 	}
// }, 5000)

// setInterval(() => {
// 	console.log('agregando usuarios');
// 	idUsuarios.push(obtenerUsuarios());
// },3000)


var idUsuarios = Rx.Observable.create((leerNuevosUsuarios) => {
	setInterval(() => {
		leerNuevosUsuarios.next(obtenerUsuarios());
	}, 3000)
});

idUsuarios.subscribe((usuariosId) => {
	actualizaNotificaciones((usuariosId));
});
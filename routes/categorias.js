var express = require('express');
var router = express.Router();


var categorias = [
		{
			"id": "1",
			"categoria": "Moda",
			"subcategorias": ["Gafas", "Camisas"]
		},
		{
			"id": "2",
			"categoria": "Motor",
			"subcategorias": ["Coches", "Motos"]
		}
		
		
	]


/* GET users listing. */
router.get('/:id', function(req, res, next) {
	console.log("ME llaman");
	var arrayRes = [];

	for (i=0; i<categorias.length; i++){
		if(req.params.id == categorias[i].id){
			arrayRes.push(categorias[i]);
		}

	}

	if(arrayRes.length == 0){
		res.status(404).json({result: false, err: "Categoría no encontada"});
	}else{
		res.json({result: true, rows: arrayRes});
	}

});

router.get('/', function(req, res, next) {
	
	res.json({result: true, rows: categorias});
	

});

module.exports = router;

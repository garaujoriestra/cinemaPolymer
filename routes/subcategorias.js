var express = require('express');
var router = express.Router();


var subcategorias = [
		{
			"idCategoria": "1",
			"nameCategoria": "moda",
			"id": "1",
			"subcategoria": "Gafas",
		},
		{
			"idCategoria": "1",
			"nameCategoria": "moda",
			"id": "2",
			"subcategoria": "Camisas",
		},
		{
			"idCategoria": "2",
			"nameCategoria": "motor",
			"id": "3",
			"subcategoria": "Coches",
		},
		{
			"idCategoria": "2",
			"nameCategoria": "motor",
			"id": "4",
			"subcategoria": "Motos",
		}
		
	]


/* GET users listing. */
router.get('/:nameCategoria', function(req, res, next) {
	console.log("ME llaman");
	var arrayRes = [];

	for (i=0; i<subcategorias.length; i++){
		if(req.params.nameCategoria == subcategorias[i].nameCategoria){
			arrayRes.push(subcategorias[i]);
		}

	}

	if(arrayRes.length == 0){
		res.status(404).json({result: false, err: "Categoría no encontada"});
	}else{
		res.json({result: true, rows: arrayRes});
	}

});

router.get('/', function(req, res, next) {
	
	res.json({result: true, rows: subcategorias});
	

});

module.exports = router;

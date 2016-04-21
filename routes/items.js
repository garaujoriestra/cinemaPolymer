var express = require('express');
var router = express.Router();


var items = [
		{
			"nameSub" : "Gafas",
			"nombre": "Gafa negra",
			"imagen":"https://cdn.shopify.com/s/files/1/0302/4437/products/O23_-_Diamond_Black_Dark_One_1024x1024.jpg?v=1455547959",
			"precio": "25"
		},
		{
			"nameSub" : "Gafas",
			"nombre": "Gafa verde",
			"imagen":"https://cdn.shopify.com/s/files/1/0302/4437/products/fusion_emerald_0f6a0067-540b-43a4-a706-7b9a579af01c_1024x1024.jpg?v=1433874294",
			"precio": "25"
		},
		{
			"nameSub" : "Gafas",
			"nombre": "Gafa roja",
			"imagen":"https://cdn.shopify.com/s/files/1/0302/4437/products/C13_-_Diamond_Black_Ruby_Classic_lateral_1024x1024.jpg?v=1459491374",
			"precio": "25"
		},
		{
			"nameSub" : "Gafas",
			"nombre": "Gafa azul",
			"imagen":"https://cdn.shopify.com/s/files/1/0302/4437/products/C03_1024x1024.jpg?v=1446157710",
			"precio": "25"
		},
		{
			"nameSub" : "Gafas",
			"nombre": "Gafa amarilla",
			"imagen":"https://cdn.shopify.com/s/files/1/0302/4437/products/Diamond-Black-Daylight-Classic_1024x1024.jpg?v=1458733595",
			"precio": "25"
		},
		{
			"nameSub" : "Camisas",
			"nombre": "Camisa verde",
			"imagen":"http://lp2.hm.com/hmprod?set=source[/model/2016/C00%200256162%20044%2066%201874.jpg],type[STILLLIFE_FRONT]&hmver=3&call=url[file:/product/listing]",
			"precio": "30"
		},
		{
			"nameSub" : "Camisas",
			"nombre": "Camisa azul",
			"imagen":"http://lp2.hm.com/hmprod?set=source[/model/2016/C00%200356685%20002%2038%202717.jpg],type[STILLLIFE_FRONT]&hmver=2&call=url[file:/product/listing]",
			"precio": "30"
		},
		{
			"nameSub" : "Camisas",
			"nombre": "Camisa roja",
			"imagen":"http://lp2.hm.com/hmprod?set=source[/model/2016/D00%200384185%20001%2014%203430.jpg],type[STILLLIFE_FRONT]&hmver=2&call=url[file:/product/listing]",
			"precio": "30"
		},
		{
			"nameSub" : "Camisas",
			"nombre": "Camisa negra",
			"imagen":"http://lp2.hm.com/hmprod?set=source[/model/2016/C00%200387106%20001%2062%200310.jpg],type[STILLLIFE_FRONT]&hmver=2&call=url[file:/product/listing]",
			"precio": "35"
		},
		{
			"nameSub" : "Camisas",
			"nombre": "Camisa blanca",
			"imagen":"http://lp2.hm.com/hmprod?set=source[/model/2016/C00%200258350%20001%2028%200119.jpg],type[STILLLIFE_FRONT]&hmver=1&call=url[file:/product/listing]",
			"precio": "35"
		},
		{
			"nameSub" : "Camisas",
			"nombre": "Camisa gris",
			"imagen":"http://lp2.hm.com/hmprod?set=source[/model/2016/C00%200356665%20003%2012%202870.jpg],type[STILLLIFE_FRONT]&hmver=2&call=url[file:/product/listing]",
			"precio": "35"
		},
		{
			"nameSub" : "Camisas",
			"nombre": "Camisa multicolor",
			"imagen":"http://lp2.hm.com/hmprod?set=source[/model/2016/C00%200381982%20001%2087%202818.jpg],type[STILLLIFE_FRONT]&hmver=1&call=url[file:/product/listing]",
			"precio": "35"
		},
		{
			"nameSub" : "Coches",
			"nombre": "Coche amarillo",
			"imagen":"http://i.kinja-img.com/gawker-media/image/upload/s--vykaFdXp--/18sg2cyzub5wjpng.png",
			"precio": "200"
		},
		{
			"nameSub" : "Coches",
			"nombre": "Coche rojo",
			"imagen":"http://www.wjking.co.uk/images/new-vehicle-photos/vauxhall-corsa.png",
			"precio": "200"
		},
		{
			"nameSub" : "Coches",
			"nombre": "Coche negro",
			"imagen":"http://images.elite-auto.fr/visuel/OPEL/opel_16corsacosmo3ha5b_angularfront.png",
			"precio": "200"
		},
		{
			"nameSub" : "Coches",
			"nombre": "Coche blanco",
			"imagen":"http://www.royalcityrentacar.com//resim/cceff8faa855336ad53b3325914caea2.png",
			"precio": "200"
		},
		{
			"nameSub" : "Motos",
			"nombre": "Moto amarilla",
			"imagen":"http://cdn.toyplanet.es/113829-thickbox/moto-winner.jpg",
			"precio": "200"
		},
		{
			"nameSub" : "Motos",
			"nombre": "Moto multicolor",
			"imagen":"http://www.sensacional.cl/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/i/m/img_20150813_171705.png",
			"precio": "200"
		},
		{
			"nameSub" : "Motos",
			"nombre": "Moto azul",
			"imagen":"http://cdn.toyplanet.es/117430-thickbox/avengers-trimoto-waves-6v.jpg",
			"precio": "200"
		},
		{
			"nameSub" : "Motos",
			"nombre": "Moto negra",
			"imagen":"http://cdn.toyplanet.es/113830-thickbox/moto-wind-repsol-6v.jpg",
			"precio": "200"
		}
		
		
	]


/* GET users listing. */
router.get('/:nameSub', function(req, res, next) {
	console.log("ME llaman");
	var arrayRes = [];

	for (i=0; i<items.length; i++){
		if(req.params.nameSub == items[i].nameSub){
			arrayRes.push(items[i]);
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

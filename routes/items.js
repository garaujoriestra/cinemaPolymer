var express = require('express');
var router = express.Router();


var items = [
		{
			"idSub": "1",
			"nameSub" : "Gafas",
			"id": "1",
			"nombre": "Gafa negra",
			"imagen":"http://www.robertomartin.com/fotos-gafas/RB9936M.jpg",
			"precio": "200"
		},
		{
			"idSub": "1",
			"nameSub" : "Gafas",
			"id": "2",
			"nombre": "Gafa verde",
			"imagen":"http://www.robertomartin.com/fotos-gafas/RB3493M.jpg",
			"precio": "200"
		},
		{
			"idSub": "1",
			"nameSub" : "Gafas",
			"id": "3",
			"nombre": "Gafa roja",
			"imagen":"http://www.opticasobrarbe.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gafas_de_sol_ray-ban_rb_3025_aviator_004_78_55_montura_gris_met_lico_-_lente_azul_degradado_a_gris_polarizada.jpg",
			"precio": "200"
		},
		{
			"idSub": "1",
			"nameSub" : "Gafas",
			"id": "4",
			"nombre": "Gafa azul",
			"imagen":"http://st-listas.20minutos.es/images/2014-08/385274/4512031_640px.jpg?1406971479",
			"precio": "200"
		},
		{
			"idSub": "2",
			"nameSub" : "Camisas",
			"id": "5",
			"nombre": "Camisa verde",
			"imagen":"http://www.sibaritissimo.com/wp-content/uploads/2010/06/Gafas-de-Sol-Carrera-01-Champion.jpg",
			"precio": "200"
		},
		{
			"idSub": "2",
			"nameSub" : "Camisas",
			"id": "6",
			"nombre": "Camisa azul",
			"imagen":"http://www.opticalling.com/wordpress/wp-content/uploads/2014/04/CARRERA-5014-S-8QD-Z0.jpg",
			"precio": "200"
		},
		{
			"idSub": "2",
			"nameSub" : "Camisas",
			"id": "7",
			"nombre": "Camisa roja",
			"imagen":"http://www.opticasobrarbe.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gafas_de_sol_ray-ban_rb_3025_aviator_004_78_55_montura_gris_met_lico_-_lente_azul_degradado_a_gris_polarizada.jpg",
			"precio": "200"
		},
		{
			"idSub": "2",
			"nameSub" : "Camisas",
			"id": "8",
			"nombre": "Camisa negra",
			"imagen":"http://img1.designerseven.com/oscommerce/images/viewerxxl/carrerasunglassesCarrera15XDYFF_1/carrerasunglassesCarrera15XDYFF_1_3.jpg",
			"precio": "200"
		},
		{
			"idSub": "3",
			"nameSub" : "Coches",
			"id": "9",
			"nombre": "Coche rojo",
			"imagen":"http://www.quadis.es/image/image_gallery?img_id=188504&t=1460993860066",
			"precio": "200"
		},
		{
			"idSub": "3",
			"nameSub" : "Coches",
			"id": "10",
			"nombre": "Coche negro",
			"imagen":"https://www.mercedes-benz.com/wp-content/uploads/sites/3/2014/08/F_015_Teaser_bild.jpg",
			"precio": "200"
		},
		{
			"idSub": "3",
			"nameSub" : "Coches",
			"id": "11",
			"nombre": "Coche azul",
			"imagen":"http://www.caranddriverthef1.com/sites/default/files/node_articulomotor_imagen/mercedes-slc-4.jpg",
			"precio": "200"
		},
		{
			"idSub": "3",
			"nameSub" : "Coches",
			"id": "12",
			"nombre": "Coche verde",
			"imagen":"http://staticpro-wpmu.atresmedia.com/wp-content/uploads/sites/3/2016/03/17122001/mercedes-amg-gle-coupe-policia-2016-01-960x384.jpg",
			"precio": "200"
		},
		{
			"idSub": "4",
			"nameSub" : "Motos",
			"id": "13",
			"nombre": "Moto roja",
			"imagen":"http://images.hgmsites.net/hug/honda-accord-sdn_100519934_h.jpg",
			"precio": "200"
		},
		{
			"idSub": "4",
			"nameSub" : "Motos",
			"id": "14",
			"nombre": "Moto verde",
			"imagen":"http://i.ndtvimg.com/i/2016-02/honda-accord-hybrid-827_827x510_71454494191.jpg",
			"precio": "200"
		},
		{
			"idSub": "4",
			"nameSub" : "Motos",
			"id": "15",
			"nombre": "Moto azul",
			"imagen":"http://www.peelhonda.com.au/wp-content/uploads/2015/07/H-Accord.jpg",
			"precio": "200"
		},
		{
			"idSub": "4",
			"nameSub" : "Motos",
			"id": "16",
			"nombre": "Moto negra",
			"imagen":"http://www.buscatuning.com/blog/fotos/marcas/honda/accord/accord01.jpg",
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

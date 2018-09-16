var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(
    {
      "phones": [
        {
          id: 1,
          title: "Apple iPhone XS",
          price: 44.50 + "$",
          color: "plata, gris espacial, oro",
          description: "Sofisticado, de calidad y con gran pantalla de retina",
          url_image: "https://www.vodafone.es/img/dynamique/LISTADO_FINANCING/77b607e5693c47cc87c9b535a86d3095_158x270_iphoneXs-gold.png"
        },

        {
          id: 2,
          title: "Samsung Galaxy A6 Negro",
          price: 6 + "$",
          color: "plata, negro, oro",
          description: "La diversión sin límites, a tu bolsillo",
          url_image: "https://www.vodafone.es/img/dynamique/LISTADO_FINANCING/b52fbdb7246f436fb50e7d9c7629d842_158x270-A6.png"
        },

      ]
    }
  );
});

module.exports = router;

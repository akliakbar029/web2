var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_settlement_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "settlement",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/settlement_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -668.000000, 427.000000, 0.000000]
                            })
                        });
var format_vacantland_2 = new ol.format.GeoJSON();
var features_vacantland_2 = format_vacantland_2.readFeatures(json_vacantland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vacantland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vacantland_2.addFeatures(features_vacantland_2);
var lyr_vacantland_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vacantland_2, 
                style: style_vacantland_2,
                popuplayertitle: "vacant land",
                interactive: true,
                title: '<img src="styles/legend/vacantland_2.png" /> vacant land'
            });
var format_agriculture_3 = new ol.format.GeoJSON();
var features_agriculture_3 = format_agriculture_3.readFeatures(json_agriculture_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agriculture_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agriculture_3.addFeatures(features_agriculture_3);
var lyr_agriculture_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agriculture_3, 
                style: style_agriculture_3,
                popuplayertitle: "agriculture",
                interactive: true,
                title: '<img src="styles/legend/agriculture_3.png" /> agriculture'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_settlement_1.setVisible(true);lyr_vacantland_2.setVisible(true);lyr_agriculture_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_settlement_1,lyr_vacantland_2,lyr_agriculture_3];
lyr_vacantland_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'area': 'area', 'Feature': 'Feature', });
lyr_agriculture_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'area': 'area', });
lyr_vacantland_2.set('fieldImages', {'Id': '', 'gridcode': '', 'area': '', 'Feature': '', });
lyr_agriculture_3.set('fieldImages', {'Id': '', 'gridcode': '', 'area': '', });
lyr_vacantland_2.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'inline label - always visible', 'area': 'inline label - always visible', 'Feature': 'no label', });
lyr_agriculture_3.set('fieldLabels', {'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_agriculture_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
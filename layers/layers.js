var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_sitios_lucia_1 = new ol.format.GeoJSON();
var features_sitios_lucia_1 = format_sitios_lucia_1.readFeatures(json_sitios_lucia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitios_lucia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitios_lucia_1.addFeatures(features_sitios_lucia_1);
var lyr_sitios_lucia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitios_lucia_1, 
                style: style_sitios_lucia_1,
                popuplayertitle: 'sitios_lucia',
                interactive: true,
                title: '<img src="styles/legend/sitios_lucia_1.png" /> sitios_lucia'
            });
var format_area_estudio_2 = new ol.format.GeoJSON();
var features_area_estudio_2 = format_area_estudio_2.readFeatures(json_area_estudio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_estudio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_estudio_2.addFeatures(features_area_estudio_2);
var lyr_area_estudio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_estudio_2, 
                style: style_area_estudio_2,
                popuplayertitle: 'area_estudio',
                interactive: true,
                title: '<img src="styles/legend/area_estudio_2.png" /> area_estudio'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_sitios_lucia_1.setVisible(true);lyr_area_estudio_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_sitios_lucia_1,lyr_area_estudio_2];
lyr_sitios_lucia_1.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'categoria': 'categoria', 'origen': 'origen', });
lyr_area_estudio_2.set('fieldAliases', {'nombre': 'nombre', 'origen': 'origen', });
lyr_sitios_lucia_1.set('fieldImages', {'id': '', 'nombre': '', 'categoria': '', 'origen': '', });
lyr_area_estudio_2.set('fieldImages', {'nombre': 'TextEdit', 'origen': 'TextEdit', });
lyr_sitios_lucia_1.set('fieldLabels', {'id': 'no label', 'nombre': 'inline label - always visible', 'categoria': 'inline label - always visible', 'origen': 'header label - always visible', });
lyr_area_estudio_2.set('fieldLabels', {'nombre': 'inline label - always visible', 'origen': 'header label - always visible', });
lyr_area_estudio_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
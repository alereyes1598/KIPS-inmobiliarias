import { Component, OnInit } from '@angular/core';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var myLatlng = new google.maps.LatLng(21.1213285, -86.9192739);
    var myLatlng1 = new google.maps.LatLng(21.1658857, -86.8922295);
    var myLatlng2 = new google.maps.LatLng(21.181461, -86.894334);
    var myLatlng3 = new google.maps.LatLng(21.181780, -86.860173);
    var myLatlng4 = new google.maps.LatLng(21.164598, -86.855553);
    var myLatlng5 = new google.maps.LatLng(21.129766, -86.848649);
    var myLatlng6 = new google.maps.LatLng(21.149851, -86.911525);
    var myLatlng7 = new google.maps.LatLng(21.176065, -86.853991);
    var myLatlng8 = new google.maps.LatLng(21.177771, -86.851753);
    var myLatlng9 = new google.maps.LatLng(21.148747, -86.835586);
    var myLatlng10 = new google.maps.LatLng(21.117459, -86.876478);
    var myLatlng11 = new google.maps.LatLng(21.107375, -86.846988);
    var myLatlng12 = new google.maps.LatLng(21.142535, -86.873010);
    var myLatlng13 = new google.maps.LatLng(21.154621, -86.850426);
    var myLatlng14 = new google.maps.LatLng(21.104515, -86.879300);
    var myLatlng15 = new google.maps.LatLng(21.172655, -86.845726);
    var myLatlng15 = new google.maps.LatLng(21.145729, -86.827596);


    var mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
            "featureType": "water",
            "stylers": [{
                "saturation": 43
            }, {
                "lightness": -11
            }, {
                "hue": "#0088ff"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "hue": "#ff0000"
            }, {
                "saturation": -100
            }, {
                "lightness": 99
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#808080"
            }, {
                "lightness": 54
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ece2d9"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ccdca1"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#767676"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b8cb93"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.medical",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "simplified"
            }]
        }]

    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
    });

    var marker1 = new google.maps.Marker({
        position: myLatlng1,
        title: "Hello World!"
    });

    var marker2 = new google.maps.Marker({
        position: myLatlng2,
        title: "Hello World!"
    });

    var marker3 = new google.maps.Marker({
        position: myLatlng3,
        title: "Hello World!"
    });

    var marker4 = new google.maps.Marker({
        position: myLatlng4,
        title: "Hello World!"
    });

    var marker5 = new google.maps.Marker({
        position: myLatlng5,
        title: "Hello World!"
    });
    
    var marker6 = new google.maps.Marker({
        position: myLatlng6,
        title: "Hello World!"
    });
    
    var marker7 = new google.maps.Marker({
        position: myLatlng7,
        title: "Hello World!"
    });
    
    var marker8 = new google.maps.Marker({
        position: myLatlng8,
        title: "Hello World!"
    });
    
    var marker9 = new google.maps.Marker({
        position: myLatlng9,
        title: "Hello World!"
    });
    
    var marker10 = new google.maps.Marker({
        position: myLatlng10,
        title: "Hello World!"
    });
    
    var marker11 = new google.maps.Marker({
        position: myLatlng11,
        title: "Hello World!"
    });
    
    var marker12 = new google.maps.Marker({
        position: myLatlng12,
        title: "Hello World!"
    });
    
    var marker13 = new google.maps.Marker({
        position: myLatlng13,
        title: "Hello World!"
    });
    
    var marker14 = new google.maps.Marker({
        position: myLatlng14,
        title: "Hello World!"
    });
    
    var marker15 = new google.maps.Marker({
        position: myLatlng15,
        title: "Hello World!"
    });
    
    var marker15 = new google.maps.Marker({
        position: myLatlng15,
        title: "Hello World!"
    });
    


    // To add the marker to the map, call setMap();
    marker.setMap(map);
    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
    marker5.setMap(map);
    marker6.setMap(map);
    marker7.setMap(map);
    marker8.setMap(map);
    marker9.setMap(map);
    marker10.setMap(map);
    marker11.setMap(map);
    marker12.setMap(map);
    marker13.setMap(map);
    marker14.setMap(map);
    marker15.setMap(map);
    marker15.setMap(map);
    
  }

}

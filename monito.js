var _0x375a = ['database', 'child', 'Accident', 'ref', 'Parking', 'Traffic', 'getDate', 'getHours', 'maps', 'Map', 'map', 'orderByKey', 'limitToLast', 'child_added', 'val', 'split', 'Marker', 'LatLng', 'InfoWindow', 'Accident:\x20', 'open', 'setIcon', 'images/acci.png', 'Free\x20Parking:\x20', 'click', 'images/park.png', 'Traffic\x20Jam:\x20', 'Speeding:\x20', '\x20with\x20speed:\x20', 'Kmph', 'addListener', 'images/speeding.png', 'side-menu', 'style', 'width', '250px', 'getElementById', 'main', 'marginLeft', '0px'];
(function(_0x47046d, _0x45d5a6) {
    var _0x4545d5 = function(_0x22fa65) { while (--_0x22fa65) { _0x47046d['push'](_0x47046d['shift']()); } };
    _0x4545d5(++_0x45d5a6);
}(_0x375a, 0x168));
var _0xa90c = function(_0x538a0a, _0x19e156) { _0x538a0a = _0x538a0a - 0x0; var _0x3828c1 = _0x375a[_0x538a0a]; return _0x3828c1; };
var AccidentRef = firebase[_0xa90c('0x0')]()['ref']()[_0xa90c('0x1')](_0xa90c('0x2'));
var ParkingRef = firebase[_0xa90c('0x0')]()[_0xa90c('0x3')]()[_0xa90c('0x1')](_0xa90c('0x4'));
var TrafficRef = firebase[_0xa90c('0x0')]()[_0xa90c('0x3')]()[_0xa90c('0x1')](_0xa90c('0x5'));
var SpeedingRef = firebase[_0xa90c('0x0')]()[_0xa90c('0x3')]()['child']('Speeding');
var d = new Date();
var n = d[_0xa90c('0x6')]();
var h = d[_0xa90c('0x7')]();

function initMap() {
    var _0x3ed428 = { 'zoom': 0xc, 'center': { 'lat': -20.315263, 'lng': 57.541943 } };
    var _0x176345 = new google[(_0xa90c('0x8'))][(_0xa90c('0x9'))](document['getElementById'](_0xa90c('0xa')), _0x3ed428);
    AccidentRef[_0xa90c('0xb')]()[_0xa90c('0xc')](0xa)['on'](_0xa90c('0xd'), function(_0x5d9741) {
        var _0xa30c52 = _0x5d9741[_0xa90c('0xe')]();
        var _0x39fb11 = _0xa30c52[_0xa90c('0xf')]('\x20');
        var _0x17866a = _0x39fb11[0x0];
        var _0x312ca7 = _0x39fb11[0x1];
        var _0x41e93c = _0x39fb11[0x2];
        var _0x5741e9 = _0x39fb11[0x3];
        var _0x5f15a0 = _0x39fb11[0x4];
        var _0x4a60ee = _0x39fb11[0x5];
        var _0x14ce6c = _0x39fb11[0x6];
        if (n == _0x5f15a0) {
            var _0x5ca72a = parseInt(_0x41e93c);
            var _0x49239f = parseInt(_0x4a60ee) - 0x9;
            var _0x2620a2 = new google[(_0xa90c('0x8'))][(_0xa90c('0x10'))]({ 'position': new google[(_0xa90c('0x8'))][(_0xa90c('0x11'))](_0x17866a, _0x312ca7), 'map': _0x176345 });
            var _0x27f855 = new google['maps'][(_0xa90c('0x12'))]({ 'content': _0xa90c('0x13') + _0x5ca72a + ':' + _0x5741e9 + '-' + _0x5f15a0 + ':' + _0x49239f + ':' + _0x14ce6c });
            _0x2620a2['addListener']('click', function() { _0x27f855[_0xa90c('0x14')](_0x176345, _0x2620a2); });
            _0x2620a2[_0xa90c('0x15')](_0xa90c('0x16'));
        }
    });
    ParkingRef[_0xa90c('0xb')]()[_0xa90c('0xc')](0xa)['on'](_0xa90c('0xd'), function(_0x27fdbc) {
        var _0x30a6a3 = _0x27fdbc[_0xa90c('0xe')]();
        var _0x1b4898 = _0x30a6a3[_0xa90c('0xf')]('\x20');
        var _0x5b2e0f = _0x1b4898[0x0];
        var _0xda3f8c = _0x1b4898[0x1];
        var _0x10024c = _0x1b4898[0x2];
        var _0x476384 = _0x1b4898[0x3];
        var _0xe2e7dd = _0x1b4898[0x4];
        var _0x803fa5 = _0x1b4898[0x5];
        var _0x3265c6 = _0x1b4898[0x6];
        if (n == _0xe2e7dd) {
            var _0x5eea9c = parseInt(_0x10024c);
            var _0x3ca008 = parseInt(_0x803fa5) - 0x9;
            var _0x438f33 = new google[(_0xa90c('0x8'))]['Marker']({ 'position': new google['maps'][(_0xa90c('0x11'))](_0x5b2e0f, _0xda3f8c), 'map': _0x176345 });
            var _0x34ade2 = new google[(_0xa90c('0x8'))][(_0xa90c('0x12'))]({ 'content': _0xa90c('0x17') + _0x5eea9c + ':' + _0x476384 + '-' + _0xe2e7dd + ':' + _0x3ca008 + ':' + _0x3265c6 });
            _0x438f33['addListener'](_0xa90c('0x18'), function() { _0x34ade2[_0xa90c('0x14')](_0x176345, _0x438f33); });
            _0x438f33[_0xa90c('0x15')](_0xa90c('0x19'));
        }
    });
    TrafficRef[_0xa90c('0xb')]()[_0xa90c('0xc')](0xa)['on'](_0xa90c('0xd'), function(_0x383f06) {
        var _0x11cc96 = _0x383f06[_0xa90c('0xe')]();
        var _0x1eef93 = _0x11cc96[_0xa90c('0xf')]('\x20');
        var _0x3d723e = _0x1eef93[0x0];
        var _0x15eac0 = _0x1eef93[0x1];
        var _0x4bd925 = _0x1eef93[0x2];
        var _0x1e2d64 = _0x1eef93[0x3];
        var _0x46f30e = _0x1eef93[0x4];
        var _0x3437cf = _0x1eef93[0x5];
        var _0x225b7e = _0x1eef93[0x6];
        if (n == _0x46f30e) {
            var _0x2e3e2e = parseInt(_0x4bd925);
            var _0x4523c6 = parseInt(_0x3437cf) - 0x9;
            var _0x1be57f = new google[(_0xa90c('0x8'))][(_0xa90c('0x10'))]({ 'position': new google[(_0xa90c('0x8'))][(_0xa90c('0x11'))](_0x3d723e, _0x15eac0), 'map': _0x176345 });
            var _0x2cffbd = new google[(_0xa90c('0x8'))][(_0xa90c('0x12'))]({ 'content': _0xa90c('0x1a') + _0x2e3e2e + ':' + _0x1e2d64 + '-' + _0x46f30e + ':' + _0x4523c6 + ':' + _0x225b7e });
            _0x1be57f['addListener'](_0xa90c('0x18'), function() { _0x2cffbd[_0xa90c('0x14')](_0x176345, _0x1be57f); });
            _0x1be57f[_0xa90c('0x15')]('images/traff_jam.png');
        }
    });
    SpeedingRef[_0xa90c('0xb')]()[_0xa90c('0xc')](0xa)['on'](_0xa90c('0xd'), function(_0x15bdd8) {
        var _0x179468 = _0x15bdd8[_0xa90c('0xe')]();
        var _0x5b38d5 = _0x179468[_0xa90c('0xf')]('\x20');
        var _0x5b5fec = _0x5b38d5[0x0];
        var _0x324f9a = _0x5b38d5[0x1];
        var _0x1ace66 = _0x5b38d5[0x2];
        var _0x571df7 = _0x5b38d5[0x3];
        var _0x149786 = _0x5b38d5[0x4];
        var _0x384bd8 = _0x5b38d5[0x5];
        var _0xf33007 = _0x5b38d5[0x6];
        var _0x152c21 = _0x5b38d5[0x7];
        if (n == _0x149786) {
            var _0x283d05 = parseInt(_0x1ace66);
            var _0xa2d6b6 = parseInt(_0x384bd8) - 0x9;
            var _0x2772fa = new google[(_0xa90c('0x8'))][(_0xa90c('0x10'))]({ 'position': new google[(_0xa90c('0x8'))][(_0xa90c('0x11'))](_0x5b5fec, _0x324f9a), 'map': _0x176345 });
            var _0x22de3a = new google[(_0xa90c('0x8'))]['InfoWindow']({ 'content': _0xa90c('0x1b') + _0x283d05 + ':' + _0x571df7 + '-' + _0x149786 + ':' + _0xa2d6b6 + ':' + _0xf33007 + _0xa90c('0x1c') + _0x152c21 + _0xa90c('0x1d') });
            _0x2772fa[_0xa90c('0x1e')](_0xa90c('0x18'), function() { _0x22de3a['open'](_0x176345, _0x2772fa); });
            _0x2772fa['setIcon'](_0xa90c('0x1f'));
        }
    });
}

function openSlideMenu() {
    document['getElementById'](_0xa90c('0x20'))[_0xa90c('0x21')][_0xa90c('0x22')] = _0xa90c('0x23');
    document[_0xa90c('0x24')](_0xa90c('0x25'))[_0xa90c('0x21')][_0xa90c('0x26')] = _0xa90c('0x23');
}

function closeSlideMenu() {
    document[_0xa90c('0x24')](_0xa90c('0x20'))[_0xa90c('0x21')][_0xa90c('0x22')] = _0xa90c('0x27');
    document[_0xa90c('0x24')](_0xa90c('0x25'))['style'][_0xa90c('0x26')] = _0xa90c('0x27');
}
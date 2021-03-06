var Util = {
    gridSize : 20,
    rgb2hex : function(rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    },
    readImage : function(input, el) {
        if ( input.files && input.files[0] ) {
            var fr = new FileReader();
            fr.onload = function(e) {
                $('#img').attr( "src", e.target.result );

                console.log(e.target.result)

                $(el).css('backgroundImage', 'url(' + e.target.result + ')');

                $('#base').text( e.target.result );
            };
            fr.readAsDataURL(input.files[0]);
        }
    },
    adjustGridSize : function(value) {
        return ~~((value + this.gridSize / 2) / this.gridSize) * this.gridSize;
    },
    createNewBlock : function(vis, name, type, mul, beg) {
        var block = $('<div></div>');
        $(block).attr('class', 'block');
        $(block).html('<div class="className">Users</div>\
            <ul class="attributes">' + this.instantiateAttribute(vis, name, type, mul, beg) + '\
            </ul><div class="addNewAttribute">+</div>');
        return block;
    },
    instantiateAttribute : function(vis, name, type, mul, beg) {
        return '<li>\
            <div class="attrVis">' + vis + '</div>\
            <div class="attrName">' + name + '</div>\
            <div class="attrType">' + type + '</div>\
            <div class="attrMul">' + mul + '</div>\
            <div class="attrBeg">' + beg + '</div>\
        </li>'
    },
    instantiateMagicInputField : function(text, width) {
        return $('<input type="text" style="width: ' + width + 'px" value="' + text + '" class="magicInput"><button class="magicInputOk">ok</button>');
    }
}
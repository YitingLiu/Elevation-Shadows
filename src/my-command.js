import sketch from 'sketch'

export default function(context) {
    var sketch = require('sketch')

    var document = sketch.getSelectedDocument()
    var page = document.selectedPage
    var layers = document.selectedLayers
    var UI = require('sketch/ui')
    if(layers.isEmpty) UI.message('No layers selected!');
    else {
        var shadow_0dp=[];
        var shadow_1dp=[{ color: '#00000024', x:0, y:1, blur:1, spread:0,},
                        { color: '#0000001F', x:0, y:2, blur:1, spread:-1,},
                        { color: '#00000033', x:0, y:1, blur:3, spread:0,}];
        var shadow_2dp=[{ color: '#00000024', x:0, y:2, blur:2, spread:0,},
                        { color: '#0000001F', x:0, y:3, blur:1, spread:-2,},
                        { color: '#00000033', x:0, y:1, blur:5, spread:0,}];
        var shadow_3dp=[{ color: '#00000024', x:0, y:3, blur:4, spread:0,},
                        { color: '#0000001F', x:0, y:3, blur:3, spread:-2,},
                        { color: '#00000033', x:0, y:1, blur:8, spread:0,}];
        var shadow_4dp=[{ color: '#00000024', x:0, y:4, blur:5, spread:0,},
                        { color: '#0000001F', x:0, y:1, blur:10, spread:0,},
                        { color: '#00000033', x:0, y:2, blur:4, spread:-1,}];
        var shadow_6dp=[{ color: '#00000024', x:0, y:6, blur:10, spread:0,},
                        { color: '#0000001F', x:0, y:1, blur:18, spread:0,},
                        { color: '#00000033', x:0, y:3, blur:5, spread:-1,}];
        var shadow_8dp=[{ color: '#00000024', x:0, y:8, blur:10, spread:1,},
                        { color: '#0000001F', x:0, y:3, blur:14, spread:2,},
                        { color: '#00000033', x:0, y:5, blur:5, spread:-3,}];
        var shadow_9dp=[{ color: '#00000024', x:0, y:9, blur:12, spread:1,},
                        { color: '#0000001F', x:0, y:3, blur:16, spread:2,},
                        { color: '#00000033', x:0, y:5, blur:6, spread:-3,}];
        var shadow_12dp=[{ color: '#00000024', x:0, y:12, blur:17, spread:2,},
                        { color: '#0000001F', x:0, y:5, blur:22, spread:4,},
                        { color: '#00000033', x:0, y:7, blur:8, spread:-4,}];
        var shadow_16dp=[{ color: '#00000024', x:0, y:16, blur:24, spread:2,},
                        { color: '#0000001F', x:0, y:6, blur:30, spread:5,},
                        { color: '#00000033', x:0, y:8, blur:10, spread:-5,}];
        var shadow_24dp=[{ color: '#00000024', x:0, y:24, blur:38, spread:3,},
                        { color: '#0000001F', x:0, y:9, blur:46, spread:8,},
                        { color: '#00000033', x:0, y:11, blur:15, spread:-7,}];

        var options = ['0dp','1dp','2dp','3dp','4dp','6dp','8dp','9dp','12dp','16dp','24dp']
        var selectDialog = sketch.UI.getSelectionFromUser(
          "Please select shadow depth:",
          options,
            //defualt; 0,1
        )

        var selected=selectDialog[1]
        if(selected==0){
            layers.forEach(function(e){
                e.style.shadows=shadow_0dp;
            })
        } else if(selected==1){
            layers.forEach(function(e){
                e.style.shadows=shadow_1dp;
            })
        } else if(selected==2){
            layers.forEach(function(e){
                e.style.shadows=shadow_2dp;
            })
        } else if(selected==3){
            layers.forEach(function(e){
                e.style.shadows=shadow_3dp;
            })
        } else if(selected==4) {
            layers.forEach(function(e){
                e.style.shadows=shadow_4dp;
            })
        } else if(selected==5) {
            layers.forEach(function(e){
                e.style.shadows=shadow_6dp;
            })
        } else if(selected==6) {
            layers.forEach(function(e){
                e.style.shadows=shadow_8dp;
            })
        } else if(selected==7) {
            layers.forEach(function(e){
                e.style.shadows=shadow_9dp;
            })
        } else if(selected==8) {
            layers.forEach(function(e){
                e.style.shadows=shadow_12dp;
            })
        } else if(selected==9) {
            layers.forEach(function(e){
                e.style.shadows=shadow_16dp;
            })
        } else if(selected==10) {
            log(shadow_24dp);
            layers.forEach(function(e){
                e.style.shadows=shadow_24dp;
            })
        }
    }
}
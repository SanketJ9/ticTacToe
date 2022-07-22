var innerBox = $(".innerbox")
var player = 1;
var crossarr = [];
var cirarr = [];
var winCases= {
  h1 : [1,2,3],
  h2 : [4,5,6],
  h3 : [7,8,9],
  v1 : [1,4,7],
  v2 : [2,5,8],
  v3 : [3,6,9],
  d2 : [1,5,9],
  d1 : [3,5,7]
}

$( document ).ready(function() {
  $('.cross-cont').hide();
  $('.circle').hide();
});

for (var i = 0 ; i < innerBox.length; i++){
    $(innerBox[i]).click(function() {
        // $(this).find('.cross-cont').show();
        // $(this).find('.circle').show();
        // player++;
        if(player % 2 == 0){
          $(this).find('.cross-cont').show();
          player++;
        }else{
          $(this).find('.circle').show();
          player++;
        }

        if($(this).children('.cross-cont').attr("style") == ""){
          crossarr.push($(this).data("pos"))
          console.log("cross",crossarr);
      
        }
        if($(this).children('.circle').attr("style") == ""){
          cirarr.push($(this).data("pos"))
          console.log("circle",cirarr);
        }

        check();
        $(this).off("click");
      }); 
      
      
}

function check(){
  var key = "";
  Object.values(winCases).forEach(function(elem){
      
    if (elem.every(function(val){ return cirarr.includes(val)})) {
      key = getKeyByValue(winCases,elem);
    }else if(elem.every(function(val){ return crossarr.includes(val)})) {
      key = getKeyByValue(winCases,elem);
    }else{
      console.log("draw")
    }
  });


  switch (key) {
    case 'h1':
      $("#hz1").show();
      break;
    case 'h2':
      $("#hz2").show();
      break;
    case 'h3':
      $("#hz3").show();
      break;
    case 'v1':9
      $("#vt1").show();
      break;
    case 'v2':
      $("#vt2").show();
      break;
    case 'v3':
      $('#vt3').show();
      break;
    case'd2':
      $('#dg2').show();
      break;
    case 'd1':
      $("#dg1").show();
  }

}


function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}




       
  
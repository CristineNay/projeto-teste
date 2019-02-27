$(document).on('click','.btns',function(){
  var valor = $('#display').val();
  valor += this.value;
  $('#display').val(valor);
});

$(document).on('click','#ce',function(){
  $('#display').val("");
});
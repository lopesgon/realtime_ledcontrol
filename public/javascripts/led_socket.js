/**
 * Created by fredericlopesgoncalvesmagalhaes on 24.01.17.
 */
/**
 * SCRIPT FOR MANAGING REAL TIME CHECKBOX STATE FROM CHECKED TO UNCHECKED
 */

var socket = io.connect();
/* // UPDATE DATE FROM SYSTEM - TESTING PHASE
socket.on('date', function(data){
  var date = data.date;
  $('#date').text(date);
});*/

socket.on('led_state', function(data){
  $('#checkbox').prop('checked', data);
});

function sendSocket(e){
  $('#checkbox').attr('checked', !$('#checkbox').attr('checked'));
  var stateToSend = $('#checkbox').attr('checked') == "checked" ? true : false;
  socket.emit('led', {state: stateToSend});
}

socket.on('message', function (data) {
  $('#coucou').text(data.message);
});

/**
 * ANCIEN CODE POUR CHANGER L'ETAT DU BOUTON SUBMIT
 */
function change() {
  var btn = document.getElementsByName("act_confirm")[0];
  if (btn.disabled) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
  if (document.getElementsByName("light")[0].checked) {
    document.getElementsByName('light_hidden')[0].disabled = true;
  } else {
    document.getElementsByName('light_hidden')[0].disabled = false;
  }
}
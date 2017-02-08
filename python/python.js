/**
 * Created by fredericlopesgoncalvesmagalhaes on 24.01.17.
 */

var pythonShell = require("python-shell");

module.exports = {

  ledAction : function(action) {
    var pathPythonScript = "../python/led.py";

    var pyshell = new pythonShell(pathPythonScript);

    pyshell.send(JSON.stringify([action]));

    pyshell.on('message', function (msg) {
      console.log("ledAction() message: " + msg);
    });

    // end the input stream and allow the process to exit
    pyshell.end(function (err) {
      if (err) {
        throw err;
      }
      console.log('ledAction(): python script end');
    });
  },

  faceRecognition : function(data){
    console.log("TODO: LANCEMENT DU SCRIPT POUR RECONNAISSANCE FACIALE")
  }

}
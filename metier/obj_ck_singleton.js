var mySingleton = (function () {

  // Instance stores a reference to the Singleton
  var instance = null;

  function init(etat) {
    // Singleton
    return {
      _state: etat,
      _title: "LED",
      _socket: '',

      changeState : function(){
        this._state != this._state;
      },

      getState : function() {
        return this._state;
      },

      getTitle : function(){
        return this._title;
      },

      setSocket : function(addr){
        this._socket = addr;
      }
    };
  };

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function (etat) {
      if (!instance) {
        instance = init(etat);
      }
      return instance;
    }
  };

})();
module.exports = mySingleton;
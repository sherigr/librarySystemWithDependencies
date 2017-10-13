
(function() {

  // Need place to store the library
  var libraryStorage = {};

  function librarySystem(libraryName, dependencyArr, callback) {

    if(arguments.length > 1) {
      // Create new array with dependencies from dependencyArray
      var dependencies = dependencyArr.map(function(dependency) {
        return libraryStorage[dependency];
      });
      return  libraryStorage[libraryName] = callback.apply(this, dependencies); 
    } else {
      return libraryStorage[libraryName];
    }
  }
    window.librarySystem = librarySystem; 

})();

tests({
  // baseline test
  'It should return the library when empty dependency array added': function() {
    librarySystem('dependency', [], function() {
      return 'loaded dependency';
    });
    eq(librarySystem('dependency'), 'loaded dependency');
  },
   'It should return the app library plus the dependency': function() {
    librarySystem('app', ['dependency'], function(dependency) {
      return 'app with ' + dependency;
    });
    eq(librarySystem('app'), 'app with loaded dependency');
  },
  'It should return the type of library, which is programming': function() {
    librarySystem('type', [], function() {
      return 'programming';
    });
    eq(librarySystem('type'), 'programming');
  },
  'It should return the name of the language which is JavaScript': function() {
    librarySystem('name', [], function() {
      return 'JavaScript';
    });
    eq(librarySystem('name'), 'JavaScript');
  },
  'It should return the type and name of the library': function() {
    librarySystem('programming language', ['type', 'name'], function(type, name) {
      return type + ' this in ' + name;
    });
    eq(librarySystem('programming language'), 'programming this in JavaScript');
  },
  // Testing for  additional dependencies
  'It should add vanilla library': function() {
    librarySystem('kind', [], function() {
      return 'vanilla';
    });
    eq(librarySystem('kind'), 'vanilla');
  },
  'It should return the type, name of the library': function() {
    librarySystem('all together now', ['type', 'name', 'kind' ], function(type, name, kind) {
      return type + ' this in ' + kind + ' ' + name;
    });
    eq(librarySystem('all together now'), 'programming this in vanilla JavaScript');
  }
});









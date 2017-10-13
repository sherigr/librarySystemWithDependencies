 Create ```librarySystem``` so that other libraries depend on each other. For example:
```
librarySystem('dependency', [], function() {
  return 'loaded dependency';
});

librarySystem('app', ['dependency'], function(dependency) {
  return 'app with ' + dependency;
});

librarySystem('app'); // 'app with loaded dependency'
```
In the above example, we have two libraries, 'dependency' and 'app'. The twist here is that 'app' needs the 'dependency' library to work. That's why librarySystem here also takes an array that lists required dependencies.

In the example above, we only specify one dependency, but librarySystem should be flexible enough to accept any number (0 or more).

Below is an example of a library that needs two dependencies.
```
librarySystem('name', [], function() {
  return 'Johnny';
});

librarySystem('company', [], function() {
  return 'Company X';
});

librarySystem('workBlurb', ['name', 'company'], function(name, company) {
  return name + ' works at ' + company;
});

librarySystem('workBlurb'); // 'Johnny works at Company X'
```
The task is to rewrite librarySystem so it accepts dependencies as described above.

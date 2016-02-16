Nightwatch setup
================

Following documentation http://nightwatchjs.org/guide#install-nightwatch :

1. install nightwatch globally (before we try anything more fancy ` npm install -g nightwatch `
2. download latest [selenium server](http://selenium-release.storage.googleapis.com/2.52/selenium-server-standalone-2.52.0.jar) and put it in `./bin`
3. run `nightwatch --test test/integration/frontpage.js` in your project root

Notes
-----

if you get some error about Selenium already running / something is using port 4444 already, find out what it is by running : 
```
ps auxw | grep 4444
```

the number in the second column is the PID of the process (process id?). Kill it by running e.g.: 
```
kill 12123
```

Further setup
-------------

I've set up `npm run test:integration` which runs all your tests




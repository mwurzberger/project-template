How to Build
============
npm install -g grunt-cli

npm install -g bower

npm install

grunt build


Bower Setup
===========
Bower will not work behind a firewall sometimes (prevents direct git access) so switch to using https

ADD 

    git config --global url."https://".insteadOf git://

REMOVE 

    git config --global --unset url."https://".insteadOf


TODO
====
Have bower_concat libraries minified with source

Look into adding LiveReload on watch tasks https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei

Example of custom task

https://github.com/ivanoats/modular-boilerplate

Remove bootstrap/Comment out bootstrap
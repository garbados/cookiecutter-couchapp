# Cookiecutter-Couchapp

[cookiecutter]: https://github.com/audreyr/cookiecutter
[couchapp]: http://couchapp.org/page/index

A [CouchApp][couchapp] templates, built using [Cookiecutter][cookiecutter]. Use it to spin up new CouchApps like this:

    cookiecutter git@github.com:garbados/cookiecutter-couchapp.git
    # answer some questions
    cd couchapp

Boom. Project scaffolded. What's the project look like? Why, [take a look!](https://github.com/garbados/cookiecutter-couchapp/tree/master/%7B%7B%20cookiecutter.repo_name%20%7D%7D)

tl;dr:

* [grunt](http://gruntjs.com/) automates the test, build, and deploy processes.
* a Watch directive builds your project anytime it changes.
* [browserify](http://browserify.org/) lets you `require` JS files, just like in Node.js
* a [.travis.yml](https://travis-ci.org/) file for ensuring your code works whenever you push it to GitHub.

If you don't have grunt, do this:

    sudo npm install -g grunt

Now, these commands in the template will work:

* `grunt server`: spin up a static file server that rebuilds when your project changes.
* `grunt deploy`: deploy your project to a remote CouchDB or [Cloudant](https://cloudant.com/) instance.

## Install

First, you'll need [cookiecutter][cookiecutter]. To get it, do this:

    sudo pip install cookiecutter

Don't have pip? Poor bastard. Go [here](http://www.pip-installer.org/en/latest/).

Then, just do this:

    cookiecutter git@github.com:garbados/cookiecutter-couchapp.git
    # answer some questions
    cd couchapp
    echo "now it is time to dance" | say

![/dance](http://eggchair.maxthayer.org/img/3871d07e0f00x223.jpg)

## License

[MIT](http://opensource.org/licenses/MIT) knows what's up.
# JAESBoilerplate

JAESBoilerplate gives you a quick head start with Jade, AngularJS, Express and Stylus

It also includes a translation engine, just edit public/values/values.js to add your key/value and use the following way:
    In view:
        {{t("dot.notation.values")}}
    In controller
        var = t("dot.nocation.values");

The translation loaded will depend on AngularJS native $locale.id

If value replacement is needed, use it the following way:
    The value:
        "en-us":
        {
            "translate":
            {
                "me": "I'm translated and {{value}} will be replaced"
            }
        }

    The usage:
        t("translate.me", {"value": "HEY"}); //this returns "I'm translated and HEY will be replaced"

## How to install dependencies

Just run the following command: "./run.sh" on your console

## How to make it run on your browser

Just run the following command: "PORT=8000 node app" on your console

### Credits
**Filipe Melo** 
filipefmelo [at] gmail.com

**Felix Müller**
mueller.fe [at] gmail.com

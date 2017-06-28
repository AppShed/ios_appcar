appbuilder.app.FileLoader.fetched({"settings":{"currentscreen":null,"main":"11910917","maintype":"screen"},"screen":{"11910917":{"html":"<style scoped>\/* Custom CSS *\/\n\n#screen11910917 .bigcenter {\n\n    text-align: center;\n\tpadding: 20px;\n}\n#screen11910917 .bigcenter .textbox {\n\n\tfont-size: 30px;\n    padding: 10px;\n    text-align: center;\n}\n#screen11910917 .redBG {\n\n    background-color: red;\n}\/* End Custom CSS *\/\n#screen11910917.screen.list .items {\n\tbackground-image: url(4047551bg_x2);\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tbackground-size: cover;\n}\n#item17585646 {\n\tcolor: rgb(222,222,222);\n\tfont-size: 12px;\n\tfont-style: italic;\n}\n#item17585646 button {\n\tcolor: rgb(222,222,222);\n}\n#item17585646 .item-icon-inner .title {\n\tcolor: rgb(222,222,222);\n}\n#item15279615.item {\n\tborder-bottom-width: 0;\n}\n#item16824060 {\n\tcolor: rgb(222,222,222);\n\tfont-size: 12px;\n\tfont-style: italic;\n}\n#item16824060 button {\n\tcolor: rgb(222,222,222);\n}\n#item16824060 .item-icon-inner .title {\n\tcolor: rgb(222,222,222);\n}\n#item15279628.item {\n\tborder-bottom-width: 0;\n}\n#item15267307.item {\n\tborder-bottom-width: 0;\n}\n#item15279664 {\n\ttext-align: center;\n}\n#item15279664.item {\n\tborder-bottom-width: 0;\n}\n#item15279618.item {\n\tborder-bottom-width: 0;\n}\n#item15279640 {\n\tcolor: rgb(222,222,222);\n\tfont-size: 12px;\n\tfont-style: italic;\n}\n#item15279640 button {\n\tcolor: rgb(222,222,222);\n}\n#item15279640 .item-icon-inner .title {\n\tcolor: rgb(222,222,222);\n}\n#item15279640.item {\n\tborder-bottom-width: 0;\n}\n#item15279638.item {\n\tborder-bottom-width: 0;\n}\n<\/style><div class=\" screen list\" id=\"screen11910917\" data-screentype=\"list\" data-tab=\"2628224\"><div class=\"header\" x-blackberry-focusable=\"true\"><div class=\"background\"><\/div><div class=\"back\" data-linktype=\"back\" data-href=\"11910918\" x-blackberry-focusable=\"true\">Back<\/div><div class=\"title\"><span>Cloud Device<\/span><\/div><\/div><div class=\"items scrolling\"><div class=\"items-inner\"><div class=\" item html text\" id=\"item17585646\"><div class=\"html\">Connect to a device in the cloud.<\/div><\/div><div class=\"bigcenter redBG item textbox\" id=\"item15279615\"><div class=\"title\">Device ID<\/div><div class=\"textbox-container\"><input class=\"textbox\" type=\"text\" name=\"deviceId\" value=\"196643\" placeholder=\"\" data-variable=\"deviceId\" data-save-value=\"yes\" data-autocomplete-url=\"\" data-autocomplete-variable=\"deviceId\"\/><\/div><\/div><div class=\" item html text\" id=\"item16824060\"><div class=\"html\">E.g. TK: 196643, FP: 151683, Robbie: 196142<\/div><\/div><div class=\"mystatus item textbox\" id=\"item15279628\"><div class=\"title\">Status<\/div><div class=\"textbox-container\"><input class=\"textbox\" type=\"text\" name=\"device_log\" value=\"No device connected\" placeholder=\"\" data-variable=\"device_log\" data-save-value=\"yes\" data-autocomplete-url=\"\" data-autocomplete-variable=\"device_log\"\/><\/div><\/div><div class=\" item textbox\" id=\"item17410044\"><div class=\"title\">Pro Key<\/div><div class=\"textbox-container\"><input class=\"textbox\" type=\"password\" name=\"key\" value=\"bigg9ut9cgqsheug\" placeholder=\"\" data-variable=\"key\" data-save-value=\"yes\" data-autocomplete-url=\"\" data-autocomplete-variable=\"key\"\/><\/div><\/div><div class=\" item thumb link link-no-arrow\" id=\"item15267307\" data-linktype=\"jscode\" data-href=\"item15267307\" x-blackberry-focusable=\"true\"><div class=\"image-container\"><img class=\"image\" src=\"4047550thumb_x2\" width=\"90\" height=\"90\"\/><\/div><div class=\"title\">Start Driving<\/div><div class=\"text\">Connect to a device in the cloud and start driving.<\/div><\/div><div class=\" item html text\" id=\"item15279664\"><div class=\"html\">or<\/div><\/div><div class=\" item thumb\" id=\"item15279618\"><div class=\"image-container\"><img class=\"image\" src=\"4073899thumb_x2\" width=\"90\" height=\"90\"\/><\/div><div class=\"title\">Advanced Mode<\/div><div class=\"text\">Connect using advanced settings.<\/div><\/div><div class=\" item html text\" id=\"item15279640\"><div class=\"html\">The settings below are used as default settings when connecting to devices. Don't change these values.<\/div><\/div><div class=\" item textbox\" id=\"item15279638\"><div class=\"title\">Layout ID<\/div><div class=\"textbox-container\"><input class=\"textbox\" type=\"text\" name=\"layoutId\" value=\"4901\" placeholder=\"\" data-variable=\"layoutId\" data-save-value=\"yes\" data-autocomplete-url=\"\" data-autocomplete-variable=\"layoutId\"\/><\/div><\/div><div class=\" item textbox\" id=\"item15279665\"><div class=\"title\">Local IP<\/div><div class=\"textbox-container\"><input class=\"textbox\" type=\"text\" name=\"localIP\" value=\"\" placeholder=\"\" data-variable=\"localIP\" data-save-value=\"yes\" data-autocomplete-url=\"\" data-autocomplete-variable=\"localIP\"\/><\/div><\/div><\/div><\/div><\/div>","updated":1498547364,"css":"","secured":false,"javascripts":{"item15267307":"app.setVariable(\"device_log\",\"Connecting to device . \")\napp.getItemByClassName(\"bigcenter\").setBackgroundColor(\"orange\");\napp.getItemByClassName(\"mystatus\").setBackgroundColor(\"orange\");\n\n\nvar device = app.getDevice({\n\tid: app.getVariable('deviceId'),\n\tkey: app.getVariable('key'),\n\tlayoutId: app.getVariable('layoutId')\t\n})\n\nconsole.log(device)\n\napp.setDefaultDevice(app.getVariable('deviceId'))\n\nvar info = \"\";\nif(device.info)\n  info = String(JSON.stringify(device.info));\n\n\napp.setInterval(function(){\n\tapp.setVariable(\"device_log\",app.getVariable(\"device_log\")+\". \")\n\tif(device.info)\n\t  info = String(JSON.stringify(device.info));\n\t\n\tif(info.match(\/variables\/)){\n\t\tapp.getItemByClassName(\"bigcenter\").setBackgroundColor(\"blue\");\n\t\tapp.getItemByClassName(\"mystatus\").setBackgroundColor(\"blue\");\n\t\tapp.setVariable(\"device_log\",\"Connected\")\n\t\tsetTimeout(function(){\n\t\t\tapp.showScreen(11910914)\n\t\t},1000)\n\t}\n},1000,10000);\n\n\nsetTimeout(function(){\n\tif(!info.match(\/variables\/)){\n\t\tdevice.getInfo();\n\t\tapp.getItemByClassName(\"bigcenter\").setBackgroundColor(\"red\");\n\t\tapp.getItemByClassName(\"mystatus\").setBackgroundColor(\"red\");\n\t\tapp.setVariable(\"device_log\",\"Could not connect to device.\")\n\t}\n\t\t\n},11500);"},"events":[]}}});
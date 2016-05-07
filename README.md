# mobirise-template-extension
A template plugin/extension for Mobirise, we need your help!

We want you to learn how to make extensions for Mobirise, and we also want the Mobirise staff to create a marketplace which you can upload to.

## Installation

### Windows

Goto to `%AppData%\Roaming\Mobirise.com\Mobirise\<your account's email>\addons` and copy the template folder into it.

Open up `list.json` and `template\params.json` and copy the JSON in `params.json` to `list.json` but edit it so it looks like this:

Original:
```
{
    "name": "Template",
    "alias": "template",
    "version": 1,
    "minAppVersion": "2.9",
    "components": ["template-block"],
    "plugins": ["template-plugin"],
	"description":"A template plugin for you to expand upon",
	"logo":"thumbnail.png"
}
```

New:
```
"template": {
    "name": "Template",
    "alias": "template",
    "version": 1,
    "minAppVersion": "2.9",
    "type": plugin
},
```
Once done, paste it after the first `{`!

### Mac

Goto to `~/Library/Application Support/Mobirise.com/Mobirise/<your account's email>/addons` and copy the template folder into it.

Open up `list.json` and `template\params.json` and copy the JSON in `params.json` to `list.json` but edit it so it looks like this:

Original:
```
{
    "name": "Template",
    "alias": "template",
    "version": 1,
    "minAppVersion": "2.9",
    "components": ["template-block"],
    "plugins": ["template-plugin"],
	"description":"A template plugin for you to expand upon",
	"logo":"thumbnail.png"
}
```

New:
```
"template": {
    "name": "Template",
    "alias": "template",
    "version": 1,
    "minAppVersion": "2.9",
    "type": plugin
},
```
Once done, paste it after the first `{`!

## Blocks
```
- template-block
  - component.js
  - template.html
  - thumb.png
```

`component.js` - contains your block's code.
`template.html` - contains the code around your generate code from `component.js`
`thumb.png` - is a picture of your block, which is displayed in the add menu.

## Troubleshooting

* If your template doesn't show up, make sure you have pasted it into your `list.json` file correctly
* If your block doesn't show up, make sure you're looking at the right category, if it still isn't there, there is an error in your code.
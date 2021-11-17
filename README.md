![pictau signature example](https://raw.githubusercontent.com/xenolito/npm-console-signature/master/pictau-signature-example.png)

<img src="https://raw.githubusercontent.com/xenolito/npm-console-signature/master/pictau-signature-example.png">

# OUTPUT AUTHOR SIGNATURE ON BROWSER DEVTOOLS

Just outputs the author signature on browser's console dev tools.
Applies formating for Chrome 38+

## Install

`npm i -D console-signature`

## Usage

just import to your project as `import signature from "console-signature"` and pass your config object with the following optional params:

@param author:string --> The author
@param url:string --> the author's web

Call your function `signature({author:'author-name', url:'your-url.com'})`

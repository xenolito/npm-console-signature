function signature(config) {
  const conf = {
    author: (config && config.author) || "@xenolito",
    url: (config && config.url) || "https://www.pictau.com",
  };

  if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
    var args = [
      "\r\n%c Made with ❤️ by " + conf.author + " %c   %c  " + conf.url + "  ",
      "display:block;border: 1px solid #23855d;color: #2e5646; background: #1dbd7c; padding:5px 0;",
      !config || !config.author
        ? "background-image:url('https://pictau.com/noBorrar/xenolito-icon.png');background-size:cover; padding: 15px 20px; line-height:30px; margin: 0 20px"
        : "background-color:#545454",
      "display:block;padding:5px 0;border: 1px solid #000;",
    ];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log(
      "Made with love ❤️ by " + conf.author + " - " + conf.url
    );
  }
}

export default signature;

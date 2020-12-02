function signature(config) {
  if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
    const conf = {
      author: (config && config.author) || "@xenolito",
      url: (config && config.url) || "https://www.pictau.com",
    };
    var args = [
      "\n %c Made with ❤️ by " + conf.author + " %c " + conf.url + " %c %c\n",
      "border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;",
      "padding:5px 0;border: 1px solid #000;",
      "color: #fff; padding:5px 0;",
      "color: #b0976d; padding:5px 0;",
    ];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log(
      "Made with love ❤️ by " + conf.author + " - " + conf.url
    );
  }
}

export default signature;

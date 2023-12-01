module.exports = function(eleventyConfig) {

    eleventyConfig.setServerOptions({
        showAllHosts: true,
      })
      
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
   };

   return {
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
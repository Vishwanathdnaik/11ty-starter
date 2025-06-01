const kickstartDS = require("@kickstartds/eleventy-plugin-kickstartds");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(kickstartDS);
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};

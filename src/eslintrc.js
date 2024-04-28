module.exports = {
    // other ESLint configurations
    env: {
      browser: true,
      node: true,
      es2021: true,
      jest: true,
      // Set process.env.CI to false explicitly
      // to prevent treating warnings as errors during the build process
      process: false,
    },
  };
  
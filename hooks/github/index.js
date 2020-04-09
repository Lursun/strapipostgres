module.exports = strapi => {
    return {
      async initialize() {
        console.log('my hook is loaded');
      },
    };
  };
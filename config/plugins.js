module.exports = () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
        legal: {
          field: "slug",
          references: "title",
        },
        "breed-book": {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  seo: {
    enabled: true,
  },
});

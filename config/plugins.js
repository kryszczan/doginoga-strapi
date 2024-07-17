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
        character: {
          field: "slug",
          references: "title",
        },
        disease: {
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

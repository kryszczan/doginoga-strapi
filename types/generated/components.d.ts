import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleContentArticleContent extends Schema.Component {
  collectionName: 'components_for-buyer_content_for-buyer_contents';
  info: {
    displayName: 'for-buyer content';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface RaceArticleFaqItem extends Schema.Component {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'Faq item';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface RaceArticleFromTo extends Schema.Component {
  collectionName: 'components_shared_from_tos';
  info: {
    displayName: 'from_to';
    description: '';
  };
  attributes: {
    male_from: Attribute.Float;
    male_to: Attribute.Float;
    female_from: Attribute.Float;
    female_to: Attribute.Float;
  };
}

export interface SharedBanerDoginoga extends Schema.Component {
  collectionName: 'components_shared_baner_doginogas';
  info: {
    displayName: 'Baner doginoga';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface SharedBanerMobile extends Schema.Component {
  collectionName: 'components_shared_baner_mobiles';
  info: {
    displayName: 'Baner mobile';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    apple_url: Attribute.String;
    android_url: Attribute.String;
  };
}

export interface SharedContentItem extends Schema.Component {
  collectionName: 'components_shared_content_items';
  info: {
    displayName: 'Content item';
    description: '';
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    subtitle: Attribute.String;
    color: Attribute.Enumeration<
      ['Czerwony', 'Zielony', '\u017B\u00F3\u0142ty', 'Niebieski']
    >;
  };
}

export interface SharedFaqContent extends Schema.Component {
  collectionName: 'components_article_content_faq_contents';
  info: {
    displayName: 'Faq content';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    faq_items: Attribute.Component<'race-article.faq-item', true>;
  };
}

export interface SharedFooterColumn extends Schema.Component {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'Footer column';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'shared.footer-item', true>;
    url: Attribute.String;
  };
}

export interface SharedFooterItem extends Schema.Component {
  collectionName: 'components_shared_footer_items';
  info: {
    displayName: 'Footer item';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedFooterLinks extends Schema.Component {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer links';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedHowItsWorking extends Schema.Component {
  collectionName: 'components_shared_how_its_workings';
  info: {
    displayName: 'How its works';
    description: '';
  };
  attributes: {
    test: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article-content.article-content': ArticleContentArticleContent;
      'race-article.faq-item': RaceArticleFaqItem;
      'race-article.from-to': RaceArticleFromTo;
      'shared.baner-doginoga': SharedBanerDoginoga;
      'shared.baner-mobile': SharedBanerMobile;
      'shared.content-item': SharedContentItem;
      'shared.faq-content': SharedFaqContent;
      'shared.footer-column': SharedFooterColumn;
      'shared.footer-item': SharedFooterItem;
      'shared.footer-links': SharedFooterLinks;
      'shared.how-its-working': SharedHowItsWorking;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}

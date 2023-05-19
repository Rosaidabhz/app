const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const ContentTitle = 'titulo del sitio';
  const PrincipalImage = '/ruta/imagen.jpg';
  const texto = 'Este es el texto que deseas mostrar';
  const titulo = 'Título de la página';
  res.render('pagina', {
    site: {
      SiteID: 562,
      CommunityID: null,
      SiteName: 'abeamthenumbers.com',
      SiteDescription: null,
      SiteDomainName: 'abeamthenumbers.com',
      SiteTLD: null,
      SiteSecondaryDomain: null,
      SiteTertiaryDomain: null,
      SiteQuaternaryDomain: null,
      SiteWWWRedirect: null,
      SiteHTTPSRedirect: null,
      SiteLogo: null,
      SiteLogoSmall: null,
      SiteLogoBlack: 'https://creatrs.s3.us-east-2.amazonaws.com/blog/abeamthenumbers.com/logo-light.png',
      SiteLogoWhite: 'https://creatrs.s3.us-east-2.amazonaws.com/blog/abeamthenumbers.com/logo-dark.png',
      SiteFavIcon: 'https://creatrs.s3.us-east-2.amazonaws.com/creatr.studio/favicon.ico',
      SiteContinent: null,
      SiteCountry: null,
      SiteState: null,
      SiteCity: null,
      SiteAPILocation: null,
      SiteLatitude: null,
      SiteLongitude: null,
      SiteRadius: null,
      SiteRegional: null,
      SiteDefaultCurrency: null,
      SiteCurrencySymbol: null,
      SiteDefaultLanguage: null,
      SiteMetaTitle: 'abeamthenumbers',
      SiteMetaDescription: 'ABeam The Numbers is an aviation site on aviation safety and piloting skills.',
      SiteGACode: null,
      SiteSocialFacebook: null,
      SiteSocialInstagram: null,
      SiteSocialTwitter: null,
      SiteSocialPinterest: null,
      SiteSocialYoutube: null,
      SiteSocialSnapchat: null,
      SiteSocialReddit: null,
      SiteSocialLinkedIn: null,
      SiteWikipedia: null,
      SitePrivateIP: null,
      SiteMaintenance: false,
      SiteActive: true,
      SiteDeleted: false,
      SiteTemplate: '1',
      SiteCategory: 'blog',
      DomainID: 89,
      SiteKeywords: 'Aviation{:~Pilot{:~piloting{:~aviation safety',
      SiteViews: '272',
      SitePrincipalImage: 'https://creatrs.s3.us-east-2.amazonaws.com/blog/abeamthenumbers.com/principal.png',
      SiteLeads: '0',
      SiteLeadNotificationsMethod: '',
      SiteSyndicationID: null,
      SiteDateCreated: new Date("2023-05-16T19:35:01.078Z"),
      SiteDateUpdated: new Date("2023-05-16T19:35:01.078Z"),
      SiteDateDeleted: null,
      Template: { TemplateID: 1, TemplateName: 'blogzine', TemplateNumber: 1 },
      Categories: [],
      posts: [{
        ContentID: 263,
        SiteID: 515,
        MemberID: 29,
        ContentDir1: null,
        ContentDir2: null,
        ContentDir3: null,
        ContentDir4: null,
        ContentDir5: null,
        ContentDir6: null,
        ContentDir7: null,
        ContentTitle: 'Unlocking the Secrets of Coffee: The Art and Science of Tasting',
        ContentSubtitle: null,
        ContentLocation: null,
        ContentType: 'blog',
        ContentMultimedia01: null,
        ContentMultimedia02: null,
        ContentMultimedia03: null,
        ContentMultimedia04: null,
        ContentMultimedia05: null,
        ContentMultimedia06: null,
        ContentMultimedia07: null,
        ContentMultimedia08: null,
        ContentMultimedia09: null,
        ContentMultimedia10: null,
        ContentLatitude: null,
        ContentLongitude: null,
        ContentArea: null,
        ContentBody: '<p><h1>Unlocking the Secrets of Coffee: The Art and Science of Tasting</h1></p>\n' +
          '<p><h2>The Art of Tasting Coffee</h2></p>\n' +
          '<p>Tasting coffee is more than just sipping a hot beverage. It is an art form that requires a keen sense of smell, taste, and the ability to identify different flavor profiles. The process of tasting coffee involves several steps, including grinding the beans, making the coffee, and finally, sampling the brew.</p>\n' +
          '<p>It is essential to sample coffee in small quantities to better appreciate its aroma, taste, and texture. The first step is to smell the coffee, as the aroma provides the initial perception of flavor. Then, sip the brew and let it settle in the mouth, taking note of its body, acidity, and aftertaste. Finally, savor the coffee, identifying its unique blend of flavors and complexities.</p>\n' +
          '<p><h2>The Science of Tasting Coffee</h2></p>\n' +
          '<p>The science of tasting coffee involves examining the chemical makeup, growing conditions, and processing methods used to produce the bean. Different regions produce different varieties of coffee, resulting in diverse flavor profiles. Understanding the science of coffee tasting helps to identify the origin, processing, and roast of the coffee.</p>\n' +
          '<p>The acidity, body, sweetness, and aftertaste of coffee can be manipulated during the roasting process. The roast profile can greatly impact the overall flavor of the coffee. Roasting coffee is akin to baking cookies; a slight change in the temperature can significantly impact the outcome. Understanding the roasting process can mean the difference between a caramel-like sweetness or a bitter taste.</p>\n' +
          '<p>In conclusion, coffee tasting is an art and science that involves a deep appreciation and understanding of the beverage we all love. Take the time to appreciate and enjoy the nuances of your cup of coffee, and you will discover a whole new level of enjoyment.</p>',
        ContentWeb1: null,
        ContentWeb2: null,
        ContentWeb3: null,
        ContentWeb4: null,
        ContentWeb5: null,
        ContentAuthor: 'Jorge Gallego',
        ContentWebsiteAuthor: null,
        ContentActive: true,
        ContentStatus: 'published',
        ContentPublishedDate: new Date("2023-05-16T19:35:01.078Z"),
        ContentExpirationDate: null,
        ContentViews: '19',
        ContentSlug: 'unlocking-the-secrets-of-coffee-the-art-and-science-of-tasting',
        ContentCategory: null,
        ContentSubCategory: null,
        ContentAccess: '',
        ContentPrice: 0,
        ContentParentContentID: null,
        ContentCreatedDate: new Date("2023-05-16T19:35:01.078Z"),
        ContentUpdatedDate: new Date("2023-05-16T19:35:01.078Z"),
        ContentDeletedDate: null
      },
      {
        ContentID: 263,
        SiteID: 515,
        MemberID: 29,
        ContentDir1: null,
        ContentDir2: null,
        ContentDir3: null,
        ContentDir4: null,
        ContentDir5: null,
        ContentDir6: null,
        ContentDir7: null,
        ContentTitle: 'Unlocking the Secrets of Coffee: The Art and Science of Tasting',
        ContentSubtitle: null,
        ContentLocation: null,
        ContentType: 'blog',
        ContentMultimedia01: null,
        ContentMultimedia02: null,
        ContentMultimedia03: null,
        ContentMultimedia04: null,
        ContentMultimedia05: null,
        ContentMultimedia06: null,
        ContentMultimedia07: null,
        ContentMultimedia08: null,
        ContentMultimedia09: null,
        ContentMultimedia10: null,
        ContentLatitude: null,
        ContentLongitude: null,
        ContentArea: null,
        ContentBody: '<p><h1>Unlocking the Secrets of Coffee: The Art and Science of Tasting</h1></p>\n' +
          '<p><h2>The Art of Tasting Coffee</h2></p>\n' +
          '<p>Tasting coffee is more than just sipping a hot beverage. It is an art form that requires a keen sense of smell, taste, and the ability to identify different flavor profiles. The process of tasting coffee involves several steps, including grinding the beans, making the coffee, and finally, sampling the brew.</p>\n' +
          '<p>It is essential to sample coffee in small quantities to better appreciate its aroma, taste, and texture. The first step is to smell the coffee, as the aroma provides the initial perception of flavor. Then, sip the brew and let it settle in the mouth, taking note of its body, acidity, and aftertaste. Finally, savor the coffee, identifying its unique blend of flavors and complexities.</p>\n' +
          '<p><h2>The Science of Tasting Coffee</h2></p>\n' +
          '<p>The science of tasting coffee involves examining the chemical makeup, growing conditions, and processing methods used to produce the bean. Different regions produce different varieties of coffee, resulting in diverse flavor profiles. Understanding the science of coffee tasting helps to identify the origin, processing, and roast of the coffee.</p>\n' +
          '<p>The acidity, body, sweetness, and aftertaste of coffee can be manipulated during the roasting process. The roast profile can greatly impact the overall flavor of the coffee. Roasting coffee is akin to baking cookies; a slight change in the temperature can significantly impact the outcome. Understanding the roasting process can mean the difference between a caramel-like sweetness or a bitter taste.</p>\n' +
          '<p>In conclusion, coffee tasting is an art and science that involves a deep appreciation and understanding of the beverage we all love. Take the time to appreciate and enjoy the nuances of your cup of coffee, and you will discover a whole new level of enjoyment.</p>',
        ContentWeb1: null,
        ContentWeb2: null,
        ContentWeb3: null,
        ContentWeb4: null,
        ContentWeb5: null,
        ContentAuthor: 'Jorge Gallego',
        ContentWebsiteAuthor: null,
        ContentActive: true,
        ContentStatus: 'published',
        ContentPublishedDate: new Date("2023-05-16T19:35:01.078Z"),
        ContentExpirationDate: null,
        ContentViews: '19',
        ContentSlug: 'unlocking-the-secrets-of-coffee-the-art-and-science-of-tasting',
        ContentCategory: null,
        ContentSubCategory: null,
        ContentAccess: '',
        ContentPrice: 0,
        ContentParentContentID: null,
        ContentCreatedDate: new Date("2023-05-16T19:35:01.078Z"),
        ContentUpdatedDate: new Date("2023-05-16T19:35:01.078Z"),
        ContentDeletedDate: null
      },
      {
        ContentID: 263,
        SiteID: 515,
        MemberID: 29,
        ContentDir1: null,
        ContentDir2: null,
        ContentDir3: null,
        ContentDir4: null,
        ContentDir5: null,
        ContentDir6: null,
        ContentDir7: null,
        ContentTitle: 'Unlocking the Secrets of Coffee: The Art and Science of Tasting',
        ContentSubtitle: null,
        ContentLocation: null,
        ContentType: 'blog',
        ContentMultimedia01: null,
        ContentMultimedia02: null,
        ContentMultimedia03: null,
        ContentMultimedia04: null,
        ContentMultimedia05: null,
        ContentMultimedia06: null,
        ContentMultimedia07: null,
        ContentMultimedia08: null,
        ContentMultimedia09: null,
        ContentMultimedia10: null,
        ContentLatitude: null,
        ContentLongitude: null,
        ContentArea: null,
        ContentBody: '<p><h1>Unlocking the Secrets of Coffee: The Art and Science of Tasting</h1></p>\n' +
          '<p><h2>The Art of Tasting Coffee</h2></p>\n' +
          '<p>Tasting coffee is more than just sipping a hot beverage. It is an art form that requires a keen sense of smell, taste, and the ability to identify different flavor profiles. The process of tasting coffee involves several steps, including grinding the beans, making the coffee, and finally, sampling the brew.</p>\n' +
          '<p>It is essential to sample coffee in small quantities to better appreciate its aroma, taste, and texture. The first step is to smell the coffee, as the aroma provides the initial perception of flavor. Then, sip the brew and let it settle in the mouth, taking note of its body, acidity, and aftertaste. Finally, savor the coffee, identifying its unique blend of flavors and complexities.</p>\n' +
          '<p><h2>The Science of Tasting Coffee</h2></p>\n' +
          '<p>The science of tasting coffee involves examining the chemical makeup, growing conditions, and processing methods used to produce the bean. Different regions produce different varieties of coffee, resulting in diverse flavor profiles. Understanding the science of coffee tasting helps to identify the origin, processing, and roast of the coffee.</p>\n' +
          '<p>The acidity, body, sweetness, and aftertaste of coffee can be manipulated during the roasting process. The roast profile can greatly impact the overall flavor of the coffee. Roasting coffee is akin to baking cookies; a slight change in the temperature can significantly impact the outcome. Understanding the roasting process can mean the difference between a caramel-like sweetness or a bitter taste.</p>\n' +
          '<p>In conclusion, coffee tasting is an art and science that involves a deep appreciation and understanding of the beverage we all love. Take the time to appreciate and enjoy the nuances of your cup of coffee, and you will discover a whole new level of enjoyment.</p>',
        ContentWeb1: null,
        ContentWeb2: null,
        ContentWeb3: null,
        ContentWeb4: null,
        ContentWeb5: null,
        ContentAuthor: 'Jorge Gallego',
        ContentWebsiteAuthor: null,
        ContentActive: true,
        ContentStatus: 'published',
        ContentPublishedDate: new Date("2023-05-16T19:35:01.078Z"),
        ContentExpirationDate: null,
        ContentViews: '19',
        ContentSlug: 'unlocking-the-secrets-of-coffee-the-art-and-science-of-tasting',
        ContentCategory: null,
        ContentSubCategory: null,
        ContentAccess: '',
        ContentPrice: 0,
        ContentParentContentID: null,
        ContentCreatedDate: new Date("2023-05-16T19:35:01.078Z"),
        ContentUpdatedDate: new Date("2023-05-16T19:35:01.078Z"),
        ContentDeletedDate: null
      }]
    }

  })
});


// Inicia el servidor
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});

window.AQEEL_CONFIG = {
  // Paste the existing Google Apps Script web-app URL ending in /exec.
  API_URL: "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE",

  WHATSAPP_NUMBER: "14037008800",

  // Place every original photo and video in this same assets folder.
  // The site automatically creates the gallery from this list.
  GALLERY: [
    { type: "image", src: "assets/cabin-01.jpg", alt: "Aqeel Cabin" },
    { type: "image", src: "assets/dome-01.jpg", alt: "Jungle River Dome" },
    { type: "image", src: "assets/river-01.jpg", alt: "River at the property" },
    { type: "image", src: "assets/waterfall-01.jpg", alt: "Nearby waterfall" },
    { type: "video", src: "assets/property-video-01.mp4", poster: "assets/property-video-01-poster.jpg", alt: "Property video" }
  ],

  // Add a Google Places API endpoint/proxy here for truly live reviews.
  // Never expose a secret server key in frontend JavaScript.
  REVIEWS_ENDPOINTS: {
    google: "",
    airbnb: "",
    booking: ""
  },

  // Safe fallback cards appear until live endpoints are configured.
  REVIEW_FALLBACKS: {
    google: [],
    airbnb: [],
    booking: []
  },

  NEARBY: [
    {
      name: "Supermercado Churuquita",
      type: "grocery",
      description_es: "Supermercado local para compras básicas cerca de la propiedad.",
      description_en: "Local grocery store for basic shopping near the property.",
      map: "https://www.google.com/maps/search/?api=1&query=Supermercado+Churuquita+Grande+Panama",
      image: "assets/nearby-groceries-1.jpg"
    },
    {
      name: "Mega Market Olympus",
      type: "grocery",
      description_es: "Opción de supermercado para alimentos y artículos esenciales.",
      description_en: "Grocery option for food and everyday essentials.",
      map: "https://www.google.com/maps/search/?api=1&query=Mega+Market+Olympus+Penonome+Panama",
      image: "assets/nearby-groceries-2.jpg"
    },
    {
      name: "El Machetazo — Penonomé",
      type: "grocery",
      description_es: "Gran tienda en Penonomé con comestibles y artículos generales.",
      description_en: "Large Penonomé store with groceries and general merchandise.",
      map: "https://www.google.com/maps/search/?api=1&query=El+Machetazo+Penonome+Panama"
    },
    {
      name: "Super Carnes — Penonomé",
      type: "grocery",
      description_es: "Supermercado en Penonomé para compras completas.",
      description_en: "Penonomé supermarket for a more complete grocery run.",
      map: "https://www.google.com/maps/search/?api=1&query=Super+Carnes+Penonome+Panama"
    },
    {
      name: "Fonda La Naranja",
      type: "restaurant",
      description_es: "Fonda local en Churuquita Grande con comida panameña.",
      description_en: "Local Churuquita Grande eatery serving Panamanian food.",
      map: "https://www.google.com/maps/search/?api=1&query=Fonda+La+Naranja+Churuquita+Grande+Panama",
      image: "assets/nearby-restaurants-1.jpg"
    },
    {
      name: "Nacionsushi — Penonomé",
      type: "restaurant",
      description_es: "Restaurante de sushi y cocina asiática en Boulevard Penonomé.",
      description_en: "Sushi and Asian cuisine at Boulevard Penonomé.",
      map: "https://www.google.com/maps/search/?api=1&query=Nacionsushi+Penonome+Panama"
    }
  ]
};

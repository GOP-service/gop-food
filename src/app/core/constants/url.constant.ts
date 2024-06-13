
const endpoint_deploy = 'https://gop-gateway.purplesand-fad3fa4f.southeastasia.azurecontainerapps.io';
const endpoint_local = 'http://localhost:8080';
const endpoint = endpoint_local;
export const URLConstant = {
  ROUTE: {
    HOMEPAGE: '/',
    RESTAURANT_PAGE: {
      BASE: '/restaurant',
    },
    CUISINE_PAGE: {
      BASE: '/cuisines'
    },
    ORDER_PAGE: {
      BASE: '/order/checkout',
      TRACKER: '/order/tracker'
    }
  },
  API: {
    FILE: endpoint + 'rest/file',
    ENDPOINT: endpoint,
    AUTH: {
      SIGNIN: '/auth/customer/signin',
      SIGNUP: '/auth/customer/signup',
      REFRESH: '/auth/customer/refresh'
    },
    PROFILE: {
      GET: '/customer/profile'
    },
    RESTAURANT: {
      GET_LIST: '/restaurant/recommended',
      GET_INFO: '/restaurant/info',
      GET_MENU: '/restaurant/menu',
      GET_FOOD_DETAILS: '/restaurant/fooditem/'
    },
    ORDER: {
      QUOTE: '/order/quote/delivery'
    },
    CAMPAIGN: {
      GET_ALL: '/customer/campaigns'
    }
  }
};

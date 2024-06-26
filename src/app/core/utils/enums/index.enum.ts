export enum RoleType  {
  CUSTOMER = "CUSTOMER",
  DRIVER = "DRIVER",
  RESTAURANT = "RESTAURANT",
  ADMIN = "ADMIN"
}

export enum VehicleType {
  BIKE = "MOTORBIKE",
  CAR = "CAR"
}

export enum DriverStatus {
  AVAILABLE = "AVAILABLE",
  UNAVAILABLE = "UNAVAILABLE"
}

export enum RestaurantStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}

export enum CuisinesCategory {
  MILK_TEA = "MILK_TEA",
  DRINKS = "DRINKS",
  BANH_MI = "BANH_MI",
  FAST_FOOD = "FAST_FOOD",
  RICE = "RICE",
  NOODLES = "NOODLES",
  CAKE = "CAKE",
  VEGAN_FOODS = "VEGAN_FOODS",
  BBQ = "BBQ",
  THAI_FOOD = "THAI_FOOD",
  JAPANESE_FOOD = "JAPANESE_FOOD",
  KOREAN_FOOD = "KOREAN_FOOD",
  CHINESE_FOOD = "CHINESE_FOOD",
}

export enum OrderStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}

export enum OrderType {
  DELIVERY = "DELIVERY",
  TRANSPORT = "TRANSPORT"
}

export enum BillStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  CANCELLED = "CANCELLED"
}

export enum PaymentMethod {
  CASH = "CASH",
  VNPAY = "VNPAY",
  GOP_Wallet = "GOP_Wallet"
}



export enum  CampaignUserGroup {
  ALL_CUSTOMER = 'ALL_CUSTOMER'
}

export enum CampaignScopeType {
  ORDER = 'ORDER',
  ITEMS = 'ITEMS',
  CATEGORY = 'CATEGORY'
}

export enum CampaignDiscountType {
  PERCENTAGE = 'PERCENTAGE',
  DELIVERY = 'DELIVERY',
  TRANSPORT = 'TRANSPORT',
  NET = 'NET'
}

export enum CurrencyCode {
  VND = 'VND',
  USD = 'USD'
}

export enum OrderStatusTrackerType {
  PLACE_ORDER_SUCCESS = '',
  RESTAURANT_ACCEPT = '',
  DRIVER_ACCEPT = '',
  COMPLETED = ''
}

export enum NotificationType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARNING = 'WARNING'
}

export enum IconMarker {
  DRIVER = 'assets/img/icons/food-delivery.png',
  RESTAURANT = 'assets/img/icons/restaurant.png',
  CUSTOMER = 'assets/img/icons/pin-map.png'
}


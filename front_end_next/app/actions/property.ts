import axios, { type AxiosInstance, AxiosRequestConfig } from "axios";

interface IParams {
  propertyId?: string;
}
/*
 * A class to handle all server
 *
 * @class Restfull
 * */
class Restfull {
  public client: AxiosInstance;
  constructor() {
    const config: AxiosRequestConfig = {
      baseURL: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`,
    };

    this.client = axios.create(config);
    this.authorizationInterceptor();
  }

  authorizationInterceptor() {
    this.client.interceptors.request.use((config) => {
      //   const appInstallationToken = localStorage.getItem("appInstallationToken");
      //   if (appInstallationToken) {
      //     config.headers.Authorization = `Bearer ${appInstallationToken}`;
      //   }

      return config;
    });
  }
}

const restfull = new Restfull();
export const properties = {
  getPropertyById: (params: IParams) => {
    const { propertyId } = params;
    // const response = restfull.client.get("property", { propertyId });
    // Temporarily return dummy data till we hook up the api
    return {
      name: "Valley hills",
      address: "Kwa nayinzira, Kigali",
      price: "500000",
      type: "Apartment",
      image:
        "https://i.pinimg.com/564x/1f/fc/68/1ffc6846d7cad8493b724d4152b38e64.jpg",
      details: "Nice apartment for rent in Kigali",
      guestCount: 5,
      roomCount: 5,
      bathroomCount: 4,
    };
  },
};

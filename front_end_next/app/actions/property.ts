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
      coordinates: [-1.9441, 30.0619],
      price: 500000,
      type: "Apartment",
      image: [
        "https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80",
        "https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400",
        "https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400",
        "https://i.pinimg.com/564x/1f/fc/68/1ffc6846d7cad8493b724d4152b38e64.jpg",
        "https://images.unsplash.com/photo-1666303349374-c4cf8bc9eaaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400",
      ],
      details: "Nice apartment for rent in Kigali",
      guestCount: 5,
      roomCount: 5,
      bathroomCount: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit ac mi semper gravida. Nullam quis neque vel nulla commodo tincidunt. Duis auctor volutpat felis, id pharetra lectus tincidunt non. Integer euismod, purus eget aliquam hendrerit, dui lacus hendrerit augue, vel tempus mi libero at elit. Quisque auctor consequat ex, eu vehicula lacus congue non. Ut ultricies metus eu erat bibendum tincidunt. Suspendisse potenti. Phasellus tristique elit in congue tincidunt. Sed lacinia, justo sit amet tempor fermentum, arcu libero bibendum nisl, ac bibendum eros orci in leo.",
    };
  },
};

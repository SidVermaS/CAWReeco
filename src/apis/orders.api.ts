import { ResponseI } from "../types/interfaces/api.interface";

class OrdersAPI {
  public async getSubOrderDetails():Promise<ResponseI> {
    return new Promise((resolve,reject) => {
      fetch("data/sub_order_details.json")
        .then(async (response: Response) => {
          response
            .json()
            .then((data) => resolve({ status: response.status, data }))
            .catch((err) => {
              reject({ data: err });
            });
        })
        .catch((err) => {
          reject({ data: err });
        });
    });
  }
  public async getOrders():Promise<ResponseI> {
    return new Promise((resolve,reject) => {
      fetch("data/orders.json")
        .then(async (response: Response) => {
          response
            .json()
            .then((data) => resolve({ status: response.status, data }))
            .catch((err) => {
              reject({ data: err });
            });
        })
        .catch((err) => {
          reject({ data: err });
        });
    });
  }
}

export default OrdersAPI;

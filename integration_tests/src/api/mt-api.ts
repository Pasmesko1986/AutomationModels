import axios, { type AxiosInstance } from "axios";

const devUrl = "https://remitee-moneytransfer-dev.azurewebsites.net";
const TestUrl = "https://remitee-moneytransfer-test.azurewebsites.net";

export class MtApi {
  public readonly instance: AxiosInstance;
  constructor(private token?: string) {
    this.instance = axios.create({
      baseURL: TestUrl,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  public setToken(token: string) {
    this.token = token;
    this.instance.defaults.headers.Authorization = `Bearer ${this.token}`;
  }
}

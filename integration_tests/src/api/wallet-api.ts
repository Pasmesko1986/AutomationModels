import axios, { type AxiosInstance } from "axios";

const devUrl = "";
const TestUrl = "https://remitee-wallet-test.azurewebsites.net";

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

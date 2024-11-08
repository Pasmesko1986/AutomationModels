import axios, { AxiosInstance } from "axios";
import querystring from "querystring";
import { handleError } from "./handleError";
const devUser = {
  grant_type: "client_credentials",
  client_id: "thunes-moneytransfer-inbound",
  client_secret: "HVaAr8SfpEZVbprV",
};

const QAUser = {
  grant_type: "client_credentials",
  client_id: "QAUser2-moneytransfer-inbound",
  client_secret: "8pe5fmuBjmXXzQyW", 
};

const TestUrl = "https://remitee-identity-test.azurewebsites.net"; 

export class IdentityApi {
  public readonly instance: AxiosInstance;

  private _token: string = "";

  public get token() {
    return this._token;
  }

  constructor() {
    this.instance = axios.create({
      baseURL: TestUrl,
    });
  }

  async authenticate() {
    try {
      const response = await this.instance.post(
        "/connect/token",
        querystring.stringify(QAUser) //Credenciales de ambiente
      );
      this._token = response.data.access_token;
      return response.data;
    } catch (err) {
      handleError(err);
    }
  }
}

//Renombrar como identity-api-seller.ts para tx seller y identity-api-sender.ts para tx sender
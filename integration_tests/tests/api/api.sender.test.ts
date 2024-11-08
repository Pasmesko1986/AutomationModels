import { expect } from "chai";
import supertest from "supertest";
import axios, { AxiosError, AxiosInstance } from "axios";
import querystring from "querystring";
import { MtApi } from "../../src/api/mt-api";
import { IdentityApi } from "../../src/api/identity-api-sender";
import { paymentBody, quoteCollectionBody, SettleBody } from "./data-sender"; //Importa el request Body /data.ts
import { handleError } from "../../src/api/handleError";

describe("Tests de integración", () => {
  const mtApi = new MtApi();
  before(async function () {
    const identityApi = new IdentityApi();
    await identityApi.authenticate();
    const token = identityApi.token;
    expect(token).to.not.be.empty;
    mtApi.setToken(token);
  });

  describe("Test de generar un quote y aceptarlo", async () => {
    let quoteId: string;
    let PaymentId: string;

    console.log("Generacion de un quote Sender y aceptarlo");
    
    it("El endpoint POST api/QuoteCollections genera un quote", async () => {
      try {
        const response = await mtApi.instance.post(
          "/api/QuoteCollections",
          quoteCollectionBody
        );
        console.log("Metodo QuoteCollections");
        console.log(response.data);
        console.log(response.status);
        expect(response.status).to.be.equal(200);
        //response.data es un array
        expect(response.data).to.be.an("array");
        //response.data tiene un largo mayor a 0
        expect(response.data).to.have.length.greaterThan(0);
        //response.data[0] tiene la propiedad id
        expect(response.data[0]).to.have.property("id"); //verifica que el objeto Response.data[0] tiene una propiedad "Id"
        quoteId = response.data[0].id; //la variable quoteId guarda el valor del campo Id del response
      } catch (error) {
        handleError(error);
      }
    });

    it("El endpoint api/Payments acepta un quote", async () => {
      try {
        const response = await mtApi.instance.post( //Importa las credenciales
          "/api/Payments",
          paymentBody(quoteId) // importa el body del requests, inserta la variable quoteId
        );
        console.log("Metodo Payments");
        console.log(response.data);
        console.log(response.status);
        expect(response.status).to.be.equal(201); 
        expect(response.data).to.have.property("id"); //Verificacion de campo Id en el response
        PaymentId = response.data.id; //Guarda la informacion del campo Id del response en una variable PAymentId
        console.log("Payment Id: " + PaymentId);
      } catch (error) {
        handleError(error);
      }
    });

    it("El endpoint api/Settle confirma un quote", async () => {
      try {
        const response = await mtApi.instance.post( //Importa las credenciales
          `/api/Payments/${PaymentId}/Settle`,
          SettleBody // importa el body del requests, inserta la variable quoteId
        );
        console.log("Metodo Settle");
        console.log(response.data);
        console.log(response.status);
        expect(response.status).to.be.equal(200);
      } catch (error) {
        handleError(error);
      }
    });
  });
});

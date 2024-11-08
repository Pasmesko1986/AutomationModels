// import { expect } from "chai";

// import { MtApi } from "../../src/api/mt-api";
// import { IdentityApi } from "../../src/api/identity-api-sender";
// import { paymentBody, quoteCollectionBody, SettleBody } from "./data-sender"; //Importa el request Body /data.ts
// import { handleError } from "../../src/api/handleError";

// describe("Tests de integración", () => {
//   const mtApi = new MtApi();
//   before(async function () {
//     const identityApi = new IdentityApi();
//     await identityApi.authenticate();
//     const token = identityApi.token;
//     expect(token).to.not.be.empty;
//     mtApi.setToken(token);
//   });

//   describe("Test de generar un quote y aceptarlo", async () => {
//     console.log("Wallet HTTP API v1");

//     it("", async () => {
//         try {
//           const response = await mtApi.instance.post(
//             "/api/Admin/countryExchangeRates",
//             quoteCollectionBody
//           );
//           console.log("Metodo countryExchangeRates");
//           console.log(response.data);
//           console.log(response.status);
//           expect(response.status).to.be.equal(200);
//           //response.data es un array
//           expect(response.data).to.be.an("array");
//           //response.data tiene un largo mayor a 0
//           expect(response.data).to.have.length.greaterThan(0);
//           //response.data[0] tiene la propiedad id
//           expect(response.data[0]).to.have.property("id"); //verifica que el objeto Response.data[0] tiene una propiedad "Id"
//         } catch (error) {
//           handleError(error);
//         }
//       });
//   });
// });

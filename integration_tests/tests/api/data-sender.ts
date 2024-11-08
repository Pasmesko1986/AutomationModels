export const quoteCollectionBody = {
    paymentType: "C2C",
    sourceCurrency: "USD",
    targetCountry: "CHL",
    targetCurrency: "CLP",
    collectMethod: "BANK_ACCOUNT",
    quoteType: "SENDER_AMOUNT", 
    quoteAmount: 11,
  };
  
  export const paymentBody = (quoteId: string) => ({
    quoteId: `${quoteId}`,
    referenceId: `${quoteId}`,
    userInfo: {
      Dbtr: {
        StrdNm: {
          FirstNm: "Patricio",
          LastNm: "Saldana",
        },
        PstlAdr: {
          Ctry: "AR",
          CtrySubDvsn: "Ciudad Autónoma de Buenos Aires",
          TwnNm: "Ciudad Autónoma de Buenos Aires",
          AdrLine: "Address street 1234",
          PstCd: "4237",
        },
        Id: {
          PrvtId: {
            Othr: {
              Id: "960286e007",
              Issr: "ARG",
              SchmeNm: {
                Cd: "NIDN",
                },
            },
            DtAndPlcOfBirth: {
              BirthDt: "2000-10-31",
              CtryOfBirth: "ARG"
            },
          },
        },
        CtctDtls: {
          EmailAdr: "test_arg_01@gmail.com"
        },
      },
      Cdtr: {
        StrdNm: {
          FirstNm: "Test",
          LastNm: "Chile",
        },
        PstlAdr: {
          Ctry: "CL",
          CtrySubDvsn: "Metropolitana de Santiago",
          TwnNm: "Macul",
          AdrLine: "Sarmiento  1234",
          PstCd: "1234"
        },
        Id: {
          PrvtId: {
            Othr: {
              Id: "34829187",
              Issr: "CL",
              SchmeNm: {
                Cd: "TXID",
              },
            },
          },
        },
        CtctDtls: {
          EmailAdr: "test@test.com",
          PhneNb: "+56993247335",
        },
      },
      CdtrAgt: {
        FinInstnId: {
            BICFI: "BCHICLRM",
        },
      },
      CdtrAcct: {
        Id: {
          Othr: {
            Id: "3245669291818272717",
          },
        },
        Tp: {
          Cd: "CACC",
        },
      },
      Purp: {
        Prtry: "FAMILY_SUPPORT",
      },
    },
    billingInfo: {
        Ctry: "ARG",
        Fx: {
            Currency: "ARS",
            Rate: 816.04,
            Spread: 0.49,
        },
        NetAmount: 1025.76,
        Commission: {
            Amount: 30.78,
            Rate: 0.03,
        },
        Vat: {
            Amount: 6.46,
            Rate: 0.21,
        }
    },
    waitForLock: true,
  });
  
  export const SettleBody = ({
    userInfo: {
      webHookUrl: "string"
    },
  });
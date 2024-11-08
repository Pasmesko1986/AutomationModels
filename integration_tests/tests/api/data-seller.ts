export const quoteCollectionBody = {
  paymentType: "C2C",
  sourceCurrency: "USD",
  targetCountry: "CHL",
  targetCurrency: "CLP",
  collectMethod: "BANK_ACCOUNT",
  quoteType: "SELLER_RECEIVING_AMOUNT", 
  SellerCountry: "CHL",
  SellerCurrency: "CLP",
  quoteAmount: 30,
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
      CtctDtls: {
        EmailAdr: "patricio.saldana@remitee.com",
        PhneNb: "+4492262576",
        AdrLine: "PEP",
      },
      Id: {
        PrvtId: {
          Othr: {
            Id: "202056083",
            SchmeNm: {
              Cd: "TXID",
            },
          },
        },
      },
      PstlAdr: {
        AdrLine: "Jose Anchieta 420",
        TwnNm: "Alfredo Wagner",
        Ctry: "CHL",
        PstCd: "88450000",
        CtrySubDvsn: "SCq",
        AdrTp: "HOME",
      },
    },
    Cdtr: {
      StrdNm: {
        FirstNm: "Silvia",
        LastNm: "Destro",
      },
      CtctDtls: {
        PhneNb: "+56971138462",
        Othr: "PEP",
      },
      Id: {
        PrvtId: {
          Othr: {
            Id: "113895608",
            SchmeNm: {
              Cd: "TXID",
            },
          },
        },
      },
      PstlAdr: {
        AdrLine: "Passage de las Rosas 650",
        TwnNm: "Pucon",
        Ctry: "CHL",
        PstCd: "1234",
        CtrySubDvsn: "Arg",
      },
    },
    Purp: {
      Prtry: "FAMILY_SUPPORT",
    },
    CdtrAcct: {
      Id: {
        Othr: {
          Id: "1737505411100",
        },
      },
      Tp: {
        Cd: "CACC",
      },
    },
    CdtrAgt: {
      FinInstnId: {
        BICFI: "BECHCLRM",
      },
    },
  },
  waitForLock: true,
});

export const SettleBody = ({
  userInfo: {
    webHookUrl: "string"
  },
});
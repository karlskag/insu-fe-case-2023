import { CollectionStartedResponse } from 'types/v3';

export const sessions = [
  {
    type: 'insurance',
    advisoryUserUuid: '723dbfea-2d95-4341-96df-51a70fa8d2cf',
    creationDate: '2023-06-08T14:17:14.909724',
    sessionId: '35a25629-b0b1-474b-945b-d2a71bf3a365',
    freeText: 'Allan',
    collectionStartedResponses: [
      {
        collectionId: 'f83bdab18dfb38ca270332a5fdac9324',
        sessionId: '35a25629-b0b1-474b-945b-d2a71bf3a365',
        creationDate: '2023-06-08T14:17:35.707138',
        insuranceCompany: 'se-hedvig',
        status: 'COMPLETED',
        numberOfInsurances: 1,
        numberOfFilteredInsurances: 1,
      },
    ] as CollectionStartedResponse[],
    numberOfInsurances: 1,
    numberOfFilteredInsurances: 1,
    numberOfPensions: 0,
  },
];

import { InsuranceResponse } from 'types/insurance';
import { PaymentMethod } from 'types/v3/Insurance';

export const insurances: InsuranceResponse[] = [
  {
    collectionDate: '2023-06-08T14:17:35.707138',
    collectionId: 'f83bdab18dfb38ca270332a5fdac9324',
    termsUrl: '/insurance-terms/terms/se-hedvig/condoInsurance/2022-10-10',
    displayType: 'Hemförsäkring',
    insurance: {
      insuranceName: 'Hemförsäkring Bostadsrätt',
      insuranceCompany: 'se-hedvig',
      insuranceType: 'houseContentInsurance',
      insuranceSubType: 'condoInsurance',
      insuranceObjectPostalCode: '11544',
      insuranceObjectCity: undefined,
      securityDoorGridDiscount: false,
      connectedAlarmDiscount: false,
      livingArea: 53,
      numberOfResidents: 1,
      insuredMovablesAmount: 1000000,
      externalId: 'd35a2cdd-3cda-4328-8741-d6754d82dff3',
      insuranceObjectStreetAddress: 'Blåbärsvägen 21',
      insuranceNumber: '808777621',
      premiumAmountYearRounded: 1668,
      discountAmount: 0,
      discountPercentage: undefined,
      renewalDate: '2023-10-10',
      startDate: '2022-10-10',
      coming: false,
      premiumFrequency: 12,
      paymentMethod: PaymentMethod.AUTOGIRO,
      employerPaid: false,
      otherInsuranceHolder: false,
      insuranceHolderName: 'Allan Svensson',
      insuranceHolderStreetAddress: undefined,
      insuranceHolderPostalCode: undefined,
      insuranceHolderCity: undefined,
    },
    addons: [
      {
        addOnName: 'Bostadsrättsförsäkring',
        addOnId: 'addOnCondo',
        addOnPrice: undefined,
      },
    ],
    deductibles: [
      {
        deductibleName: 'Självrisk lösöre',
        deductibleId: 'deductibleMovables',
        deductibleAmount: 1500,
      },
    ],
    parameters: [
      {
        parameterDescription:
          'När du flyttar så är dina saker försäkrade på både din gamla och nya adress under en övergångsperiod.',
        parameterDisplayName: 'Flyttskydd',
        parameterName: 'movingProtection',
        value: 'true',
        parameterGroup: 'Övrigt',
        parameterGroupOrder: 5,
      },
      {
        parameterDescription:
          'Hemförsäkring täcker vanligtvis inte stölder utförda av någon du släpper in frivilligt, men med uthyrningsskydd utgår ersättning vid stölder när du hyr ut din bostad.',
        parameterDisplayName: 'Uthyrningsskydd',
        parameterName: 'rental',
        value: 'false',
        parameterGroup: 'Övrigt',
        parameterGroupOrder: 5,
      },
      {
        parameterDescription:
          'Försäkringen gäller för skada på hushållsmaskin och vitvaror, till exempel tvättmaskin och kylskåp. Rena skönhetsfel ersätts vanligtvis inte. Försäkringen ersätter ofta livsmedel eller tvätt som förstörts i samband med skadan.',
        parameterDisplayName: 'Hushållsmaskiner, vitvaror m.m.',
        parameterName: 'houseMachines',
        value: 'false',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Tilläggsförsäkring för extra värdefulla föremål såsom smycken, konst eller en fin cykel.',
        parameterDisplayName: 'Specialföremål eller värdesak',
        parameterName: 'specialItem',
        value: 'false',
        parameterGroup: 'Övrigt',
        parameterGroupOrder: 5,
      },
      {
        parameterDescription:
          'Försäkringen gäller för stöld av eller skadegörelse på lös egendom i bostad. Gäller för skada som begåtts av någon som olovligen tagit sig in.',
        parameterDisplayName: 'Stöld & skadegörelse',
        parameterName: 'burglaryDamage',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Ersättning för dina saker om skada skulle ske till följd av exempelvis jordras, jordskred, vulkanutbrott eller lavin.',
        parameterDisplayName: 'Andra naturskador',
        parameterName: 'nature',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Om den försäkrade bostaden blir helt eller delvis obrukbar vid skadehändelse som ersätts av försäkringen, kan ersättning ges för merkostnader för ex logi eller magasinering samt för ev hyresbortfall om bostaden är uthyrd.',
        parameterDisplayName: 'Obrukbar bostad',
        parameterName: 'unusableHome',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Ger dig ersättning om din golfutrustning blir stulen eller förstörd samt en hole-in-one försäkring.',
        parameterDisplayName: 'Golfförsäkring',
        parameterName: 'golf',
        value: 'false',
        parameterGroup: 'Övrigt',
        parameterGroupOrder: 5,
      },
      {
        parameterDescription:
          'Bortaskyddet ersätter egendom som förvaras i förråd eller bil vid stöld, brand och vattenskada. Ersätter även vid rån, väskryckning eller överfall. Ersättningen varierar mellan olika bolag men är betydligt lägre än för egendom som förvaras i hemmet.',
        parameterDisplayName: 'Stöld & skadegörelse på annan plats',
        parameterName: 'away',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Ersättning för skada på dina saker till följd av storm, vind, hagel eller snötryck.',
        parameterDisplayName: 'Oväder',
        parameterName: 'weather',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Om det börjar brinna i din bostad får du ersättning för brand-, sot- och rökskador på dina ägodelar. Täcker även skador genom explosion, samt skador orsakade genom blixtnedslag.',
        parameterDisplayName: 'Brand, blixt & explosion',
        parameterName: 'fire',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Om du under året skaffar mer saker hemma, så att värdet överstiger försäkringsbeloppet på din försäkring, blir du inte omedelbart underförsäkrad.',
        parameterDisplayName: 'Underförsäkringsgaranti',
        parameterName: 'underInsuredProtection',
        value: 'false',
        parameterGroup: 'Övrigt',
        parameterGroupOrder: 5,
      },
      {
        parameterDescription:
          'Om du har bytt från annat försäkringsbolag ersätter försäkringen en skadehändelse som normalt inte omfattas av försäkringen. Du behöver visa att din försäkring i den andra bolaget skulle ha ersatt den typen av skadehändelse.',
        parameterDisplayName: 'Ett-års garanti',
        parameterName: 'oneYearWarranty',
        value: 'false',
        parameterGroup: 'Övrigt',
        parameterGroupOrder: 5,
      },
      {
        parameterDescription:
          'Detta tillägg ger dig minskad självrisk om något skulle inträffa som du kan begära ersättning för. Den minskade självrisken gäller bara för vissa händelser, vilket är olika för olika försäkringar.',
        parameterDisplayName: 'Reducerad självrisk',
        parameterName: 'reducedDeductible',
        value: 'false',
        parameterGroup: 'Övrigt',
        parameterGroupOrder: 5,
      },
      {
        parameterDescription:
          'Ersätter kostnader för samtalsterapi, upp till 10 besök, samt en engångsersättning om ditt barn utsätts för kränkande behandling i skolan.',
        parameterDisplayName: 'Mobbning',
        parameterName: 'bullying',
        value: 'false',
        parameterGroup: 'Du och din familj',
        parameterGroupOrder: 3,
      },
      {
        parameterDescription:
          'Om du skulle tappa bort dina nycklar och behöver betala ett låsbyte, kan din försäkring täcka detta. Åldersbegränsning kan förekomma.',
        parameterDisplayName: 'Låsbyte',
        parameterName: 'lockChange',
        value: 'true',
        parameterGroup: 'Övrigt',
        parameterGroupOrder: 5,
      },
      {
        parameterDescription:
          'Ger ersättning för skador på fast inredning och ytskikt i lägenheten så som t.ex. fasta garderober, vitvaror och inredning i badrum som exempelvis badkar, handfat, etc.',
        parameterDisplayName: 'Bostadsrättsförsäkring',
        parameterName: 'brfInsurance',
        value: 'true',
        parameterGroup: 'Ditt hem',
        parameterGroupOrder: 1,
      },
      {
        parameterDescription:
          'Kan ge dig ersättning för läckande tät- och ytskikt i bad- och duschrum. Ofta kräver försäkringen att branschregler följts och att eventuellt intyg finns.',
        parameterDisplayName: 'Yt- och tätskikt',
        parameterName: 'brfLayers',
        value: 'true',
        parameterGroup: 'Ditt hem',
        parameterGroupOrder: 1,
      },
      {
        parameterDescription:
          'Blir du bestulen av en vårdgivare med tillåtelse att vara hemma hos dig kan du få ersättning upp till ett visst belopp för det som blivit stulet.',
        parameterDisplayName: 'Utökat skydd vid stöld i hemmet',
        parameterName: 'extendedTheft',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'ID-skydd innebär att ditt försäkringsbolag står för eventuella mindre kostnader vid s.k. ID-kapning. Dessutom kan hemförsäkringens rättsskydd täcka delar av kostnader för juridiskt ombud.',
        parameterDisplayName: 'Skydd mot ID-stöld',
        parameterName: 'idTheft',
        value: 'false',
        parameterGroup: 'Du och din familj',
        parameterGroupOrder: 3,
      },
      {
        parameterDescription:
          'Ersätter skador på medförd egendom orsakad av transport eller trafikskada.',
        parameterDisplayName: 'Transport- och trafikskador',
        parameterName: 'transportTraffic',
        value: 'false',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Du får lägre självrisk för skador på hemelektronik. Dessutom får du högre ersättning för stationär hemelektronik samt förbättrat åldersavdrag.',
        parameterDisplayName: 'Utökad hemelektronikförsäkring',
        parameterName: 'extendedElectronic',
        value: 'false',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Allrisk är ett skydd för plötsliga och oförutsedda oturshändelser, som den vanliga hemförsäkringen inte täcker - till exempel om du skulle tappa din mobiltelefon.',
        parameterDisplayName: 'Drulle eller allrisk',
        parameterName: 'accident',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Överfallsskyddet kan ge dig ersättning om du blir utsatt för våld genom ett vålds- eller sexualbrott. De flesta försäkringsbolag ger även en engångsersättning vid bestående skada (medicinsk invaliditet). Ett fåtal försäkringsbolag ersätter även om du blir så skadad att du inte kan jobba (ekonomisk invaliditet)',
        parameterDisplayName: 'Överfallsskydd',
        parameterName: 'assault',
        value: 'true',
        parameterGroup: 'Du och din familj',
        parameterGroupOrder: 3,
      },
      {
        parameterDescription:
          'Ger extra skydd på resan samt ökad ersättning vid förstörda semesterdagar och förseningar. Om du till exempel måste avboka resan på grund av sjukdom, olycka eller vissa andra händelser som gör att du inte kan resa utgår ersättning.',
        parameterDisplayName: 'Utökat reseskydd',
        parameterName: 'extendedTravel',
        value: 'false',
        parameterGroup: 'På resan',
        parameterGroupOrder: 4,
      },
      {
        parameterDescription:
          'Om du hamnar i en rättslig tvist med någon, kan din försäkring betala en stor del av kostnaderna för juridiskt ombud (advokat). Rättsskyddet ersätter ej vårdnadstvist direkt vid en separation. Skulle ytterligare vårdnadstvister uppkomma senare kan rättsskyddet gälla.',
        parameterDisplayName: 'Rättsskydd',
        parameterName: 'court',
        value: 'true',
        parameterGroup: 'Du och din familj',
        parameterGroupOrder: 3,
      },
      {
        parameterDescription:
          'Krisskyddet ersätter behandlingskostnader för kristerapi efter till exempel rån, överfall eller inbrott.',
        parameterDisplayName: 'Kris',
        parameterName: 'crisis',
        value: 'false',
        parameterGroup: 'Du och din familj',
        parameterGroupOrder: 3,
      },
      {
        parameterDescription:
          'Ansvarsskydd gäller om du blir krävd på ersättning från någon som anser att du orsakat denne en skada och kräver dig på skadestånd.',
        parameterDisplayName: 'Ansvarsskydd',
        parameterName: 'responsibility',
        value: 'true',
        parameterGroup: 'Du och din familj',
        parameterGroupOrder: 3,
      },
      {
        parameterDescription:
          'Ger större ersättning än i ett grundskydd, för lös egendom på annan plats än i bostaden. Summan som täcks i grundskydd respektive detta utökade skydd varierar mellan olika försäkringsbolag.',
        parameterDisplayName: 'Utökat skydd vid stöld & skadegörelse på annan plats',
        parameterName: 'extendedAway',
        value: 'false',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Ger ersättning för förlust eller skada på en liten båt som vanligtvis inte är längre än 6 meter och har en motor på max 15 hästkrafter och/eller en segelyta på 10 kvadratmeter. Begränsning på marknadsvärde kan förekomma. Innehåller även ansvars- och rättsskydd för dig i rollen som brukare, ägare eller förare av den försäkrade båten.',
        parameterDisplayName: 'Småbåtsförsäkring',
        parameterName: 'smallBoat',
        value: 'false',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Ger viss ersättning för olycksfallsskador som inträffar under fritid eller arbetstid.',
        parameterDisplayName: 'Olycksfallsförsäkring',
        parameterName: 'personalAccident',
        value: 'false',
        parameterGroup: 'Du och din familj',
        parameterGroupOrder: 3,
      },
      {
        parameterDescription:
          'Om dina nycklar skulle bli stulna och du behöver betala ett låsbyte, kan din försäkring täcka detta.',
        parameterDisplayName: 'Låsbyte vid stulna nycklar',
        parameterName: 'lockChangeStolen',
        value: 'false',
        parameterGroup: 'Övrigt',
        parameterGroupOrder: 5,
      },
      {
        parameterDescription:
          'Ersättning vid skada t.ex. vattenskada orskadad av läckande vatten eller ånga, så får du ersättning för skadorna på dina ägodelar. Som vattenskada räknas till exempel om en vattenledning skulle brista, eller om kylen eller diskmaskinen läcker.',
        parameterDisplayName: 'Vattenläcka & läckage',
        parameterName: 'waterLeakage',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
      {
        parameterDescription:
          'Reseskyddet gäller i regel de första 45 dagarna på en resa och ersätter kostnader vid akut sjukdom, olycksfall och tandskador. Skyddet täcker även kostnader för sjuktransport hem. Det förekommer undantag vid riskfylld aktivitet eller om du redan är sjuk samt vid långt gången graviditet. Ger även ersättning för förstörda semesterdagar på grund av sjukdom eller olycka. Kan även ge ersättning för person- och baggageförsening.',
        parameterDisplayName: 'Reseskydd',
        parameterName: 'travel',
        value: 'true',
        parameterGroup: 'På resan',
        parameterGroupOrder: 4,
      },
      {
        parameterDescription:
          'Ersättning vid skada på dina ägodelar vid t.ex. vattenskada som uppstått på grund av vatten som strömmat in i bostaden pga exempelvis skyfall, snösmältning, stigande sjö eller vattendrag.',
        parameterDisplayName: 'Översvämning',
        parameterName: 'flooding',
        value: 'true',
        parameterGroup: 'Dina saker',
        parameterGroupOrder: 2,
      },
    ],
  },
];

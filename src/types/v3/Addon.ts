/* eslint-disable max-lines */
type AddOnNameId =
  | {
      addOnName: 'Hyrbil';
      addOnId: 'addOnRental';
    }
  | {
      addOnName: 'Assistans';
      addOnId: 'addOnAssistance';
    }
  | {
      addOnName: 'Reducerad självrisk';
      addOnId: 'addOnReducedDeductible';
    }
  | {
      addOnName: 'Djurkollision';
      addOnId: 'addOnAnimalCollision';
    }
  | {
      addOnName: 'Kombi';
      addOnId: 'addOnModernaCombo';
    }
  | {
      addOnName: 'Stor bilextra';
      addOnId: 'addOnIfLargeCombo';
    }
  | {
      addOnName: 'Bilxtra';
      addOnId: 'addOnIfCombo';
    }
  | {
      addOnName: 'Tilläggsförsäkring MER';
      addOnId: 'addOnLFCombo';
    }
  | {
      addOnName: 'Trygghetspaket Plus';
      addOnId: 'addOnVolviaComboPlus';
    }
  | {
      addOnName: 'Trygghetspaket';
      addOnId: 'addOnVolviaCombo';
    }
  | {
      addOnName: 'Plus';
      addOnId: 'addOnTrekronorCombo';
    }
  | {
      addOnName: 'Allrisk';
      addOnId: 'addOnAccident';
    }
  | {
      addOnName: 'Trafikolycksfall och Krishjälp';
      addOnId: 'addOnDriverPassengerAccident';
    }
  | {
      addOnName: 'Förar- och passagerarolycksfall';
      addOnId: 'addOnDriverPassengerAccident';
    }
  | {
      addOnName: 'Utökad personskada';
      addOnId: 'addOnExtendedPersonalInjury';
    }
  | {
      addOnName: 'Privat vård och ersättning för medicinsk invaliditet';
      addOnId: 'addOnPrivateCare';
    }
  | {
      addOnName: 'Privat sjukvård';
      addOnId: 'addOnPrivateCare';
    }
  | {
      addOnName: 'Volvia Care'; // TODO
      addOnId: 'addOnPrivateCare';
    }
  | {
      addOnName: 'Privatvård';
      addOnId: 'addOnPrivateCare';
    }
  | {
      addOnName: 'Månadsersättning';
      addOnId: 'addOnMonthlyCompensation';
    }
  | {
      addOnName: 'Ekonomisk invaliditet';
      addOnId: 'addOnEconomicalDisability';
    }
  | {
      addOnName: 'Diagnosförsäkring';
      addOnId: 'addOnAdditionalIllnesses';
    }
  | {
      addOnName: 'Livförsäkring';
      addOnId: 'addOnLife';
    }
  | {
      addOnName: 'Användbarhet';
      addOnId: 'addOnUsability';
    }
  | {
      addOnName: 'FORL';
      addOnId: 'addOnForl';
    }
  | {
      addOnName: 'Agria extra';
      addOnId: 'addOnAgriaExtra';
    }
  | {
      addOnName: 'Medicin';
      addOnId: 'addOnMedicine';
    }
  | {
      addOnName: 'Rehabilitering';
      addOnId: 'addOnRehab';
    }
  | {
      addOnName: 'Trygghet';
      addOnId: 'addOnSafety';
    }
  | {
      addOnName: 'Avel';
      addOnId: 'addOnBreeding';
    }
  | {
      addOnName: 'Tandförsäkring';
      addOnId: 'addOnTeeth';
    }
  | {
      addOnName: 'Bostadsrättsförsäkring';
      addOnId: 'addOnCondo';
    }
  | {
      addOnName: 'Utökad Bostadsrättsförsäkring';
      addOnId: 'addOnCondoExtended';
    }
  | {
      addOnName: 'Småbåt';
      addOnId: 'addOnSmallBoat';
    }
  | {
      addOnName: 'Golf';
      addOnId: 'addOnGolf';
    }
  | {
      addOnName: 'Hem Plus';
      addOnId: 'addOnTreKronorHomePlus';
    }
  | {
      addOnName: 'Stor Hemförsäkring';
      addOnId: 'addOnLansforsakringarHomePlus';
    }
  | {
      addOnName: 'Hem Plus';
      addOnId: 'addOnIcaHomePlus';
    }
  | {
      addOnName: 'Utökat reseskydd';
      addOnId: 'addOnTravel';
    }
  | {
      addOnName: 'Uthyrning';
      addOnId: 'addOnRentalHome';
    }
  | {
      addOnName: 'Utökad hemelektronik';
      addOnId: 'addOnHomeElectronics';
    }
  | {
      addOnName: 'Hemkombi';
      addOnId: 'addOnModernaHomeCombo';
    }
  | {
      addOnName: 'Huskombi';
      addOnId: 'addOnModernaVillaCombo';
    }
  | {
      addOnName: 'Huskombi';
      addOnId: 'addOnModernaCottageCombo';
    }
  | {
      addOnName: 'Skog';
      addOnId: 'addOnForest';
    }
  | {
      addOnName: 'Värdesaker';
      addOnId: 'addOnValuables';
    }
  | {
      addOnName: 'Elrullstol';
      addOnId: 'addOnElectricWheelChair';
    }
  | {
      addOnName: 'Innbo Pluss';
      addOnId: 'addOnEikaHomePlus';
    }
  | {
      addOnName: 'Innbo Pluss';
      addOnId: 'addOnGjensidigeHomePlus';
    }
  | {
      addOnName: 'Kasko';
      addOnId: 'addOnVehicleDamage';
    }
  | {
      addOnName: 'Friskade';
      addOnId: 'addOnReducedDeductible';
    }
  | {
      addOnName: 'Vejhjælp';
      addOnId: 'addOnAssistance';
    }
  | {
      addOnName: 'Udvidet vejhjælp';
      addOnId: 'addOnExtendedAssistance';
    }
  | {
      addOnName: 'Førerforsikring';
      addOnId: 'addOnDriverAccident';
    }
  | {
      addOnName: 'Værdiforringelse';
      addOnId: 'addOnValueLoss';
    }
  | {
      addOnName: 'Lånebil';
      addOnId: 'addOnRental';
    }
  | {
      addOnName: 'Parkeringsskade';
      addOnId: 'addOnParking';
    }
  | {
      addOnName: 'Udvidet Ekstraudstyr';
      addOnId: 'addOnExtendedEquipment';
    }
  | {
      addOnName: 'Utökad byggnadsförsäkring';
      addOnId: 'addOnExtendedBuilding';
    }
  | {
      addOnName: 'Allrisk byggnad';
      addOnId: 'addOnAccidentBuilding';
    }
  | {
      addOnName: 'Hus plus';
      addOnId: 'addOnIcaHousePlus';
    }
  | {
      addOnName: 'Hus plus';
      addOnId: 'addOnTreKronorHousePlus';
    }
  | {
      addOnName: 'Hus pluss';
      addOnId: 'addOnGjensidigeHousePlus';
    }
  | {
      addOnName: 'Råte og skadeinsekter';
      addOnId: 'addOnVerminAndInsects';
    }
  | {
      addOnName: 'Bilafsavn';
      addOnId: 'addOnRental';
    }
  | {
      addOnName: 'Delkasko';
      addOnId: 'addOnDelkasko';
    }
  | {
      addOnName: 'Autoulykke';
      addOnId: 'addOnCarAccident';
    }
  | {
      addOnName: 'Ung bilist';
      addOnId: 'addOnYoungDriver';
    }
  | {
      addOnName: 'Udvidet glasdækning';
      addOnId: 'addOnGlass';
    }
  | {
      addOnName: 'Leasingdækning';
      addOnId: 'addOnLeasedDamage';
    }
  | {
      addOnName: 'Mekanisk skade';
      addOnId: 'addOnMachine';
    }
  | {
      addOnName: 'Udvidet påkørsel af dyr';
      addOnId: 'addOnAnimalCollision';
    }
  | {
      addOnName: 'Pludselig skade';
      addOnId: 'addOnHomeMovablesExtended';
    }
  | {
      addOnName: 'Lånte og lejede ting';
      addOnId: 'addOnHomeMovablesRented';
    }
  | {
      addOnName: 'Cykler';
      addOnId: 'addOnHomeBicycle';
    }
  | {
      addOnName: 'Udvidet elektronik';
      addOnId: 'addOnHomeElectronics';
    }
  | {
      addOnName: 'Glas & Sanitet';
      addOnId: 'addOnHomeGlassAndSanitation';
    }
  | {
      addOnName: 'Udvidet vandskade';
      addOnId: 'addOnHomeWaterDamage';
    }
  | {
      addOnName: 'Rør og kabel';
      addOnId: 'addOnHomePipesAndCables';
    }
  | {
      addOnName: 'Stikledning';
      addOnId: 'addOnHomeBranchPipe';
    }
  | {
      addOnName: 'Fejl i boliginstallationer';
      addOnId: 'addOnHomeBuildingInstallations';
    }
  | {
      addOnName: 'Svamp, insekt eller råd';
      addOnId: 'addOnHomeRotting';
    }
  | {
      addOnName: 'Skadedyr';
      addOnId: 'addOnHomePests';
    }
  | {
      addOnName: 'Kosmetiske forskelle';
      addOnId: 'addOnHomeCosmetics';
    }
  | {
      addOnName: 'Flyttedækning';
      addOnId: 'addOnHomeTransport';
    }
  | {
      addOnName: 'Bolighjælp';
      addOnId: 'addOnHomeAssistance';
    }
  | {
      addOnName: 'Haveænlæg m.m.';
      addOnId: 'addOnHomeGarden';
    }
  | {
      addOnName: 'Genhusning ekstra';
      addOnId: 'addOnHomeRehousing';
    }
  | {
      addOnName: 'Håndværkerfejl';
      addOnId: 'addOnHomeContractorDamage';
    }
  | {
      addOnName: 'Byggematerialer';
      addOnId: 'addOnHomeBuildingMaterials';
    }
  | {
      addOnName: 'Handicaptilpasning';
      addOnId: 'addOnHomeHandicapAdaptation';
    }
  | {
      addOnName: 'Motoriserede haveredskaber';
      addOnId: 'addOnHomeLargeMotorizedTools';
    }
  | {
      addOnName: 'Haveænlæg m.m.';
      addOnId: 'addOnHomeGarden';
    }
  | {
      addOnName: 'Udlejningsdækning';
      addOnId: 'addOnHomeRenting';
    }
  | {
      addOnName: 'Strakserstatning';
      addOnId: 'addOnAccidentImmediateCompensation';
    }
  | {
      addOnName: 'Forhøjet erstatning';
      addOnId: 'addOnAccidentIncreasedCompensation';
    }
  | {
      addOnName: 'Farlig sport';
      addOnId: 'addOnAccidentDangerousSport';
    }
  | {
      addOnName: 'Tandbehandling';
      addOnId: 'addOnAccidentDentalTreatment';
    }
  | {
      addOnName: 'Tyggeskade';
      addOnId: 'addOnAccidentChewingDamage';
    }
  | {
      addOnName: 'Dødsfald ulykke';
      addOnId: 'addOnAccidentDeath';
    }
  | {
      addOnName: 'Sundhed';
      addOnId: 'addOnAccidentHealth';
    }
  | {
      addOnName: 'Sygdom';
      addOnId: 'addOnAccidentIllness';
    }
  | {
      addOnName: 'Økonomisk førstehjælp';
      addOnId: 'addOnAccidentIllnessPayout';
    }
  | {
      addOnName: 'Nedsættelse af erhvervsevnen';
      addOnId: 'addOnAccidentLossOfEarning';
    }
  | {
      addOnName: 'Dødsfald sygdom';
      addOnId: 'addOnAccidentIllnessDeath';
    }
  | {
      addOnName: 'Børnesygdomsdækning';
      addOnId: 'addOnChildIllness';
    }
  | {
      addOnName: 'Begränsad Liv';
      addOnId: 'addOnLifeLimited';
    }
  | {
      addOnName: 'Liv och Användbarhet';
      addOnId: 'addOnLifeUsability';
    }
  | {
      addOnName: 'Livförsäkring Avel';
      addOnId: 'addOnLifeBreeding';
    }
  | {
      addOnName: 'Katastrof Liv';
      addOnId: 'addOnLifeCatastrophe';
    }
  | {
      addOnName: 'Livförsäkring Trav & galopp';
      addOnId: 'addOnLifeTrot';
    }
  | {
      addOnName: 'Krydslivsforsikring';
      addOnId: 'addOnLifeCompanion';
    }
  | {
      addOnId: 'addOnTravelSki';
      addOnName: 'Skidækning';
    }
  | {
      addOnId: 'addOnTravelExtended';
      addOnName: 'Udvidet årsrejse';
    }
  | {
      addOnId: 'addOnTravelAccident';
      addOnName: 'Rejseulykke';
    }
  | {
      addOnId: 'addOnTravelCancellation';
      addOnName: 'Afbestilling';
    }
  | {
      addOnName: 'Udvidet ansvar';
      addOnId: 'addOnAnimalLiabilityExtended';
    }
  | {
      addOnName: 'Udvidet sygeforsikring';
      addOnId: 'addOnAnimalIllnessExtended';
    }
  | {
      addOnName: 'Livforsikring';
      addOnId: 'addOnAnimalLife';
    }
  | {
      addOnId: 'death_lifetime';
      addOnName: 'Livförsäkring';
    }
  | {
      addOnId: 'money_back';
      addOnName: 'Pengar Tillbaka';
    }
  | {
      addOnId: 'pre_existing';
      addOnName: 'Tidigare Besvär';
    }
  | {
      addOnId: 'addOnAccident';
      addOnName: 'Contents accidental damage';
    }
  | {
      addOnId: 'addOnAwayFromHome';
      addOnName: 'Personal possessions cover away from home';
    }
  | {
      addOnId: 'addOnHomeBicycle';
      addOnName: 'Bicycle cover';
    }
  | {
      addOnId: 'addOnHomeAssistance';
      addOnName: 'Home assistance';
    }
  | {
      addOnId: 'addOnLegal';
      addOnName: 'Legal cover';
    }
  | {
      addOnId: 'studentCover';
      addOnName: 'Student cover';
    }
  | {
      addOnId: 'emergencyCover';
      addOnName: 'Emergency cover';
    }
  | {
      addOnId: 'everydayBelongingsCover';
      addOnName: 'Everyday belongings cover';
    }
  | {
      addOnId: 'higherValueBelongingsCover';
      addOnName: 'Higher value belongings cover';
    };

export type AddOn = AddOnNameId & {
  addOnPrice?: number;
};

type DeductibleNameId =
  | {
      deductibleName: 'Självrisk vagnskada';
      deductibleId: 'deductibleVehicleDamage';
    }
  | {
      deductibleName: 'Självrisk trafik';
      deductibleId: 'deductibleTraffic';
    }
  | {
      deductibleName: 'Självrisk brand';
      deductibleId: 'deductibleFire';
    }
  | {
      deductibleName: 'Självrisk stöld';
      deductibleId: 'deductibleTheft';
    }
  | {
      deductibleName: 'Självrisk glas';
      deductibleId: 'deductibleGlass';
    }
  | {
      deductibleName: 'Fast självrisk glas';
      deductibleId: 'fixedDeductibleGlass';
    }
  | {
      deductibleName: 'Rörlig självrisk glas';
      deductibleId: 'variableDeductibleGlass';
    }
  | {
      deductibleName: 'Rörlig självrisk rättsskydd';
      deductibleId: 'variableDeductibleLegal';
    }
  | {
      deductibleName: 'Fast självrisk rättsskydd';
      deductibleId: 'fixedDeductibleLegal';
    }
  | {
      deductibleName: 'Självrisk bärgning';
      deductibleId: 'deductibleTowing';
    }
  | {
      deductibleName: 'Självrisk kris';
      deductibleId: 'deductibleCrisis';
    }
  | {
      deductibleName: 'Självrisk allrisk';
      deductibleId: 'deductibleAccident';
    }
  | {
      deductibleName: 'Rörlig självrisk';
      deductibleId: 'deductibleVariable';
    }
  | {
      deductibleName: 'Fast självrisk';
      deductibleId: 'deductibleFixed';
    }
  | {
      deductibleName: 'Självrisk lösöre';
      deductibleId: 'deductibleMovables';
    }
  | {
      deductibleName: 'Egenandel kasko';
      deductibleId: 'deductibleVehicleDamage';
    }
  | {
      deductibleName: 'Egenandel ansvar';
      deductibleId: 'deductibleTraffic';
    }
  | {
      deductibleName: 'Egenandel brand';
      deductibleId: 'deductibleFire';
    }
  | {
      deductibleName: 'Egenandel veihjelp';
      deductibleId: 'deductibleTowing';
    }
  | {
      deductibleName: 'Egenandel glass';
      deductibleId: 'deductibleGlass';
    }
  | {
      deductibleName: 'Självrisk egendom';
      deductibleId: 'deductibleProperty';
    }
  | {
      deductibleName: 'Självrisk ansvar';
      deductibleId: 'deductibleLiability';
    }
  | {
      deductibleName: 'Självrisk resa';
      deductibleId: 'deductibleTravel';
    }
  | {
      deductibleName: 'Självrisk överfall';
      deductibleId: 'deductibleAssault';
    }
  | {
      deductibleName: 'Självrisk identitetsstöld';
      deductibleId: 'deductibleIDTheft';
    }
  | {
      deductibleName: 'Självrisk bortaskydd';
      deductibleId: 'deductibleAway';
    }
  | {
      deductibleName: 'Självrisk träskadeinsekter';
      deductibleId: 'deductibleWoodInsects';
    }
  | {
      deductibleName: 'Självrisk hussvamp';
      deductibleId: 'deductibleHouseFungus';
    }
  | {
      deductibleName: 'Egenandel naturskade';
      deductibleId: 'deductibleNaturalPerils';
    }
  | {
      deductibleName: 'Selvrisiko ansvar';
      deductibleId: 'deductibleVehicleLiability';
    }
  | {
      deductibleName: 'Selvrisiko kasko';
      deductibleId: 'deductibleVehicleDamage';
    }
  | {
      deductibleName: 'Självrisk byggnad';
      deductibleId: 'deductibleBuilding';
    }
  | {
      deductibleName: 'Egenandel hus';
      deductibleId: 'deductibleBuilding';
    }
  | {
      deductibleName: 'Egenandel eiendom';
      deductibleId: 'deductibleMovables';
    }
  | {
      deductibleName: 'Selvrisiko';
      deductibleId: 'deductibleCar';
    }
  | {
      deductibleName: 'Selvrisiko fører under 24 år';
      deductibleId: 'deductibleYoungDriver';
    }
  | {
      deductibleName: 'Vejhjælp';
      deductibleId: 'deductibleTowing';
    }
  | {
      deductibleName: 'Parkeringsskade';
      deductibleId: 'deductibleParkingDamage';
    }
  | {
      deductibleName: 'Glasskade';
      deductibleId: 'deductibleGlass';
    }
  | {
      deductibleName: 'Førerulykke';
      deductibleId: 'deductibleDriverInjury';
    }
  | {
      deductibleName: 'Individuel selvrisiko';
      deductibleId: 'deductibleHome';
    }
  | {
      deductibleName: 'Retshjælp';
      deductibleId: 'deductibleHomeLegalHelp';
    }
  | {
      deductibleName: 'Småsag uden advokat';
      deductibleId: 'deductibleHomeLegalHelpNoLawyer';
    }
  | {
      deductibleName: 'Glas og sanitet';
      deductibleId: 'deductibleHomeGlassAndSanitation';
    }
  | {
      deductibleName: 'Skadedyrsbekæmpelse';
      deductibleId: 'deductibleHomePests';
    }
  | {
      deductibleName: 'Kosmetiske forskelle';
      deductibleId: 'deductibleHomeCosmetics';
    }
  | {
      deductibleName: 'Bolighjælp';
      deductibleId: 'deductibleHomeAssistance';
    }
  | {
      deductibleName: 'Nedbørsskade';
      deductibleId: 'deductibleHomePrecipitationDamage';
    }
  | {
      deductibleName: 'Bygningskasko';
      deductibleId: 'deductibleHomeBuildingDamage';
    }
  | {
      deductibleName: 'Pludselig skade';
      deductibleId: 'deductibleHomeMovables';
    }
  | {
      deductibleName: 'Gæstebudsskader og lejede ting';
      deductibleId: 'deductibleHomeMovablesRented';
    }
  | {
      deductibleName: 'Børns ansvar';
      deductibleId: 'deductibleHomeChildLiability';
    }
  | {
      deductibleName: 'Brandskade';
      deductibleId: 'deductibleHomeFire';
    }
  | {
      deductibleName: 'Rørskade og kabelskade';
      deductibleId: 'deductibleHomePipesAndCable';
    }
  | {
      deductibleName: 'Stiklednings';
      deductibleId: 'deductibleHomeBranchPipe';
    }
  | {
      deductibleName: 'Udvidet vand';
      deductibleId: 'deductibleHomeWaterDamage';
    }
  | {
      deductibleName: 'Svamp og Insekt';
      deductibleId: 'deductibleHomeMoldOrInsect';
    }
  | {
      deductibleName: 'Råd';
      deductibleId: 'deductibleHomeRotting';
    }
  | {
      deductibleName: 'Cykler';
      deductibleId: 'deductibleHomeBicycle';
    }
  | {
      deductibleName: 'Udvidet elektronik';
      deductibleId: 'deductibleHomeElectronics';
    }
  | {
      deductibleName: 'Invaliditet';
      deductibleId: 'deductibleAccidentInvalidity';
    }
  | {
      deductibleName: 'Tandskade';
      deductibleId: 'deductibleAccidentDentalInjury';
    }
  | {
      deductibleName: 'Strakserstatning';
      deductibleId: 'deductibleAccidentImmediateCompensation';
    }
  | {
      deductibleName: 'Selvrisiko rejse';
      deductibleId: 'deductibleTravel';
    }
  | {
      deductibleName: 'Selvrisiko ansvar';
      deductibleId: 'deductibleAnimalLiability';
    }
  | {
      deductibleName: 'Selvrisiko sygdom';
      deductibleId: 'deductibleAnimalVeterinary';
    }
  | {
      deductibleName: 'Escape of water';
      deductibleId: 'deductibleHomeWaterDamage';
    }
  | {
      deductibleName: 'Contents insurance';
      deductibleId: 'deductibleMovables';
    }
  | {
      deductibleName: 'Escape of oil';
      deductibleId: 'deductibleHomeOilDamage';
    }
  | {
      deductibleName: 'Flood damage';
      deductibleId: 'deductibleHomeFloodDamage';
    };

export type Deductible = DeductibleNameId & {
  deductibleAmount?: number;
};

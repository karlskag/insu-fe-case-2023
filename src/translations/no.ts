/* eslint-disable max-lines */
import { MessageKeys } from './types';

export const messages: Record<MessageKeys, string> = {
  // General
  'All selected': 'Alle valgt',
  'Cell phone number': 'Mobilnummer',
  'E-mail': 'E-post',
  'Go back': 'Tilbake',
  'Manual link': 'Manuell lenke',
  'No insurances': 'Ingen forsikringer',
  'Phone number': 'Telefonnummer',
  'Please enter a cell phone number.': 'Vennligst skriv inn et mobilnummer.',
  'Please enter a valid cell phone number.': 'Vennligst skriv inn et gyldig mobilnummer.',
  'Postal code': 'Postnummer',
  'Show less': 'Vis mindre',
  'Show more': 'Vis mer',
  'Try again': 'Prøv igjen',
  'We are sorry, something went wrong.': 'Vi beklager, noe gikk galt.',
  'amount/month': '{amount}/måned',
  'amount/year': '{amount}/år',
  '{amount} selected (singular)': '{amount} valgt',
  '{amount} selected': '{amount} valgt',
  Active: 'Aktiv',
  Cancel: 'Avbryt',
  Close: 'Lukk',
  City: 'Stad',
  Company: 'Selskap',
  Copied: 'Kopiert',
  Copy: 'Kopier',
  Insurance: 'Forsikring',
  Insurances: 'Forsikringer',
  Name: 'Navn',
  Ok: 'Ok',
  Okay: 'Greit',
  Reload: 'Last på nytt',
  To: 'Til',
  Today: 'Idag',
  currency: 'nkk',

  // Login/register generals
  'Sign in': 'Logg inn',
  'Sign in with email': 'Logg inn med e-postadresse',
  'Create account': 'Opprett konto',
  Password: 'Passord',
  'Repeat password': 'Gjenta passord',
  'Please repeat password': 'Gjenta passordet',
  'Done!': 'Ferdig!',
  'Minimum 8 characters': 'Minimum 8 tegn',
  'Email needs to be at least 5 characters': 'E-postadressen må være på minst 5 tegn',

  // Login
  'Sign in with username and password': 'Logg inn med brukernavn og passord',
  'Sign in with your email': 'Logg på med e-posten din',
  'Forgot password?': 'Glemt passord?',
  'Your account is not enabled yet.': 'Kontoen din er ikke aktivert ennå.',
  'We just sent you an email to {email}. Click the link to sign in':
    'Vi har nettopp sendt deg en e-post til {email}. Klikk på lenken for å logge inn.',
  'Enter your email and sign in by clicking on the link that is sent to your inbox':
    'Skriv inn e-posten din og logg på ved å klikke på lenken som sendes til innboksen din.',

  // Register
  'To sign up you need to have an ongoing cooperation with Insurely and use your corporate email.':
    'For å registrere deg må du ha en pågående samarbeid med Insurely og bruke din bedriftsepost.',
  'Your request to access is being processed!': 'Din forespørsel om tilgang blir behandlet!',
  'We will email you when your account has been activated.':
    'Vi sender deg en e-post når kontoen din er aktivert.',
  'Please enter a valid email': 'Vennligst skriv inn en gyldig e-post',
  'Please enter a password': 'Vennligst skriv inn et passord',
  'The password need to be at least 8 characters': 'Passordet må være minst 8 tegn',
  'The passwords needs to match': 'Passordene må være like',
  'Check your inbox': 'Sjekk innboksen din!',
  'We are signing you in': 'Vi logger deg på',
  'We just sent you an email to {email}. Follow the instructions in the email to create your account':
    'Vi har nettopp sendt deg en e-post til {email}. Følg instruksjonene i e-posten for å opprette kontoen din.',

  // Enable account
  'Your account is now ready': 'Kontoen din er nå klar',
  'To overview': 'Til oversikt',
  'Validating account': 'Validerer konto',
  'Login and signing with QR code': 'Logg inn og signering med QR-kode',
  'Some companies only allow identification with BankID via QR code. It confirms that you are physically present at both devices, reducing the risk of fraud.':
    'Noen selskaper tillater kun identifikasjon med BankID via QR-kode. Den bekrefter at du er fysisk tilstede ved begge enhetene, noe som reduserer risikoen for svindel.',
  'Ask the customer to retrieve their insurance from a device other than the one used for BankID.':
    'Be kunden om å hente forsikringen fra en annen enhet enn den som brukes til BankID.',
  'I understand': 'Jeg forstår',
  'BankID on another device': 'BankID på en annen enhet',

  // Forgot password
  'Reset password': 'Tilbakestill passord',
  'Input you email address. You will then get an email with a link back to this page where you can set a new password.':
    'Skriv inn e-postadressen din. Du vil da få en e-post med en lenke tilbake til denne siden der du kan angi et nytt passord.',
  'Send reset password email': 'Send e-post for tilbakestilling av passord',
  'New password': 'Nytt passord',
  'Repeat new password': 'Gjenta nytt passord',
  'Set new password': 'Angi nytt passord',
  'Save new password': 'Lagre nytt passord',
  'We just sent you an email to {email}. Follow the instructions in the email to reset your password':
    'Vi har nettopp sendt deg en e-post til {email}. Følg instruksjonene i e-posten for å tilbakestille passordet ditt.',
  'Your password is now saved': 'Passordet ditt er nå lagret',

  // Navigation
  Overview: 'Oversikt',
  Sessions: 'Økter',
  Cancellations: 'Oppsigelser',
  Collections: 'Gjenvinninger',
  Analytics: 'Analyser',
  'Log out': 'Logg ut',
  FAQ: 'FAQ',
  Contact: 'Kontakt',

  // Overview
  'Insurance companies and status': 'Forsikringsselskaper og status',
  'Welcome to {SST}': 'Velkommen til {SST}',
  'This is a support tool for insurance advice...':
    'Dette er et støtteverktøy for forsikringsrådgivning. Alle data er basert på automatiske oppgjør, noe som betyr at det kan være feil i enkelte tilfeller. Som forsikringsagent er du ansvarlig for å sørge for at det som sies og kommuniseres til en kunde er korrekt',
  'For more information see the FAQ. You can also contact us in the chat bubble in the right corner and we will help you.':
    'For mer informasjon, se FAQ. Du kan også kontakte oss i snakkeboblen i høyre hjørne, og vi vil hjelpe deg.',
  'Below you see the status of all insurance companies that we currently support.':
    'Nedenfor ser du statusen til alle forsikringsselskapene vi støtter for øyeblikket.',
  'Temporarily down': 'Midlertidig nede',
  'Available integrations': 'Tilgjengelige integrasjoner',
  'Temporarily closed': 'Midlertidig stengt',
  'Not implemented': 'Ikke implementert',

  // Sessions
  'Create new session': 'Skapa ny session',
  'First and last name': 'Fornavn og etternavn',
  'Create session': 'Lag session',
  'Session created': 'Session opprettet',
  'Session id': 'Session id',
  'Session link': 'Sessionslänk',
  'Go to session page': 'Gå til sesjonssiden',
  Yesterday: 'I går',
  'Ok, back to list': 'Ok, tilbake til listen',
  'Please enter a name': 'Vennligst skriv inn et navn',
  'Could not find the session': 'Kunne ikke finne økten.',

  // Session
  'Collections from the user': 'Samling fra brukeren',
  Date: 'Dato',
  'Session id: ': 'Økt id',
  'Session link: ': 'Sessionslänk',
  'Create text message': 'Lag SMS med lenke',
  'Send new SMS': 'Send ny SMS',
  'Send SMS with link for collection': 'Send SMS med link for henting',
  'Send SMS': 'Send SMS',
  "Enter the customer's phone number to send an SMS with a link to retrieve the customer's existing {data}.":
    'Skriv inn kundens telefonnummer for å sende en SMS med en lenke for å hente kundens eksisterende {data}.',
  'Status of power of attorney': 'Status for fullmakt',
  'Active termination powers of attorney for the user': 'Aktive oppsigelsesfullmakter for brukeren',
  'Status log for collections': 'Statuslogg for henting',
  'Send text message for data collection': 'Send SMS med link for henting',
  'SMS was sent to {number}, {date}': 'SMS ble sendt til {number}, {date}',
  'The customer approves receiving the link via SMS': 'Kunden godkjenner å motta lenken via SMS',
  'The customer must approve receiving the link via SMS':
    'Kunden må godkjenne å motta lenken via SMS',
  'Send link': 'Send lenke',
  'SMS sent': 'SMS sendt',
  'SMS sending': 'SMS sendes',
  'SMS has been sent': 'SMS er sendt',
  'Could not be delivered': 'Kunne ikke leveres',
  'Failed to send SMS': 'Kunne ikke sende SMS',
  "Couldn't send SMS because the number doesn't exist. Please try again with a different number.":
    'Kunne ikke sende SMS fordi nummeret ikke eksisterer. Prøv igjen med et annet nummer.',
  'Sent invitations': 'Sendte invitasjoner',
  'It seems that something went wrong when we were going to send the collect SMS to the customer. Try again in a little while.':
    'Det ser ut til at noe gikk galt da vi skulle sende hent SMS til kunden. Prøv igjen om litt.',
  'Delete user': 'Slett bruker',
  'Are you sure you want to delete the session?': 'Er du sikker på at du vil slette økten?',
  'All insurance data in this session will disappear from the Sales Support Tool.':
    'Alle forsikringsdata i økten vil forsvinne fra salgsstøtteverktøyet.',
  Remove: 'Fjerne',
  'Nothing to see here': 'Ingenting å se her',
  'This user has not collected any insurances yet.': 'Brukeren har ikke samlet noen data ennå.',
  Events: 'Hendelser',
  'No events to display': 'Ingen hendelser å vise',
  'Show information': 'Vis informasjon',
  'Hide information': 'Skjul informasjon',
  'Delete the session': 'Slett økten',

  // Insurance card
  'Employer paid': 'Arbeidsgiver betalt',
  'Expired {date}': 'Gikk ut {date}',
  'Active from {date}': 'Aktiv fra {date}',
  'Renewal date {date}': 'Fornyelsesdato {date}',
  'Will soon be active': 'Snart aktiv',
  'Will expire soon': 'Går snart ut',
  'Has expired': 'Har utgått',
  'Other insurance holder': 'Annen forsikringshaver',
  'Total:': 'Totalt: ',

  // Insurance Listing
  'Home insurances': 'Hjem forsikring',
  'Vehicle insurances': 'Bilforsikring',
  'Person insurances': 'Personlig forsikring',
  'Animal insurances': 'Dyreforsikring',
  'Other insurances': 'Annen forsikring',
  Collected: 'Samlet',
  at: 'kl',

  // Insurance Page
  Coverage: 'Utstrekning',
  'Termination power of attorney': 'Fullmakt til oppsigelse',
  'Download insurance data': 'Last ned forsikringsdata',
  'Download insurance policy document': 'Download insurance policy document',
  'Policy letter': 'Policy letter',
  Export: 'Eksport ',
  'Create a power of attorney for termination': 'Opprett en fullmakt for oppsigelse',
  'This insurance has another insurance holder': 'Denne forsikringen har en annen forsikringstaker',
  'Customer email': 'Kunde e-post',
  Create: 'Skape',
  'Insurance details': 'Forsikringsdetaljer',
  'Cancel Insurance': 'Kansellere forsikring',
  'That means the insurance cannot be cancelled': 'Det betyr at forsikringen ikke kan kanselleres',
  'Something unexpected happened, please try again': 'Noe uventet skjedde, prøv igjen',

  // Insurance Details
  '({number})%': '({number})%',
  '{mileage}km/year': '{mileage}km/år',
  'Adults in home': 'Vuxna i boendet',
  'Annual premium': 'Årskostnad',
  'Bike cover limit': 'Cykelskyddsgräns',
  'Children in home': 'Barn i boendet',
  'Claims free years': 'Kravfri år',
  'Claims last five years': 'Krav varer i fem år',
  'Construction years': 'Byggnadsår',
  'Contract period': 'Kontrakt periode',
  'Date of birth': 'Fødselsdato',
  'Death compensation': 'Dødserstatning',
  'Debit card': 'Kontokort',
  'Employer or union paid': 'Betalt av arbeidsgivere eller fagforeninger',
  'Employment status': 'Ansettelsesstatus',
  'Flooded last ten years': 'Oversvømmet siste ti år',
  'Insurance amount economic disability': 'Forsikringsbeløp økonomisk uførhet',
  'Insurance amount medical disability': 'Forsikringsbeløp medisinsk uførhet',
  'Insurance amount personal property': 'Forsikringsbeløp personlig eiendom',
  'Insurance amount': 'Forsikringsbeløp',
  'Insurance company': 'Forsikringsselskap',
  'Pension company': 'Pensjonsselskap',
  'Insurance holder': 'Forsikringstaker',
  'Insurance name': 'Forsikringsnavn',
  'Insurance number': 'Forsikringsnummer',
  'Insurance object address': 'Objektets adresse',
  'Insurance object city': 'Postadressen til objektet',
  'Insurance object postal code': 'Objektets postnummer',
  'Insurance object property code': 'Eiendomsbetegnelse',
  'Joint policy holder': 'Felles forsikringstaker',
  'Listed property': 'Listed property',
  'Living area': 'Erstatte',
  'Max mileage': 'Kjørelengde',
  'Maximum compensation medical disability': 'Maksimal kompensasjon ved sykdom',
  'Monthly premium': 'Månedlig kostnad',
  'Number of bathrooms': 'Antall bad',
  'Number of bedrooms': 'Antall soverom',
  'Number of claims last 3 years': 'Antal ärenden senaste tre åren',
  'Number of residents': 'Antal boende',
  'Owner status': 'Ägandestatus',
  'Payment frequency': 'Betalingsfrekvens',
  'Payment method': 'Betalingsmetode',
  'Personal possessions limit': 'Gräns för personliga ägodelar',
  'Professional use': 'Används i arbete',
  'Property built year': 'Fastighet byggd år',
  'Registration number': 'Registreringsnummer',
  'Renewal amount': 'Fornyelsesbeløp',
  'Renewal date': 'Fornyelsesdato',
  'Start date': 'Startdato',
  'Subsidence last ten years': 'Innsynkning siste ti år',
  'Type of property': 'Type of property',
  'Unoccupied for more than thirty days': 'Ubesatt i mer enn tretti dager',
  'Veterinary care': 'Veterinærvård',
  AUTOGIRO: 'Autogiro',
  Addons: 'Addisjon',
  BI_YEARLY_PREMIUM_FREQUENCY: 'Halvår',
  CREDIT_CARD: 'Kreditkort',
  Cost: 'Koste',
  Discount: 'Rabatt',
  ELECTRONIC_INVOICE: 'Elektronisk faktura',
  EMPLOYER_PAID: 'Betalt av arbeidsgivere eller fagforeninger',
  GENERIC_INVOICE: 'Faktura',
  MONTHLY_PREMIUM_FREQUENCY: 'Måned',
  Model: 'Modell',
  ONE_TIME_PAYMENT: 'Engangsbetaling',
  Occupation: 'Yrke',
  PAPER_INVOICE: 'Pappersfaktura',
  QUARTERLY_PREMIUM_FREQUENCY: 'Fjerdedel',
  UNDEFINED: 'Ukjent',
  UNKNOWN_PREMIUM_FREQUENCY: 'Ukjent',
  YEARLY_PREMIUM_FREQUENCY: 'År',

  // Insurance Parameters
  Extent: 'Utstrekning',
  'Comparing with': 'Sammenlignet med',
  Comparison: 'Forsikring sammenligning',
  Compare: 'Sammenligne',
  'What does the insurance cover?': 'Hva dekker forsikringen?',
  'At the moment, we do not fully support this type of insurance, which means that there is no information on the scope.':
    'For tiden støtter vi ikke denne forsikringstypen fullt ut, noe som betyr at det ikke er informasjon om omfanget.',
  'The scope is based on the latest terms and conditions version':
    'Omfanget er basert på den siste versjonen av vilkår og betingelser',
  'Complete insurance terms': 'Fullfør forsikringsvilkår',
  'Insurance terms does not support test environment':
    'Forsikringsvilkår støtter ikke test environment',
  'There is no insurance to compare with': 'Det er ingen forsikring å sammenligne med',
  'Insurance terms link': 'Se vilkårene her',
  'Information not available': 'Informasjon ikke tilgjengelig',
  'Included in the insurance': 'Inkludert i forsikringen',
  'Not included in the insurance': 'Ikke inkludert i forsikringen',

  // Cancellation
  'Power of attorney for cancellation': 'Fullmakt for oppsigelse',
  'Create a power of attorney for cancellation to be able to cancel the customers current insurens.':
    'Opprett en fullmakt for oppsigelse for å kunne kansellere kundens gjeldende forsikring.',
  'Chose how to send the power of attorney': 'Velg hvordan du vil sende fullmakten',
  'Personal number': 'Personnummer',
  'New insurance number (optional)': 'Nytt forsikringsnummer (valgfritt)',
  'Enter the new insurance number to be able to follow the customer journey more easily. The number is for internal use only and does not appear in the power of attorney.':
    'Skriv inn det nye forsikringsnummeret for å kunne følge kundereisen enklere. Nummeret er kun for intern bruk og vises ikke i fullmakten.',
  'Termination date': 'Oppsigelsesdato',
  "The insurance's binding period is until {date}": 'Forsikringens bindingstid er til {date}.',
  'Unfortunately we could not find the binding period. Please ask the customer to find the correct date the the power of attorney does not risk being canceled':
    'Vi kunne dessverre ikke finne bindingstiden. Be kunden om å finne riktig dato slik at fullmakten ikke risikerer å bli kansellert.',
  'The termination date is before the binding period. This can cause the insurance company to decline the cancellation':
    'Oppsigelsesdatoen er før bindingstiden. Dette kan få forsikringsselskapet til å avslå oppsigelsen.',
  'The termination date is after the binding period. This can cause the insurance company to decline the cancellation':
    'Oppsigelsesdatoen er etter bindingstiden. Dette kan få forsikringsselskapet til å avslå oppsigelsen.',
  'Send power of attorney': 'Send fullmakt',
  'Create power of attorney': 'Opprett fullmakt',
  'Create new power of attorney': 'Opprett ny fullmakt',
  'Send reminder': 'Send påminnelse',
  'Waiting for signature': 'Venter på signatur',
  Signed: 'Signert',
  Deleted: 'Slettet',
  'Not delivered': 'Ikke levert',
  Rejected: 'Avvist',
  'Timed out': 'Tidsavbrudd',
  'Download manual power of attorney': 'Last ned manuell fullmakt',
  'Download power of attorney': 'Last ned fullmakt',
  'Delete power of attorney': 'Slett fullmakt',
  'Power of attorney sent.': 'Fullmakt sendt.',
  'Reminder sent.': 'Påminnelse sendt.',
  'Copy the link and send manually': 'Kopier lenken og send den manuelt',
  'After you have clicked on "Create power of attorney" a link will appear that you can send to the customer manually.':
    'Etter at du har trykket på "Opprett fullmakt" kommer det opp en lenke som du kan sende til kunden manuelt.',
  'Does the customer not get the power of attorney': 'Får ikke kunden fullmakten?',
  'If the customer has not received the power of attorney, it may be because the wrong email or mobile number has been entered, or due to technical reasons.':
    'Dersom kunden ikke har mottatt fullmakten kan det skyldes feil e-post eller mobilnummer, eller på grunn av tekniske årsaker.',
  'Delete the existing authorization and create a new one. If you want to send the power of attorney from another system, select "Manual link" as the way to send the power of attorney.':
    'Slett den eksisterende autorisasjonen og opprett en ny. Ønsker du å sende fullmakten fra et annet system velger du "Manuell lenke" som måte å sende fullmakten på.',
  'No status yet': 'Ingen status ennå',
  'will be updated when the power of attorney is signed or declined.':
    '- vil bli oppdatert når fullmakten er signert eller avslått.',
  'The power of attorney was sent manually': 'Fullmakten ble sendt manuelt',
  'Please enter an e-mail.': 'Vennligst skriv inn en e-post.',
  'Please enter a valid e-mail': 'Vennligst skriv inn en gyldig e-post',
  'Please enter a personal number.': 'Vennligst skriv inn et personnummer.',
  'Please enter a valid personal number.': 'Vennligst skriv inn et gyldig personnummer.',
  'Please enter a new insurance number.': 'Vennligst skriv inn et nytt forsikringsnummer',
  'To change or delete a power of attorney': 'For å endre eller slette en fullmakt',
  'If you want to change a sent power of attorney, you need to delete the existing one. The power of attorney then becomes invalid, and you can create and send a new power of attorney to the customer. You delete the power of attorney by clicking on the three dots in the right corner, and then selecting "Delete power of attorney".':
    'Hvis du vil endre en sendt fullmakt, må du slette den eksisterende. Fullmakten blir deretter ugyldig, og du kan opprette og sende en ny fullmakt til kunden. Du sletter fullmakten ved å klikke på de tre prikkene i høyre hjørne, og deretter velge "Slett fullmakt". Merk at fullmakten kun kan slettes dersom den har status "venter på underskrift".',
  'Do you want to remind again?': 'Vil du sende påminnelse igjen?',
  'You have sent a reminder once earlier today.':
    'Du har sendt en påminnelse en gang tidligere i dag.',
  'Do you want to delete the power of attorney?': 'Vil du slette fullmakten?',
  'You will not be able to undo this action and the power of attorney will be invalid.':
    'Du vil ikke kunne angre denne handlingen, og fullmakten vil bli ugyldig.',
  'Something went wrong when we were submitting the cancellation power of attorney to the customer. Please try again in a little while.':
    'Noe gikk galt da vi sendte fullmakten til kunden. Vennligst prøv igjen om litt.',
  'It seems like something went wrong when we sent the power of attorney to the customer. Please try again in a little while.':
    'Det ser ut som om noe gikk galt når vi skulle sende uppsägningsfullmakten til kunden. Vennligst prøv igjen om litt.',

  // Cancellation Event log
  History: 'Historie',
  'Power of attorney sent': 'Fullmakt sendt',
  'Power of attorney created': 'Det er opprettet fullmakt',
  'PoA reminder sent': 'Påminnelse sendt',
  'Power of attorney signed': 'Fullmakt signert',
  'Power of attorney cancelled': 'Fullmakt slettet',
  'Power of attorney rejected': 'Fullmakt avvist',
  Activity: 'Aktivitet',
  Unknown: 'Ukjent',

  // Cancellation list
  Search: 'Søk',
  "You haven't made any cancellations yet": 'Du har ikke gjort noen kanselleringer ennå',
  'Binding period': 'Bindingstid',
  Status: 'Status',
  'New insurance number': 'Nytt forsikringsnummer',
  Created: 'Opprettet',
  'Case manager': 'Saksbehandler',
  'Expired information': 'Utløpt informasjon',

  // PENSION
  // Overview Pension
  'This is a support tool for pension advice...':
    'Dette er et støtteverktøy for pensjonsrådgivning. Alle data er basert på automatiske innhentinger, noe som betyr at det kan være feil i enkeltsaker. Som pensjonsformidler har du ansvar for at det som blir sagt og formidlet til en kunde er korrekt',
  'Pension companies and status': 'Pensjonsselskaper og status',
  'Below you see the status of all pension companies that we currently support.':
    'Nedenfor ser du status for alle pensjonsselskapene som vi for tiden støtter.',

  // Sessions pension
  Pension: 'Pensjon',
  Pensions: 'Pensjoner',
  'No pensions': 'Ingen pensjoner',

  // Session Pension
  'This user has not collected any pensions yet.':
    'Denne brukeren har ikke samlet inn noen pensjoner ennå.',
  'Total pension overview': 'Total pensjonsoversikt',
  'Collected pensions': 'Innsamlede pensjoner',
  Movable: 'Bevegelig',
  'Not movable': 'ikke bevegelig',

  // Pension listing
  'Service pension': 'Tjenestepensjon',
  'Service pensions': 'Tjenestepensjoner',

  'Total value': 'Totalsum',
  'Total amount paid': 'Totalt betalt beløp',
  'Total development since start': 'Total utvikling siden oppstart',
  'Total average risk': 'Total gjennomsnittlig risiko',
  'Cannot be moved': 'Kan ikke flyttes',
  'Can be moved': 'Kan flyttes',
  'Might be movable': 'Kan være bevegelig',

  // Pension types
  COLLECTIVE_OCCUPATIONAL_PENSION: 'Tariffavtalt tjenestepensjon',
  OCCUPATIONAL_PENSION: 'Tjenestepensjon/Individuell tjenestepensjon',
  PRIVATE_PENSION: 'Privat pensjonsforsikring',
  CAPITAL_INSURANCE: 'Kapitalforsikring',
  IPS_PENSION: 'IPS',
  UNKNOWN_PENSION_TYPE: 'Ukjent',

  // Pension page
  'Download pension data': 'Last ned pensjonsdata',
  Traditional: 'Tradisjonell',
  'Total amount': 'Totale mengden',
  'Fixed charge': 'Fast ladning',
  'Variable charge': 'Variabel ladning',
  'Development since start': 'Utvikling siden oppstart',
  Employer: 'Arbeidsgiver',
  'Receives payments': 'Mottar betalinger',
  'Survivors protection': 'Etterlattevern',
  'Fund holdings': 'Fondsbeholdning',
  'Fixed annual amount': 'Fast årlig beløp',
  'Moving fee': 'Flyttegebyr',
  Value: 'Verdi',
  Trustee: 'Bobestyrer',
  'Active payments': 'Aktive utbetalinger',
  'Active payouts': 'Aktiver utbetalinger',
  'Data not available': 'Data ikke tilgjengelig',
  'Fund fee': 'Fondsavgift',
  'It is uncertain whether this pension can be transferred, but unfortunately we cannot say exactly why':
    'Det er usikkert, om denne pension kan overføres, men vi kan desværre ikke sige præcis hvorfor',
  'The pension cannot be transferred. This is because there are still active payments from the employer.':
    'Pensjonen kan ikke overføres. Dette fordi det fortsatt er aktive utbetalinger fra arbeidsgiver.',
  'The pension cannot be transferred. It looks like a payout has been initiated.':
    'Pensjonen kan ikke overføres. Det ser ut som en utbetaling er igangsatt.',
  'The pension might be movable - the start date could not be found':
    'Pensjonen kan være flyttbar - startdatoen ble ikke funnet',
  'The pension might be movable - information about payment could not be found':
    'Pensjonen kan være flyttbar - informasjon om utbetaling ble ikke funnet',
  'We could not find whether the pension has active payments, which is needed, among other things, to know whether a pension is portable or not...':
    'Vi kunne ikke finne om pensjonen har aktive utbetalinger, noe som er nødvendig blant annet for å vite om en pensjon er flyttbar eller ikke. Du kan spørre kunden om de har gått av med pensjon.',
  'The pension might be movable - information about payouts could not be found':
    'Pensjonen kan være flyttbar - informasjon om utbetaling ble ikke funnet',
  'We could not find whether the pension has active payouts, which is needed, among other things, to know whether a pension is portable or not...':
    'Vi kunne ikke finne om pensjonen har aktive utbetalinger, noe som er nødvendig blant annet for å vite om en pensjon er flyttbar eller ikke. Du kan spørre kunden om de fortsatt jobber for arbeidsgiveren som håndterer utbetalingene.',
  'A traditional pension that was initiated before 2007 is not movable.':
    'En tradisjonell pensjon som ble igangsatt før 2007 er ikke flyttbar.',
  'We could not find the start date, which is needed, among other things, to know whether a pension is portable or not...':
    'Vi kunne ikke finne startdatoen, som blant annet trengs for å vite om en pensjon er flyttbar eller ikke. Du kan spørre kunden når de begynte på arbeidsplassen, eller be dem gå inn på minpension.se for å finne ut årstall. Dersom pensjonen startet senere enn 2007, kan den flyttes.',
  No: 'Nei',
  of: 'av',
  Yes: 'Ja',
  Maybe: 'Kanskje',
  'ISIN code': 'ISIN-kode',
  'Company number': 'Firmanummer',
  'Actual fees paid (previous year)': 'Faktiske avgifter betalt (i fjor)',

  // Collection status
  running: 'Startet',
  login: 'Logg inn',
  collecting: 'Samler inn',
  completed: 'Fullført',
  'completed partial': 'Delvis fullført',
  'completed empty': 'Fullført men tom',
  failed: 'Mislyktes',
  'user input': 'Sluttbruker må godkjenne vilkår',
  'waiting for authentication': 'Brukeren logget ikke på',

  // Event status
  'Authenticate to insurance company': 'Legitimert mot forsikringsselskaper',
  'Authenticate to pension company': 'Legitimert mot pensjonsselskap',
  'Customer is logging in': 'Kunden logger inn',
  Contacting: 'Kontakter',
  Collecting: 'Henter',
  'No insurances found': 'Ingen forsikringer funnet',
  'No pensions found': 'Ingen pensjoner funnet',
  'Technical issue': 'Teknisk problem',
  'The customer did not authenticate in time': 'Kunden identifiserte seg ikke i tide',
  'Authentication was suspended': 'Autentiseringen ble suspendert',
  'Double authentication with BankID': 'Dobbel identifikasjon med BankID',
  'Incorrect login details': 'Feil påloggingsdetaljer',
  'The customer needs to create an account': 'Kunden må opprette en konto',
  'Update contact information': 'Oppdater kontaktinformasjon',

  // Event error title
  'SMS could not be delivered': 'SMS kunne ikke leveres',
  'We found {insurances} that are not displayed': 'Vi fant {insurances} som ikke vises',
  'Some information is missing': 'Noe informasjon mangler',
  'We found no insurances': 'Vi fant ingen forsikringer.',
  'Something went wrong when logging in to {company}': 'Noe gikk galt ved innlogging på {company}',
  'The collection could not be completed': 'Hentingen kunne ikke fullføres',
  'The customer needs to update information': 'Kunden må oppdatere informasjon',

  // Event error description
  'Something went wrong when we were going to deliver the SMS. Try sending again.':
    'Noe gikk galt da vi skulle levere SMS-en. Prøv å sende på nytt.',
  'The customer has insurance that does not match the insurance categories you offer.':
    'Kunden har forsikringer som ikke samsvarer med forsikringskategoriene du tilbyr.',
  'We could not get all the information belonging to the {data}.':
    'Vi klarte ikke å få tak i all informasjon som hører til {data}.',
  'It looks like the customer has no {data} with {company}. Ask the customer to try another company.':
    'Det ser ut til at kunden ikke har noen {data} hos {company}. Be kunden prøve et annet selskap.',
  'This is due to a technical error, please ask the customer to try again. Email or write in the chat bubble to our support if the problem persists.':
    'Dette skyldes en teknisk feil, vennligst be kunden prøve på nytt. Send e-post eller skriv i chat-boblen til vår kundestøtte hvis problemet vedvarer.',
  'It took too long for the customer to identify with BankID. Ask the customer to try again and contact our support via email or the chat bubble on the bottom right if the problem persists.':
    'Det tok for lang tid før kunden identifiserte seg med BankID. Be kunden om å prøve igjen og ta kontakt med vår support via e-post eller chat-boblen nederst til høyre hvis problemet vedvarer.',
  'The customer canceled authentication with BankID. Ask the customer to try again if it was a mistake.':
    'Kunden kansellerte autentisering med BankID. Be kunden prøve igjen hvis det var en feil.',
  'The customer has already started another authentication with BankID. Ask the customer to end the existing one and try again.':
    'Kunden har allerede startet en ny autentisering med BankID. Be kunden avslutte den eksisterende og prøv igjen.',
  'The customer has entered the wrong login details. Ask the customer to try again.':
    'Kunden har oppgitt feil påloggingsdetaljer. Be kunden prøve på nytt.',
  'The customer needs to create an account with {company} in order for us to retrieve the data. This is sometimes needed if they have never logged in with them before, even if the customer has insurance or a pension there.':
    'Kunden må opprette en konto hos {company} for at vi skal kunne hente dataene. Dette er noen ganger nødvendig hvis de aldri har logget inn hos dem før, selv om kunden har forsikring eller pensjon der.',
  "The insurance company requires the customer to update their contact details. Ask the customer to log in via the insurance company's app or website and answer the questions. Then start a new collection.":
    'Forsikringsselskapet krever at kunden oppdaterer kontaktopplysningene sine. Be kunden logge inn via forsikringsselskapets app eller nettside og svar på spørsmålene. Start deretter en ny henting.',

  // Analytics
  'No data available for current seller on selected dates':
    'Ingen data tilgjengelig for nåværende selger på utvalgte datoer',
  'No. of sessions': 'Antall økter',
  'No. of collections': 'Antall gjenvinninger',
  'No. of exports': 'antall eksport',
  'Completed sessions': 'Gjennomførte økter',
  'Sessions with at least one completed collection': 'Økter med minst én fullført gjenfinning.',
  'Last week': 'Forrige uke',
  'Last month': 'Forrige måned',
  'Last quarter': 'Forrige måned',
  'Last six months': 'Siste halvår',
  'This year': 'I år',
  'Since the beginning': 'Så start',
  Day: 'Dag',
  Week: 'Uke',
  Month: 'Måned',
  'Seller statistics': 'Selgerstatistikk',
  'Insurance companies': 'Forsikringsselskap',
  Exports: 'Eksportør',
  'Sales Person': 'Salgsperson',
  Volume: 'Volum',

  // Collections
  Collection: 'Samling',
  'Collection from': 'Samling fra',
  'Nothing to see here...': 'Ingenting å se her...',
  'Collections from Sales Opt': 'Samling fra Sales Opt',
  'Below are {policies} that have been collected without being linked to a specific session. For example, this could be through a campaign or a digital sales flow.':
    'Nedenfor er {policies} som er samlet inn uten å være knyttet til en bestemt økt. Dette kan for eksempel være gjennom en kampanje eller en digital salgsflyt.',
  'No collections matched your search...': 'Ingen søk samsvarte med søkefiltrene dine...',
  'We did not find any collections': 'Vi fant ingen samlinger',
  "Try changing your search filters to find what you're looking for":
    'Prøv å endre søkefiltrene dine for å finne det du leter etter',
  'No collections have been made yet': 'Det er ikke gjort noen innsamlinger ennå',
  'When policies have been downloaded through your digital feed, they will be displayed here.':
    'Når retningslinjer er lastet ned gjennom den digitale feeden din, vises de her.',
  'It seems something went wrong when we were going to pick up the insurances.':
    'Det ser ut til at noe gikk galt da vi skulle hente forsikringene.',
  'Not handled': 'Ikke håndtert ',
  'View more info': 'Vis info ',
  Contacted: 'Kontaktet ',
  Viewed: 'Sett',
  'Not viewed': 'Ikke sett',
  'Show details': 'Vis detaljer',
  'Could not retrieve social security number': 'Kunne ikke hente personnummeret ',
  'Search for personal ID number / E-mail': 'Søk etter personnummer',
  Client: 'Klient',
  All: 'Alle',
  From: 'Fra',
  Show: 'Vis',
  '{amount} per page': '{amount} per side',
  Newer: 'Nyere',
  Older: 'Eldre',
  'Load more': 'Last mer',
  'Collection ID': 'Samlings ID',
  Customer: 'Kunde',
  'Insurance policies': 'Forsikringer',
  'Collection date': 'Innsamlingsdato',
  Source: 'Kilde',
  'Contact status': 'Kontaktstatus',
  'Collection source': 'Samlingskilde',
  'Empty collections': 'Tomme samlinger',
  'Show empty collections': 'Vis tomme samlinger',
  'More filters': 'Flere filtre',
  'Less filters': 'Mindre filtre',
  'Personal number or email': 'Personlig nummer eller e-post',
  'Collection date range': 'Samlingsdatoperiode',
  'Last {number} days': 'Siste {number} dager',
  'Export collections': 'Eksporter samlinger',
  'are not displayed as they do not match the insurance categories you offer':
    'vises ikke da de ikke samsvarer med forsikringskategoriene du tilbyr',

  // Support
  'Mail support': 'Sende melding',
  'Hi! Write your question or feedback in the box below. We will return as soon as we can to the email address you registered with us.':
    'Hei! Skriv spørsmålet ditt eller tilbakemeldingen i boksen under. Vi kommer tilbake så snart vi kan til e-postadressen du registrerte hos oss.',
  'Write your message here': 'Skriv meldingen din her',
  'Send message': 'Sende melding',
  'Your message has been sent': 'Din melding har blitt sendt',
  Address: 'Adresse',

  // FAQ insurance
  'This FAQ aims to give you as a salesperson or customer contact support in answering questions that may come from customers. It is a collection of the questions we have historically received and examples of suggested answers.':
    'Denne FAQ har som mål å gi deg som selger eller kundekontaktstøtte for å svare på spørsmål som kan komme fra kunder. Det er en samling av spørsmålene vi historisk har mottatt og eksempler på foreslåtte svar.',
  'How does it work?': 'Hvordan virker det?',
  'We help you compare your insurance with an offer from us. With user name and password, you identify yourself with your insurance company via us and we collect your insurance data. Then we can, for 30 days, use it as a basis for an offer.':
    'Vi hjelper deg med å sammenligne forsikringen din med et tilbud fra oss. Med BankID identifiserer du deg med forsikringsselskapet ditt via oss, og vi samler inn forsikringsdataene dine. Da kan vi i 30 dager bruke det som grunnlag for et tilbud.',
  'What happens to my data?': 'Hva skjer med dataene mine?',
  'Confidentiality and handling of personal data are important issues for us. Under no circumstances can we disclose personal information without your consent. The information may only be used to give you good advice for changing or looking at alternatives to insurance. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.':
    'Konfidensialitet og håndtering av personopplysninger er viktige spørsmål for oss. Under ingen omstendigheter kan vi utlevere personlig informasjon uten ditt samtykke. Informasjonen kan bare brukes til å gi deg gode råd for å endre eller se på alternativer til forsikring. Bare jeg som selger kan se informasjonen din. Det blir deretter slettet fra systemene våre automatisk.',
  'How do I know it is safe to use?': 'Hvordan vet jeg at det er trygt å bruke?',
  'By logging in to your insurance company with your username and password, we ensure that only you give us access to your insurance information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.':
    'Ved å logge på ditt forsikringsselskap med BankID, sørger vi for at bare du gir oss tilgang til forsikringsinformasjonen din. Vi håndterer selvfølgelig personopplysninger i henhold til GDPR og er ansvarlige for personopplysninger i samsvar med personopplysningsloven. Vi bruker også kryptering og har bygget en databaseinfrastruktur som er sikker mot inntrenging. Du kan når som helst be oss om å slette informasjonen din.',
  'I am unsure about signing with BankID at the request of someone else?':
    'Jeg er usikker på å signere med BankID på forespørsel fra noen andre?',
  'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your social security number yourself. You choose which company you collect information from, and log in to them for security reasons. We can not do anything with your insurance, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.':
    'Det er helt trygt å bruke denne tjenesten hos oss. Koblingen vi sender til deg er på nettstedet vårt, og du skriver inn personnummeret ditt selv. Du velger hvilket firma du samler inn informasjon fra, og logger deg på dem av sikkerhetsmessige årsaker. Vi kan heller ikke gjøre noe med forsikringen din, men teknisk sett bare lese informasjon. Vi er et seriøst selskap under tilsyn av det svenske finanstilsynet og har mange kunder.',
  'What information do you collect?': 'Hvilken informasjon samler du inn?',
  'We collect all the information we need to be able to give you a good offer. Today we collect information about your insurances at the company you have chosen, such as: name, insurance amount, insured object, union membership, price, discounts.':
    'Vi samler all informasjon vi trenger for å kunne gi deg et godt tilbud. I dag samler vi inn informasjon om forsikringene dine i selskapet du har valgt, for eksempel: navn, forsikringsbeløp, forsikringsobjekt, fagforeningsmedlemskap, pris, rabatter.',
  'Who are Insurely?': 'Hvem er Insurely?',
  'Insurely is a supplier of technology that enables the collection of insurance information from a selected insurance company. You can read more about Insurely at insurely.com.':
    'Insurely er en leverandør av teknologi som muliggjør innsamling av forsikringsinformasjon fra et valgt forsikringsselskap. Du kan lese mer om Insurely på insurely.se.',

  // FAQ Pension
  'We help you compare your pension with an offer from us. With user name and password, you identify yourself with your pension company via us and we collect your pension data. Then we can, for 30 days, use it as a basis for an offer.':
    'Vi hjelper deg å sammenligne pensjonen din med et tilbud fra oss. Med brukernavn og passord identifiserer du deg med ditt pensjonsselskap via oss og vi samler inn dine pensjonsdata. Da kan vi i 30 dager bruke det som grunnlag for et tilbud.',
  'Confidentiality and handling of personal data are important issues for us. Under no circumstances can we disclose personal information without your consent. The information may only be used to give you good advice for changing or looking at alternatives to pension. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.':
    'Konfidensialitet og håndtering av personopplysninger er viktige spørsmål for oss. Under ingen omstendigheter kan vi avsløre personlig informasjon uten ditt samtykke. Informasjonen kan kun brukes til å gi deg gode råd for å endre eller se på alternativer til pensjon. Bare jeg, som selger, kan se informasjonen din. Den slettes da automatisk fra systemene våre.',
  'By logging in to your pension company with your username and password, we ensure that only you give us access to your pension information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.':
    'Ved å logge inn i ditt pensjonsselskap med brukernavn og passord sikrer vi at det kun er du som gir oss tilgang til pensjonsopplysningene dine. Vi håndterer selvfølgelig personopplysninger i henhold til GDPR og er personopplysningsansvarlige i henhold til personopplysningsloven. Vi bruker også kryptering og har bygget en databaseinfrastruktur som er sikret mot inntrenging. Du kan be oss om å slette informasjonen din når som helst.',
  'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your social security number yourself. You choose which company you collect information from, and log in to them for security reasons. We can not do anything with your pension, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.':
    'Det er helt trygt å bruke denne tjenesten hos oss. Lenken vi sender ut til deg ligger på nettsiden vår, og du oppgir personnummeret ditt selv. Du velger selv hvilket selskap du samler inn informasjon fra, og logger på dem av sikkerhetsmessige årsaker. Vi kan ikke gjøre noe med pensjonen din, men teknisk sett bare lese informasjon. Vi er et seriøst selskap under tilsyn av det svenske finanstilsynet og har mange kunder.',
  'Insurely is a supplier of technology that enables the collection of pension information from a selected pension company. You can read more about Insurely at insurely.com.':
    'Insurely er en leverandør av teknologi som muliggjør innsamling av pensjonsinformasjon fra et utvalgt pensjonsselskap. Du kan lese mer om Insurely på insurely.com.',
  'We collect all the information we need to be able to give you a good offer. Today we collect information about your pensions at the company you have chosen, such as: name, pension type, total amount, fund holdings, and if it is movable.':
    'Vi samler inn all informasjon vi trenger for å kunne gi deg et godt tilbud. I dag samler vi inn informasjon om pensjonene dine hos selskapet du har valgt, som: navn, pensjonstype, totalbeløp, fondsbeholdning og om den er flyttbar.',

  // Old version info bar
  'You are using an old version and need to do a "hard" reload of the page to load the latest version.':
    'Du bruker en gammel versjon og må laste siden på nytt for å laste inn den nyeste versjonen.',
  'Read more here': 'Les mer her',
  'You need to do a hard reload': 'Du må laste siden på nytt',
  'You are still using an old, cached version and need to do whats called a hard reload of the page to load the latest version. This is how you do it:':
    'Du bruker en gammel cachad versjon og må laste siden på nytt for å laste inn den nyeste versjonen. Dette gjøres på følgende måte:',
  'Mac:': 'Mac:',
  'Chrome/Firefox: press': 'Chrome/Firefox: trykk ',
  command: 'command ',
  and: 'og ',
  shift: 'shift ',
  'and then press': 'og trykk ',
  R: 'R',
  'Safari: press': 'Safari: trykk ',
  option: 'option ',
  'Windows:': 'Windows:',
  Press: 'Trykk ',
  Ctrl: 'Ctrl ',
  F5: 'F5',

  // Error Fallback
  'The page crashed, possible reasons could be:': 'Siden krasjet, mulige årsaker:',
  '1. You need to make a "hard" reload': '1. Du må laste siden på nytt',
  'Sometimes you have an old, cached version of Insights and need to do whats called a "hard" reload. You do it like this:':
    'Ofte har du en gammel cachad versjon av Insights og må laste siden på nytt. Du gjør dette på følgende måte:',
  '2. Something went wrong': '2. Noe gikk galt',
  'We have recived an error message and can be sure that we are working on a solution.':
    'Vi har fått en feilmelding og kan være sikker på at vi arbeider på et løsning.',
  'You can always e-mail us on': 'Du kan alltid e-poste oss på ',
  'if you have any questions.': ' hvis du har noen spørsmål.',
};

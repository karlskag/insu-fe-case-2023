/* eslint-disable max-lines */
import { MessageKeys } from './types';

export const messages: Record<MessageKeys, string> = {
  // General
  'All selected': 'Alle valgt',
  'Cell phone number': 'Mobilnummer',
  'E-mail': 'E-mail',
  'Go back': 'Tilbage',
  'Manual link': 'Manuelt link',
  'No insurances': 'Ingen forsikringer',
  'Phone number': 'Telefonnummer',
  'Please enter a cell phone number.': 'Indtast venligst et mobilnummer.',
  'Please enter a valid cell phone number.': 'Indtast venligst et gyldigt mobilnummer.',
  'Postal code': 'Postnummer',
  'Show less': 'Vis mindre',
  'Show more': 'Vis mere',
  'Try again': 'Prøv igen',
  'We are sorry, something went wrong.': 'Vi beklager, noget gik galt.',
  'amount/month': '{amount}/måned',
  'amount/year': '{amount}/år',
  '{amount} selected (singular)': '{amount} valgt',
  '{amount} selected': '{amount} valgt',
  Active: 'Aktiv',
  Cancel: 'Annuller',
  City: 'Stad',
  Close: 'Tæt',
  Company: 'Selskab',
  Copied: 'Kopieret',
  Copy: 'Kopiér',
  Insurance: 'Forsikring',
  Insurances: 'Forsikringer',
  Name: 'Navn',
  Ok: 'Ok',
  Okay: 'Okay',
  Reload: 'Genindlæs',
  To: 'Til',
  Today: 'Idag',
  currency: 'dkk',

  // Login/register generals
  'Sign in': 'Log ind',
  'Sign in with email': 'Log ind med e-mailadresse',
  'Create account': 'Opret konto',
  Password: 'Adgangskode',
  'Repeat password': 'Gentag adgangskode',
  'Please repeat password': 'Gentag venligst adgangskoden',
  'Done!': 'Færdig!',
  'Minimum 8 characters': 'Minimum 8 tegn',
  'Email needs to be at least 5 characters': 'E-mailadressen skal være på mindst 5 tegn',

  // Login
  'Sign in with username and password': 'Log ind med brugernavn og adgangskode',
  'Sign in with your email': 'Log ind med din e-mail',
  'Forgot password?': 'Glemt adgangskode?',
  'Your account is not enabled yet.': 'Din konto er ikke aktiveret endnu.',
  'We just sent you an email to {email}. Click the link to sign in':
    'Vi har lige sendt dig en e-mail til {email}. Klik på linket for at logge ind.',
  'Enter your email and sign in by clicking on the link that is sent to your inbox':
    'Indtast din e-mail og log ind ved at klikke på linket, der sendes til din indbakke.',

  // Register
  'To sign up you need to have an ongoing cooperation with Insurely and use your corporate email.':
    'For at oprette en konto skal du have en pågående samarbejdsaftale med Insurely og bruge din virksomhedsemail.',
  'Your request to access is being processed!': 'Din anmodning om adgang er under behandling!',
  'We will email you when your account has been activated.':
    'Vi sender dig en e-mail, når din konto er blevet aktiveret.',
  'Please enter a valid email': 'Indtast en gyldig e-mail',
  'Please enter a password': 'Indtast en adgangskode',
  'The password need to be at least 8 characters': 'Adgangskoden skal være mindst 8 tegn',
  'The passwords needs to match': 'Adgangskoderne skal matche',
  'Check your inbox': 'Se i din indbakke!',
  'We are signing you in': 'Vi logger dig ind',
  'We just sent you an email to {email}. Follow the instructions in the email to create your account':
    'Vi har lige sendt dig en e-mail til {email}. Følg instruktionerne i e-mailen for at oprette din konto.',

  // Enable account
  'Your account is now ready': 'Din konto er nu klar',
  'To overview': 'Til oversigt',
  'Validating account': 'Validerer konto',
  'Login and signing with QR code': 'Log ind og underskriv med QR-kode',
  'Some companies only allow identification with BankID via QR code. It confirms that you are physically present at both devices, reducing the risk of fraud.':
    'Nogle virksomheder tillader kun identifikation med BankID via QR-kode. Det bekræfter, at du er fysisk til stede ved begge enheder, hvilket reducerer risikoen for svindel.',
  'Ask the customer to retrieve their insurance from a device other than the one used for BankID.':
    'Bed kunden om at hente sin forsikring fra en anden enhed end den, der er brugt til BankID.',
  'I understand': 'Jeg forstår',
  'BankID on another device': 'BankID på en anden enhed',

  // Forgot password
  'Reset password': 'Reset password',
  'Input you email address. You will then get an email with a link back to this page where you can set a new password.':
    'Input you email address. You will then get an email with a link back to this page where you can set a new password.',
  'Send reset password email': 'Send reset password email',
  'New password': 'Ny adgangskode',
  'Repeat new password': 'Gentag ny adgangskode',
  'Set new password': 'Set new password',
  'Save new password': 'Save new password',
  'We just sent you an email to {email}. Follow the instructions in the email to reset your password':
    'We just sent you an email to {email}. Follow the instructions in the email to reset your password.',
  'Your password is now saved': 'Your password is now saved',

  // Navigation
  Overview: 'Oversigt',
  Sessions: 'Sessioner',
  Cancellations: 'Afskedigelser',
  Collections: 'Genfindelser',
  Analytics: 'Analyser',
  'Log out': 'Log ud',
  FAQ: 'FAQ',
  Contact: 'Kontakt',

  // Overview
  'Insurance companies and status': 'Forsikringsselskaber og status',
  'Welcome to {SST}': 'Velkommen til {SST}',
  'This is a support tool for insurance advice...':
    'Dette er et supportværktøj til forsikringsrådgivning. Alle data er baseret på automatiske opgørelser, hvilket betyder, at der kan forekomme fejl i enkelte tilfælde. Som forsikringsagent er du ansvarlig for at sikre, at det, der sies og kommunikeres til en kunde, er korrekt',
  'For more information see the FAQ. You can also contact us in the chat bubble in the right corner and we will help you.':
    'For mere information se FAQ. Du kan også kontakte os i chatboblen i højre hjørne, og vi vil hjælpe dig.',
  'Below you see the status of all insurance companies that we currently support.':
    'Nedenfor kan du se status for alle forsikringsselskaber, som vi i øjeblikket understøtter.',
  'Temporarily down': 'Midlertidigt nede',
  'Available integrations': 'Tilgængelige integrationer',
  'Temporarily closed': 'Midlertidigt lukket',
  'Not implemented': 'Ikke implementeret',

  // Sessions
  'Create new session': 'Skapa ny session',
  'First and last name': 'For-og efternavn',
  'Create session': 'Opret session',
  'Session created': 'Session oprettet',
  'Session id': 'Session id',
  'Session link': 'Sessionalänk',
  'Go to session page': 'Gå til sidesiden',
  Yesterday: 'I går',
  'Ok, back to list': 'Ok, tilbage til listen',
  'Please enter a name': 'Indtast venligst et navn',
  'Could not find the session': 'Kunne ikke finde sessionen.',

  // Session
  'Collections from the user': 'Samling fra brugeren',
  Date: 'Dato',
  'Session id: ': 'Session id',
  'Session link: ': 'Sessionalänk',
  'Create text message': 'Opret SMS med link',
  'Send new SMS': 'Send ny SMS',
  'Send SMS with link for collection': 'Send SMS med link til afhentning',
  'Send SMS': 'Send SMS',
  "Enter the customer's phone number to send an SMS with a link to retrieve the customer's existing {data}.":
    'Indtast kundens telefonnummer for at sende en SMS med et link for at hente kundens eksisterende {data}.',
  'Status of power of attorney': 'Fuldmagtens status',
  'Active termination powers of attorney for the user': 'Aktive opsigelsesfuldmagter for brugeren',
  'Status log for collections': 'Statuslog for hentninger',
  'Send text message for data collection': 'Send SMS med link til afhentning',
  'SMS was sent to {number}, {date}': 'SMS blev sendt til {number}, {date}',
  'The customer approves receiving the link via SMS':
    'Kunden giver samtykke til at modtage linket via SMS',
  'The customer must approve receiving the link via SMS':
    'Kunden skal give samtykke til at modtage linket via SMS',
  'Send link': 'Send link',
  'SMS sent': 'SMS sendt',
  'SMS sending': 'SMS sendes',
  'SMS has been sent': 'SMS er blevet sendt',
  'Could not be delivered': 'Kunne ikke leveres',
  'Failed to send SMS': 'Kunne ikke sende SMS',
  "Couldn't send SMS because the number doesn't exist. Please try again with a different number.":
    'Kunne ikke sende SMS, fordi nummeret ikke eksisterer. Prøv igen med et andet nummer.',
  'Sent invitations': 'Sendte invitationer',
  'It seems that something went wrong when we were going to send the collect SMS to the customer. Try again in a little while.':
    'Det ser ud til, at noget gik galt, da vi skulle sende hent SMS til kunden. Prøv igen om lidt.',
  'Delete user': 'Slet bruger',
  'Are you sure you want to delete the session?': 'Er du sikker på, at du vil slette sessionen?',
  'All insurance data in this session will disappear from the Sales Support Tool.':
    'Alle forsikringsdata i sessionen forsvinder fra salgssupportværktøjet.',
  Remove: 'Fjerne',
  'Nothing to see here': 'Intet at se her',
  'This user has not collected any insurances yet.':
    'Brugeren har ikke indsamlet nogen data endnu.',
  Events: 'Hændelse',
  'No events to display': 'Ingen Hændelse at vise',
  'Show information': 'Vis oplysninger',
  'Hide information': 'Skjul oplysninger',
  'Delete the session': 'Slet sessionen',

  // Insurance card
  'Employer paid': 'Arbejderne betalte',
  'Expired {date}': 'Gik ud {date}',
  'Active from {date}': 'Aktiv fra {date}',
  'Renewal date {date}': 'Fornyelsesdato {date}',
  'Will soon be active': 'Snart aktiv',
  'Will expire soon': 'Går snart ud',
  'Has expired': 'Er udløbet',
  'Other insurance holder': 'Anden forsikringsindehaver',
  'Total:': 'Total: ',

  // Insurance Listing
  'Home insurances': 'Hjemforsikring',
  'Vehicle insurances': 'Køretøjsforsikring',
  'Person insurances': 'Personlig forsikring',
  'Animal insurances': 'Dyreforsikring',
  'Other insurances': 'Anden forsikring',
  Collected: 'Indsamlet',
  at: 'kl',

  // Insurance Page
  Coverage: 'Utstrekning',
  'Termination power of attorney': 'Fullmagt til opsigelse',
  'Download insurance data': 'Hent forsikringsdata',
  'Download insurance policy document': 'Download insurance policy document',
  'Policy letter': 'Policy letter',
  Export: 'Eksport ',
  'Create a power of attorney for termination': 'Opret en fuldmagt til opsigelse',
  'This insurance has another insurance holder': 'Denne forsikring har en anden forsikringstager',
  'Customer email': 'Kundemail',
  Create: 'Skab',
  'Insurance details': 'Forsikringsdetaljer',
  'Cancel Insurance': 'Opsig forsikring',
  'That means the insurance cannot be cancelled': 'Det betyder, at forsikringen ikke kan opsiges',
  'Something unexpected happened, please try again': 'Der skete noget uventet. Prøv venligst igen',

  // Insurance Details
  '({number})%': '({number})%',
  '{mileage}km/year': '{mileage}km/år',
  'Annual premium': 'Årlige omkostninger',
  'Adults in home': 'Vuxna i boendet',
  'Bike cover limit': 'Cykelskyddsgräns',
  'Children in home': 'Barn i boendet',
  'Claims free years': 'Skadefri år',
  'Claims last five years': 'Skader varer fem år',
  'Construction years': 'Byggnadsår',
  'Contract period': 'Kontraktperiode',
  'Date of birth': 'Fødselsdato',
  'Death compensation': 'Dødserstatning',
  'Debit card': 'Kontokort',
  'Employer or union paid': 'Betalt af arbejdsgivere eller fagforeninger',
  'Employment status': 'Ansettelsesstatus',
  'Flooded last ten years': 'Oversvømmet sidste ti år',
  'Insurance amount economic disability': 'Forsikringsbeløb økonomisk udfordring',
  'Insurance amount medical disability': 'Forsikringsbeløb sygdom',
  'Insurance amount personal property': 'Forsikringsbeløb personlige ejendele',
  'Insurance amount': 'Forsikringsbeløb',
  'Insurance company': 'Forsikringsselskab',
  'Pension company': 'Pensionsselskab',
  'Insurance holder': 'Forsikringstager',
  'Insurance name': 'Forsikringsnavn',
  'Insurance number': 'Forsikringsnummer',
  'Insurance object address': 'Objektets adresse',
  'Insurance object city': 'Objektets postadresse',
  'Insurance object postal code': 'Objektets postnummer',
  'Insurance object property code': 'Ejendomsbetegnelse',
  'Joint policy holder': 'Gemensam försäkringstagare',
  'Listed property': 'Listed property',
  'Living area': 'Erstatte',
  'Max mileage': 'Kilometertal',
  'Maximum compensation medical disability': 'Maksimal erstatning for sygdom',
  'Monthly premium': 'Månedlige omkostninger',
  'Number of bathrooms': 'Number of bathrooms',
  'Number of bedrooms': 'Antal soveværelser',
  'Number of claims last 3 years': 'Antal ärenden senaste tre åren',
  'Number of residents': 'Antal boende',
  'Owner status': 'Ägandestatus',
  'Payment frequency': 'Betalingsfrekvens',
  'Payment method': 'Betalingsmetode',
  'Personal possessions limit': 'Gräns för personliga ägodelar',
  'Professional use': 'Används i arbete',
  'Property built year': 'Fastighet byggd år',
  'Registration number': 'Registreringsnummer',
  'Renewal amount': 'Fornyelse kost',
  'Renewal date': 'Fornyelsesdato',
  'Start date': 'Start dato',
  'Subsidence last ten years': 'Nedsynkning sidste ti år',
  'Type of property': 'Type of property',
  'Unoccupied for more than thirty days': 'Ubesat i mere end tredive dage',
  'Veterinary care': 'Veterinærvård',
  Addons: 'Tilføjelse',
  AUTOGIRO: 'Autogiro',
  BI_YEARLY_PREMIUM_FREQUENCY: 'Halvår',
  Cost: 'Koste',
  CREDIT_CARD: 'Kreditkort',
  Discount: 'Rabat',
  ELECTRONIC_INVOICE: 'Elektronisk faktura',
  EMPLOYER_PAID: 'Betalt af arbejdsgivere eller fagforeninger',
  GENERIC_INVOICE: 'Faktura',
  Model: 'Model',
  MONTHLY_PREMIUM_FREQUENCY: 'Måned',
  Occupation: 'Yrke',
  ONE_TIME_PAYMENT: 'Engangsbetaling',
  PAPER_INVOICE: 'Pappersfaktura',
  QUARTERLY_PREMIUM_FREQUENCY: 'Kvarter',
  UNDEFINED: 'Ukendt',
  UNKNOWN_PREMIUM_FREQUENCY: 'Ukendt',
  YEARLY_PREMIUM_FREQUENCY: 'År',

  // Insurance Parameters
  Extent: 'Grad',
  'Comparing with': 'Sammenlign med',
  Comparison: 'Forsikring sammenligning',
  Compare: 'Sammenligne',
  'What does the insurance cover?': 'Hvad dækker forsikringen?',
  'At the moment, we do not fully support this type of insurance, which means that there is no information on the scope.':
    'På nuværende tidspunkt understøtter vi ikke fuldt ud denne type forsikring, hvilket betyder, at der ikke er nogen information om omfanget.',
  'The scope is based on the latest terms and conditions version':
    'Omfanget er baseret på den seneste version af vilkår og betingelser',
  'Complete insurance terms': 'Komplette forsikringsbetingelser',
  'Insurance terms does not support test environment':
    'Forsikringsbetingelser understøtter ikke test environment',
  'There is no insurance to compare with': 'Der er ingen forsikring at sammenligne med',
  'Insurance terms link': 'Se vilkårene her',
  'Information not available': 'Oplysninger ikke tilgængelige',
  'Included in the insurance': 'Inkluderet i forsikringen',
  'Not included in the insurance': 'Ikke inkluderet i forsikringen',

  // Cancellation
  'Power of attorney for cancellation': 'Fuldmagt til opsigelse',
  'Create a power of attorney for cancellation to be able to cancel the customers current insurens.':
    'Opret en fuldmagt til opsigelse for at kunne opsige kundens nuværende forsikring.',
  'Chose how to send the power of attorney': 'Vælg, hvordan du sender fuldmagten',
  'Personal number': 'Personnummer',
  'New insurance number (optional)': 'Nyt forsikringsnummer (valgfrit)',
  'Enter the new insurance number to be able to follow the customer journey more easily. The number is for internal use only and does not appear in the power of attorney.':
    'Indtast det nye forsikringsnummer for at kunne følge kunderejsen mere nemt. Nummeret er kun til intern brug og vises ikke i fuldmagten.',
  'Termination date': 'Opsigelsesdato',
  "The insurance's binding period is until {date}":
    'Forsikringens bindende periode er indtil {date}.',
  'Unfortunately we could not find the binding period. Please ask the customer to find the correct date the the power of attorney does not risk being canceled':
    'Desværre kunne vi ikke finde bindende periode. Spørg kunden om at finde den korrekte dato, så fuldmagten ikke risikerer at blive annulleret.',
  'The termination date is before the binding period. This can cause the insurance company to decline the cancellation':
    'Opsigelsesdatoen er før bindende periode. Dette kan få forsikringsselskabet til at afvise opsigelsen.',
  'The termination date is after the binding period. This can cause the insurance company to decline the cancellation':
    'Opsigelsesdatoen er efter bindende periode. Dette kan få forsikringsselskabet til at afvise opsigelsen.',
  'Send power of attorney': 'Send fuldmagt',
  'Create power of attorney': 'Opret fuldmagt',
  'Create new power of attorney': 'Opret ny fuldmagt',
  'Send reminder': 'Send påmindelse',
  'Waiting for signature': 'Venter på underskrift',
  Signed: 'Underskrevet',
  Deleted: 'Slettet',
  'Not delivered': 'Ikke leveret',
  Rejected: 'Afvist',
  'Timed out': 'Udløbet',
  'Download manual power of attorney': 'Hent manuel fuldmagt',
  'Download power of attorney': 'Hent fuldmagt',
  'Delete power of attorney': 'Slet fuldmagt',
  'Power of attorney sent.': 'Fuldmagt sendt.',
  'Reminder sent.': 'Påmindelse sendt.',
  'Copy the link and send manually': 'Kopier linket og send det manuelt',
  'After you have clicked on "Create power of attorney" a link will appear that you can send to the customer manually.':
    'Efter du har klikket på "Opret fuldmagt" kommer der et link op, som du manuelt kan sende til kunden.',
  'Does the customer not get the power of attorney': 'Får kunden ikke fuldmagten?',
  'If the customer has not received the power of attorney, it may be because the wrong email or mobile number has been entered, or due to technical reasons.':
    'Hvis kunden ikke har modtaget fuldmagten, kan det skyldes, at der er indtastet forkert e-mail eller mobilnummer, eller på grund af tekniske årsager.',
  'Delete the existing authorization and create a new one. If you want to send the power of attorney from another system, select "Manual link" as the way to send the power of attorney.':
    'Slet den eksisterende godkendelse og opret en ny. Ønsker du at sende fuldmagten fra et andet system, skal du vælge "Manuelt link" som måde at sende fuldmagten på.',
  'No status yet': 'Ingen status endnu',
  'will be updated when the power of attorney is signed or declined.':
    '- vil blive opdateret, når fuldmagten er underskrevet eller afslået.',
  'The power of attorney was sent manually': 'Fuldmagten blev sendt manuelt',
  'Please enter an e-mail.': 'Indtast venligst en e-mail.',
  'Please enter a valid e-mail': 'Indtast venligst en gyldig e-mail',
  'Please enter a personal number.': 'Indtast venligst et personnummer.',
  'Please enter a valid personal number.': 'Indtast venligst et gyldigt personnummer.',
  'Please enter a new insurance number.': 'Indtast venligst et nyt forsikringsnummer.',
  'To change or delete a power of attorney': 'For at ændre eller slette en fuldmagt',
  'If you want to change a sent power of attorney, you need to delete the existing one. The power of attorney then becomes invalid, and you can create and send a new power of attorney to the customer. You delete the power of attorney by clicking on the three dots in the right corner, and then selecting "Delete power of attorney".':
    'Hvis du vil ændre en afsendt fuldmagt, skal du slette den eksisterende. Fuldmagten bliver så ugyldig, og du kan oprette og sende en ny fuldmagt til kunden. Du sletter fuldmagten ved at klikke på de tre prikker i højre hjørne, og derefter vælge "Slet fuldmagt". Bemærk, at fuldmagten kun kan slettes, hvis den har status "afventer underskrift".',
  'Do you want to remind again?': 'Vil du sende påmindelse igen?',
  'You have sent a reminder once earlier today.':
    'Du har sendt en påmindelse en gang tidligere i dag.',
  'Do you want to delete the power of attorney?': 'Vil du slette fuldmagten?',
  'You will not be able to undo this action and the power of attorney will be invalid.':
    'Du kan ikke fortryde denne handling, og fuldmagten vil være ugyldig.',
  'Something went wrong when we were submitting the cancellation power of attorney to the customer. Please try again in a little while.':
    'Noget gik galt, da vi sendte fuldmagten til kunden. Prøv igen om et stykke tid.',
  'It seems like something went wrong when we sent the power of attorney to the customer. Please try again in a little while.':
    'Det ser ut som om noget gik galt når vi skulle sende uppsägningsfullmakten til kunden. Vennligst prøv igen om litt.',

  // Cancellation Event log
  History: 'Historie',
  'Power of attorney sent': 'Fuldmagt sendt',
  'Power of attorney created': 'Der er oprettet fuldmagt',
  'PoA reminder sent': 'Påmindelse sendt',
  'Power of attorney signed': 'Fuldmagt underskrevet',
  'Power of attorney cancelled': 'Fuldmagt slettet',
  'Power of attorney rejected': 'Fuldmagt afvist',
  Activity: 'Aktivitet',
  Unknown: 'Ukendt',

  // Cancellation list
  Search: 'Søg',
  "You haven't made any cancellations yet": 'Du har ikke foretaget nogen aflysninger endnu',
  'Binding period': 'Bindende periode',
  Status: 'Status',
  'New insurance number': 'Nyt forsikringsnummer',
  Created: 'Oprettet',
  'Case manager': 'Sagsbehandler',
  'Expired information': 'Udløbet information',

  // PENSION
  // Overview Pension
  'This is a support tool for pension advice...':
    'Dette er et støtteværktøj til pensionsrådgivning. Alle data er baseret på automatiske opkøb, hvilket betyder, at der kan være fejl i enkelte tilfælde. Som pensionsformidler er du ansvarlig for, at det, der bliver sagt og formidlet til en kunde, er korrekt',
  'Pension companies and status': 'Pensionsselskaber og status',
  'Below you see the status of all pension companies that we currently support.':
    'Nedenfor ser du status for alle pensionsselskaber, som vi i øjeblikket støtter.',

  // Sessions pension
  Pension: 'Pension',
  Pensions: 'Pensioner',
  'No pensions': 'Ingen pensioner',

  // Session Pension
  'This user has not collected any pensions yet.':
    'Denne bruger har endnu ikke optjent nogen pensioner.',
  'Total pension overview': 'Samlet pensionsoversigt',
  'Collected pensions': 'Opkrævede pensioner',
  Movable: 'Bevægelig',
  'Not movable': 'Ikke bevægelig',

  // Pension listing
  'Service pension': 'Servicepension',
  'Service pensions': 'Servicepensioner',

  'Total value': 'Total værdi',
  'Total amount paid': 'Samlet beløb betalt',
  'Total development since start': 'Samlet udvikling siden start',
  'Total average risk': 'Samlet gennemsnitlig risiko',
  'Cannot be moved': 'Kan ikke flyttes',
  'Can be moved': 'Kan flyttes',
  'Might be movable': 'Kan være flytbare',

  // Pension types
  COLLECTIVE_OCCUPATIONAL_PENSION: 'Overenskomstaftalt arbejdsmarkedspension',
  OCCUPATIONAL_PENSION: 'Arbejdsmarkedspension/Individuel arbejdsmarkedspension',
  PRIVATE_PENSION: 'Privat pensionsforsikring',
  CAPITAL_INSURANCE: 'Kapitalforsikring',
  IPS_PENSION: 'IPS',
  UNKNOWN_PENSION_TYPE: 'Ukendt',

  // Pension page
  'Download pension data': 'Hent pensionsdata',
  Traditional: 'Traditionel',
  'Total amount': 'Total beløb',
  'Fixed charge': 'Fast afgift',
  'Variable charge': 'Variabel afgift',
  'Development since start': 'Udvikling siden start',
  Employer: 'Arbejdsgiver',
  'Receives payments': 'Modtager betalinger',
  'Survivors protection': 'Beskyttelse af efterladte',
  'Fund holdings': 'Fondsbeholdning',
  'Fixed annual amount': 'Fast årligt beløb',
  'Moving fee': 'Flyttegebyr',
  Value: 'Værdi',
  Trustee: 'Tillidsmand',
  'Active payments': 'Aktive udbetalinger',
  'Active payouts': 'Aktiver udbetalinger',
  'Data not available': 'Data ikke tilgængelige',
  'Fund fee': 'Fondsgebyr',
  'It is uncertain whether this pension can be transferred, but unfortunately we cannot say exactly why':
    'Det er usikkert om denne pensjonen kan overføres, men vi kan dessverre ikke si nøyaktig hvorfor.',
  'The pension cannot be transferred. This is because there are still active payments from the employer.':
    'Pensionen kan ikke overføres. Det skyldes, at der stadig er aktive udbetalinger fra arbejdsgiveren.',
  'The pension cannot be transferred. It looks like a payout has been initiated.':
    'Pensionen kan ikke overføres. Det ser ud til, at en udbetaling er blevet iværksat.',
  'A traditional pension that was initiated before 2007 is not movable.':
    'En traditionel pension, der er igangsat før 2007, er ikke flytbar.',
  'The pension might be movable - the start date could not be found':
    'Pensionen kan være flytbar - startdatoen kunne ikke findes',
  'The pension might be movable - information about payment could not be found':
    'Pensionen kan være overdragelig - oplysninger om udbetalinger foreligger ikke',
  'We could not find whether the pension has active payments, which is needed, among other things, to know whether a pension is portable or not...':
    'Vi kunne ikke finde ud af, om pensionen har aktive udbetalinger, hvilket blandt andet er nødvendigt for at vide, om en pension er flytbar eller ej. Du kan spørge kunden, om de er gået på pension.',
  'The pension might be movable - information about payouts could not be found':
    'Pensionen kan være flytbar - information om udbetaling kunne ikke findes',
  'We could not find whether the pension has active payouts, which is needed, among other things, to know whether a pension is portable or not...':
    'Vi kunne ikke finde ud af, om pensionen har aktive udbetalinger, hvilket blandt andet er nødvendigt for at vide, om en pension er flytbar eller ej. Du kan spørge kunden, om de stadig arbejder for den arbejdsgiver, der varetager betalingerne.',
  'We could not find the start date, which is needed, among other things, to know whether a pension is portable or not...':
    'Vi kunne ikke finde startdatoen, som blandt andet er nødvendig for at vide, om en pension er flytbar eller ej. Du kan spørge kunden, hvornår de startede på arbejdspladsen, eller bede dem gå ind på minpension.se for at finde ud af årstallet. Hvis pensionen er startet senere end 2007, kan den flyttes.',
  No: 'Ingen',
  of: 'af',
  Yes: 'Ja',
  Maybe: 'Måske',
  'ISIN code': 'ISIN-kode',
  'Company number': 'Firmanummer',
  'Actual fees paid (previous year)': 'Faktisk betalte gebyrer (sidste år)',

  // Collection status
  running: 'Startede',
  login: 'Log ind',
  collecting: 'Indsamling ',
  completed: 'Fuldført',
  'completed partial': 'Delvist afsluttet',
  'completed empty': 'Fuldført men tom',
  failed: 'Mislykkedes',
  'user input': 'Slutbruger skal godkende vilkår',
  'waiting for authentication': 'Brugeren loggede ikke ind',

  // Event status
  'Authenticate to insurance company': 'Legitimer mod forsikringsselskaber',
  'Authenticate to pension company': 'Legitimer mod pensionsselskab',
  'Customer is logging in': 'Kunden logger ind',
  Contacting: 'Kontakter',
  Collecting: 'Henter',
  'No insurances found': 'Ingen forsikringer fundet',
  'No pensions found': 'Ingen pensioner fundet',
  'Technical issue': 'Teknisk problem',
  'The customer did not authenticate in time': 'Kunden identificerede sig ikke i tide',
  'Authentication was suspended': 'Identifikationen blev suspenderet',
  'Double authentication with BankID': 'Dobbelt identifikation med BankID',
  'Incorrect login details': 'Forkerte loginoplysninger',
  'The customer needs to create an account': 'Kunden skal oprette en konto',
  'Update contact information': 'Opdater kontaktoplysninger',

  // Event error title
  'SMS could not be delivered': 'SMS kunne ikke leveres',
  'We found {insurances} that are not displayed': 'Vi har fundet {insurances} der ikke er vist',
  'Some information is missing': 'Nogle oplysninger mangler',
  'We found no insurances': 'Vi fandt ingen forsikringer.',
  'Something went wrong when logging in to {company}':
    'Noget gik galt, da du loggede ind på {company}',
  'The collection could not be completed': 'Hentningen kunne ikke fuldføres',
  'The customer needs to update information': 'Kunden skal opdatere information',

  // Event error description
  'Something went wrong when we were going to deliver the SMS. Try sending again.':
    "Der gik noget galt, da vi skulle levere SMS'en. Prøv at sende igen.",
  'The customer has insurance that does not match the insurance categories you offer.':
    'Kunden har en forsikring, der ikke matcher de forsikringskategorier, du tilbyder.',
  'We could not get all the information belonging to the {data}.':
    'Vi kunne ikke få fat i alle de oplysninger, der hører til {data}.',
  'It looks like the customer has no {data} with {company}. Ask the customer to try another company.':
    'Det ser ud til, at kunden ikke har nogen {data} hos {company}. Bed kunden om at prøve et andet firma.',
  'This is due to a technical error, please ask the customer to try again. Email or write in the chat bubble to our support if the problem persists.':
    'Dette skyldes en teknisk fejl. Bed kunden venligst om at prøve igen. E-mail eller skriv i chatboblen til vores support, hvis problemet fortsætter.',
  'It took too long for the customer to identify with BankID. Ask the customer to try again and contact our support via email or the chat bubble on the bottom right if the problem persists.':
    'Det tog for lang tid for kunden at identificere sig med BankID. Bed kunden om at prøve igen og kontakt vores support via e-mail eller chatboblen nederst til højre, hvis problemet fortsætter.',
  'The customer canceled authentication with BankID. Ask the customer to try again if it was a mistake.':
    'Kunden har annulleret godkendelse med BankID. Bed kunden om at prøve igen, hvis det var en fejl.',
  'The customer has already started another authentication with BankID. Ask the customer to end the existing one and try again.':
    'Kunden har allerede startet endnu en godkendelse med BankID. Bed kunden om at afslutte den eksisterende og prøv igen.',
  'The customer has entered the wrong login details. Ask the customer to try again.':
    'Kunden har indtastet de forkerte loginoplysninger. Bed kunden om at prøve igen.',
  'The customer needs to create an account with {company} in order for us to retrieve the data. This is sometimes needed if they have never logged in with them before, even if the customer has insurance or a pension there.':
    'Kunden skal oprette en konto hos {company} for at vi kan hente dataene. Det er nogle gange nødvendigt, hvis de aldrig har logget ind hos dem før, selvom kunden har forsikring eller pension der.',
  "The insurance company requires the customer to update their contact details. Ask the customer to log in via the insurance company's app or website and answer the questions. Then start a new collection.":
    'Forsikringsselskabet kræver, at kunden opdaterer sine kontaktoplysninger. Bed kunden om at logge ind via forsikringsselskabets app eller hjemmeside og svar på spørgsmålene. Start derefter en ny hentning.',

  // Analytics
  'No data available for current seller on selected dates':
    'Ingen tilgængelige data for nuværende sælger på valgte datoer',
  'No. of sessions': 'Antal sessioner',
  'No. of collections': 'Antal hentninger',
  'No. of exports': 'Antal eksport',
  'Completed sessions': 'Afsluttede sessioner',
  'Sessions with at least one completed collection': 'Sessioner med mindst én afsluttet hentning',
  'Last week': 'Sidste uge',
  'Last month': 'Sidste måned',
  'Last quarter': 'Sidste kvarter',
  'Last six months': 'Sidste halvår',
  'This year': 'Dette år',
  'Since the beginning': 'Start derefter',
  Day: 'Dag',
  Week: 'Uge',
  Month: 'Måned',
  'Seller statistics': 'Sælgerstatistik',
  'Insurance companies': 'Forsikringsselskaber',
  Exports: 'Eksportør',
  'Sales Person': 'Sælger',
  Volume: 'Volumen',

  // Collections
  Collection: 'Samling',
  'Collection from': 'Samling fra',
  'Nothing to see here...': 'Intet at se her...',
  'Collections from Sales Opt': 'Samling fra Sales Opt',
  'Below are {policies} that have been collected without being linked to a specific session. For example, this could be through a campaign or a digital sales flow.':
    'Nedenfor er {policies}, der er blevet indsamlet uden at være knyttet til en bestemt session. Det kan for eksempel være gennem en kampagne eller et digitalt salgsflow.',
  'No collections matched your search...': 'Ingen søgninger matchede dine søgefiltre...',
  'We did not find any collections': 'Vi fandt ingen samlinger',
  "Try changing your search filters to find what you're looking for":
    'Prøv at ændre dine søgefiltre for at finde det, du leder efter',
  'No collections have been made yet': 'Der er endnu ikke foretaget indsamlinger',
  'When policies have been downloaded through your digital feed, they will be displayed here.':
    'Når politikker er blevet downloadet via dit digitale feed, vil de blive vist her.',
  'It seems something went wrong when we were going to pick up the insurances.':
    'Det ser ud til, at noget gik galt, da vi skulle hente forsikringerne.',
  'Not handled': 'Ikke håndteret ',
  'View more info': 'Vis info ',
  Contacted: 'Kontaktet ',
  Viewed: 'Set',
  'Not viewed': 'Ikke set ',
  'Show details': 'Vis detaljer',
  'Could not retrieve social security number': 'Kunne ikke hente personnummer',
  'Search for personal ID number / E-mail': 'Søg efter CPR-nummer',
  Client: 'Klient',
  All: 'Alle',
  From: 'Fra',
  Show: 'Vis',
  '{amount} per page': '{amount} per side',
  Newer: 'Nyere',
  Older: 'Ældre',
  'Load more': 'Indlæs mere',
  'Collection ID': 'Kollektions ID',
  Customer: 'Kunde',
  'Insurance policies': 'Forsikringer',
  'Collection date': 'Samlingensdato',
  Source: 'Kilde',
  'Contact status': 'Kontaktstatus',
  'Collection source': 'Samlingskilde',
  'Empty collections': 'Tomme samlinger',
  'Show empty collections': 'Vis tomme samlinger',
  'More filters': 'Flere filtre',
  'Less filters': 'Færre filtre',
  'Personal number or email': 'Personligt nummer eller e-mail',
  'Collection date range': 'Samlingsdatointerval',
  'Last {number} days': 'Sidste {number} dage',
  'Export collections': 'Eksporter samlinger',
  'are not displayed as they do not match the insurance categories you offer':
    'vises ikke, da de ikke matcher de forsikringskategorier, du tilbyder',

  // Support
  'Mail support': 'Send besked',
  'Hi! Write your question or feedback in the box below. We will return as soon as we can to the email address you registered with us.':
    'Hej! Skriv dit spørgsmål eller din feedback i feltet nedenfor. Vi vender tilbage så snart vi kan til den e-mail-adresse, du har registreret hos os.',
  'Write your message here': 'Skriv din besked her',
  'Send message': 'Send besked',
  'Your message has been sent': 'Din besked er blevet sendt',
  Address: 'Adresse',

  // FAQ insurance
  'This FAQ aims to give you as a salesperson or customer contact support in answering questions that may come from customers. It is a collection of the questions we have historically received and examples of suggested answers.':
    'Denne FAQ har til formål at give dig som sælger eller kundesupport til at besvare spørgsmål, der kan komme fra kunder. Det er en samling af de spørgsmål, vi historisk har modtaget, og eksempler på foreslåede svar.',
  'How does it work?': 'Hvordan virker det?',
  'We help you compare your insurance with an offer from us. With user name and password, you identify yourself with your insurance company via us and we collect your insurance data. Then we can, for 30 days, use it as a basis for an offer.':
    'Vi hjælper dig med at sammenligne din forsikring med et tilbud fra os. Med BankID identificerer du dig med dit forsikringsselskab via os, og vi indsamler dine forsikringsdata. Så kan vi i 30 dage bruge det som grundlag for et tilbud.',
  'What happens to my data?': 'Hvad sker der med mine data?',
  'Confidentiality and handling of personal data are important issues for us. Under no circumstances can we disclose personal information without your consent. The information may only be used to give you good advice for changing or looking at alternatives to insurance. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.':
    'Fortrolighed og håndtering af personlige data er vigtige spørgsmål for os. Vi må under ingen omstændigheder videregive personlige oplysninger uden dit samtykke. Oplysningerne kan kun bruges til at give dig gode råd til at ændre eller se på alternativer til forsikring. Kun jeg som sælger kan se dine oplysninger. Derefter slettes den automatisk fra vores systemer.',
  'How do I know it is safe to use?': 'Hvordan ved jeg, at det er sikkert at bruge?',
  'By logging in to your insurance company with your username and password, we ensure that only you give us access to your insurance information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.':
    'Ved at logge ind på dit forsikringsselskab med BankID sikrer vi, at kun du giver os adgang til dine forsikringsoplysninger. Vi håndterer naturligvis personoplysninger i henhold til GDPR og er ansvarlige for personoplysninger i overensstemmelse med persondataloven. Vi bruger også kryptering og har bygget en databaseinfrastruktur, der er sikker mod indbrud. Du kan når som helst bede os om at slette dine oplysninger.',
  'I am unsure about signing with BankID at the request of someone else?':
    'Jeg er usikker på at underskrive med BankID efter anmodning fra en anden?',
  'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your social security number yourself. You choose which company you collect information from, and log in to them for security reasons. We can not do anything with your insurance, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.':
    'Det er helt sikkert at bruge denne service hos os. Linket, vi sender til dig, er på vores websted, og du indtaster dit personnummer selv. Du vælger, hvilket firma du indsamler oplysninger fra, og logger ind på dem af sikkerhedsmæssige årsager. Vi kan heller ikke gøre noget med din forsikring, men kun teknisk set læse information. Vi er en seriøs virksomhed under tilsyn af den svenske finanstilsyn og har mange kunder.',
  'What information do you collect?': 'Hvilke oplysninger indsamler du?',
  'We collect all the information we need to be able to give you a good offer. Today we collect information about your insurances at the company you have chosen, such as: name, insurance amount, insured object, union membership, price, discounts.':
    'Vi indsamler alle de oplysninger, vi har brug for, for at kunne give dig et godt tilbud. I dag indsamler vi oplysninger om dine forsikringer i det firma, du har valgt, såsom: navn, forsikringsbeløb, forsikringsobjekt, fagforeningsmedlemskab, pris, rabatter.',
  'Who are Insurely?': 'Hvem er Insurely?',
  'Insurely is a supplier of technology that enables the collection of insurance information from a selected insurance company. You can read more about Insurely at insurely.com.':
    'Insurely er en leverandør af teknologi, der muliggør indsamling af forsikringsoplysninger fra et valgt forsikringsselskab. Du kan læse mere om Insurely på insurely.se.',

  // FAQ pension
  'We help you compare your pension with an offer from us. With user name and password, you identify yourself with your pension company via us and we collect your pension data. Then we can, for 30 days, use it as a basis for an offer.':
    'Vi hjælper dig med at sammenligne din pension med et tilbud fra os. Med brugernavn og adgangskode identificerer du dig med dit pensionsselskab via os, og vi indsamler dine pensionsdata. Så kan vi i 30 dage bruge det som grundlag for et tilbud.',
  'Confidentiality and handling of personal data are important issues for us. Under no circumstances can we disclose personal information without your consent. The information may only be used to give you good advice for changing or looking at alternatives to pension. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.':
    'Fortrolighed og håndtering af persondata er vigtige spørgsmål for os. Vi må under ingen omstændigheder videregive personlige oplysninger uden dit samtykke. Oplysningerne må kun bruges til at give dig gode råd til at skifte eller se på alternativer til pension. Kun jeg som sælger kan se dine oplysninger. Det slettes derefter automatisk fra vores systemer.',
  'By logging in to your pension company with your username and password, we ensure that only you give us access to your pension information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.':
    'Ved at logge ind på dit pensionsselskab med dit brugernavn og adgangskode sikrer vi, at det kun er dig, der giver os adgang til dine pensionsoplysninger. Vi håndterer naturligvis persondata i henhold til GDPR og er persondataansvarlige i henhold til persondataloven. Vi bruger også kryptering og har opbygget en databaseinfrastruktur, der er sikker mod indtrængen. Du kan til enhver tid bede os om at slette dine oplysninger.',
  'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your social security number yourself. You choose which company you collect information from, and log in to them for security reasons. We can not do anything with your pension, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.':
    'Det er helt sikkert at bruge denne service hos os. Det link, vi sender ud til dig, ligger på vores hjemmeside, og du indtaster selv dit cpr-nummer. Du vælger selv, hvilket firma du indsamler oplysninger fra, og logger på dem af sikkerhedsmæssige årsager. Vi kan ikke gøre noget ved din pension, men teknisk set kun læser information. Vi er en seriøs virksomhed under tilsyn af det svenske finanstilsyn og har mange kunder.',
  'Insurely is a supplier of technology that enables the collection of pension information from a selected pension company. You can read more about Insurely at insurely.com.':
    'Insurely er leverandør af teknologi, der muliggør indsamling af pensionsoplysninger fra et udvalgt pensionsselskab. Du kan læse mere om Insurely på insurely.com.',
  'We collect all the information we need to be able to give you a good offer. Today we collect information about your pensions at the company you have chosen, such as: name, pension type, total amount, fund holdings, and if it is movable.':
    'Vi indsamler alle de oplysninger, vi skal bruge for at kunne give dig et godt tilbud. I dag indsamler vi oplysninger om dine pensioner hos den virksomhed, du har valgt, såsom: navn, pensionstype, samlet beløb, fondsbeholdning og om den er flytbar.',

  // Old version info bar
  'You are using an old version and need to do a "hard" reload of the page to load the latest version.':
    'Du bruger en gammel version og skal genindlæse siden for at den nyeste version kan blive indlæst.',
  'Read more here': 'Læs mere her',
  'You need to do a hard reload': 'Du skal genindlæse siden',
  'You are still using an old, cached version and need to do whats called a hard reload of the page to load the latest version. This is how you do it:':
    'Du bruger en gammel cachad version og skal genindlæse siden for at den nyeste version kan blive indlæst. Dette gøres på følgende måde:',
  'Mac:': 'Mac:',
  'Chrome/Firefox: press': 'Chrome/Firefox: tryk ',
  command: 'command ',
  and: 'og ',
  shift: 'shift ',
  'and then press': 'og tryk ',
  R: 'R',
  'Safari: press': 'Safari: tryk ',
  option: 'option ',
  'Windows:': 'Windows:',
  Press: 'Tryk ',
  Ctrl: 'Ctrl ',
  F5: 'F5',

  // Error Fallback
  'The page crashed, possible reasons could be:': 'Siden crashed, mulige årsager er:',
  '1. You need to make a "hard" reload': '1. Du skal genindlæse siden',
  'Sometimes you have an old, cached version of Insights and need to do whats called a "hard" reload. You do it like this:':
    'Nogle gange har du en gammel, cachelagret version af Insights og skal gøre det, der kaldes en "hård" genindlæsning. Du gør det sådan her:',
  '2. Something went wrong': '2. Noget gik galt',
  'We have recived an error message and can be sure that we are working on a solution.':
    'Vi har fået en fejlmeddelelse og kan være sikker på at vi arbejder på et løsning.',
  'You can always e-mail us on': 'Du kan altid e-mail os på ',
  'if you have any questions.': ' hvis du har nogen spørgsmål.',
};

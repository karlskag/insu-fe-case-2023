/* eslint-disable max-lines */
import { MessageKeys } from './types';

export const messages: Record<MessageKeys, string> = {
  // General
  'All selected': 'Tout sélectionné',
  'Cell phone number': 'Numéro de téléphone portable',
  'E-mail': 'E-mail',
  'Go back': 'Retour',
  'Manual link': 'Lien manuel',
  'No insurances': "Pas d'assurances",
  'Phone number': 'Numéro de téléphone',
  'Please enter a cell phone number.': 'Veuillez entrer un numéro de téléphone portable.',
  'Please enter a valid cell phone number.':
    'Veuillez entrer un numéro de téléphone portable valide.',
  'Postal code': 'Code postal',
  'Show less': 'Montrer moins',
  'Show more': 'Montre plus',
  'Try again': 'Essayez à nouveau',
  'We are sorry, something went wrong.': 'Nous sommes désolés, il y a eu un problème.',
  'amount/month': '{amount}/mois',
  'amount/year': '{amount}/an',
  '{amount} selected (singular)': '{amount} sélectionné',
  '{amount} selected': '{amount} sélectionnés',
  Active: 'Actif',
  Cancel: 'Annuler',
  City: 'Ville',
  Close: 'Fermer',
  Company: 'Compagnie',
  Copied: 'Copié',
  Copy: 'Copier',
  Insurance: 'Assurance',
  Insurances: 'Assurances',
  Name: 'Nom',
  Ok: 'Ok',
  Okay: "D'accord",
  Reload: 'Recharger',
  To: 'À',
  Today: "Aujourd'hui",
  currency: 'EURO',

  // Login/register generals
  'Sign in': "S'identifier",
  'Sign in with email': "S'identifier avec l'adresse e-mail",
  'Create account': 'Créer un compte',
  Password: 'Mot de passe',
  'Repeat password': 'Répéter le mot de passe',
  'Please repeat password': 'Veuillez répéter le mot de passe',
  'Done!': 'Terminé!',
  'Minimum 8 characters': '8 caractères minimum',
  'Email needs to be at least 5 characters':
    "L'adresse e-mail doit comporter au moins 5 caractères",

  // Login
  'Sign in with username and password':
    "Se connecter avec un nom d'utilisateur et votre mot de passe",
  'Sign in with your email': 'Connectez-vous avec votre email',
  'Forgot password?': 'Mot de passe oublié?',
  'Your account is not enabled yet.': "Votre compte n'est pas encore activé.",
  'We just sent you an email to {email}. Click the link to sign in':
    'Nous venons de vous envoyer un e-mail à {email}. Cliquez sur le lien pour vous connecter.',
  'Enter your email and sign in by clicking on the link that is sent to your inbox':
    'Entrez votre email et connectez-vous en cliquant sur le lien qui est envoyé dans votre boîte de réception.',

  // Register
  'To sign up you need to have an ongoing cooperation with Insurely and use your corporate email.':
    "Pour vous inscrire, vous devez avoir une coopération en cours avec Insurely et utiliser l'adresse e-mail de votre entreprise.",
  'Your request to access is being processed!': "Votre demande d'accès est en cours de traitement!",
  'We will email you when your account has been activated.':
    'Nous vous enverrons un e-mail lorsque votre compte aura été activé.',
  'Please enter a valid email': 'Veuillez entrer une adresse e-mail valide',
  'Please enter a password': 'Veuillez saisir un mot de passe',
  'The password need to be at least 8 characters':
    'Le mot de passe doit comporter au moins 8 caractères',
  'The passwords needs to match': 'Les mots de passe doivent correspondre',
  'Check your inbox': 'Vérifiez votre boîte de réception!',
  'We are signing you in': 'Nous vous inscrivons',
  'We just sent you an email to {email}. Follow the instructions in the email to create your account':
    "Nous venons de vous envoyer un e-mail à {email}. Suivez les instructions dans l'e-mail pour créer votre compte.",

  // Enable account
  'Your account is now ready': 'Votre compte est maintenant prêt',
  'To overview': "Pour une vue d'ensemble",
  'Validating account': 'Valider le compte',
  'Login and signing with QR code': 'Connectez-vous et signez avec le code QR',
  'Some companies only allow identification with BankID via QR code. It confirms that you are physically present at both devices, reducing the risk of fraud.':
    "Certaines entreprises autorisent uniquement l'identification avec BankID via le code QR. Il confirme que vous êtes physiquement présent sur les deux appareils, réduisant ainsi le risque de fraude.",
  'Ask the customer to retrieve their insurance from a device other than the one used for BankID.':
    'Demandez au client de récupérer son assurance depuis un appareil autre que celui utilisé pour BankID.',
  'I understand': 'Je comprends',
  'BankID on another device': 'BankID sur un autre appareil',

  // Forgot password
  'Reset password': 'Réinitialiser le mot de passe',
  'Input you email address. You will then get an email with a link back to this page where you can set a new password.':
    'Saisir votre adresse e-mail. Vous recevrez ensuite un courriel contenant un lien vers cette page où vous pourrez définir un nouveau mot de passe.',
  'Send reset password email': "Envoyer l'email de réinitialisation du mot de passe",
  'New password': 'Nouveau mot de passe',
  'Repeat new password': 'Répété le nouveau mot de passe',
  'Set new password': 'Définir un nouveau mot de passe',
  'Save new password': 'Sauvegarder le nouveau mot de passe',
  'We just sent you an email to {email}. Follow the instructions in the email to reset your password':
    "Nous venons de vous envoyer un email à {email}. Suivre les instructions contenues dans l'e-mail pour réinitialiser votre mot de passe.",
  'Your password is now saved': 'Votre mot de passe est maintenant enregistré',

  // Navigation
  Overview: "Vue d'ensemble",
  Sessions: 'Sessions',
  Cancellations: 'Résiliations',
  Collections: 'Prélèvements',
  Analytics: 'Statistiques',
  'Log out': 'Se déconnecter',
  FAQ: 'FAQ',
  Contact: 'Contact',

  // Overview
  'Insurance companies and status': "Compagnies d'assurance et statut",
  'Welcome to {SST}': "Bienvenue sur le site d'SST",
  'This is a support tool for insurance advice...':
    "Il s'agit d'un outil d'aide au conseil en assurance. Toutes les données sont basées sur des saisies automatiques, ce qui signifie qu'il peut y avoir des erreurs dans certains cas. En tant qu'agent d'assurance, vous êtes responsable de l'exactitude de ce qui est dit et communiqué au client.",
  'For more information see the FAQ. You can also contact us in the chat bubble in the right corner and we will help you.':
    "Pour plus d'informations, vous pouvez consulter la FAQ. Vous pouvez également nous contacter dans la bulle de chat située dans le coin droit et nous vous aiderons.",
  'Below you see the status of all insurance companies that we currently support.':
    "Vous trouverez ci-dessous le statut de toutes les compagnies d'assurance que nous prenons actuellement en charge.",
  'Temporarily down': 'Temporairement hors service',
  'Available integrations': 'Intégrations disponibles',
  'Temporarily closed': 'Fermé temporairement',
  'Not implemented': 'Pas de mise en œuvre',
  'Create new session': 'Créer une nouvelle session',
  'First and last name': 'Nom et prénom',

  // Sessions
  'Create session': 'Créer une session',
  'Session created': 'Session créée',
  'Session id': 'Identifiant de la session',
  'Session link': 'lien vers la session',
  'Go to session page': 'Aller à la page de la session',
  Yesterday: 'Hier',
  'Ok, back to list': 'Ok, retour à la liste',
  'Please enter a name': 'Veuillez saisir un nom',
  'Could not find the session': 'Impossible de trouver la session.',

  // Session
  'Collections from the user': "Prélèvements de l'utilisateur",
  Date: 'Date',
  'Session id: ': 'Identifiant de la session',
  'Session link: ': 'Lien vers la session',
  'Create text message': 'Rédiger un SMS',
  'Send new SMS': 'Envoyer un nouveau SMS',
  'Send SMS with link for collection': 'Envoyer un SMS avec lien pour la collecte',
  'Send SMS': 'Envoyer un SMS',
  "Enter the customer's phone number to send an SMS with a link to retrieve the customer's existing {data}.":
    'Entrez le numéro de téléphone du client pour envoyer un SMS avec un lien pour récupérer les {data} existantes du client.',
  'Status of power of attorney': 'Statut de la procuration',
  'Active termination powers of attorney for the user':
    "Pouvoirs de résiliation actifs pour l'utilisateur",
  'Status log for collections': 'Journal des données collectées',
  'Send text message for data collection': 'Envoyer un SMS pour la collecte de données',
  'SMS was sent to {number}, {date}': 'SMS envoyé à {number}, {date}',
  'The customer approves receiving the link via SMS':
    'Le client accepte de recevoir le lien par SMS',
  'The customer must approve receiving the link via SMS':
    'Le client doit accepter de recevoir le lien par SMS',
  'Send link': 'Envoyer le lien',
  'SMS sent': 'SMS envoyé',
  'SMS sending': 'SMS est envoyé',
  'SMS has been sent': 'Le SMS a été envoyé',
  'Could not be delivered': "N'a pas pu être livré",
  'Failed to send SMS': 'Impossible d’envoyer le SMS',
  "Couldn't send SMS because the number doesn't exist. Please try again with a different number.":
    'Impossible d’envoyer le SMS car le numéro n’existe pas. Veuillez réessayer avec un autre numéro.',
  'Sent invitations': 'Envoyer les invitations',
  'It seems that something went wrong when we were going to send the collect SMS to the customer. Try again in a little while.':
    'Il semble que quelque chose ait mal tourné lorsque nous avons tenté d’envoyer le SMS de collecte au client. Réessayez dans un petit moment.',
  'Delete user': 'Supprimer un utilisateur',
  'Are you sure you want to delete the session?': 'Voulez-vous vraiment supprimer la session ?',
  'All insurance data in this session will disappear from the Sales Support Tool.':
    "Toutes les données d'assurance de la session disparaîtront d'Sales Support Tool.",
  Remove: 'Supprimer',
  'Nothing to see here': 'Rien à voir ici',
  'This user has not collected any insurances yet.':
    "Cet utilisateur n'a pas encore contracté d'assurance.",
  Events: 'Événements',
  'No events to display': 'Aucun événement à afficher',
  'Show information': "Montrer l'information",
  'Hide information': "Masquer l'information",
  'Delete the session': 'Supprimer la séance',

  // Insurance card
  'Employer paid': "Payé par l'employeur",
  'Expired {date}': 'Expiré {date}',
  'Active from {date}': 'Actif à partir de {date}',
  'Renewal date {date}': 'Date de renouvellement {date}',
  'Will soon be active': 'Sera bientôt actif',
  'Will expire soon': 'Expirera bientôt',
  'Has expired': 'A expiré',
  'Other insurance holder': "Autre titulaire d'une assurance",

  // Insurance Listing
  'Home insurances': 'Assurances habitation',
  'Vehicle insurances': 'Assurances des véhicules',
  'Person insurances': 'Assurances personnelles',
  'Animal insurances': 'Assurances pour animaux',
  'Other insurances': 'Autres assurances',
  'Total:': 'Total: ',
  Collected: 'Collecté',
  at: 'à',

  // Insurance Page
  Coverage: 'Garantie',
  'Termination power of attorney': 'Pouvoir de résiliation',
  'Download insurance data': "Téléchargement des données relatives à l'assurance",
  'Download insurance policy document': 'Download insurance policy document',
  'Policy letter': 'Policy letter',
  Export: 'Exporter ',
  'Create a power of attorney for termination': 'Créer une procédure de résiliation',
  'This insurance has another insurance holder': 'Cette assurance a un autre titulaire',
  'Customer email': 'E-mail du client',
  Create: 'Créer',
  'Insurance details': 'Détails de l’assurance',
  'Cancel Insurance': 'Annuler l’assurance',
  'That means the insurance cannot be cancelled':
    'Cela signifie que l’assurance ne peut pas être annulée',
  'Something unexpected happened, please try again':
    "Quelque chose d'inattendu s'est produit, veuillez réessayer",

  // Insurance Details
  '({number})%': '({nombre})%',
  '{mileage}km/year': '{mileage}km/an',
  'Adults in home': "Nombre d'adultes dans le foyer",
  'Annual premium': 'Prime annuelle',
  'Bike cover limit': 'Cykelskyddsgräns',
  'Children in home': "Nombre d'enfants dans le foyer",
  'Claims free years': 'Années sans réclamation',
  'Claims last five years': 'Les réclamations durent trois ans',
  'Construction years': 'Année de construction',
  'Contract period': 'Échéance du contrat',
  'Date of birth': 'Date de naissance',
  'Death compensation': 'Indemnité de décès',
  'Debit card': 'Carte de débit',
  'Employer or union paid': "Payé par l'employeur ou le syndic",
  'Employment status': 'Statut d´emploi',
  'Flooded last ten years': 'Inondé depuis dix ans',
  'Insurance amount economic disability': 'Montant de l’assurance invalidité économique',
  'Insurance amount medical disability': 'Montant de l’assurance invalidité médicale',
  'Insurance amount personal property': 'Montant de l’assurance pour les biens personnels',
  'Insurance amount': 'Montant de l’assurance',
  'Insurance company': "Compagnie d'assurance",
  'Pension company': 'Compagnie de retraite',
  'Insurance holder': "Titulaire de l'assurance",
  'Insurance name': "Nom de la compagnie d'assurance",
  'Insurance number': "Numéro d'assuré",
  'Insurance object address': 'l’adresse de l’objet',
  'Insurance object city': "Objet d'assurance ville",
  'Insurance object postal code': "Code postal de l'objet de l'assurance",
  'Insurance object property code': "Code de propriété de l'objet d'assurance",
  'Joint policy holder': 'Cotitulaire de la police',
  'Listed property': 'Listed property',
  'Living area': 'Surface totale',
  'Max mileage': 'Kilométrage maximum',
  'Maximum compensation medical disability': 'Indemnisation maximale en cas d’invalidité',
  'Monthly premium': 'Prime mensuelle',
  'Number of bathrooms': 'Nombre de salles de bain',
  'Number of bedrooms': 'Nombre de chambres',
  'Number of claims last 3 years': 'Nombre de sinistres au cours des 3 dernières années',
  'Number of residents': 'Nombre de résidents',
  'Owner status': 'Ägandestatus',
  'Payment frequency': 'Fréquence de paiement',
  'Payment method': 'Méthode de paiement',
  'Personal possessions limit': 'Gräns för personliga ägodelar',
  'Professional use': 'Usage professionnel',
  'Property built year': 'Fastighet byggd år',
  'Registration number': "Numéro d'enregistrement",
  'Renewal amount': 'Montant du renouvellement',
  'Renewal date': 'Date de renouvellement du contrat',
  'Start date': "Date d'entrée en vigueur",
  'Subsidence last ten years': 'Affaissement des dix dernières années',
  'Type of property': 'Type of property',
  'Unoccupied for more than thirty days': 'Inoccupé depuis plus de trente jours',
  'Veterinary care': 'Soins vétérinaires',
  AUTOGIRO: 'Autogire',
  Addons: 'Modules complémentaires',
  BI_YEARLY_PREMIUM_FREQUENCY: 'Bisannuelle',
  CREDIT_CARD: 'Carte de crédit',
  Cost: 'Coût',
  Discount: 'Remise',
  ELECTRONIC_INVOICE: 'Facture électronique',
  EMPLOYER_PAID: "Payé par l'emplyeur",
  GENERIC_INVOICE: 'Facture',
  MONTHLY_PREMIUM_FREQUENCY: 'Mensuelle',
  Model: 'Modèle',
  ONE_TIME_PAYMENT: 'Paiement en une seule fois',
  Occupation: 'Profession',
  PAPER_INVOICE: 'Facture papier',
  QUARTERLY_PREMIUM_FREQUENCY: 'Trimestrielle',
  UNDEFINED: 'Inconnu',
  UNKNOWN_PREMIUM_FREQUENCY: 'Inconnue',
  YEARLY_PREMIUM_FREQUENCY: 'Annuelle',

  // Insurance Parameters
  Extent: 'Garanties',
  'Comparing with': 'Comparer avec',
  Comparison: 'Comparaison',
  Compare: 'Comparer',
  'What does the insurance cover?': "Que couvre l'assurance ?",
  'At the moment, we do not fully support this type of insurance, which means that there is no information on the scope.':
    "Pour l'instant, nous ne proposons pas ce type d'assurance, ce qui signifie qu'il n'y a pas d'information à ce sujet.",
  'The scope is based on the latest terms and conditions version':
    "Le champ d'application est basé sur la dernière version des termes et conditions.",
  'Complete insurance terms': "Compléter les clauses de l'assurance",
  'Insurance terms does not support test environment':
    "les conditions d'assurance ne prennent pas en charge le test environment",
  'There is no insurance to compare with': "Il n'y a pas d'assurance à comparer avec",
  'Insurance terms link': "Lien vers les clauses de l'assurance",
  'Information not available': 'Information non disponible',
  'Included in the insurance': "Inclus dans l'assurance",
  'Not included in the insurance': "Exclus dans l'assurance",

  // Cancellation  TODO: Translate
  'Power of attorney for cancellation': 'Pouvoir de résiliation',
  'Create a power of attorney for cancellation to be able to cancel the customers current insurens.':
    'Créer un pouvoir de résiliation pour pouvoir résilier l’assurance actuelle du client.',
  'Chose how to send the power of attorney': 'Choisissez comment envoyer le pouvoir de résiliation',
  'Personal number': 'Numéro de personnel',
  'New insurance number (optional)': 'Nouveau numéro d’assuré (optionnel)',
  'Enter the new insurance number to be able to follow the customer journey more easily. The number is for internal use only and does not appear in the power of attorney.':
    'Entrez le nouveau numéro d’assuré pour pouvoir suivre le parcours du client plus facilement. Le numéro est uniquement utilisé à des fins internes et n’apparaît pas dans le pouvoir de résiliation.',
  'Termination date': 'Date de résiliation',
  "The insurance's binding period is until {date}":
    "La période de validité de l'assurance est jusqu'au {date}",
  'Unfortunately we could not find the binding period. Please ask the customer to find the correct date the the power of attorney does not risk being canceled':
    "Malheureusement, nous n'avons pas pu trouver la période de validité. Demandez au client de trouver la bonne date pour que le pouvoir de résiliation ne soit pas annulé",
  'The termination date is before the binding period. This can cause the insurance company to decline the cancellation':
    "La date de résiliation est antérieure à la période de validité. Cela peut entraîner le refus de la compagnie d'assurance de résilier l'assurance",
  'The termination date is after the binding period. This can cause the insurance company to decline the cancellation':
    "La date de résiliation est postérieure à la période de validité. Cela peut entraîner le refus de la compagnie d'assurance de résilier l'assurance",
  'Send power of attorney': 'Envoyer le pouvoir de résiliation',
  'Create power of attorney': 'Créer une procuration',
  'Create new power of attorney': 'Créer un nouveau pouvoir de résiliation',
  'Send reminder': 'Envoyer un rappel',
  'Waiting for signature': 'En attente de signature',
  Signed: 'Signé',
  Deleted: 'Supprimé',
  'Not delivered': 'Non livré',
  Rejected: 'Rejeté',
  'Timed out': 'Expiré',
  'Download manual power of attorney': 'Télécharger le pouvoir de résiliation manuel',
  'Download power of attorney': 'Télécharger le pouvoir de résiliation',
  'Delete power of attorney': 'Supprimer le pouvoir de résiliation',
  'Power of attorney sent.': 'Pouvoir de résiliation envoyé.',
  'Reminder sent.': 'Rappel envoyé.',
  'Copy the link and send manually': 'Copiez le lien et envoyez manuellement',
  'After you have clicked on "Create power of attorney" a link will appear that you can send to the customer manually.':
    'Après avoir cliqué sur "Créer une procuration", un lien apparaîtra que vous pourrez envoyer manuellement au client.',
  'Does the customer not get the power of attorney': "Le client n'obtient-il pas la procuration?",
  'If the customer has not received the power of attorney, it may be because the wrong email or mobile number has been entered, or due to technical reasons.':
    "Si le client n'a pas reçu la procuration, c'est peut-être parce qu'un mauvais e-mail ou numéro de portable a été saisi, ou pour des raisons techniques.",
  'Delete the existing authorization and create a new one. If you want to send the power of attorney from another system, select "Manual link" as the way to send the power of attorney.':
    "Supprimez l'autorisation existante et créez-en une nouvelle. Si vous souhaitez envoyer la procuration à partir d'un autre système, sélectionnez 'Lien manuel' comme méthode d'envoi de la procuration.",
  'No status yet': 'Pas encore de statut',
  'will be updated when the power of attorney is signed or declined.':
    '- sera mis à jour lorsque la procuration sera signée ou refusée.',
  'The power of attorney was sent manually': 'La procuration a été envoyée manuellement',
  'Please enter an e-mail.': 'Veuillez entrer une adresse e-mail.',
  'Please enter a valid e-mail': 'Veuillez entrer une adresse e-mail valide',
  'Please enter a personal number.': 'Veuillez entrer un numéro de personnel.',
  'Please enter a valid personal number.': 'Veuillez entrer un numéro de personnel valide.',
  'Please enter a new insurance number.': 'Veuillez entrer un nouveau numéro d’assuré.',
  'To change or delete a power of attorney': 'Pour modifier ou supprimer un pouvoir de résiliation',
  'If you want to change a sent power of attorney, you need to delete the existing one. The power of attorney then becomes invalid, and you can create and send a new power of attorney to the customer. You delete the power of attorney by clicking on the three dots in the right corner, and then selecting "Delete power of attorney".':
    'Si vous souhaitez modifier un pouvoir de résiliation envoyé, vous devez supprimer le pouvoir de résiliation existant. Le pouvoir de résiliation devient alors invalide et vous pouvez créer et envoyer un nouveau pouvoir de résiliation au client. Vous supprimez le pouvoir de résiliation en cliquant sur les trois points dans le coin droit et en sélectionnant "Supprimer le pouvoir de résiliation". Notez que la procuration ne peut être supprimée que si elle a le statut "en attente de signature".',
  'Do you want to remind again?': 'Voulez-vous rappeler à nouveau?',
  'You have sent a reminder once earlier today.':
    'Vous avez envoyé un rappel une fois aujourd’hui.',
  'Do you want to delete the power of attorney?':
    'Voulez-vous supprimer le pouvoir de résiliation?',
  'You will not be able to undo this action and the power of attorney will be invalid.':
    'Vous ne pourrez pas annuler cette action et le pouvoir de résiliation sera invalide.',
  'Something went wrong when we were submitting the cancellation power of attorney to the customer. Please try again in a little while.':
    'Quelque chose s’est mal passé lors de la soumission du pouvoir de résiliation au client. Veuillez réessayer dans un petit moment.',
  'It seems like something went wrong when we sent the power of attorney to the customer. Please try again in a little while.':
    'Il semble que quelque chose se soit mal passé lorsque nous avons envoyé la procuration au client. Veuillez réessayer dans un petit moment.',

  // Cancellation Event log
  History: 'Histoire',
  'Power of attorney sent': 'Procuration envoyée',
  'Power of attorney created': 'Une procuration a été créée',
  'PoA reminder sent': 'Rappel envoyé',
  'Power of attorney signed': 'Procuration signée',
  'Power of attorney cancelled': 'Procuration supprimée',
  'Power of attorney rejected': 'Procuration rejetée',
  Activity: 'Activité',
  Unknown: 'Inconnu',

  // Cancellation list
  Search: 'Search',
  "You haven't made any cancellations yet": "Vous n'avez pas encore effectué d'annulation.",
  'Binding period': 'Période de validité',
  Status: 'Statut',
  'New insurance number': 'Nouveau numéro d’assuré',
  Created: 'Créé',
  'Case manager': 'Gestionnaire de cas',
  'Expired information': 'Informations expirées',

  // PENSION

  // Overview Pension
  'This is a support tool for pension advice...':
    "Il s'agit d'un outil d'aide au conseil en prévoyance. Toutes les données sont basées sur des acquisitions automatiques, ce qui signifie qu'il peut y avoir des erreurs dans des cas individuels. En tant qu'intermédiaire en retraite, vous êtes responsable de l'exactitude de ce qui est dit et transmis à un client",
  'Pension companies and status': 'Sociétés de retraite et statut',
  'Below you see the status of all pension companies that we currently support.':
    'Ci-dessous, vous voyez le statut de toutes les sociétés de retraite que nous soutenons actuellement.',

  // Sessions pension
  Pension: 'Pension',
  Pensions: 'Pensions',
  'No pensions': 'Pas de pension',

  // Session Pension
  'This user has not collected any pensions yet.':
    "Cet utilisateur n'a pas encore perçu de pensions.",
  'Total pension overview': 'Aperçu de la pension totale',
  'Collected pensions': 'Pensions perçues',
  Movable: 'Mobile',
  'Not movable': 'Non mobile',

  // Pension listing
  'Service pension': 'Pension de service',
  'Service pensions': 'Pensions de service',

  'Total value': 'Valeur totale',
  'Total amount paid': 'Montant total payé',
  'Total development since start': 'Développement total depuis le début',
  'Total average risk': 'Risque moyen total',
  'Cannot be moved': 'Ne peut pas être déplacé',
  'Can be moved': 'Peut être déplacé',
  'Might be movable': 'Peut être mobile',

  // Pension types
  COLLECTIVE_OCCUPATIONAL_PENSION: 'Prévoyance professionnelle conventionnelle',
  OCCUPATIONAL_PENSION: 'Prévoyance professionnelle/prévoyance professionnelle individuelle',
  PRIVATE_PENSION: 'Assurance retraite privée',
  CAPITAL_INSURANCE: 'Assurance de la dotation',
  IPS_PENSION: 'IPS',
  UNKNOWN_PENSION_TYPE: 'Inconnu',

  // Pension page
  'Download pension data': 'Téléchargement des données relatives à pension',
  Traditional: 'Traditionnelle',
  'Total amount': 'Montant total',
  'Fixed charge': 'Charge fixe',
  'Variable charge': 'Charge variable',
  'Development since start': 'Développement depuis le début',
  Employer: 'Employeur',
  'Receives payments': 'Reçoit des paiements',
  'Survivors protection': 'Protection de la survie',
  'Fund holdings': 'Avoirs du fonds',
  'Fixed annual amount': 'Montant annuel fixe',
  'Moving fee': 'Frais de déménagement',
  Value: 'Évaluer',
  Trustee: 'Curateur',
  'Active payments': 'Paiements actifs',
  'Active payouts': 'Décaissements actifs',
  'Data not available': 'Données non disponibles',
  'Fund fee': 'Frais de fonds',
  'It is uncertain whether this pension can be transferred, but unfortunately we cannot say exactly why':
    "Il n'est pas certain que cette pension puisse être transférée, mais nous ne pouvons malheureusement pas dire exactement pourquoi.",
  'The pension cannot be transferred. This is because there are still active payments from the employer.':
    "La pension n'est pas transférable. C'est parce qu'il y a encore des paiements actifs de l'employeur.",
  'The pension cannot be transferred. It looks like a payout has been initiated.':
    "La pension n'est pas transférable. Il semble qu'un paiement ait été initié.",
  'A traditional pension that was initiated before 2007 is not movable.':
    "Une pension traditionnelle initiée avant 2007 n'est pas mobile.",
  'The pension might be movable - the start date could not be found':
    "La pension pourrait être mobile - la date de début n'a pas pu être trouvée",
  'The pension might be movable - information about payment could not be found':
    'La pension peut être transférable - les informations sur les paiements ne sont pas disponibles',
  'We could not find whether the pension has active payments, which is needed, among other things, to know whether a pension is portable or not...':
    "Nous n'avons pas pu déterminer si la pension a des paiements actifs, ce qui est nécessaire, entre autres, pour savoir si une pension est transférable ou non. Vous pouvez demander au client s'il a pris sa retraite.",
  'The pension might be movable - information about payouts could not be found':
    "La pension pourrait être mobile - aucune information sur le versement n'a pu être trouvée",
  'We could not find whether the pension has active payouts, which is needed, among other things, to know whether a pension is portable or not...':
    "Nous n'avons pas pu déterminer si la pension a des paiements actifs, ce qui est nécessaire, entre autres, pour savoir si une pension est transférable ou non. Vous pouvez demander au client s'il travaille toujours pour l'employeur qui gère les paiements.",
  'We could not find the start date, which is needed, among other things, to know whether a pension is portable or not...':
    "Nous n'avons pas pu trouver la date de début, qui est nécessaire, entre autres, pour savoir si une pension est transférable ou non. Vous pouvez demander au client quand il a commencé à travailler ou lui demander d'aller sur minpension.se pour connaître l'année. Si la pension a débuté après 2007, elle peut être déplacée.",
  No: 'Non',
  of: 'sur',
  Yes: 'Qui',
  Maybe: 'Peut-être',
  'ISIN code': 'ISIN code',
  'Company number': "Numéro d'entreprise",
  'Actual fees paid (previous year)': "Frais réels payés (l'année dernière)",

  // Collection status
  running: "En cours d'exécution",
  login: 'Connexion',
  collecting: 'Collecte de données',
  completed: 'Complété',
  'completed partial': 'Partiellement complété',
  'completed empty': 'Vide',
  failed: "Échec de l'opération",
  'user input': "L'utilisateur final doit approuver les conditions",
  'waiting for authentication': "L'utilisateur ne s'est pas connecté",

  // Event status
  'Authenticate to insurance company': "S'authentifier auprès de la compagnie d'assurance",
  'Authenticate to pension company': "S'authentifier auprès de la compagnie d'pension",
  'Customer is logging in': 'Le client se connecte',
  Contacting: 'Contacts',
  Collecting: 'Collectionner',
  'No insurances found': 'Aucune assurance trouvée',
  'No pensions found': 'Aucune pension trouvée',
  'Technical issue': 'Problème technique',
  'The customer did not authenticate in time': "Le client ne s'est pas authentifié à temps",
  'Authentication was suspended': "L'authentification a été suspendue",
  'Double authentication with BankID': 'Double authentification avec BankID',
  'Incorrect login details': 'Identifiants de connexion incorrects',
  'The customer needs to create an account': 'Le client doit créer un compte',
  'Update contact information': 'Mettre à jour les coordonnées',

  // Event error title
  'SMS could not be delivered': "SMS n'a pas pu être livré",
  'We found {insurances} that are not displayed':
    'Nous avons trouvé {insurances} qui ne sont pas affichées',
  'Some information is missing': 'Certaines informations manquent',
  'We found no insurances': "Nous n'avons trouvé aucune assurance.",
  'Something went wrong when logging in to {company}':
    "Quelque chose s'est mal passé lors de la connexion au {company}",
  'The collection could not be completed': "La collecte n'a pas pu être complétée",
  'The customer needs to update information': 'Le client doit mettre à jour les informations',

  // Event error description
  'Something went wrong when we were going to deliver the SMS. Try sending again.':
    "Quelque chose s'est mal passé lorsque nous allions livrer le SMS. Essayez d'envoyer à nouveau.",
  'The customer has insurance that does not match the insurance categories you offer.':
    "Le client a une assurance qui ne correspond pas aux catégories d'assurance que vous proposez.",
  'We could not get all the information belonging to the {data}.':
    "Nous n'avons pas pu obtenir toutes les informations appartenant aux {data}.",
  'It looks like the customer has no {data} with {company}. Ask the customer to try another company.':
    "Il semble que le client n'ait pas d'{data} auprès de {company}. Demandez au client d'essayer une autre entreprise.",
  'This is due to a technical error, please ask the customer to try again. Email or write in the chat bubble to our support if the problem persists.':
    'Ceci est dû à une erreur technique, veuillez demander au client de réessayer. Envoyez un e-mail ou écrivez dans la bulle de chat à notre support si le problème persiste.',
  'It took too long for the customer to identify with BankID. Ask the customer to try again and contact our support via email or the chat bubble on the bottom right if the problem persists.':
    "Le client a mis trop de temps à s'identifier avec BankID. Demandez au client de réessayer et de contacter notre support par e-mail ou via la bulle de discussion en bas à droite si le problème persiste.",
  'The customer canceled authentication with BankID. Ask the customer to try again if it was a mistake.':
    "Le client a annulé l'authentification avec BankID. Demandez au client de réessayer s'il s'agit d'une erreur.",
  'The customer has already started another authentication with BankID. Ask the customer to end the existing one and try again.':
    'Le client a déjà commencé une autre authentification avec BankID. Demandez au client de mettre fin à celui existant et de réessayer.',
  'The customer has entered the wrong login details. Ask the customer to try again.':
    'Le client a entré les mauvais identifiants de connexion. Demandez au client de réessayer.',
  'The customer needs to create an account with {company} in order for us to retrieve the data. This is sometimes needed if they have never logged in with them before, even if the customer has insurance or a pension there.':
    "Le client doit créer un compte auprès de {company} pour que nous puissions récupérer les données. Cela est parfois nécessaire s'ils ne se sont jamais connectés auparavant, même si le client y a une assurance ou une pension.",
  "The insurance company requires the customer to update their contact details. Ask the customer to log in via the insurance company's app or website and answer the questions. Then start a new collection.":
    "La compagnie d'assurance demande au client de mettre à jour ses coordonnées. Demandez au client de se connecter via l'application ou le site Web de la compagnie d'assurance et de répondre aux questions. Lancez ensuite une nouvelle extraction.",

  // Analytics
  'No data available for current seller on selected dates':
    'Aucune donnée disponible pour le vendeur actuel aux dates sélectionnées',
  'No. of sessions': 'Nombre de sessions',
  'No. of collections': 'Nombre de prélèvements',
  'No. of exports': "Nombre d'exportations",
  'Completed sessions': 'Sessions terminées',
  'Sessions with at least one completed collection':
    'Sessions avec au moins une perception achevée',
  'Last week': 'La semaine dernière',
  'Last month': 'Le mois dernier',
  'Last quarter': 'Le dernier trimestre',
  'Last six months': 'Le dernier semestre',
  'This year': 'Cete année',
  'Since the beginning': 'Depuis le début',
  Day: 'Jour',
  Week: 'Semaine',
  Month: 'Mois',
  'Seller statistics': 'Statistiques du vendeur',
  'Insurance companies': "Compagnies d'assurance",
  Exports: 'Exportations',
  'Sales Person': 'Commerciaux',
  Volume: 'Volume',

  // Collections
  Collection: 'Encaissement',
  'Collection from': 'Encaissement de',
  'Nothing to see here...': 'Pas de données disponibles...',
  'Collections from Sales Opt': 'Encaissements des ventes Opt',
  'Below are {policies} that have been collected without being linked to a specific session. For example, this could be through a campaign or a digital sales flow.':
    "Vous trouverez ci-dessous les {policies} qui ont été collectées sans être liées à une session spécifique. Par exemple, cela peut se faire par le biais d'une campagne ou d'un flux de vente numérique.",
  'No collections matched your search...': 'Aucune perception ne correspond à votre recherche...',
  'We did not find any collections': "Nous n'avons trouvé aucune collection",
  "Try changing your search filters to find what you're looking for":
    'Essayez de modifier vos filtres de recherche pour trouver ce que vous cherchez',
  'No collections have been made yet': "Aucune collecte n'a encore été effectuée",
  'When policies have been downloaded through your digital feed, they will be displayed here.':
    'Lorsque les politiques ont été téléchargées via votre flux numérique, elles seront affichées ici.',
  'It seems something went wrong when we were going to pick up the insurances.':
    "Il semble que quelque chose s'est mal passé lorsque nous allions prendre les assurances.",
  'Not handled': 'Non traité',
  'View more info': "Voir plus d'informations",
  Contacted: 'Contacté',
  Viewed: 'Visualisé',
  'Not viewed': 'Non visualisé',
  'Show details': 'Afficher les détails',
  'Could not retrieve social security number':
    'Impossible de récupérer le numéro de sécurité sociale',
  'Search for personal ID number / E-mail':
    "Recherche d'un numéro d'identification personnel / E-mail",
  Client: 'Client',
  All: 'Tout',
  From: 'À partir de',
  Show: 'Afficher',
  '{amount} per page': '{montant} par page',
  Newer: 'Jamais',
  Older: 'Plus ancien',
  'Load more': 'Charger plus',
  'Collection ID': 'Collection ID',
  Customer: 'Client',
  'Insurance policies': 'Assurances',
  'Collection date': 'Date de collecte',
  Source: 'Source',
  'Contact status': 'État des contacts',
  'Collection source': 'Source de collecte',
  'Empty collections': 'Collections vides',
  'Show empty collections': 'Afficher les collections vides',
  'More filters': 'Plus de filtres',
  'Less filters': 'Moins de filtres',
  'Personal number or email': 'Numéro personnel ou e-mail',
  'Collection date range': 'Plage de dates de collecte',
  'Last {number} days': 'Les {number} derniers jours',
  'Export collections': 'Exporter des collections',
  'are not displayed as they do not match the insurance categories you offer':
    "ne sont pas affichés car ils ne correspondent pas aux catégories d'assurance que vous proposez",

  // Support
  'Mail support': 'Assistance par e-mail',
  'Hi! Write your question or feedback in the box below. We will return as soon as we can to the email address you registered with us.':
    "Bonjour, écrivez votre question ou vos commentaires dans le cadre ci-dessous. Nous vous répondrons dès que possible à l'adresse e-mail que vous avez enregistrée.",
  'Write your message here': 'Ecrivez votre message ici',
  'Send message': 'Envoyer un message',
  'Your message has been sent': 'Votre message a été envoyé',
  Address: 'Adresse',

  // FAQ insurance
  'This FAQ aims to give you as a salesperson or customer contact support in answering questions that may come from customers. It is a collection of the questions we have historically received and examples of suggested answers.':
    "Cette FAQ a pour but de vous aider, en tant que vendeur ou contact avec la clientèle, à répondre aux questions que peuvent vous poser les clients. Il s'agit d'un recueil de questions que nous avons reçues par le passé et d'exemples de réponses suggérées.",
  'How does it work?': 'Comment cela fonctionne-t-il ?',
  'We help you compare your insurance with an offer from us. With user name and password, you identify yourself with your insurance company via us and we collect your insurance data. Then we can, for 30 days, use it as a basis for an offer.':
    "Nous vous aidons à comparer votre contrat d'assurance avec une offre de notre part. Avec un nom d'utilisateur et un mot de passe, vous vous identifiez auprès de votre compagnie d'assurance par notre intermédiaire et nous recueillons vos données. Nous pouvons ensuite, pendant 30 jours, les utiliser comme base pour une offre.",
  'What happens to my data?': 'Que se passe-t-il avec mes données ? ',
  'Confidentiality and handling of personal data are important issues for us. Under no circumstances can we disclose personal information without your consent. The information may only be used to give you good advice for changing or looking at alternatives to insurance. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.':
    "La confidentialité et le traitement des données personnelles sont des questions importantes pour nous. En aucun cas, nous ne divulguerons des informations personnelles sans votre consentement. Les informations ne seront utilisées que pour vous donner des conseils en vue de changer d'assurance ou d'envisager d'autres solutions. Moi seul, en tant que vendeur, peut voir vos informations. Elles sont ensuite supprimées automatiquement de nos systèmes.",
  'How do I know it is safe to use?':
    'Comment puis-je savoir si je peux les utiliser en toute sécurité ?',
  'By logging in to your insurance company with your username and password, we ensure that only you give us access to your insurance information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.':
    "En vous connectant à votre compagnie d'assurance avec votre nom d'utilisateur et votre mot de passe, nous nous assurons que vous seul(e) nous donnez accès à vos informations.  Nous traitons bien sûr les données personnelles conformément au GDPR et en sommes responsables conformément à la loi sur les données personnelles. Nous utilisons également le cryptage et avons construit une infrastructure de base de données sécurisée contre les intrusions. Vous pouvez nous demander de supprimer vos informations à tout moment.",
  'I am unsure about signing with BankID at the request of someone else?':
    "Je ne suis pas très sûr de pouvoir me connecter avec mes identifiants à la demande de quelqu'un d'autre ?",
  'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your social security number yourself. You choose which company you collect information from, and log in to them for security reasons. We can not do anything with your insurance, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.':
    "L'utilisation de notre service est totalement sûre. Le lien que nous vous envoyons se trouve sur notre site web, et vous saisissez vous-même votre numéro de sécurité sociale. Vous choisissez la compagnie auprès de laquelle vous recueillez des informations, et vous vous connectez à elle pour des raisons de sécurité. Nous ne pouvons pas non plus faire quoi que ce soit avec votre assurance, mais seulement, techniquement, lire des informations. Nous sommes une entreprise sérieuse, sous la supervision de l'autorité suédoise de surveillance financière, et nous avons de nombreux clients.",
  'What information do you collect?': 'Quelles informations recueillez-vous ?',
  'We collect all the information we need to be able to give you a good offer. Today we collect information about your insurances at the company you have chosen, such as: name, insurance amount, insured object, union membership, price, discounts.':
    "Nous recueillons toutes les informations dont nous avons besoin pour pouvoir vous faire une bonne offre. Aujourd'hui, nous rassemblons les renseignements concernant vos assurances auprès de la compagnie que vous avez choisie, tels que : nom, montant de l'assurance, objet assuré, appartenance à un syndicat, prix, réductions.",
  'Who are Insurely?': 'Qui est Insurely ? Ou Qui sommes-nous ?',
  'Insurely is a supplier of technology that enables the collection of insurance information from a selected insurance company. You can read more about Insurely at insurely.com.':
    "Insurely est un prestataire de services qui permet de collecter des informations auprès d'une compagnie d'assurance sélectionnée. Vous pouvez en savoir plus sur Insurely à l'adresse insurely.com.",

  // FAQ pension
  'We help you compare your pension with an offer from us. With user name and password, you identify yourself with your pension company via us and we collect your pension data. Then we can, for 30 days, use it as a basis for an offer.':
    "Nous vous aidons à comparer votre pension avec une offre de notre part. Avec un nom d'utilisateur et un mot de passe, vous vous identifiez auprès de votre caisse de retraite par notre intermédiaire et nous collectons vos données de retraite. Ensuite, nous pouvons, pendant 30 jours, l'utiliser comme base pour une offre.",
  'Confidentiality and handling of personal data are important issues for us. Under no circumstances can we disclose personal information without your consent. The information may only be used to give you good advice for changing or looking at alternatives to pension. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.':
    'La confidentialité et le traitement des données personnelles sont des questions importantes pour nous. En aucun cas, nous ne pouvons divulguer des informations personnelles sans votre consentement. Les informations ne peuvent être utilisées que pour vous donner de bons conseils pour changer ou rechercher des alternatives à la retraite. Moi seul, en tant que vendeur, peux voir vos informations. Il est ensuite automatiquement supprimé de nos systèmes.',
  'By logging in to your pension company with your username and password, we ensure that only you give us access to your pension information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.':
    "En vous connectant à votre société de retraite avec votre nom d'utilisateur et votre mot de passe, nous nous assurons que vous seul nous donnez accès à vos informations de retraite. Bien entendu, nous traitons les données personnelles conformément au RGPD et sommes responsables des données personnelles conformément à la loi sur les données personnelles. Nous utilisons également le cryptage et avons construit une infrastructure de base de données sécurisée contre les intrusions. Vous pouvez nous demander de supprimer vos informations à tout moment.",
  'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your social security number yourself. You choose which company you collect information from, and log in to them for security reasons. We can not do anything with your pension, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.':
    "Il est totalement sûr d'utiliser ce service avec nous. Le lien que nous vous envoyons se trouve sur notre site Web et vous entrez vous-même votre numéro de sécurité sociale. Vous choisissez la société auprès de laquelle vous collectez des informations et vous y connectez pour des raisons de sécurité. Nous ne pouvons rien faire avec votre pension, mais techniquement nous ne faisons que lire des informations. Nous sommes une entreprise sérieuse sous la supervision de l'Autorité suédoise de surveillance financière et avons de nombreux clients.",
  'Insurely is a supplier of technology that enables the collection of pension information from a selected pension company. You can read more about Insurely at insurely.com.':
    "Insurely est un fournisseur de technologie qui permet la collecte d'informations sur les retraites auprès d'une société de retraite sélectionnée. Vous pouvez en savoir plus sur Insurely sur insurely.com.",
  'We collect all the information we need to be able to give you a good offer. Today we collect information about your pensions at the company you have chosen, such as: name, pension type, total amount, fund holdings, and if it is movable.':
    "Nous recueillons toutes les informations dont nous avons besoin pour pouvoir vous faire une bonne offre. Aujourd'hui, nous recueillons des informations sur vos pensions auprès de l'entreprise que vous avez choisie, telles que : nom, type de pension, montant total, avoirs en fonds et s'il est transférable.",

  // Old version info bar
  'You are using an old version and need to do a "hard" reload of the page to load the latest version.':
    'Vous utilisez une ancienne version et devez recharger la page pour obtenir la dernière version.',
  'Read more here': "Plus d'informations ici",
  'You need to do a hard reload': 'Vous devez faire un rechargement complet',
  'You are still using an old, cached version and need to do whats called a hard reload of the page to load the latest version. This is how you do it:':
    "Vous utilisez toujours une ancienne version en cache et vous devez effectuer ce que l'on appelle un rechargement complet de la page pour obtenir la dernière version. Voici comment procéder :",
  'Mac:': 'Mac:',
  'Chrome/Firefox: press': 'Chrome/Firefox: cliquer ',
  command: 'commande',
  and: 'et',
  shift: 'shift ',
  'and then press': 'Et ensuite, cliquer sur',
  R: 'R',
  'Safari: press': 'Safari: cliquer',
  option: 'option ',
  'Windows:': 'Windows:',
  Press: 'Cliquer',
  Ctrl: 'Ctrl ',
  F5: 'F5',

  // Error Fallback
  'The page crashed, possible reasons could be:':
    "La page s'est bloquée, les raisons possibles peuvent être :",
  '1. You need to make a "hard" reload': '1. Vous devez effectuer un rechargement complet',
  'Sometimes you have an old, cached version of Insights and need to do whats called a "hard" reload. You do it like this:':
    "Il arrive parfois que vous disposiez d'une ancienne version d'Insights, mise en cache, et que vous deviez effectuer ce que l'on appelle un rechargement \" complet \". Vous procédez comme suit :",
  '2. Something went wrong': "2. Quelque chose s'est mal passé",
  'We have recived an error message and can be sure that we are working on a solution.':
    "Nous avons reçu un message d'erreur et nous pouvons vous assurer que nous nous efforçons de trouver une solution.",
  'You can always e-mail us on': 'Vous pouvez toujours nous envoyer un e-mail à ',
  'if you have any questions.': ' si vous avez des questions.',
};

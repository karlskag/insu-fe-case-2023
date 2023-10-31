/* eslint-disable max-lines */
import { MessageKeys } from './types';

export const messages: Record<MessageKeys, string> = {
  // General
  'E-mail': 'E-mail',
  'Phone number': 'Phone number',
  Cancel: 'Cancel',
  'Try again': 'Try again',
  'We are sorry, something went wrong.': 'We are sorry, something went wrong.',
  currency: 'GBP',
  Active: 'Active',
  Insurance: 'Insurance',
  Insurances: 'Insurances',
  'No insurances': 'No insurances',
  Company: 'Company',
  Ok: 'Ok',
  Okay: 'Okay',
  Copy: 'Copy',
  Copied: 'Copied',
  Name: 'Name',
  Today: 'Today',
  '{amount} selected (singular)': '{amount} selected',
  '{amount} selected': '{amount} selected',
  'All selected': 'All selected',
  'Cell phone number': 'Cell phone number',
  'Please enter a cell phone number.': 'Please enter a cell phone number.',
  'Please enter a valid cell phone number.': 'Please enter a valid cell phone number.',
  'amount/year': '{amount}/year',
  'amount/month': '{amount}/month',
  Reload: 'Reload',
  'Manual link': 'Manual link',
  'Go back': 'Go back',
  To: 'To',
  Close: 'Close',
  'Show more': 'Show more',
  'Show less': 'Show less',

  // Login/register generals
  'Sign in': 'Sign in',
  'Sign in with email': 'Sign in with email',
  'Create account': 'Create account',
  Password: 'Password',
  'Repeat password': 'Repeat password',
  'Please repeat password': 'Please repeat password',
  'Done!': 'Done!',
  'Minimum 8 characters': 'Minimum 8 characters',
  'Email needs to be at least 5 characters': 'Email needs to be at least 5 characters',

  // Login
  'Sign in with username and password': 'Sign in with username and password',
  'Sign in with your email': 'Sign in with your email',
  'Forgot password?': 'Forgot password?',
  'Your account is not enabled yet.': 'Your account is not enabled yet.',
  'We just sent you an email to {email}. Click the link to sign in':
    'We just sent you an email to {email}. Click the link to sign in.',
  'Enter your email and sign in by clicking on the link that is sent to your inbox':
    'Enter your email and sign in by clicking on the link that is sent to your inbox.',

  // Register
  'To sign up you need to have an ongoing cooperation with Insurely and use your corporate email.':
    'To sign up you need to have an ongoing cooperation with Insurely and use your corporate email.',
  'Your request to access is being processed!': 'Your request to access is being processed!',
  'We will email you when your account has been activated.':
    'We will email you when your account has been activated.',
  'Please enter a valid email': 'Please enter a valid email',
  'Please enter a password': 'Please enter a password',
  'The password need to be at least 8 characters': 'The password need to be at least 8 characters',
  'The passwords needs to match': 'The passwords needs to match',
  'Check your inbox': 'Check your inbox!',
  'We are signing you in': 'We are signing you in',
  'We just sent you an email to {email}. Follow the instructions in the email to create your account':
    'We just sent you an email to {email}. Follow the instructions in the email to create your account.',

  // Enable account
  'Your account is now ready': 'Your account is now ready',
  'To overview': 'To overview',
  'Validating account': 'Validating account',
  'Login and signing with QR code': 'Login and signing with QR code',
  'Some companies only allow identification with BankID via QR code. It confirms that you are physically present at both devices, reducing the risk of fraud.':
    'Some companies only allow identification with BankID via QR code. It confirms that you are physically present at both devices, reducing the risk of fraud.',
  'Ask the customer to retrieve their insurance from a device other than the one used for BankID.':
    'Ask the customer to retrieve their insurance from a device other than the one used for BankID.',
  'I understand': 'I understand',
  'BankID on another device': 'BankID on another device',

  // Forgot password
  'Reset password': 'Reset password',
  'Input you email address. You will then get an email with a link back to this page where you can set a new password.':
    'Input your email address. You will then get an email with a link back to this page where you can set a new password.',
  'Send reset password email': 'Send reset password email',
  'New password': 'New password',
  'Repeat new password': 'Repeat new password',
  'Set new password': 'Set new password',
  'Save new password': 'Save new password',
  'We just sent you an email to {email}. Follow the instructions in the email to reset your password':
    'We just sent you an email to {email}. Follow the instructions in the email to reset your password.',
  'Your password is now saved': 'Your password is now saved',

  // Navigation
  Overview: 'Overview',
  Sessions: 'Sessions',
  Cancellations: 'Cancellations',
  Collections: 'Collections',
  Analytics: 'Analytics',
  'Log out': 'Log out',
  FAQ: 'FAQ',
  Contact: 'Contact',

  // Overview
  'Insurance companies and status': 'Insurance companies and status',
  'Welcome to {SST}': 'Welcome to {SST}',
  'This is a support tool for insurance advice...':
    'This is a support tool for insurance advice. All data is based on automatic acquisitions, which means that there may be errors in individual cases. As an insurance agent, you are responsible for ensuring that what is said and communicated to a customer is correct',
  'For more information see the FAQ. You can also contact us in the chat bubble in the right corner and we will help you.':
    'For more information see the FAQ. You can also contact us in the chat bubble in the right corner and we will help you.',
  'Below you see the status of all insurance companies that we currently support.':
    'Below you see the status of all insurance companies that we currently support.',
  'Temporarily down': 'Temporarily down',
  'Available integrations': 'Available integrations',
  'Temporarily closed': 'Temporarily closed',
  'Not implemented': 'Not implemented',

  // Sessions
  'Create new session': 'Create new session',
  'First and last name': 'First and last name',
  'Create session': 'Create session',
  'Session created': 'Session created',
  'Session id': 'Session id',
  'Session link': 'Session link',
  'Go to session page': 'Go to session page',
  Yesterday: 'Yesterday',
  'Ok, back to list': 'Ok, back to list',
  'Please enter a name': 'Please enter a name',
  'Could not find the session': 'Could not find the session.',

  // Session
  'Collections from the user': 'Collections from the user',
  Date: 'Date',
  'Session id: ': 'Session id',
  'Session link: ': 'Session link',
  'Create text message': 'Create text message',
  'Send new SMS': 'Send new SMS',
  'Send SMS with link for collection': 'Send SMS with link for collection',
  'Send SMS': 'Send SMS',
  "Enter the customer's phone number to send an SMS with a link to retrieve the customer's existing {data}.":
    "Enter the customer's phone number to send an SMS with a link to retrieve the customer's existing {data}.",
  'Status of power of attorney': 'Status of power of attorney',
  'Active termination powers of attorney for the user':
    'Active termination powers of attorney for the user',
  'Status log for collections': 'Status log for collections',
  'Send text message for data collection': 'Send text message for data collection',
  'SMS was sent to {number}, {date}': 'SMS was sent to {number}, {date}',
  'The customer approves receiving the link via SMS':
    'The customer approves receiving the link via SMS',
  'The customer must approve receiving the link via SMS':
    'The customer must approve receiving the link via SMS',
  'Send link': 'Send link',
  'SMS sent': 'SMS sent',
  'SMS sending': 'SMS sending',
  'SMS has been sent': 'SMS has been sent',
  'Could not be delivered': 'Could not be delivered',
  'Failed to send SMS': 'Failed to send SMS',
  "Couldn't send SMS because the number doesn't exist. Please try again with a different number.":
    'Could not send SMS because the number does not exist. Please try again with a different number.',
  'Sent invitations': 'Sent invitations',
  'It seems that something went wrong when we were going to send the collect SMS to the customer. Try again in a little while.':
    'It seems that something went wrong when we were going to send the collect SMS to the customer. Try again in a little while.',
  'Delete user': 'Delete user',
  'Are you sure you want to delete the session?': 'Are you sure you want to delete the session?',
  'All insurance data in this session will disappear from the Sales Support Tool.':
    'All insurance data in this session will disappear from the Sales Support Tool.',
  Remove: 'Remove',
  'Nothing to see here': 'Nothing to see here',
  'This user has not collected any insurances yet.':
    'This user has not collected any insurances yet.',
  Events: 'Events',
  'No events to display': 'No events to display',
  'Show information': 'Show information',
  'Hide information': 'Hide information',
  'Delete the session': 'Delete the session',

  // Insurance card
  'Employer paid': 'Employer paid',
  'Expired {date}': 'Expired {date}',
  'Active from {date}': 'Active from {date}',
  'Renewal date {date}': 'Renewal date {date}',
  'Will soon be active': 'Will soon be active',
  'Will expire soon': 'Will expire soon',
  'Has expired': 'Has expired',
  'Other insurance holder': 'Other insurance holder',

  // Insurance Listing
  'Home insurances': 'Home insurances',
  'Vehicle insurances': 'Vehicle insurances',
  'Person insurances': 'Person insurances',
  'Animal insurances': 'Animal insurances',
  'Other insurances': 'Other insurances',
  'Total:': 'Total: ',
  Collected: 'Collected',
  at: 'at',

  // Insurance Page
  Coverage: 'Coverage',
  'Termination power of attorney': 'Termination power of attorney',
  'Download insurance data': 'Download insurance data',
  'Download insurance policy document': 'Download insurance policy document',
  'Policy letter': 'Policy letter',
  Export: 'Export ',
  'Create a power of attorney for termination': 'Create a power of attorney for termination',
  'This insurance has another insurance holder': 'This insurance has another insurance holder',
  'Customer email': 'Customer email',
  Create: 'Create',
  'Insurance details': 'Insurance details',
  'Cancel Insurance': 'Cancel Insurance',
  'That means the insurance cannot be cancelled': 'That means the insurance cannot be cancelled',
  'Something unexpected happened, please try again':
    'Something unexpected happened, please try again',

  // Insurance Details
  'Contract period': 'Contract period',
  'Insurance holder': 'Insurance holder',
  'Insurance number': 'Insurance number',
  'Insurance company': 'Insurance company',
  'Pension company': 'Pension company',
  'Insurance name': 'Insurance name',
  'Start date': 'Start date',
  'Renewal date': 'Renewal date',
  'Renewal amount': 'Renewal amount',
  'Registration number': 'Registration number',
  Model: 'Model',
  'Living area': 'Living area',
  'Listed property': 'Listed property',
  'Type of property': 'Type of property',
  'Bike cover limit': 'Bike cover limit',
  'Personal possessions limit': 'Personal possessions limit',
  'Property built year': 'Property built year',
  'Owner status': 'Owner status',
  'Number of residents': 'Number of residents',
  'Max mileage': 'Max mileage',
  Occupation: 'Occupation',
  'Employment status': 'Employment status',
  'Date of birth': 'Birth date',
  '{mileage}km/year': '{mileage}km/year',
  Addons: 'Addons',
  'Monthly premium': 'Monthly premium',
  'Annual premium': 'Annual premium',
  'Payment frequency': 'Payment frequency',
  'Payment method': 'Payment method',
  Cost: 'Cost',
  'Employer or union paid': 'Employer or union paid',
  Discount: 'Discount',
  'Insurance object address': 'Object address ',
  'Insurance object postal code': 'Insurance object postal code',
  'Insurance object city': 'Insurance object city',
  'Insurance object property code': 'Insurance object property code',
  'Insurance amount': 'Insurance amount',
  'Insurance amount medical disability': 'Insurance amount medical disability',
  'Insurance amount economic disability': 'Insurance amount economic disability',
  'Maximum compensation medical disability': 'Maximum compensation medical disability',
  'Death compensation': 'Death compensation',
  'Insurance amount personal property': 'Insurance amount personal property',
  'Veterinary care': 'Veterinary care',
  '({number})%': '({number})%',
  MONTHLY_PREMIUM_FREQUENCY: 'Monthly',
  QUARTERLY_PREMIUM_FREQUENCY: 'Quarterly',
  BI_YEARLY_PREMIUM_FREQUENCY: 'Biannually',
  YEARLY_PREMIUM_FREQUENCY: 'Annually',
  ONE_TIME_PAYMENT: 'One time payment',
  UNKNOWN_PREMIUM_FREQUENCY: 'Unknown',
  UNDEFINED: 'Unknown',
  AUTOGIRO: 'Autogiro',
  PAPER_INVOICE: 'Paper invoice',
  ELECTRONIC_INVOICE: 'Electronic invoice',
  GENERIC_INVOICE: 'Invoice',
  EMPLOYER_PAID: 'Employer paid',
  CREDIT_CARD: 'Credit card',
  'Joint policy holder': 'Joint policy holder',
  'Number of bedrooms': 'Number of bedrooms',
  'Number of bathrooms': 'Number of bathrooms',
  'Subsidence last ten years': 'Subsidence last ten years',
  'Unoccupied for more than thirty days': 'Unoccupied for more than thirty days',
  'Number of claims last 3 years': 'Number of claims last 3 years',
  'Flooded last ten years': 'Flooded last ten years',
  'Claims last five years': 'Claims last five years',
  'Claims free years': 'Claims free years',

  // Insurance Parameters
  Extent: 'Extent',
  'Comparing with': 'Comparing with',
  Comparison: 'Comparison',
  Compare: 'Compare',
  'What does the insurance cover?': 'What does the insurance cover?',
  'At the moment, we do not fully support this type of insurance, which means that there is no information on the scope.':
    'At the moment, the coverage information for this insurance is not available yet.',
  'The scope is based on the latest terms and conditions version':
    'The scope is based on the latest terms and conditions version',
  'Complete insurance terms': 'Complete insurance terms',
  'Insurance terms does not support test environment':
    'Insurance terms does not support test environment',
  'There is no insurance to compare with': 'There is no insurance to compare with',
  'Insurance terms link': 'Insurance terms link',
  'Information not available': 'Information not available',
  'Included in the insurance': 'Included in the insurance',
  'Not included in the insurance': 'Not included in the insurance',

  // Cancellation
  'Power of attorney for cancellation': 'Power of attorney for cancellation',
  'Create a power of attorney for cancellation to be able to cancel the customers current insurens.':
    'Create a power of attorney for cancellation to be able to cancel the customers current insurance.',
  'Chose how to send the power of attorney': 'Chose how to send the power of attorney',
  'Personal number': 'Personal number',
  'New insurance number (optional)': 'New insurance number (optional)',
  'Enter the new insurance number to be able to follow the customer journey more easily. The number is for internal use only and does not appear in the power of attorney.':
    'Enter the new insurance number to be able to follow the customer journey more easily. The number is for internal use only and does not appear in the power of attorney.',
  'Termination date': 'Termination date',
  "The insurance's binding period is until {date}":
    "The insurance's binding period is until {date}.",
  'Unfortunately we could not find the binding period. Please ask the customer to find the correct date the the power of attorney does not risk being canceled':
    'Unfortunately we could not find the binding period. Please ask the customer to find the correct date the the power of attorney does not risk being canceled',
  'The termination date is before the binding period. This can cause the insurance company to decline the cancellation':
    'The termination date is before the binding period. This can cause the insurance company to decline the cancellation',
  'The termination date is after the binding period. This can cause the insurance company to decline the cancellation':
    'The termination date is after the binding period. This can cause the insurance company to decline the cancellation',
  'Send power of attorney': 'Send power of attorney',
  'Create power of attorney': 'Create power of attorney',
  'Create new power of attorney': 'Create new power of attorney',
  'Send reminder': 'Send reminder',
  'Waiting for signature': 'Waiting for signature',
  Signed: 'Signed',
  Deleted: 'Deleted',
  'Not delivered': 'Not delivered',
  Rejected: 'Rejected',
  'Timed out': 'Timed out',
  'Download manual power of attorney': 'Download manual power of attorney',
  'Download power of attorney': 'Download power of attorney',
  'Power of attorney sent.': 'Power of attorney sent.',
  'Reminder sent.': 'Reminder sent.',
  'Copy the link and send manually': 'Copy the link and send manually',
  'After you have clicked on "Create power of attorney" a link will appear that you can send to the customer manually.':
    'After you have clicked on "Create power of attorney" a link will appear that you can send to the customer manually.',
  'Does the customer not get the power of attorney':
    'Does the customer not get the power of attorney?',
  'If the customer has not received the power of attorney, it may be because the wrong email or mobile number has been entered, or due to technical reasons.':
    'If the customer has not received the power of attorney, it may be because the wrong email or mobile number has been entered, or due to technical reasons.',
  'Delete the existing authorization and create a new one. If you want to send the power of attorney from another system, select "Manual link" as the way to send the power of attorney.':
    'Delete the existing authorization and create a new one. If you want to send the power of attorney from another system, select "Manual link" as the way to send the power of attorney.',
  'No status yet': 'No status yet',
  'will be updated when the power of attorney is signed or declined.':
    '- will be updated when the power of attorney is signed or declined.',
  'The power of attorney was sent manually': 'The power of attorney was sent manually',
  'Delete power of attorney': 'Delete power of attorney',
  'Please enter an e-mail.': 'Please enter an e-mail.',
  'Please enter a valid e-mail': 'Please enter a valid e-mail',
  'Please enter a personal number.': 'Please enter a personal number.',
  'Please enter a valid personal number.': 'Please enter a valid personal number.',
  'Please enter a new insurance number.': 'Please enter a new insurance number.',
  'To change or delete a power of attorney': 'To change or delete a power of attorney',
  'If you want to change a sent power of attorney, you need to delete the existing one. The power of attorney then becomes invalid, and you can create and send a new power of attorney to the customer. You delete the power of attorney by clicking on the three dots in the right corner, and then selecting "Delete power of attorney".':
    'If you want to change a sent power of attorney, you need to delete the existing one. The power of attorney then becomes invalid, and you can create and send a new power of attorney to the customer. You delete the power of attorney by clicking on the three dots in the right corner, and then selecting "Delete power of attorney". Notice that the power of attorney only can be deleted if it has the status waiting for signature”.',
  'Do you want to remind again?': 'Do you want to remind again?',
  'You have sent a reminder once earlier today.': 'You have sent a reminder once earlier today.',
  'Do you want to delete the power of attorney?': 'Do you want to delete the power of attorney?',
  'You will not be able to undo this action and the power of attorney will be invalid.':
    'You will not be able to undo this action and the power of attorney will be invalid.',
  'Something went wrong when we were submitting the cancellation power of attorney to the customer. Please try again in a little while.':
    'Something went wrong when we were submitting the cancellation power of attorney to the customer. Please try again in a little while.',
  'It seems like something went wrong when we sent the power of attorney to the customer. Please try again in a little while.':
    'It seems like something went wrong when we sent the power of attorney to the customer. Please try again in a little while.',

  // Cancellation Event log
  History: 'History',
  'Power of attorney sent': 'Power of attorney sent',
  'Power of attorney created': 'Power of attorney have been created',
  'PoA reminder sent': 'Reminder sent',
  'Power of attorney signed': 'Power of attorney signed',
  'Power of attorney cancelled': 'Power of attorney deleted',
  'Power of attorney rejected': 'Power of attorney rejected',
  Activity: 'Activity',
  Unknown: 'Unknown',

  // Cancellation list
  Search: 'Search',
  "You haven't made any cancellations yet": "You haven't made any cancellations yet",
  'Binding period': 'Binding period',
  Status: 'Status',
  'New insurance number': 'New insurance number',
  Created: 'Created',
  'Case manager': 'Case manager',
  'Expired information': 'Expired information',

  // PENSION
  // Overview Pension
  'This is a support tool for pension advice...':
    'This is a support tool for pension advice. All data is based on automatic acquisitions, which means that there may be errors in individual cases. As a pension agent, you are responsible for ensuring that what is said and communicated to a customer is correct',
  'Pension companies and status': 'Pension companies and status',
  'Below you see the status of all pension companies that we currently support.':
    'Below you see the status of all pension companies that we currently support.',

  // Sessions pension
  Pension: 'Pension',
  Pensions: 'Pensions',
  'No pensions': 'No pensions',

  // Session Pension
  'This user has not collected any pensions yet.': 'This user has not collected any pensions yet.',
  'Total pension overview': 'Total pension overview',
  'Collected pensions': 'Collected pensions',
  Movable: 'Movable',
  'Not movable': 'Not movable',

  // Pension listing
  'Service pension': 'Service pension',
  'Service pensions': 'Service pensions',

  'Total value': 'Total value',
  'Total amount paid': 'Total amount paid',
  'Total development since start': 'Total development since start',
  'Total average risk': 'Total average risk',
  'Cannot be moved': 'Cannot be moved',
  'Can be moved': 'Can be moved',
  'Might be movable': 'Might be movable',

  // Pension types
  COLLECTIVE_OCCUPATIONAL_PENSION: 'Collectively agreed occupational pension',
  OCCUPATIONAL_PENSION: 'Occupational pension/Individual occupational pension',
  PRIVATE_PENSION: 'Private pension insurance',
  CAPITAL_INSURANCE: 'Endowment insurance',
  IPS_PENSION: 'IPS',
  UNKNOWN_PENSION_TYPE: 'Unknown',

  // Pension page
  'Download pension data': 'Download pension data',
  Traditional: 'Traditional',
  'Total amount': 'Total amount',
  'Fixed charge': 'Fixed charge',
  'Variable charge': 'Variable charge',
  'Development since start': 'Development since start',
  Employer: 'Employer',
  'Receives payments': 'Receives payments',
  'Survivors protection': 'Survivors protection',
  'Fund holdings': 'Fund holdings',
  'Fixed annual amount': 'Fixed annual amount',
  'Moving fee': 'Moving fee',
  Value: 'Value',
  Trustee: 'Trustee',
  'Active payments': 'Active payments',
  'Active payouts': 'Active payouts',
  'Data not available': 'Data not available',
  'Fund fee': 'Fund fee',
  'It is uncertain whether this pension can be transferred, but unfortunately we cannot say exactly why':
    'It is uncertain whether this pension can be transferred, but unfortunately we cannot say exactly why.',
  'The pension cannot be transferred. This is because there are still active payments from the employer.':
    'The pension cannot be transferred. This is because there are still active payments from the employer.',
  'The pension cannot be transferred. It looks like a payout has been initiated.':
    'The pension cannot be transferred. It looks like a payout has been initiated.',
  'The pension might be movable - the start date could not be found':
    'The pension might be movable - the start date could not be found',
  'The pension might be movable - information about payment could not be found':
    'The pension might be movable - information about payment could not be found',
  'We could not find whether the pension has active payments, which is needed, among other things, to know whether a pension is portable or not...':
    'We could not find whether the pension has active payments, which is needed, among other things, to know whether a pension is portable or not. You can ask the customer if they has retired.',
  'The pension might be movable - information about payouts could not be found':
    'The pension might be movable - information about payout could not be found',
  'We could not find whether the pension has active payouts, which is needed, among other things, to know whether a pension is portable or not...':
    'We could not find whether the pension has active payments, which is needed, among other things, to know whether a pension is portable or not. You can ask the customer if they still work for the employer who handles the payments.',
  'A traditional pension that was initiated before 2007 is not movable.':
    'A traditional pension that was initiated before 2007 is not movable.',
  'We could not find the start date, which is needed, among other things, to know whether a pension is portable or not...':
    'We could not find the start date, which is needed, among other things, to know whether a pension is portable or not. You can ask the customer when they started at the workplace, or ask them to go to minpension.se to find out the year. If the pension started later than 2007, it can be moved.',
  No: 'No',
  of: 'of',
  Yes: 'Yes',
  Maybe: 'Maybe',
  'ISIN code': 'ISIN code',
  'Company number': 'Company number',
  'Actual fees paid (previous year)': 'Actual fees paid (prev. year)',

  // Collection status
  running: 'Running',
  login: 'Login',
  collecting: 'Collecting',
  completed: 'Completed',
  'completed partial': 'Completed partial',
  'completed empty': 'Completed empty',
  failed: 'Failed',
  'user input': 'End user needs to approve terms',
  'waiting for authentication': 'User did not login',

  // Event status
  'Authenticate to insurance company': 'Authenticate to insurance company',
  'Authenticate to pension company': 'Authenticate to pension company',
  'Customer is logging in': 'Customer is logging in',
  Contacting: 'Contacting',
  Collecting: 'Collecting',
  'No insurances found': 'No insurances found',
  'No pensions found': 'No pensions found',
  'Technical issue': 'Technical issue',
  'The customer did not authenticate in time': 'The customer did not authenticate in time',
  'Authentication was suspended': 'Authentication was suspended',
  'Double authentication with BankID': 'Double authentication with BankID',
  'Incorrect login details': 'Incorrect login details',
  'The customer needs to create an account': 'The customer needs to create an account',
  'Update contact information': 'Update contact information',

  // Event error title
  'SMS could not be delivered': 'SMS could not be delivered',
  'We found {insurances} that are not displayed': 'We found {insurances} that are not displayed',
  'Some information is missing': 'Some information is missing',
  'We found no insurances': 'We found no insurances',
  'Something went wrong when logging in to {company}':
    'Something went wrong when logging in to {company}',
  'The collection could not be completed': 'The collection could not be completed',
  'The customer needs to update information': 'The customer needs to update information',

  // Event error description
  'Something went wrong when we were going to deliver the SMS. Try sending again.':
    'Something went wrong when we were going to deliver the SMS. Try sending again.',
  'The customer has insurance that does not match the insurance categories you offer.':
    'The customer has insurance that does not match the insurance categories you offer.',
  'We could not get all the information belonging to the {data}.':
    'We could not get all the information belonging to the {data}.',
  'It looks like the customer has no {data} with {company}. Ask the customer to try another company.':
    'It looks like the customer has no {data} with {company}. Ask the customer to try another company.',
  'This is due to a technical error, please ask the customer to try again. Email or write in the chat bubble to our support if the problem persists.':
    'This is due to a technical error, please ask the customer to try again. Email or write in the chat bubble to our support if the problem persists.',
  'It took too long for the customer to identify with BankID. Ask the customer to try again and contact our support via email or the chat bubble on the bottom right if the problem persists.':
    'It took too long for the customer to identify with BankID. Ask the customer to try again and contact our support via email or the chat bubble on the bottom right if the problem persists.',
  'The customer canceled authentication with BankID. Ask the customer to try again if it was a mistake.':
    'The customer canceled authentication with BankID. Ask the customer to try again if it was a mistake.',
  'The customer has already started another authentication with BankID. Ask the customer to end the existing one and try again.':
    'The customer has already started another authentication with BankID. Ask the customer to end the existing one and try again.',
  'The customer has entered the wrong login details. Ask the customer to try again.':
    'The customer has entered the wrong login details. Ask the customer to try again.',
  'The customer needs to create an account with {company} in order for us to retrieve the data. This is sometimes needed if they have never logged in with them before, even if the customer has insurance or a pension there.':
    'The customer needs to create an account with {company} in order for us to retrieve the data. This is sometimes needed if they have never logged in with them before, even if the customer has insurance or a pension there.',
  "The insurance company requires the customer to update their contact details. Ask the customer to log in via the insurance company's app or website and answer the questions. Then start a new collection.":
    "The insurance company requires the customer to update their contact details. Ask the customer to log in via the insurance company's app or website and answer the questions. Then start a new collection.",

  // Analytics
  'No data available for current seller on selected dates':
    'No data available for current seller on selected dates',
  'No. of sessions': 'No. of sessions',
  'No. of collections': 'No. of collections',
  'No. of exports': 'No. of exports',
  'Completed sessions': 'Completed sessions',
  'Sessions with at least one completed collection':
    'Sessions with at least one completed collection',
  'Last week': 'Last week',
  'Last month': 'Last month',
  'Last quarter': 'Last quarter',
  'Last six months': 'Last six months',
  'This year': 'This year',
  'Since the beginning': 'Since the beginning',
  Day: 'Day',
  Week: 'Week',
  Month: 'Month',
  'Seller statistics': 'Seller statistics',
  'Insurance companies': 'Insurance companies',
  Exports: 'Exports',
  'Sales Person': 'Sales Person',
  Volume: 'Volume',

  // Collections
  Collection: 'Collection',
  'Collection from': 'Collection from',
  'Nothing to see here...': 'Nothing to see here...',
  'Collections from Sales Opt': 'Collections from Sales Opt',
  'Below are {policies} that have been collected without being linked to a specific session. For example, this could be through a campaign or a digital sales flow.':
    'Below are {policies} that have been collected without being linked to a specific session. For example, this could be through a campaign or a digital sales flow.',
  'No collections matched your search...': 'No collections matched your search...',
  'We did not find any collections': 'We did not find any collections',
  "Try changing your search filters to find what you're looking for":
    "Try changing your search filters to find what you're looking for",
  'No collections have been made yet': 'No collections have been made yet',
  'When policies have been downloaded through your digital feed, they will be displayed here.':
    'When policies have been downloaded through your digital feed, they will be displayed here.',
  'It seems something went wrong when we were going to pick up the insurances.':
    'It seems something went wrong when we were going to pick up the insurances.',
  'Not handled': 'Not handled',
  'View more info': 'View more info',
  Contacted: 'Contacted',
  Viewed: 'Viewed',
  'Not viewed': 'Not viewed',
  'Show details': 'Show details',
  'Could not retrieve social security number': 'Could not retrieve social security number',
  'Search for personal ID number / E-mail': 'Search for personal ID number / E-mail',
  Client: 'Client',
  All: 'All',
  From: 'From',
  Show: 'Show',
  '{amount} per page': '{amount} per page',
  Newer: 'Newer',
  Older: 'Older',
  'Load more': 'Load more',
  'Collection ID': 'Collection ID',
  Customer: 'Customer',
  'Insurance policies': 'Insurance policies',
  'Collection date': 'Collection date',
  Source: 'Source',
  'Contact status': 'Contact status',
  'Collection source': 'Collection source',
  'Empty collections': 'Empty collections',
  'Show empty collections': 'Show empty collections',
  'More filters': 'More filters',
  'Less filters': 'Less filters',
  'Personal number or email': 'Personal number or email',
  'Collection date range': 'Collection date range',
  'Last {number} days': 'Last {number} days',
  'Export collections': 'Export collections',
  'are not displayed as they do not match the insurance categories you offer':
    'are not displayed as they do not match the insurance categories you offer',

  // Support
  'Mail support': 'Mail support',
  'Hi! Write your question or feedback in the box below. We will return as soon as we can to the email address you registered with us.':
    'Hi! Write your question or feedback in the box below. We will come back to you as soon as we can to the email address you registered with us.',
  'Write your message here': 'Write your message here',
  'Send message': 'Send message',
  'Your message has been sent': 'Your message has been sent',
  Address: 'Address',

  // FAQ insurance
  'This FAQ aims to give you as a salesperson or customer contact support in answering questions that may come from customers. It is a collection of the questions we have historically received and examples of suggested answers.':
    'This FAQ aims to give you as a salesperson or customer contact support in answering questions that may come from customers. It is a collection of the questions we have historically received and examples of suggested answers.',
  'How does it work?': 'How does it work?',
  'We help you compare your insurance with an offer from us. With user name and password, you identify yourself with your insurance company via us and we collect your insurance data. Then we can, for 30 days, use it as a basis for an offer.':
    'We help you compare your insurance with an offer from us. With user name and password, you identify yourself with your insurance company via us and we collect your insurance data. Then we can, for 30 days, use it as a basis for an offer.',
  'What happens to my data?': 'What happens to my data?',
  'Confidentiality and handling of personal data are important issues for us. Under no circumstances can we disclose personal information without your consent. The information may only be used to give you good advice for changing or looking at alternatives to insurance. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.':
    'Confidentiality and handling of personal data are important issues for us. Under no circumstances will we disclose personal information without your consent. The information will only be used to give you advice for changing or looking at alternatives to your current insurance. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.',
  'How do I know it is safe to use?': 'How do I know it is safe to use?',
  'By logging in to your insurance company with your username and password, we ensure that only you give us access to your insurance information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.':
    'By logging in to your insurance company with your user name and password, we ensure that only you give us access to your insurance information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.',
  'I am unsure about signing with BankID at the request of someone else?':
    'I am unsure about signing in at the request of someone else?',
  'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your social security number yourself. You choose which company you collect information from, and log in to them for security reasons. We can not do anything with your insurance, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.':
    'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your username and password yourself. You choose which company you collect information from, and log in to them for security reasons. We can also not do anything with your insurance, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.',
  'What information do you collect?': 'What information do you collect?',
  'We collect all the information we need to be able to give you a good offer. Today we collect information about your insurances at the company you have chosen, such as: name, insurance amount, insured object, union membership, price, discounts.':
    'We collect all the information we need to be able to give you a good offer. Today we collect information about your insurances at the company you have chosen, such as: name, insurance amount, insured object, union membership, price, discounts.',
  'Who are Insurely?': 'Who are Insurely?',
  'Insurely is a supplier of technology that enables the collection of insurance information from a selected insurance company. You can read more about Insurely at insurely.com.':
    'Insurely is a supplier of technology that enables the collection of insurance information from a selected insurance company. You can read more about Insurely at insurely.com.',

  // FAQ Pension
  'We help you compare your pension with an offer from us. With user name and password, you identify yourself with your pension company via us and we collect your pension data. Then we can, for 30 days, use it as a basis for an offer.':
    'We help you compare your pension with an offer from us. With user name and password, you identify yourself with your pension company via us and we collect your pension data. Then we can, for 30 days, use it as a basis for an offer.',
  'Confidentiality and handling of personal data are important issues for us. Under no circumstances can we disclose personal information without your consent. The information may only be used to give you good advice for changing or looking at alternatives to pension. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.':
    'Confidentiality and handling of personal data are important issues for us. Under no circumstances can we disclose personal information without your consent. The information may only be used to give you good advice for changing or looking at alternatives to pension. Only I, as a salesperson, can see your information. It is then deleted from our systems automatically.',
  'By logging in to your pension company with your username and password, we ensure that only you give us access to your pension information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.':
    'By logging in to your pension company with your username and password, we ensure that only you give us access to your pension information. We of course handle personal data in accordance with the GDPR and are responsible for personal data in accordance with the Personal Data Act. We also use encryption and have built a database infrastructure that is secure against intrusion. You can ask us to delete your information at any time.',
  'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your social security number yourself. You choose which company you collect information from, and log in to them for security reasons. We can not do anything with your pension, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.':
    'It is completely safe to use this service with us. The link we send out to you is on our website, and you enter your social security number yourself. You choose which company you collect information from, and log in to them for security reasons. We can not do anything with your pension, but technically only read information. We are a serious company under the supervision of the Swedish Financial Supervisory Authority and have many customers.',
  'Insurely is a supplier of technology that enables the collection of pension information from a selected pension company. You can read more about Insurely at insurely.com.':
    'Insurely is a supplier of technology that enables the collection of pension information from a selected pension company. You can read more about Insurely at insurely.com.',
  'We collect all the information we need to be able to give you a good offer. Today we collect information about your pensions at the company you have chosen, such as: name, pension type, total amount, fund holdings, and if it is movable.':
    'We collect all the information we need to be able to give you a good offer. Today we collect information about your pensions at the company you have chosen, such as: name, pension type, total amount, fund holdings, and if it is movable.',

  // Old version info bar
  'You are using an old version and need to do a "hard" reload of the page to load the latest version.':
    'You are using an old version and need to do a hard reload of the page to load the latest version.',
  'Read more here': 'Read more here',
  'You need to do a hard reload': 'You need to do a hard reload',
  'You are still using an old, cached version and need to do whats called a hard reload of the page to load the latest version. This is how you do it:':
    'You are still using an old, cached version and need to do whats called a hard reload of the page to load the latest version. This is how you do it:',
  'Mac:': 'Mac:',
  'Chrome/Firefox: press': 'Chrome/Firefox: press ',
  command: 'command ',
  and: 'and ',
  shift: 'shift ',
  'and then press': 'and then press ',
  R: 'R',
  'Safari: press': 'Safari: press ',
  option: 'option ',
  'Windows:': 'Windows:',
  Press: 'Press ',
  Ctrl: 'Ctrl ',
  F5: 'F5',

  // Error Fallback
  'The page crashed, possible reasons could be:': 'The page crashed, possible reasons could be:',
  '1. You need to make a "hard" reload': '1. You need to make a "hard" reload',
  'Sometimes you have an old, cached version of Insights and need to do whats called a "hard" reload. You do it like this:':
    'Sometimes you have an old, cached version of Insights and need to do whats called a "hard" reload. You do it like this:',
  '2. Something went wrong': '2. Something went wrong',
  'We have recived an error message and can be sure that we are working on a solution.':
    'We have recived an error message and can be sure that we are working on a solution.',
  'You can always e-mail us on': 'You can always e-mail us on ',
  'if you have any questions.': ' if you have any questions.',
  City: 'City',
  'Postal code': 'Postal code',
  'Adults in home': 'Adults in home',
  'Children in home': 'Children in home',
  'Construction years': 'Construction years',
  'Professional use': 'Professional use',
  'Debit card': 'Debit card',
};

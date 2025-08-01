// import { Client } from '@hubspot/api-client';

// if (!process.env.HUBSPOT_API_KEY) {
//   throw new Error('HUBSPOT_API_KEY is not defined in environment variables');
// }

// const hubspotClient = new Client({
//   accessToken: process.env.HUBSPOT_API_KEY,
// });

// export interface HubSpotContactData {
//   email: string;
//   firstname?: string;
//   lastname?: string;
//   phone?: string;
//   address?: string;
//   city?: string;
//   state?: string;
//   zip?: string;
//   message?: string;
//   requested_services?: string[];
//   website_source?: string;
//   page_uri?: string;
// }

// export async function createOrUpdateContact(contactData: HubSpotContactData) {
//   try {
//     // Prepare properties for HubSpot
//     const properties: { [key: string]: string } = {};

//     // Map your form data to HubSpot properties
//     if (contactData.email) properties.email = contactData.email;
//     if (contactData.firstname) properties.firstname = contactData.firstname;
//     if (contactData.lastname) properties.lastname = contactData.lastname;
//     if (contactData.phone) properties.phone = contactData.phone;
//     if (contactData.address) properties.address = contactData.address;
//     if (contactData.city) properties.city = contactData.city;
//     if (contactData.state) properties.state = contactData.state;
//     if (contactData.zip) properties.zip = contactData.zip;
//     if (contactData.message) properties.message = contactData.message;
//     if (contactData.website_source)
//       properties.website_source = contactData.website_source;
//     if (contactData.page_uri) properties.page_uri = contactData.page_uri;

//     // Handle services array - convert to semicolon-separated string
//     if (
//       contactData.requested_services &&
//       contactData.requested_services.length > 0
//     ) {
//       properties.requested_services = contactData.requested_services
//         .filter((service) => service && service.trim() !== '')
//         .join(';');
//     }

//     // Try to create or update the contact
//     const contactObj = {
//       properties: properties,
//     };

//     // First, try to find existing contact by email
//     let contact;
//     try {
//       const searchRequest = {
//         filterGroups: [
//           {
//             filters: [
//               {
//                 propertyName: 'email',
//                 operator: 'EQ',
//                 value: contactData.email,
//               },
//             ],
//           },
//         ],
//       };

//       const searchResult =
//         await hubspotClient.crm.contacts.searchApi.doSearch(searchRequest);

//       if (searchResult.results && searchResult.results.length > 0) {
//         // Update existing contact
//         const contactId = searchResult.results[0].id;
//         contact = await hubspotClient.crm.contacts.basicApi.update(
//           contactId,
//           contactObj
//         );
//       } else {
//         // Create new contact
//         contact = await hubspotClient.crm.contacts.basicApi.create(contactObj);
//       }
//     } catch (searchError) {
//       // If search fails, try to create new contact
//       contact = await hubspotClient.crm.contacts.basicApi.create(contactObj);
//     }

//     return {
//       success: true,
//       contactId: contact.id,
//       message: 'Contact created/updated successfully',
//     };
//   } catch (error: any) {
//     console.error('HubSpot API Error:', error);

//     return {
//       success: false,
//       error: error.message || 'Failed to create/update contact in HubSpot',
//     };
//   }
// }

// export async function createDeal(
//   contactId: string,
//   dealData: {
//     dealname: string;
//     amount?: number;
//     dealstage?: string;
//     pipeline?: string;
//   }
// ) {
//   try {
//     const dealObj = {
//       properties: {
//         dealname: dealData.dealname,
//         amount: dealData.amount?.toString() || '0',
//         dealstage: dealData.dealstage || 'appointmentscheduled',
//         pipeline: dealData.pipeline || 'default',
//       },
//       associations: [
//         {
//           to: { id: contactId },
//           types: [
//             {
//               associationCategory: 'HUBSPOT_DEFINED',
//               associationTypeId: 3, // Contact to Deal association
//             },
//           ],
//         },
//       ],
//     };

//     const deal = await hubspotClient.crm.deals.basicApi.create(dealObj);

//     return {
//       success: true,
//       dealId: deal.id,
//       message: 'Deal created successfully',
//     };
//   } catch (error: any) {
//     console.error('HubSpot Deal Creation Error:', error);

//     return {
//       success: false,
//       error: error.message || 'Failed to create deal in HubSpot',
//     };
//   }
// }

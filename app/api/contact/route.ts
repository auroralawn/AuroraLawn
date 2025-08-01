import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const hubspotApiKey = process.env.SERVER_HUBSPOT_API_KEY;
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;

  if (!hubspotApiKey || !portalId || !formGuid) {
    return NextResponse.json(
      { message: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    // Filter and process services
    const filteredServices =
      body.services?.filter(
        (service: string) => service && service.trim() !== ''
      ) || [];

    // Filter and process subscriptions
    const filteredSubscriptions =
      body.subscriptions?.filter(
        (subscription: string) => subscription && subscription.trim() !== ''
      ) || [];

    // Create semicolon-separated strings for both
    const servicesValue = filteredServices.join(';');
    const subscriptionsValue = filteredSubscriptions.join(';');

    const hubspotPayload = {
      fields: [
        {
          name: 'firstname',
          value: body.firstname || '',
        },
        {
          name: 'lastname',
          value: body.lastname || '',
        },
        {
          name: 'email',
          value: body.email || '',
        },
        {
          name: 'phone',
          value: body.phone || '',
        },
        {
          name: 'address',
          value: body.address || '',
        },
        {
          name: 'city',
          value: body.city || '',
        },
        {
          name: 'state',
          value: body.state || '',
        },
        {
          name: 'zip',
          value: body.zip || '',
        },
        {
          name: 'services',
          value: servicesValue,
        },
        {
          name: 'subscriptions',
          value: subscriptionsValue,
        },
        {
          name: 'message',
          value: body.message || '',
        },
      ],
      context: {
        pageUri: body.pageUri || 'http://localhost:3000/contact',
        pageName: body.pageUri?.includes('/contact')
          ? 'Contact Page Form Submission'
          : 'Home Page Form Submission',
      },
    };

    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${hubspotApiKey}`,
        },
        body: JSON.stringify(hubspotPayload),
      }
    );

    const data = await hubspotResponse.json();
    console.log('HubSpot response:', data);

    if (!hubspotResponse.ok) {
      console.error('HubSpot API Error:', data);
      return NextResponse.json(
        {
          message: data.message || 'HubSpot API error',
          details: data,
          payload: hubspotPayload, // Include what we sent for debugging
        },
        { status: hubspotResponse.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('HubSpot submission error:', error);
    return NextResponse.json(
      { message: 'Error submitting to HubSpot' },
      { status: 500 }
    );
  }
}

// app/api/getProperties/route.js

export async function GET() {
    try {
        // Step 2: Fetch the Auth Token
        const authResponse = await fetch('https://restapi11.rmscloud.com/authToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                agentId: 1038,
                agentPassword: "?Ft8zbqbnte",
                clientId: 19814,
                clientPassword: "2Hj*!i3Z",
                useTrainingDatabase: false,
                moduleType: ["distribution"]
            }),
        });

        if (!authResponse.ok) {
            throw new Error('Failed to fetch auth token');
        }

        const authData = await authResponse.json();
        const authToken = authData.token; // Adjust based on the actual response structure

        // Step 3: Fetch Property Data
        const propertiesResponse = await fetch('https://restapi11.rmscloud.com/properties', {
            method: 'GET',
            headers: {
                'authToken': authToken, // Send the token as a header
                'Content-Type': 'application/json',
            },
        });

        if (!propertiesResponse.ok) {
            throw new Error('Failed to fetch properties');
        }

        const propertiesData = await propertiesResponse.json();

        // Return the properties data
        return new Response(JSON.stringify(propertiesData), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
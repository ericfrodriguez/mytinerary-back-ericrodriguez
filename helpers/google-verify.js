import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client();

export async function verify(token_id) {
    const ticket = await client.verifyIdToken({
        idToken: token_id,
        audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });

    const payload = ticket.getPayload();

    return {
        name: payload.name,
        email: payload.email,
        photo: payload.picture
    }
}

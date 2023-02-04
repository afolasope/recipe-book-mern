function getGoogleOAuthUrl() {
  const rootUrl = 'https://acounts.google.com/o/oauth2/v2/auth';

  const options = {
    redirect_uri: process.env.GOOGLE_AUTH_REDIRECT_URL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://googleapis.com/auth/userinfo.profile',
      'https://googleapis.com/auth/userinfo.email',
    ].join(' '),
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
}
 export default getGoogleOAuthUrl
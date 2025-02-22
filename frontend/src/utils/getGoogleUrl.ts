function getGoogleOAuthURL() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    console.log("ok")
    const options = {
        redirect_uri: import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT_URL as string,
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/gmail.labels',
            'https://mail.google.com/'
        ].join(" ")
    };

    console.log(options)

    const qs = new URLSearchParams(options)
    console.log(qs)
    return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthURL;
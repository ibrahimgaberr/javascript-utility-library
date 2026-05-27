function secretHolder(initialValue) {
    let secret = initialValue;
    return {
        setSecret(newSecret) {
            secret = newSecret;
        },
        getSecret() {
            return secret;
        },
    };
}
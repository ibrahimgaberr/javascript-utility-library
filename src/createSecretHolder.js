function createSecretHolder(initialValue) {
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

// Example usage:
// --- Test Case 1: ---

let secretHolder = createSecretHolder(10);
secretHolder.setSecret(20);
console.log(secretHolder.getSecret()); 
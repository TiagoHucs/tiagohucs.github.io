// Função para criar um hash SHA-256 da senha
function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    return window.crypto.subtle.digest('SHA-256', data)
        .then(buffer => {
            const hashArray = Array.from(new Uint8Array(buffer));
            const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
            return hashHex;
        });
}


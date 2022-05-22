/** @type {import('next').NextConfig} */
const env = {};

for (const key in process.env) {
    if (key.startsWith('__')) continue;
    if (key.startsWith('NODE_')) continue;
    if (key === 'NEXT_RUNTIME') continue;
    env[key] = process.env[key];
}

module.exports = {
    env,
    reactStrictMode: true,
}
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'kidney kiwi onion skull drift rescue noble solid hockey civil army gaze'; 
let testAccounts = [
"0x66e523b8274e52a1385ba64aab92b345d06d9226de1551c736361c387e0d574e",
"0x25188b270f1c3029d26c518eb6bf55a0f653e49b8cd30f80b9b34b9a745ad432",
"0xd990404d985b6969feabda49c601ec4aeb7921ea1389bd657d54d28516579d9f",
"0xbd6cc01ec26b3120ac79889e0e55819cad0853e7773c6bf9645e88b3c3b506e8",
"0x71c76a8b28bbcc911e4715f4c903f2be37c39bdc5e756d60e0be136ef8267cd9",
"0xc6e160fb6f55fef9c5144f71c071e5f6f6764795b72a29efd23e553bf4f8e9c0",
"0x4a4232d45470763dcf18038e34b342a95b1bbb8ba47bf83c5a6910df5316ff4b",
"0xee9c07e7af9729eb18b97c5319099cf356549e5418b28d3c95b35d581b2d43c8",
"0x85c3fd8f91b00034f51ae8ae659fef9215e2b76ea40fa072bd71c62ca2841c9d",
"0x7f3869b6793271832e59e0c56b1104d00aaf742c4e160293eb6a305480312c1e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



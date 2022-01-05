require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember assume include close bottom sword'; 
let testAccounts = [
"0x7878094509034f940cd1b0f5e846d45e5ce36663b0a4417d9ccc2557ed61ff12",
"0x30028ecd725ece30a9a98f8da17c38e0546b47c2a22a9a20279c87653bf76c5f",
"0x759809f64c4e73bc98b3e3e382d59ec53c22fa7e8cc3dcfdccd33f1d87cc3f57",
"0xcfd8937a8aef41a872f3296b3fcbd931b4a17cb3da9b1d8cbb0f3af9600e30a1",
"0x74673eab2944b57646b756e426215d5a9fda16d0b2cc4395513412db38e208fa",
"0xf7176153b6877ba5ea1cbc2a71c060bbb93f13dd1860a3f716ee9d68bbe9b9a6",
"0xdd1769acce61134021d0e343f44338d1cd43dc2ba413a236c959df5108507006",
"0xccb0b9cacfbbac021d5b50dd98ed0a95f5d3d21efc903c8af717abd7b99f724f",
"0x27bfb404fd7c61e47342dc189aff195d9fa262a171348985d54c45040e4aa74e",
"0x388c7e7fc568b21f0707ff504c22253fb27b0d904c28664bbbde4553fb3b0d6d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



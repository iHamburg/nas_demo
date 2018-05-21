// "use strict";

var Nebulas = require("nebulas");

var Neb = Nebulas.Neb;
var neb = new Neb();

// 主网： https://mainnet.nebulas.io， 测试网： https://testnet.nebulas.io
// neb.setRequest(new Nebulas.HttpRequest("https://mainnet.nebulas.io"));

neb.setRequest(new Nebulas.HttpRequest("https://testnet.nebulas.io"));

var address = 'n1ZaB9NocJUe8FH1Va13UPvxXoUsXCtXz3A'
// let address = 'n1PfySvoUyNfWg6xKDohK96TCWbSxQXLdwB'

// neb.api.getAccountState(address).then(function (state) {
//   //{ balance: '2999999917566000000', nonce: '4', type: 87 }
//
//   console.log(state);
// }).catch(function (err) {
//   console.log(err);
// });

var Account = Nebulas.Account;
// var account = Account.NewAccount();
// console.log(account.getPrivateKeyString());  //61de3087348012d450a1c671b6b491cec7c6244ba722b970ce14071b3223c72f
// console.log(account.getPublicKeyString());   // 949e982b29c0a0c8a0b9c82f795654203126ae589ec6b60c6a035fb222a5f6a91ac827900644bee27e3e18ee2c974a7c78887940e0bf55772dcc397c70533f7f
// console.log(account.getAddressString());    //n1MKPiFjEgDFJEwAnhhw1PcLMQGFaoXbUHq
// console.log(Account.isValidAddress(account.getAddressString()));
// var key = account.toKey("passphrase");
// console.log(JSON.stringify(key));  ////{"version":4,"id":"c154e215-73b6-49ab-93d3-8821e58ef546","address":"n1MKPiFjEgDFJEwAnhhw1PcLMQGFaoXbUHq","crypto":{"ciphertext":"63f2fa529339a6ab5a8f85212cd5aaeb124538e8b286ea97e88d6b37dc7d1d7f","cipherparams":{"iv":"fd0c7ba4708d2896c45fb44ac19129f9"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"adb287fc15b04a6d1de0c14b24a9b9dda00d97e127f5d189134171cc84d9944c","n":4096,"r":8,"p":1},"mac":"af2088143c0920a0c86482fac41f05f7d36d87c25452dd4ac54bf876ddeb7ccb","machash":"sha3256"}}
//
// console.log("********************");

let key = '{"version":4,"id":"c154e215-73b6-49ab-93d3-8821e58ef546","address":"n1MKPiFjEgDFJEwAnhhw1PcLMQGFaoXbUHq","crypto":{"ciphertext":"63f2fa529339a6ab5a8f85212cd5aaeb124538e8b286ea97e88d6b37dc7d1d7f","cipherparams":{"iv":"fd0c7ba4708d2896c45fb44ac19129f9"},"cipher":"aes-128-ctr","kdf":"scrypt","kdfparams":{"dklen":32,"salt":"adb287fc15b04a6d1de0c14b24a9b9dda00d97e127f5d189134171cc84d9944c","n":4096,"r":8,"p":1},"mac":"af2088143c0920a0c86482fac41f05f7d36d87c25452dd4ac54bf876ddeb7ccb","machash":"sha3256"}}'


var a1 = new Account();
a1 = a1.fromKey(key, "passphrase");
console.log(a1.getPrivateKeyString());
//
// var Transaction = Nebulas.Transaction;
// var tx = new Transaction(100, account, account, "10", 1);
// tx.signTransaction();
// console.log("hash:" + tx.hash.toString("hex"));
// console.log("sign:" + tx.sign.toString("hex"));
// console.log(tx.toString());
// var data = tx.toProtoString();
// console.log(data);
// tx.fromProto(data);
// console.log(tx.toString());
// console.log("address:"+tx.from.getAddressString());
//
// var cryptoUtils = Nebulas.CryptoUtils;
// console.log("black：" + cryptoUtils.sha3("").toString("hex"));
// console.log("Hello, world：" + cryptoUtils.sha3("Hello, world").toString("hex"));
//
//
// console.log("=======test compatibility version3/version4=======");
//
// var v4 = '{"address":"n1J7bHLFjxggYu156tzEma8NNewCL9varnL","crypto":{"cipher":"aes-128-ctr","ciphertext":"cc1dce65f3beae84744a78d2f4a779549fb26cfe720b4d1f0c1b97593b4cc059","cipherparams":{"iv":"43b084fcaa4c723d269280705c67dc4f"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":4096,"p":1,"r":8,"salt":"44a8704914b45e496138199fa92d9742257d49e5e02af2c9a3169bfe18078bc1"},"mac":"21e452d670c0ecf0a2db6f12322a8a482486d3941de1e59535063c9738d6b3ff","machash":"sha3256"},"id":"6eb10613-1d25-44f6-a5be-815919ea0ae5","version":4}';
// var acc = new Account();
// acc = acc.fromKey(v4, "passphrase", true);
//
// var v3 = '{"address":"n1FF1nz6tarkDVwWQkMnnwFPuPKUaQTdptE","crypto":{"cipher":"aes-128-ctr","ciphertext":"b5041a4b9d4738bc2bcce580aeaadf53aa7c63b6aa3916b76c452630692fc397","cipherparams":{"iv":"f9d54f7854929e9e28731ee69d306a22"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":4096,"p":1,"r":8,"salt":"daa130fd5e3f9a77efe6028170becf7b1d9c73ce5c1d75d1142e90a68df12fed"},"mac":"aa390e6ed50741ed38670d1e1b11a1e44e174f9f66e41acc2e2d1762ebf1dfad","machash":"sha3256"},"id":"078fcad9-8f82-40e0-96c4-fb14b986c134","version":3}';
// acc = new Account();
// acc = acc.fromKey(v3, "passphrase", true);
// console.log("=======test compatibility version3/version4 END=======");

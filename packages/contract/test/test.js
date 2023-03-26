const hre = require('hardhat');
const { expect } = require('chai');

describe('Generative-NFT', () => {
  it('mint is successed', async () => {
    // あなたのコレクションの Base Token URI（JSON の CID）に差し替えてください
    const baseTokenURI =
      'ipfs.io/ipfs/QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/';

    // オーナー/デプロイヤーのウォレットアドレスを取得する
    const [owner] = await hre.ethers.getSigners();

    // デプロイしたいコントラクトを取得
    const contractFactory = await hre.ethers.getContractFactory(
      'NFTCollectible',
    );

    // 正しいコンストラクタ引数（baseTokenURI）でコントラクトをデプロイします。
    const contract = await contractFactory.deploy(baseTokenURI);

    // このトランザクションがマイナーに承認（mine）されるのを待つ
    await contract.deployed();

    // NFTを 10 点、コントラクト所有者のためにキープできているかチェック
    let txn = await contract.reserveNFTs();
    await txn.wait();
    let tokens = await contract.tokensOfOwner(owner.address);
    expect(tokens.length).to.equal(10);

    // 0.03 ETH を送信して3つ NFT を mint できるかチェック
    txn = await contract.mintNFTs(3, {
      value: hre.ethers.utils.parseEther('0.03'),
    });
    await txn.wait();
    tokens = await contract.tokensOfOwner(owner.address);
    expect(tokens.length).to.equal(13);
  });
});

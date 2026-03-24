'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';

const CONTRACT = "0x4763F996547F54BC6eA834746B9fe4d250FabEBA";   // ← REPLACE WITH YOUR REAL CONTRACT ADDRESS
const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

export default function GhostRecover() {
  const openGhost = () => {
    const calldata = "0x0b7b3a5f" + USDC.slice(2).padEnd(64, '0') + "0000000000000000000000000000000000000000000000000000000000000000";
    const url = `https://app.safe.global/transact?chain=base&to=${CONTRACT}&data=${calldata}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-mono">
      <div className="text-center mb-16">
        <h1 className="text-8xl font-black text-red-600 tracking-tighter mb-3">
          GHOSTRECOVER
        </h1>
        <p className="text-3xl text-red-500">👻🦁 THE GHOST DRAGS YOUR BAG HOME</p>
      </div>

      <ConnectWallet />

      <div className="mt-16 w-full max-w-md">
        <button 
          onClick={openGhost}
          className="w-full bg-red-600 hover:bg-red-700 border-4 border-red-500 text-white font-black text-4xl py-12 rounded-3xl shadow-2xl shadow-red-950 active:scale-95 transition-all"
        >
          GHOST IT 👻🦁
        </button>
      </div>

      <div className="mt-20 text-center text-sm text-zinc-500 max-w-xs">
        Send your USDC dust to the contract first<br />
        One tap opens Safe • 8% rake to the pride<br />
        0xb753be5Eac5B29c711051DfF91279834e9C9b9AC
      </div>
    </div>
  );
}

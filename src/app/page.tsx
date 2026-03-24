'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';

const CONTRACT = "0x4763F996547F54BC6eA834746B9fe4d250FabEBA"; // ← PUT YOUR REAL VERIFIED CONTRACT HERE
const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

export default function GhostRecover() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-mono">
      <div className="text-center mb-16">
        <h1 className="text-8xl font-black text-red-600 tracking-tighter mb-2">
          GHOSTRECOVER
        </h1>
        <p className="text-3xl text-red-500">👻🦁 THE GHOST DRAGS YOUR BAG HOME</p>
      </div>

      <ConnectWallet />

      <div className="mt-16 w-full max-w-md">
        <a
          href={`https://app.safe.global/transact?chain=base&to=${CONTRACT}&data=0x0b7b3a5f000000000000000000000000${USDC.slice(2)}0000000000000000000000000000000000000000000000000000000000000000`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full bg-red-600 hover:bg-red-700 border-4 border-red-500 text-white font-black text-4xl py-10 rounded-3xl shadow-2xl shadow-red-950 transition-all active:scale-95">
            GHOST IT 👻🦁
          </button>
        </a>
      </div>

      <div className="mt-20 text-center text-sm text-zinc-500 max-w-xs">
        8% fee goes straight to the pride (0xb753be5Eac5B29c711051DfF91279834e9C9b9AC)<br />
        Send your dust to the contract first • One tap rescue
      </div>
    </div>
  );
}

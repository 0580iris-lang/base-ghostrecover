'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount, useWriteContract } from 'wagmi';
import { parseAbi } from 'viem';
import { useState } from 'react';

const CONTRACT_ADDRESS = "0 0x4763F996547F54BC6eA834746B9fe4d250FabEBA"; // ← PASTE YOUR VERIFIED CONTRACT HERE
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

const RESCUE_ABI = parseAbi([
  "function rescueToken(address token, address to) external"
]);

export default function GhostRecover() {
  const { address } = useAccount();
  const { writeContract, isPending, isSuccess } = useWriteContract();
  const [status, setStatus] = useState("");

  const handleGhostIt = () => {
    if (!address) {
      setStatus("Please connect your wallet first");
      return;
    }
    setStatus("Ghost is hunting...");
    writeContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: RESCUE_ABI,
      functionName: "rescueToken",
      args: [USDC_ADDRESS, address],
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-mono">
      <div className="text-center mb-12">
        <h1 className="text-7xl font-black text-red-600 tracking-tighter mb-2">
          GHOSTRECOVER 👻🦁
        </h1>
        <p className="text-2xl text-zinc-400">The Ghost drags your stuck funds home.</p>
        <p className="text-lg text-red-500 mt-2">Fair 8% fee to the pride</p>
      </div>

      <ConnectWallet />

      {address && (
        <div className="mt-12 w-full max-w-md">
          <button
            onClick={handleGhostIt}
            disabled={isPending}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-700 border-4 border-red-500 text-white font-black text-3xl py-8 rounded-2xl shadow-2xl shadow-red-900 transition-all"
          >
            {isPending ? "GHOST IS HUNTING..." : "GHOST IT 👻🦁"}
          </button>

          {status && <p className="mt-6 text-center text-lg text-yellow-400">{status}</p>}
          {isSuccess && <p className="mt-6 text-center text-green-500 text-lg">✅ Ghost dragged your funds home! Pride ate 8%.</p>}
        </div>
      )}

      <div className="mt-16 text-center text-xs text-zinc-500 max-w-xs">
        Send a tiny amount of USDC to the contract first if testing.<br />
        One click rescue • 8% rake to 0xb753be5Eac5B29c711051DfF91279834e9C9b9AC
      </div>
    </div>
  );
}

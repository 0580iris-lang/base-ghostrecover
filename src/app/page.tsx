'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi';
import { useWriteContract } from 'wagmi';
import { parseAbi } from 'viem';
import { useState } from 'react';

const CONTRACT_ADDRESS = "0xYOUR_REAL_CONTRACT_ADDRESS_HERE"; // ← CHANGE THIS TO YOUR VERIFIED CONTRACT
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
      setStatus("Connect wallet first");
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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-mono">
      <h1 className="text-6xl font-black text-red-600 mb-4">GHOSTRECOVER 👻🦁</h1>
      <p className="text-xl text-zinc-400 mb-8">The Ghost drags your stuck funds home.</p>
      <p className="text-red-500 mb-12">Fair 8% fee to the pride</p>

      <ConnectWallet />

      {address && (
        <button 
          onClick={handleGhostIt}
          disabled={isPending}
          className="mt-12 w-full max-w-md bg-red-600 hover:bg-red-700 disabled:bg-zinc-700 border-4 border-red-500 text-white font-black text-3xl py-8 rounded-2xl shadow-xl"
        >
          {isPending ? "GHOST IS HUNTING..." : "GHOST IT 👻🦁"}
        </button>
      )}

      {status && <p className="mt-8 text-yellow-400">{status}</p>}
      {isSuccess && <p className="mt-8 text-green-500 text-xl">✅ Ghost dragged your funds home! Pride ate 8%.</p>}

      <p className="mt-20 text-xs text-zinc-500">Send USDC dust to the contract first • 8% rake to 0xb753be5Eac5B29c711051DfF91279834e9C9b9AC</p>
    </div>
  );
}

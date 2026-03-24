'use client';

import { ConnectWallet, Transaction, TransactionButton } from '@coinbase/onchainkit';
import { useAccount } from 'wagmi';
import { useState } from 'react';

const CONTRACT_ADDRESS = " 0x4763F996547F54BC6eA834746B9fe4d250FabEBA";   // ← CHANGE THIS
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";  // Base USDC

export default function GhostRecover() {
  const { address } = useAccount();
  const [status, setStatus] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-mono overflow-hidden">
      {/* Badass Header */}
      <div className="text-center mb-12">
        <h1 className="text-7xl font-black text-red-600 tracking-tighter mb-2">
          GHOSTRECOVER 👻🦁
        </h1>
        <p className="text-2xl text-zinc-400">The Ghost drags your stuck funds home.</p>
        <p className="text-lg text-red-500 mt-2">Fair 8% fee to the pride • Base only</p>
      </div>

      <ConnectWallet />

      {address && (
        <div className="mt-12 w-full max-w-md">
          <Transaction
            calls={[
              {
                address: CONTRACT_ADDRESS,
                abi: [
                  {
                    "inputs": [
                      { "name": "token", "type": "address" },
                      { "name": "to", "type": "address" }
                    ],
                    "name": "rescueToken",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  }
                ],
                functionName: "rescueToken",
                args: [USDC_ADDRESS, address],
              }
            ]}
            onError={(error) => setStatus("Error: " + error.message)}
            onSuccess={() => setStatus("✅ Ghost dragged your funds home! 8% to the pride.")}
          >
            <TransactionButton className="w-full bg-red-600 hover:bg-red-700 border-4 border-red-500 text-white font-black text-3xl py-8 rounded-2xl shadow-2xl shadow-red-900 transition-all">
              GHOST IT 👻🦁
            </TransactionButton>
          </Transaction>

          {status && <p className="mt-6 text-center text-lg">{status}</p>}
        </div>
      )}

      <div className="mt-16 text-center text-xs text-zinc-500 max-w-xs">
        Paste an old address or send dust to the contract first if needed.<br />
        One click rescue • Sponsored gas vibes • Pride eats 8%
      </div>
    </div>
  );
}

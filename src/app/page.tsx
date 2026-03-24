'use client';

const CONTRACT = "0x4763F996547F54BC6eA834746B9fe4d250FabEBA"; // ← PUT YOUR VERIFIED CONTRACT HERE
const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

export default function GhostRecover() {
  const ghostIt = () => {
    const calldata = "0x0b7b3a5f" + USDC.slice(2).padEnd(64, "0") + "0000000000000000000000000000000000000000000000000000000000000000";
    window.open(`https://app.safe.global/transact?chain=base&to=${CONTRACT}&data=${calldata}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-mono">
      <div className="text-center mb-16">
        <h1 className="text-8xl font-black text-red-600 tracking-tighter mb-3">GHOSTRECOVER</h1>
        <p className="text-3xl text-red-500">👻🦁 THE GHOST DRAGS YOUR BAG HOME</p>
      </div>

      <div className="text-center mb-12 text-xl text-zinc-400">
        Connect your wallet below
      </div>

      <button 
        onClick={ghostIt}
        className="w-full max-w-md bg-red-600 hover:bg-red-700 border-4 border-red-500 text-white font-black text-4xl py-12 rounded-3xl shadow-2xl shadow-red-950 active:scale-95 transition-all mb-12"
      >
        GHOST IT 👻🦁
      </button>

      <div className="text-center text-sm text-zinc-500 max-w-xs">
        Send your USDC dust to the contract first<br />
        One tap opens Safe • 8% rake to the pride<br />
        0xb753be5Eac5B29c711051DfF91279834e9C9b9AC
      </div>
    </div>
  );
}

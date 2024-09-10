import { useState } from "react";

const cryptocurrencies = [
  "Bitcoin (BTC)",
  "Ethereum (ETH)",
  "Binance Coin (BNB)",
  "Cardano (ADA)",
  "Solana (SOL)",
  "XRP (XRP)",
  "Polkadot (DOT)",
  "Dogecoin (DOGE)",
  "Avalanche (AVAX)",
  "Terra (LUNA)",
  "Chainlink (LINK)",
  "Litecoin (LTC)",
  "Stellar (XLM)",
  "VeChain (VET)",
  "Monero (XMR)",
  "EOS (EOS)",
  "TRON (TRX)",
  "Theta (THETA)",
  "Tezos (XTZ)",
  "Filecoin (FIL)",
  "Shiba Inu (SHIB)"
];

function CryptoAlertForm() {
  const [selectedCrypto, setSelectedCrypto] = useState("Bitcoin (BTC)");
  const [alertPrice, setAlertPrice] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected Crypto: ${selectedCrypto}, Alert Price: ${alertPrice}`);
    // Add form submission logic here
  };

  return (
    <div className="flex flex-col justify-center items-center text-[14px] font-inter">
      {/* Header Text */}
      <p className="font-inter text-primary text-[16px] font-bold mb-4">
        Set Alert and Get Notified on SMS and Calls
      </p>
      
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-row gap-3 items-center"
      >
        {/* Crypto Dropdown */}
        <div>
          <select
            id="crypto"
            className="w-[120px] font-inter h-[29px] border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-btnblue"
            value={selectedCrypto}
            onChange={(e) => setSelectedCrypto(e.target.value)}
            required
          >
            {cryptocurrencies.map((crypto, index) => (
              <option key={index} value={crypto}>
                {crypto}
              </option>
            ))}
          </select>
        </div>

        {/* Alert Price Input */}
        <div>
          <input
            id="alertPrice"
            type="number"
            className="w-[80px] font-inter h-[29px] text-[14px] border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-btnblue"
            placeholder="Price"
            value={alertPrice}
            onChange={(e) => setAlertPrice(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-[70px] font-inter bg-btnblue text-white font-bold py-1 px-2 rounded text-[12px] focus:outline-none focus:ring-2 focus:ring-btnblue"
          >
            Alert
          </button>
        </div>
      </form>
      <p className="font-inter text-primary text-[14px] font-light  mt-9 mb-4">
      Get instant notifications on price movements, market trends, and breaking news.
      </p>
    </div>
  );
}

export default CryptoAlertForm;

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import { WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";

export const WalletConnectProvider = ({children}) =>{
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo (() =>{
        if(network == WalletAdapterNetwork.Devnet){
            return "https://radial-indulgent-tree.solana-devnet.quiknode.pro/a7b4e28c0a4b6c012f9e9986cd1725dabe315d78/";
        }
        return clusterApiUrl(network);
    },[network]);
}
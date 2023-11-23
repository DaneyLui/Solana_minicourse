import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react-ui";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";
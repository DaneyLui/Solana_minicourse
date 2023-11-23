import Head from 'next/head'
import '../styles/global.css'
import { WalletConnectorProvider } from '../components/WalletConnectProvider'
// Import WalletConnectionProvider from components
// Import the solana wallet css

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <main>
                {/* Wrap provider around App */}
                <WalletConnectorProvider>
                    <Component {...pageProps} />
                </WalletConnectorProvider>
                   
            </main>
        </>
    )
}

export default MyApp

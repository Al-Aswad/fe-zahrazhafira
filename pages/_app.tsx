import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Main from '../layouts/Main';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Main>
        <Component {...pageProps} />
    </Main>
);
export default MyApp;

import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'コードタイプ';
const pageText = '本アプリで用意しているコードの種類を一覧にしています。';
const headTitle = pageTitle + ' | ' + headerTitle;


// CSS in JS
const Main = styled.main`
    h2 {
        background: #eee;
        margin: 60px 0 20px;
        padding: 10px;
        border-radius: 3px;
    }
    h3 {
        margin: 40px 0 10px;
        padding: 0 0 10px;
        border-bottom: 1px solid #ddd;
    }
    figure {
        margin: 0 0 30px;
        img {
            width: 100%;
            box-shadow: 0 0 15px 2px rgb(0 0 0 / 10%);
        }
    }
`;


// Component
function About() {
    return (
        <>
        <Head>
            <title>{ headTitle }</title>
            <meta name="description" content={ pageText } />
            <meta property="og:title" content={ headTitle } />
            <meta property="og:description" content={ pageText } />
        </Head>

        <Header />
        <Main>
            <h1>{ pageTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            <section>
                <h2>コードの分類</h2>
                <p>コードの種類は構成音の数によって下記に分かれます。</p>
                <ul>
                    <li>根音（ルート）</li>
                    <li>三和音（トライアド）</li>
                    <li>四和音（セブンスコード）</li>
                    <li>五和音（テンションコード）</li>
                </ul>
            </section>
            <section>
                <h2>根音（ルート）</h2>
                <section>
                    <h3>根音（ルート）</h3>
                    <p>単音は和音ではないが、この単音を根音（ルート）としてその上に和音の構成音を重ねていくのでコードの原点（キー）になる。</p>
                    <figure>
                        <img src="img/chord_1_01.jpg" alt="ルート（単音）" />
                    </figure>
                </section>
            </section>
            <section>
                <h2>三和音（トライアド）</h2>
                <p>説明説明説明説明説明説明説明説明</p>
            </section>
            <section>
                <h2>四和音（セブンスコード）</h2>
                <p>説明説明説明説明説明説明説明説明</p>
            </section>
            <section>
                <h2>五和音（テンションコード）</h2>
                <p>説明説明説明説明説明説明説明説明</p>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;
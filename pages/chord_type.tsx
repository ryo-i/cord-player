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
                <p>和音の土台になる根音（ルート）と、そこに五度（フィフス）を加えた二和音。</p>
                <section>
                    <h3>根音（ルート）：(R)</h3>
                    <p>単音は和音（コード）ではないが、この単音を根音（ルート）としてその上に構成音を重ねていくと和音になる。このルートを鍵盤の１番目で構成音の1とする。単音なので記号はないが他と区別するためにルートの頭文字(R)とした。</p>
                    <figure>
                        <img src="img/chord_1_01.jpg" alt="(R)" />
                    </figure>
                </section>
                <section>
                    <h3>パワーコード：5</h3>
                    <p>三和音（トライアド）に五度（フィフス）を加えた二和音。構成音は1,8。五度はルートともっとも調和し単音より力強い響きになる。メジャー、マイナーの性格は持たない。記号はルートに五度だけを足すので「5」がつく。</p>
                    <figure>
                        <img src="img/chord_1_02.jpg" alt="5" />
                    </figure>
                </section>
            </section>
            <section>
                <h2>三和音（トライアドコード）</h2>
                <p>ルートに三度（サード）、完全五度（フィフス）の音を加えた三和音。シンプルな響きのコード。</p>
                <section>
                    <h3>メジャー：(M)</h3>
                    <p>パワーコードに長三度（サード）の音を足す。構成音は1,5,8。明るい響き。記号は大文字のMだが略されることが多いため(M)とした。</p>
                    <figure>
                        <img src="img/chord_3_01.jpg" alt="(M)" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー：m</h3>
                    <p>メジャーコードの三度を半音下げる（短三度）。構成音は1,4,8。悲しい響き。記号は小文字のm。</p>
                    <figure>
                        <img src="img/chord_3_02.jpg" alt="m" />
                    </figure>
                </section>
                <section>
                    <h3>ディミニッシュ：dim</h3>
                    <p>マイナーコードから五度を半音下げる（減五度）。構成音は1, 4, 7。ちょっと不穏な響き。記号はdim。</p>
                    <figure>
                        <img src="img/chord_3_03.jpg" alt="dim" />
                    </figure>
                </section>
                <section>
                    <h3>オーギュメント：aug</h3>
                    <p>メジャーコードから五度を半音上げる（増五度）。構成音は1, 5, 9。マイナーほど暗くないがちょっと不思議な響き。記号はaug。</p>
                    <figure>
                        <img src="img/chord_3_04.jpg" alt="aug" />
                    </figure>
                </section>
                <section>
                    <h3>サスペンデッド4th：sus4</h3>
                    <p>メジャーコードから三度を四度（フォース）にあげる。構成音は1, 6, 8。まだ続きがありそう（未解決的）な響き。記号はsus4。</p>
                    <figure>
                        <img src="img/chord_3_05.jpg" alt="sus4" />
                    </figure>
                </section>
            </section>
            <section>
                <h2>四和音（セブンスコード）</h2>
                <p>トライアドの上に七度（セブンス）の音を加えた四和音。トライアドより豊かな響きになる。</p>
                <section>
                    <h3>メジャーセブンス：M7</h3>
                    <p>メジャーコードに長七度（メジャーセブンス）を加える。構成音は1, 5, 8, 12。メジャーコードと比べるとより明るく豊かな響き。記号はM7。このMは七度にかかるM（三度のメジャーのMは略されている）</p>
                    <figure>
                        <img src="img/chord_4_01.jpg" alt="M7" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス：7</h3>
                    <p>メジャーセブンスから七度を半音下げる（短七度）。構成音は1, 5, 8, 11。メジャーセブンスより少し悲しげな響き。七度ではマイナーのmが略されるので記号は数字の7のみ。</p>
                    <figure>
                        <img src="img/chord_4_02.jpg" alt="7" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・メジャー・セブンス：mM7</h3>
                    <p>マイナーコードに長七度（メジャーセブンス）を加える。構成音は1, 4, 8, 12。マイナーコードに力強さが加わる響き。記号はmM7。小文字mは三度、大文字Mは七度にかかっている。</p>
                    <figure>
                        <img src="img/chord_4_03.jpg" alt="mM7" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・セブンス：m7</h3>
                    <p>マイナー・メジャー・セブンスの七度を半音下げる（短七度）。構成音は1, 4, 8, 11。マイナー・メジャー・セブンスより寂しげな響き。記号はm7。小文字mは三度にかかる。</p>
                    <figure>
                        <img src="img/chord_4_04.jpg" alt="m7" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・セブンス・フラット・ファイブ：m7(-5)</h3>
                    <p>マイナー・セブンスの五度を半音下げる（減五度）。構成音は1, 4, 7, 11。マイナー・セブンスよりさらに寂しげな響き。記号はm7(-5)。-5はカッコでくくる。</p>
                    <figure>
                        <img src="img/chord_4_05.jpg" alt="m7(-5)" />
                    </figure>
                </section>
                <section>
                    <h3>ディミニッシュ・セブンス：dim7</h3>
                    <p>ディミニッシュに短七度をさらに半音下げ（減七度）た音を加える。構成音は1, 4, 7, 10。マイナー・セブンス・フラット・ファイブの七度をさらに半音さげる（減七度）とも言える。減七度は長六度でもあるが、すべての構成音が+3の位置関係になる特殊なコード。記号はdim7。</p>
                    <figure>
                        <img src="img/chord_4_06.jpg" alt="dim7" />
                    </figure>
                </section>
                <section>
                    <h3>オーギュメント・メジャー・セブンス：augM7</h3>
                    <p>オーギュメントに長七度（メジャーセブンス）を加える。構成音は1, 5, 9, 12。オーギュメントの響きに力強さが加わる。記号はaugM7。Mは七度にかかる。</p>
                    <figure>
                        <img src="img/chord_4_07.jpg" alt="augM7" />
                    </figure>
                </section>
                <section>
                    <h3>オーギュメント・セブンス：aug7</h3>
                    <p>オーギュメント・メジャー・セブンスの七度を半音下げる（短七度）。構成音は1, 5, 9, 11。オーギュメント・メジャー・セブンスより寂しげな響き。記号はaug7。七度のmは略される。</p>
                    <figure>
                        <img src="img/chord_4_08.jpg" alt="aug7" />
                    </figure>
                </section>
                <section>
                    <h3>メジャー・セブンス・サスペンデッド4th：M7sus4</h3>
                    <p>メジャーセブンスの三度を四度（フォース）にあげる。構成音は1, 6, 8, 12。サスフォーに長七度を加えるとも言える。メジャーセブンスよりも続きがありそう（未解決的）な響き。記号はM7sus4。</p>
                    <figure>
                        <img src="img/chord_4_09.jpg" alt="M7sus4" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・サスペンデッド4th：7sus4</h3>
                    <p>セブンスの三度を四度（フォース）にあげる。構成音は1, 6, 8, 11。サスフォーに短七度を加えるともいえる。セブンスよりもよりも続きがありそう（未解決的）な響き。記号は7sus4。</p>
                    <figure>
                        <img src="img/chord_4_10.jpg" alt="7sus4" />
                    </figure>
                </section>
                <section>
                    <h3>シックスス：6</h3>
                    <p>メジャーコードに長六度を加える。構成音は1, 5, 8, 10。五和音（テンション）の長十三度を１オクターブ下げたとも言える（七度は音が近接しすぎるため省略する）。記号は6のみ。
                    </p>
                    <figure>
                        <img src="img/chord_4_11.jpg" alt="6" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・シックスス：m6</h3>
                    <p>マイナーコードに長六度を加える。構成音は1, 4, 8, 10。こちらも長十三度を1オクターブ下げて七度を省略した和音。シックススより悲しい響き。記号はm6でmは三度にかかる。</p>
                    <figure>
                        <img src="img/chord_4_12.jpg" alt="m6" />
                    </figure>
                </section>
            </section>
            <section>
                <h2>五和音（テンションコード）</h2>
                <p>説明説明説明説明説明説明説明説明</p>
                <section>
                    <h3>メジャーナインス：M9</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_01.jpg" alt="M9" />
                    </figure>
                </section>
                <section>
                    <h3>ナインス：9</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_02.jpg" alt="9" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・フラット・ナインス：7(-9)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_03.jpg" alt="7(-9)" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・シャープ・ナインス：7(+9)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_04.jpg" alt="7(+9)" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・セブンス・イレブンス：m7(11)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_05.jpg" alt="m7(11)" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・シャープ・イレブンス：7(+11)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_06.jpg" alt="7(+11)" />
                    </figure>
                </section>
                <section>
                    <h3>メジャー・セブンス・サーティーンズ：M7(13)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_07.jpg" alt="M7(13)" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・サーティーンズ：7(13)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_08.jpg" alt="7(13)" />
                    </figure>
                </section>
                <section>
                    <h3>セブンス・フラット・サーティーンズ：7(-13)</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_09.jpg" alt="7(-13)" />
                    </figure>
                </section>
                <section>
                    <h3>シックス・ナインス：69</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_10.jpg" alt="69" />
                    </figure>
                </section>
                <section>
                    <h3>マイナー・シックス・ナインス：m69</h3>
                    <p>説明説明説明</p>
                    <figure>
                        <img src="img/chord_5_11.jpg" alt="m69" />
                    </figure>
                </section>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;
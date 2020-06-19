import Main from "../layouts/Main";
import Page from "../layouts/Page";

export default function portfolio() {
  return (
    <>
      <Main>
        <Page title="關於我">
          <article>
            <h2>李承澤</h2>
            <img src="/assets/images/selfie.jpg" alt="my selfie" width="100" />
            <section>
              一個對寫程式、新科技有興趣，沉穩、內斂、好奇心強，能夠不斷獨立學習的開發者。對我來說，能夠使產品不斷改進和創新，提供更好的體驗、價值，並寫出更完善的程式是一件很有成就感的事情。自學網頁前端半年。
            </section>
            <h3>學經歷</h3>
            <section>
              <ul>
                <li>2014-2019：國立臺灣大學法律系學士畢業</li>
                <li>
                  2019下半年決定往軟體業發展，開始學習程式語言、網頁基礎知識
                </li>
                <li>2020四月中退伍，開始學習前端框架（React）及其它前端技術</li>
              </ul>
            </section>
            <h3>個性</h3>
            <section>沉穩、內斂、好奇心強</section>
            <h3>缺點</h3>
            <section>容易想太多、不會立即反應自己的想法或情緒</section>
            <h3>興趣</h3>
            <section>研究新科技、騎車、貓貓狗狗</section>
            <h3>聯絡方式</h3>
            <section>
              <ul>
                <li>電話：0972-803-103</li>
                <li>
                  Email：
                  <a href="mailto:chentselee@gmail.com">chentselee@gmail.com</a>
                </li>
                <li>
                  Github：
                  <a
                    href="https://github.com/chentselee"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/chentselee
                  </a>
                </li>
                <li>方便聯絡時間：週一至週五13：00至19：00</li>
              </ul>
            </section>
          </article>
        </Page>
      </Main>
      <style jsx>{`
        article {
          padding: 1.5rem;
          background-color: var(--bg-dark);
          border-radius: 1rem;
          line-height: 1.5rem;
        }

        article > :not(:last-child) {
          margin-bottom: 1rem;
        }

        h2,
        h3 {
          color: var(--text-lightgray);
        }

        section {
          background-color: var(--bg-light);
          border-radius: 1rem;
          padding: 1.3rem;
        }

        img {
          float: right;
          margin: 0.5rem;
          border-radius: 3px;
        }

        ul {
          list-style-position: inside;
        }

        ul > :not(:last-child) {
          margin-bottom: 4px;
        }

        a {
          color: var(--primary);
        }
      `}</style>
    </>
  );
}

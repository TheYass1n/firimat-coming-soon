import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Head>
        <title>فريـمات | نظارات شمسية و طبية</title>
        <meta
          name="description"
          content="المتجر الاول لنظارات الشمسية و الطبية في السودان"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          src="/logo.svg"
          alt="firimat.com Logo"
          className={styles.vercelLogo}
          width={130}
          height={44}
          priority
        />
        <h1 className={styles.title}>جاينكم قرييب</h1>
        <p className={styles.description}>
          {" "}
          اشترك في قائمتنا البريدية لتكون أول من يعرف عن أحدث تشكيلات النظارات لدينا التخفيضات والعروض الحصرية!
        </p>
        {/* notfy me when lunch form*/}
        <div>
          <p className={styles.label}>كن اول زول يعرف لمن نطلق المتجر</p>
        </div>
        <MailchimpSubscribe
          url="https://gmail.us12.list-manage.com/subscribe/post?u=03a1066f65c96f2e7b59d2512&amp;id=c63a514e1a&amp;f_id=002abfe0f0"
          render={({ subscribe, status, message }) => (
            <>
              <form className={styles.form}>
                <input
                  type="submit"
                  value="اديني خبر"
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    subscribe({ EMAIL: email });
                  }}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ادخل ايميلك"
                  className={styles.input}
                />
              </form>
              <div className={styles.info}>
                {status === "sending" && (
                  <div style={{ color: "white" }}>جاري الارسال...</div>
                )}
                {status === "error" && (
                  <div style={{ color: "red" }}>
                    <p>حدث خطأ ما</p>
                    <p>يرجى المحاولة مرة اخرى</p>
                  </div>
                )}
                {status === "success" && (
                  <div style={{ color: "green" }}>
                    <p>شكرا لك على الاشتراك</p>
                    <p>هنرسل لك اشعار لمن نطلق المتجر</p>
                  </div>
                )}
              </div>
            </>

            //   <input
            //     type="email"
            //     name="email"
            //     id="email"
            //     placeholder="البريد الالكتروني"
            //     value={email}
            //     onChange={(e) => setEmail(e.target.value)}
            //   />
            //   <button
            //     type="submit"
            //     onClick={() => subscribe({ EMAIL: email })}
            //     className={styles.btn}
            //   >
            //     اشترك
            //   </button>
            //   {status === "sending" && (
            //     <div style={{ color: "blue" }}>جاري الارسال...</div>
            //   )}
            //   {status === "error" && (
            //     <div
            //       style={{ color: "red" }}
            //       dangerouslySetInnerHTML={{ __html: message }}
            //     />
            //   )}
            //   {status === "success" && (
            //     <div
            //       style={{ color: "green" }}
            //       dangerouslySetInnerHTML={{ __html: message }}
            //     />
            //   )}

            // </div>
          )}
        />
        <div className={styles.social}>
          <p>عشان ما تفوتك حاجة تابعنا على السوشيال ميديا</p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/firimatsd" target="_blank">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={30}
                height={30}
                priority
              />
            </a>
            <a href="https://www.instagram.com/firimatsd/" target="_blank">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={30}
                height={30}
                priority
              />
            </a>
            <a href="https://twitter.com/firimatsd" target="_blank">
              <Image
                src="/twitter.svg"
                alt="twitter"
                width={30}
                height={30}
                priority
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <link rel="preload" href="/SofiaProSoft.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/SofiaProBold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/SofiaProRegular.oet" as="font" type="font/oet" crossOrigin="anonymous" />
        <link rel="preload" href="/SofiaProRegular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/SofiaProRegularAz.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <body>
          <Main />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

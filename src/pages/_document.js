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
        <link rel="preconnect" href="./SofiaPro-Light.otf" />
        <link rel="preconnect" href="./SofiaProBold.ttf" />
        <link rel="preconnect" href="./SofiaProRegular.oet" />
        <link rel="preconnect" href="./SofiaProRegular.woff2" />
        <link rel="preconnect" href="./SofiaProRegularAz.otf" />
        <link rel="preconnect" href="./SofiaProSoft.otf" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;

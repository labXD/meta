import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="keywords"
            content="ux, dx, labxd, hausofxd, chatterxd, developer experience, user experience, TypeScript"
          />
          <meta
            name="description"
            content="Home for experience development, user and developer focused"
          />
          <link rel="canonical" href="https://labd.com/" />

          <meta property="og:title" content="labXD" />
          <meta
            property="og:description"
            content="Home for experience development, user and developer focused"
          />
          <meta property="og:url" content="https://labxd.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://labxd.com/cover.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@hausofxd" />
          <meta name="twitter:creator" content="@hausofxd" />
          <meta name="twitter:title" content="Haus of XD" />
          <meta
            name="twitter:description"
            content="Haus of XD is the voice for labXD, the home for experience development"
          />
          <meta name="twitter:image" content="https://labxd.com/cover.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-32.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

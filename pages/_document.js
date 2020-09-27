import Document , {Head, Main, NextScript} from 'next/document';

export default class RootDocument extends Document{
    render(){
        return(
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    <meta name="description" content="My First Static Website"/>
                    <meta name="keywords" content="nextjs,static,website" />
                    <style global jsx>
                        {`
                            html, #__next {
                                height: 100%;
                                width: 100%;
                            }
                            body{
                                margin : 0;
                                height: 100%;
                                width: 100%;
                            }
                        `}
                    </style>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}
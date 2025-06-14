import '@/shared/assets/css/style.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import React from 'react';
import { ConfigProvider } from '@/shared/config';
import { BaseLayout } from '@/shared/components/base-layout';
import { Header } from '@/widgets/header';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AntdRegistry>
                    <ConfigProvider>
                        <BaseLayout header={<Header />}>
                            <div className={styles.wrapper}>{children}</div>
                        </BaseLayout>
                    </ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}

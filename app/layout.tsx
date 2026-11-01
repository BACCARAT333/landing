import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Мини-лендинг',
    description: 'Статический лендинг на Next.js App Router',
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}

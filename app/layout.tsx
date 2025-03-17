import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MyLayout from '@/components/MyLayout';
import { SidebarContextProvider } from '@/lib/contexts/SidebarContext';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Gaming Realm',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div style={{ marginTop: '3.5rem', marginLeft: '7.5rem' }}>
                    <SidebarContextProvider>
                        <MyLayout>{children}</MyLayout>
                    </SidebarContextProvider>
                </div>
            </body>
        </html>
    );
}

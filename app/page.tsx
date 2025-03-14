// import Navbar from '@/components/Navbar';

import MainCarousel from '@/components/MainCarousel';
import TopBar from '@/components/TopBar';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <Navbar /> */}
            <TopBar />
            <MainCarousel />
            Home
        </main>
    );
}

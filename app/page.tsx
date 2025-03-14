// import Navbar from '@/components/Navbar';

import GamesListCarousel from '@/components/Games/GamesListCarousel';
import MainCarousel from '@/components/MainCarousel';
import TopBar from '@/components/TopBar';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <TopBar />
            <MainCarousel />
            <GamesListCarousel />
        </main>
    );
}

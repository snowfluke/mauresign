/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { RecentPosts } from "./components/RecentPosts";
import { ToxicLeaderboard } from "./components/ToxicLeaderboard";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-ink selection:bg-brand selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ToxicLeaderboard />
        <RecentPosts />
      </main>
      <Footer />
    </div>
  );
}

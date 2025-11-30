"use client";

import React, { useState, useEffect, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import Header from "./Header";
import Footer from "./Footer";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isAppLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isAppLoading && <LoadingScreen />}</AnimatePresence>

      {!isAppLoading && (
        <>
          <Header />
          <Suspense fallback={<LoadingScreen />}>
            <main className="min-h-screen bg-white pt-20">{children}</main>
          </Suspense>
          <Footer />
        </>
      )}
    </>
  );
};

export default AppWrapper;
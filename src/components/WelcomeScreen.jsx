import React, { useState, useEffect } from "react";

const WelcomeScreen = ({ onFinish }) => {
    useEffect(() => {
        // Menunggu 3 detik sebelum melanjutkan ke halaman utama
        const timer = setTimeout(() => {
            onFinish(); // Panggil onFinish setelah 3 detik
        }, 3000);

        return () => clearTimeout(timer); // Membersihkan timer saat komponen di-unmount
    }, [onFinish]);

    return (
        <div className="flex items-center justify-center h-screen bg-blue-500 text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Welcome to My App!</h1>
                <p className="mt-4">We are glad to have you here.</p>
            </div>
        </div>
    );
};

export default WelcomeScreen;

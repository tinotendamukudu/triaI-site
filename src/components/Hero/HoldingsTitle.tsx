'use client';

import { useState, useEffect } from 'react';

export default function HoldingsTitle() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [phase, setPhase] = useState('typing1'); // typing1, typing2, waiting, deleting

    const FULL_TEXT1 = "NMBZ Holdings";
    const FULL_TEXT2 = "Limited";

    useEffect(() => {
        let timer: NodeJS.Timeout;

        // Helper to get random speed for natural feel
        const typeSpeed = () => Math.random() * 50 + 50;
        const deleteSpeed = 30;

        switch(phase) {
            case 'typing1':
                if (text1.length < FULL_TEXT1.length) {
                    timer = setTimeout(() => {
                        setText1(FULL_TEXT1.slice(0, text1.length + 1));
                    }, typeSpeed());
                } else {
                    // Move to second line immediately or with tiny pause
                    timer = setTimeout(() => setPhase('typing2'), 200);
                }
                break;

            case 'typing2':
                if (text2.length < FULL_TEXT2.length) {
                    timer = setTimeout(() => {
                        setText2(FULL_TEXT2.slice(0, text2.length + 1));
                    }, typeSpeed());
                } else {
                    setPhase('waiting');
                }
                break;

            case 'waiting':
                // Wait before starting to delete
                timer = setTimeout(() => setPhase('deleting'), 4000);
                break;

            case 'deleting':
                // Delete logic: "starting from the back... at once"
                // Let's delete both but prioritize Limited effectively clearing first content-wise
                // Or sequential reverse to be safe and clean.
                // Converting "at once" interpretation: Maybe they delete together?
                // Let's try deleting text2 first, then text1.
                
                if (text2.length > 0) {
                    timer = setTimeout(() => {
                        setText2(text2.slice(0, -1));
                    }, deleteSpeed);
                } else if (text1.length > 0) {
                    timer = setTimeout(() => {
                        setText1(text1.slice(0, -1));
                    }, deleteSpeed);
                } else {
                    // Both empty, restart
                    timer = setTimeout(() => setPhase('typing1'), 500);
                }
                break;
        }

        return () => clearTimeout(timer);
    }, [text1, text2, phase]);

    // Calculate cursor position
    const showCursor1 = phase === 'typing1' || (phase === 'deleting' && text2.length === 0 && text1.length > 0);
    const showCursor2 = phase === 'typing2' || phase === 'waiting' || (phase === 'deleting' && text2.length > 0);

    return (
        <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] min-h-[130px] md:min-h-[180px]">
            <span>
                {text1}
                {showCursor1 && <span className="animate-pulse ml-1 inline-block bg-gray-900 w-1 md:w-2 h-[0.8em] align-middle"></span>}
            </span>
            <br />
            <span className="text-secondary">
                {text2}
                {showCursor2 && <span className="animate-pulse ml-1 inline-block bg-secondary w-1 md:w-2 h-[0.8em] align-middle"></span>}
            </span>
        </h1>
    );
}

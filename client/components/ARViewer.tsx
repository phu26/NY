// @ts-nocheck
"use client";

import React, { useEffect, useRef } from 'react';
import '@google/model-viewer';
import { View } from 'lucide-react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src?: string;
                poster?: string;
                alt?: string;
                ar?: boolean;
                'ar-modes'?: string;
                'camera-controls'?: boolean;
                'auto-rotate'?: boolean;
                'shadow-intensity'?: string;
                ref?: any;
            };
        }
    }
}

interface ARViewerProps {
    src: string;
    poster?: string;
    alt: string;
    className?: string;
}

const ARViewer = ({ src, poster, alt, className = "w-full h-full" }: ARViewerProps) => {
    const viewerRef = useRef<any>(null);

    useEffect(() => {
        // Optional: Log errors or status if needed
        const viewer = viewerRef.current;
        if (viewer) {
            viewer.addEventListener('error', (event: any) => {
                console.error('Model Viewer Error:', event.detail);
            });
        }
    }, []);

    return (
        <div className={`relative ${className}`}>
            {/* @ts-ignore */}
            <model-viewer
                ref={viewerRef}
                src={src}
                poster={poster}
                alt={alt}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
            >
                <div slot="progress-bar"></div>
            </model-viewer>

            {/* Custom AR Button - Rendered outside to force visibility */}
            <button
                onClick={() => viewerRef.current?.activateAR()}
                className="absolute bottom-4 right-4 bg-[#3F3127] text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-[#5a4638] transition-all transform hover:scale-105 z-50 font-medium text-sm"
            >
                <View size={20} />
                View in your space
            </button>
        </div>
    );
};

export default ARViewer;

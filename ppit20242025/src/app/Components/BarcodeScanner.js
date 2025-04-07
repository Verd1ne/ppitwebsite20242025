'use client';

import { useEffect, useRef, useState } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';
import { useRouter } from 'next/navigation';

export default function BarcodeScanner() {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const codeReader = useRef(null);
  const streamRef = useRef(null);
  const isScanningRef = useRef(false);
  const hasNavigatedRef = useRef(false);

  useEffect(() => {
    const initializeScanner = async () => {
      try {
        codeReader.current = new BrowserQRCodeReader();
        
        // First, request camera permissions using getUserMedia
        streamRef.current = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: 'environment',
            width: { ideal: 320 },
            height: { ideal: 240 },
            frameRate: { ideal: 15 }
          } 
        });
        
        if (!videoRef.current) {
          throw new Error('Video element not found');
        }

        // Set the video stream to the video element
        videoRef.current.srcObject = streamRef.current;
        
        // Wait for video to be ready
        await new Promise((resolve, reject) => {
          if (!videoRef.current) {
            reject(new Error('Video element not found'));
            return;
          }

          videoRef.current.onloadedmetadata = () => {
            resolve();
          };

          videoRef.current.onerror = (err) => {
            reject(new Error('Failed to load video'));
          };
        });

        // Get video input devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        
        if (videoDevices.length === 0) {
          throw new Error('No camera devices found');
        }

        // Use the first video device
        const selectedDeviceId = videoDevices[0].deviceId;
        
        // Start scanning
        await codeReader.current.decodeFromVideoDevice(
          selectedDeviceId,
          videoRef.current,
          async (result, error) => {
            if (result && !isScanningRef.current && !hasNavigatedRef.current) {
              isScanningRef.current = true;
              setIsScanning(true);
              try {
                // Extract the ID from the URL
                const url = new URL(result.text);
                const participantId = url.pathname.split('/').pop();
                
                // Mark as navigated to prevent multiple navigations
                hasNavigatedRef.current = true;
                
                // Stop the camera stream immediately
                if (streamRef.current) {
                  const tracks = streamRef.current.getTracks();
                  tracks.forEach(track => track.stop());
                }
                
                // Clear the video element
                if (videoRef.current) {
                  videoRef.current.srcObject = null;
                }

                // Show loading state
                setIsLoading(true);
                
                // Fetch participant data to verify it exists
                try {
                  const response = await fetch(
                    `${process.env.NEXT_PUBLIC_SCRIPT_URL}?id=${participantId}`
                  );
                  const data = await response.json();
                  
                  if (data.error) {
                    throw new Error(data.error);
                  }
                  
                  // Navigate to the participant page
                  router.push(`/participant/${participantId}`);
                } catch (err) {
                  setError(`Failed to fetch participant data: ${err.message}`);
                  setIsLoading(false);
                  isScanningRef.current = false;
                  setIsScanning(false);
                  hasNavigatedRef.current = false;
                }
              } catch (err) {
                // Silently handle URL parsing errors
                isScanningRef.current = false;
                setIsScanning(false);
              }
            }
          }
        );
        
        setIsInitialized(true);
      } catch (err) {
        setError(`Failed to initialize camera: ${err.message}`);
      }
    };

    initializeScanner();

    // Cleanup function
    return () => {
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        tracks.forEach(track => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [router]);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative w-full" style={{ aspectRatio: '1' }}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            style={{ transform: 'scaleX(-1)' }}
            playsInline
            autoPlay
            muted
          />
          {isScanning && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <div className="text-white text-xl font-semibold">QR Code Detected!</div>
            </div>
          )}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                <div className="text-white text-xl font-semibold">Loading participant data...</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="text-center mt-4 text-gray-600">
        Position the barcode in the center of the camera
      </p>
    </div>
  );
} 
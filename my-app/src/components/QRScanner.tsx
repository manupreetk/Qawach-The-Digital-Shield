import React, { useState } from 'react';
import { QrCode, Camera, Search, CheckCircle, AlertTriangle } from 'lucide-react';

export default function QRScanner() {
  const [scanResult, setScanResult] = useState<'authentic' | 'suspicious' | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setScanResult('authentic');
    }, 2000);
  };

  return (
    <section id="scanner" className="py-20 bg-gradient-to-br from-warm-brown-50 to-earth-tan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown-900 mb-4">
            Verify Authenticity
          </h2>
          <p className="text-lg text-warm-brown-700 max-w-2xl mx-auto">
            Scan any QR code to instantly verify if a piece is authentic and learn its story
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-earth-tan-200">
                <div className="text-center">
                  <div className="w-32 h-32 bg-sage-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    {isScanning ? (
                      <div className="animate-pulse">
                        <Camera className="h-16 w-16 text-sage-green-600" />
                      </div>
                    ) : (
                      <QrCode className="h-16 w-16 text-sage-green-600" />
                    )}
                  </div>
                  
                  {!scanResult && !isScanning && (
                    <>
                      <h3 className="text-xl font-semibold text-warm-brown-900 mb-4">
                        Ready to Scan
                      </h3>
                      <p className="text-warm-brown-700 mb-6">
                        Click the button below to start scanning a QR code on any craft piece
                      </p>
                      <button 
                        onClick={handleScan}
                        className="px-8 py-3 bg-sage-green-600 text-white rounded-lg hover:bg-sage-green-700 transition-all flex items-center space-x-2 mx-auto"
                      >
                        <Camera className="h-5 w-5" />
                        <span>Start Scanning</span>
                      </button>
                    </>
                  )}
                  
                  {isScanning && (
                    <>
                      <h3 className="text-xl font-semibold text-warm-brown-900 mb-4">
                        Scanning...
                      </h3>
                      <p className="text-warm-brown-700 mb-6">
                        Analyzing QR code and verifying authenticity
                      </p>
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-green-600"></div>
                      </div>
                    </>
                  )}
                  
                  {scanResult === 'authentic' && (
                    <div className="text-center">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-green-700 mb-4">
                        Authentic Piece Verified!
                      </h3>
                      <div className="bg-green-50 rounded-lg p-4 text-left">
                        <div className="space-y-2">
                          <p><span className="font-medium">Artisan:</span> Fatima Al-Zahra</p>
                          <p><span className="font-medium">Origin:</span> Fez, Morocco</p>
                          <p><span className="font-medium">Created:</span> March 2024</p>
                          <p><span className="font-medium">Technique:</span> Traditional Glazing</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setScanResult(null)}
                        className="mt-4 px-6 py-2 bg-sage-green-600 text-white rounded-lg hover:bg-sage-green-700 transition-all"
                      >
                        Scan Another
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <QrCode className="h-6 w-6 text-sage-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-warm-brown-900 mb-2">Instant Verification</h3>
                    <p className="text-warm-brown-700">
                      Simply scan the QR code to immediately verify if a piece is authentic or potentially copied
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-tan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-earth-tan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-warm-brown-900 mb-2">Complete Story</h3>
                    <p className="text-warm-brown-700">
                      Learn about the artisan, their techniques, cultural background, and the creation process
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-warm-brown-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-warm-brown-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-warm-brown-900 mb-2">Blockchain Proof</h3>
                    <p className="text-warm-brown-700">
                      Each verification is backed by immutable blockchain records that cannot be forged
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
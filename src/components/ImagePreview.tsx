import React, { useState } from 'react';
import { Download, ArrowLeftRight } from 'lucide-react';

interface ImagePreviewProps {
  originalSrc: string | null;
  convertedSrc: string | null;
  showComparison: boolean;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  originalSrc, 
  convertedSrc,
  showComparison 
}) => {
  const [compareMode, setCompareMode] = useState(false);

  const handleDownload = () => {
    if (convertedSrc) {
      const a = document.createElement('a');
      a.href = convertedSrc;
      a.download = 'converted-image.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  if (!originalSrc) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">
          {compareMode ? 'Comparison View' : 'Preview'}
        </h3>
        <div className="flex space-x-2">
          {convertedSrc && (
            <>
              <button
                onClick={() => setCompareMode(!compareMode)}
                className="flex items-center space-x-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ArrowLeftRight className="h-4 w-4" />
                <span>Compare</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download PNG</span>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {compareMode && convertedSrc ? (
          <div className="grid grid-cols-2 gap-px bg-gray-200">
            <div className="bg-white p-2">
              <p className="text-xs text-gray-500 mb-1">Original (WebP)</p>
              <div className="relative pb-[56.25%]">
                <img 
                  src={originalSrc} 
                  alt="Original" 
                  className="absolute h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="bg-white p-2">
              <p className="text-xs text-gray-500 mb-1">Converted (PNG)</p>
              <div className="relative pb-[56.25%]">
                <img 
                  src={convertedSrc} 
                  alt="Converted" 
                  className="absolute h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative pb-[56.25%] bg-gray-100">
            <img 
              src={convertedSrc || originalSrc} 
              alt="Preview" 
              className="absolute h-full w-full object-contain"
            />
          </div>
        )}
      </div>

      {convertedSrc && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Conversion Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Original Format</p>
              <p className="text-sm font-medium">WebP</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Converted Format</p>
              <p className="text-sm font-medium">PNG</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
import React from 'react';
import { Settings, CheckCircle } from 'lucide-react';
import { ConversionSettings as SettingsType } from '../types';

interface ConversionSettingsProps {
  settings: SettingsType;
  onSettingsChange: (settings: SettingsType) => void;
}

export const ConversionSettings: React.FC<ConversionSettingsProps> = ({
  settings,
  onSettingsChange,
}) => {
  const handleCompressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    onSettingsChange({
      ...settings,
      compression: value,
    });
  };

  const handleLosslessModeChange = () => {
    onSettingsChange({
      ...settings,
      losslessMode: !settings.losslessMode,
      // Force compression to 1.0 when lossless mode is enabled
      compression: !settings.losslessMode ? 1.0 : settings.compression,
    });
  };

  // Convert compression value to percentage for display
  const compressionPercentage = Math.round(settings.compression * 100);

  return (
    <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Settings className="h-4 w-4 text-gray-500" />
        <h3 className="text-base font-medium text-gray-900">Conversion Settings</h3>
      </div>

      <div className="space-y-4">
        <div className={`transition-opacity duration-200 ${settings.losslessMode ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="compression" className="text-sm font-medium text-gray-700">
              Compression Quality
            </label>
            <span className="text-sm text-gray-500">{compressionPercentage}%</span>
          </div>
          <input
            id="compression"
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={settings.compression}
            onChange={handleCompressionChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 disabled:opacity-50"
            disabled={settings.losslessMode}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Lower Quality</span>
            <span>Higher Quality</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleLosslessModeChange}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              settings.losslessMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.losslessMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <label className="text-sm font-medium text-gray-700 cursor-pointer" onClick={handleLosslessModeChange}>
            Professional Lossless Mode
          </label>
        </div>

        {settings.losslessMode && (
          <div className="flex items-start space-x-2 bg-blue-50 text-blue-800 p-3 rounded-md text-sm mt-2">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p>
              Lossless mode enabled. This will preserve all image data for the highest possible quality conversion but may result in larger file sizes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
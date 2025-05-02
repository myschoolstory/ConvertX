import React, { useState, useRef, useCallback } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { ImagePreview } from './ImagePreview';
import { ConversionSettings } from './ConversionSettings';
import { ConverterState, ConversionSettings as SettingsType } from '../types';
import { convertImage } from '../utils/imageConverter';

export const FileUploader: React.FC = () => {
  const [state, setState] = useState<ConverterState>({
    originalFile: null,
    originalPreview: null,
    convertedPreview: null,
    converting: false,
    errorMessage: null,
    showComparison: false,
  });

  const [settings, setSettings] = useState<SettingsType>({
    compression: 0.8,
    losslessMode: false,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);

  const handleFileSelect = useCallback(async (files: FileList | null) => {
    if (!files || !files.length) return;
    
    const file = files[0];
    
    // Check if file is a WebP, JPG, or JPEG
    if (!file.type.includes('webp') && !file.type.includes('jpeg') && !file.type.includes('jpg')) {
      setState((prev) => ({
        ...prev,
        errorMessage: 'Please upload a WebP, JPG, or JPEG image file.',
      }));
      return;
    }

    // Reset state
    setState({
      originalFile: file,
      originalPreview: URL.createObjectURL(file),
      convertedPreview: null,
      converting: true,
      errorMessage: null,
      showComparison: false,
    });

    try {
      // Convert image
      const result = await convertImage(file, settings);
      
      setState((prev) => ({
        ...prev,
        convertedPreview: result,
        converting: false,
        showComparison: true,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        errorMessage: 'Error converting image. Please try again.',
        converting: false,
      }));
    }
  }, [settings]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.add('bg-blue-50', 'border-blue-300');
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove('bg-blue-50', 'border-blue-300');
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove('bg-blue-50', 'border-blue-300');
    }
    handleFileSelect(e.dataTransfer.files);
  }, [handleFileSelect]);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files);
  };

  const handleReset = () => {
    setState({
      originalFile: null,
      originalPreview: null,
      convertedPreview: null,
      converting: false,
      errorMessage: null,
      showComparison: false,
    });
  };

  const handleSettingsChange = (newSettings: SettingsType) => {
    setSettings(newSettings);
    
    // Reconvert if we already have a file
    if (state.originalFile) {
      handleFileSelect(new DataTransfer().files);
    }
  };

  return (
    <div className="w-full">
      {!state.originalFile ? (
        <div 
          ref={dropAreaRef}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 transition-colors duration-200 ease-in-out"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-6 py-6">
            <div className="rounded-full bg-blue-50 p-4">
              <Upload className="h-10 w-10 text-blue-600" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-medium text-gray-900">Drag and drop your WebP image here</h3>
              <p className="text-sm text-gray-500">or</p>
            </div>
            <button 
              onClick={handleButtonClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Select File
            </button>
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/webp"
              className="hidden" 
              onChange={handleInputChange}
            />
            <p className="text-xs text-gray-400">Supports WebP images</p>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium text-gray-900">
              {state.errorMessage ? 'Error' : state.converting ? 'Converting...' : 'Image Preview'}
            </h2>
            <button 
              onClick={handleReset}
              className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors"
            >
              <X className="h-4 w-4" />
              <span>Clear</span>
            </button>
          </div>
          
          {state.errorMessage ? (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
              {state.errorMessage}
            </div>
          ) : state.converting ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              <ConversionSettings 
                settings={settings} 
                onSettingsChange={handleSettingsChange} 
              />
              
              <ImagePreview 
                originalSrc={state.originalPreview} 
                convertedSrc={state.convertedPreview}
                showComparison={state.showComparison}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};
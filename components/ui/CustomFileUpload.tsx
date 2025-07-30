import React, {
  useState,
  useRef,
  ChangeEvent,
  DragEvent,
  MouseEvent,
} from 'react';

import { LuUpload, LuX, LuImage, LuFileText } from 'react-icons/lu';

interface CustomFileUploadProps {
  onFileSelect?: (files: File[]) => void;
  accept?: string;
  maxSize?: number; // in bytes
  maxFiles?: number;
  multiple?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
}

const CustomFileUpload: React.FC<CustomFileUploadProps> = ({
  onFileSelect,
  accept = 'image/*',
  maxSize = 10 * 1024 * 1024, // 10MB default
  maxFiles = 5,
  multiple = false,
  required = false,
  name = 'image',
  id = 'image-input',
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string => {
    if (maxSize && file.size > maxSize) {
      return `File "${file.name}" is too large. Maximum size is ${formatFileSize(maxSize)}`;
    }

    if (
      accept &&
      !accept.split(',').some((type) => {
        const trimmedType = type.trim();
        if (trimmedType.startsWith('.')) {
          return file.name.toLowerCase().endsWith(trimmedType.toLowerCase());
        }
        return file.type.match(trimmedType.replace('*', '.*'));
      })
    ) {
      return `File "${file.name}" type is not supported`;
    }

    return '';
  };

  const validateFiles = (files: File[]): string => {
    if (multiple && files.length > maxFiles) {
      return `Maximum ${maxFiles} files allowed`;
    }

    for (const file of files) {
      const error = validateFile(file);
      if (error) return error;
    }

    return '';
  };

  const handleFilesSelect = (newFiles: File[]): void => {
    let filesToAdd: File[];

    if (multiple) {
      // For multiple files, add to existing or replace if over limit
      const combined = [...selectedFiles, ...newFiles];
      filesToAdd = combined.slice(0, maxFiles);
    } else {
      // For single file, replace existing
      filesToAdd = [newFiles[0]];
    }

    const validationError = validateFiles(filesToAdd);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setSelectedFiles(filesToAdd);
    onFileSelect?.(filesToAdd);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFilesSelect(Array.from(files));
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFilesSelect(Array.from(files));
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleClick = (): void => {
    fileInputRef.current?.click();
  };

  const handleRemove =
    (indexToRemove: number) =>
    (e: MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      const updatedFiles = selectedFiles.filter(
        (_, index) => index !== indexToRemove
      );
      setSelectedFiles(updatedFiles);
      setError('');
      onFileSelect?.(updatedFiles);

      if (updatedFiles.length === 0 && fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

  const handleRemoveAll = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setSelectedFiles([]);
    setError('');
    onFileSelect?.([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <LuImage className='w-6 h-6 text-blue-600' />;
    }
    return <LuFileText className='w-6 h-6 text-gray-600' />;
  };

  return (
    <div className='relative w-full mx-auto'>
      <label
        htmlFor={id}
        className='absolute left-3 -top-2 bg-white px-1 text-xs md:text-sm text-gray-500 z-10'
      >
        {multiple
          ? `Image Upload (${selectedFiles.length}/${maxFiles})`
          : 'Image Upload'}
      </label>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type='file'
        name={name}
        id={id}
        onChange={handleChange}
        accept={accept}
        multiple={multiple}
        className='hidden'
        required={required}
      />

      {/* Custom upload area */}
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
            relative w-full p-6 rounded-lg border-2 border-dashed cursor-pointer
            transition-all duration-200 ease-in-out
            ${
              isDragOver
                ? 'border-blue-400 bg-blue-50'
                : selectedFiles.length > 0
                  ? 'border-green-400 bg-green-50'
                  : error
                    ? 'border-red-400 bg-red-50'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }
          `}
      >
        {selectedFiles.length > 0 ? (
          // Files selected state
          <div className='space-y-3'>
            {/* Header with remove all button for multiple files */}
            {multiple && selectedFiles.length > 1 && (
              <div className='flex justify-between items-center pb-2 border-b border-gray-200'>
                <span className='text-sm font-medium text-gray-700'>
                  {selectedFiles.length} file
                  {selectedFiles.length !== 1 ? 's' : ''} selected
                </span>
                <button
                  type='button'
                  onClick={handleRemoveAll}
                  className='text-xs text-red-600 hover:text-red-800 transition-colors'
                >
                  Remove all
                </button>
              </div>
            )}

            {/* File list */}
            <div className='space-y-2 max-h-40 overflow-y-auto'>
              {selectedFiles.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className='flex items-center space-x-3'
                >
                  <div className='flex-shrink-0'>{getFileIcon(file)}</div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-gray-900 truncate'>
                      {file.name}
                    </p>
                    <p className='text-xs text-gray-500'>
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                  <button
                    type='button'
                    onClick={handleRemove(index)}
                    className='flex-shrink-0 p-1 rounded-full hover:bg-red-100 transition-colors'
                    aria-label={`Remove ${file.name}`}
                  >
                    <LuX className='w-4 h-4 text-red-500' />
                  </button>
                </div>
              ))}
            </div>

            {/* Add more files button for multiple uploads */}
            {multiple && selectedFiles.length < maxFiles && (
              <div className='pt-2 border-t border-gray-200'>
                <p className='text-xs text-blue-600 text-center'>
                  Click or drag to add more files
                </p>
              </div>
            )}
          </div>
        ) : (
          // Default state
          <div className='text-center'>
            <LuUpload
              className={`mx-auto w-8 h-8 mb-2 ${isDragOver ? 'text-blue-500' : error ? 'text-red-400' : 'text-gray-400'}`}
            />
            <div className='text-sm text-gray-600'>
              <span className='font-medium text-blue-600 hover:text-blue-500'>
                Click to upload
              </span>
              <span> or drag and drop</span>
            </div>
            <p className='text-xs text-gray-500 mt-1'>
              {multiple
                ? `Up to ${maxFiles} files, max ${formatFileSize(maxSize)} each`
                : `Max ${formatFileSize(maxSize)}`}
            </p>
          </div>
        )}
      </div>

      {/* Error message */}
      {error && <p className='mt-2 text-xs text-red-600'>{error}</p>}

      {/* Progress bar (optional) */}
      {selectedFiles.length > 0 && !error && (
        <div className='mt-2'>
          <div className='w-full bg-gray-200 rounded-full h-1'>
            <div className='bg-green-500 h-1 rounded-full w-full transition-all duration-300'></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomFileUpload;

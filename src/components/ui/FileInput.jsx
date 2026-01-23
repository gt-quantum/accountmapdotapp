import { forwardRef, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FileInput = forwardRef(function FileInput({
  label,
  hint,
  error,
  accept,
  multiple = false,
  maxSize, // in bytes
  disabled = false,
  required = false,
  onChange,
  onError,
  variant = 'default',
  className = '',
  containerClassName = '',
  ...props
}, ref) {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList);

    // Validate file size
    if (maxSize) {
      const oversized = newFiles.filter(f => f.size > maxSize);
      if (oversized.length > 0) {
        onError?.(`File(s) exceed maximum size of ${formatBytes(maxSize)}`);
        return;
      }
    }

    setFiles(multiple ? [...files, ...newFiles] : newFiles);
    onChange?.(multiple ? [...files, ...newFiles] : newFiles);
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (!disabled) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange?.(newFiles);
  };

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  if (variant === 'dropzone') {
    return (
      <div className={containerClassName}>
        {label && (
          <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={openFilePicker}
          className={`
            relative border-2 border-dashed rounded-xl p-8
            transition-colors cursor-pointer
            ${isDragging
              ? 'border-green-main bg-green-lightest dark:bg-green-dark/20'
              : error
                ? 'border-red-300 dark:border-red-700'
                : 'border-stone-300 dark:border-stone-600 hover:border-stone-400 dark:hover:border-stone-500'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${className}
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleChange}
            className="sr-only"
            {...props}
          />

          <div className="text-center">
            <svg
              className={`mx-auto w-12 h-12 ${isDragging ? 'text-green-main' : 'text-stone-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">
              <span className="font-medium text-green-dark dark:text-green-light">
                Click to upload
              </span>
              {' '}or drag and drop
            </p>
            {accept && (
              <p className="mt-1 text-xs text-stone-500">
                {accept}
              </p>
            )}
            {maxSize && (
              <p className="text-xs text-stone-500">
                Max size: {formatBytes(maxSize)}
              </p>
            )}
          </div>
        </div>

        {/* File list */}
        <AnimatePresence>
          {files.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-2"
            >
              {files.map((file, index) => (
                <motion.li
                  key={`${file.name}-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-stone-100 dark:bg-stone-800"
                >
                  <FileIcon filename={file.name} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-stone-900 dark:text-stone-100 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-stone-500">
                      {formatBytes(file.size)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                    className="p-1 rounded hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {(error || hint) && (
          <p className={`mt-1.5 text-sm ${error ? 'text-red-500' : 'text-stone-500 dark:text-stone-400'}`}>
            {error || hint}
          </p>
        )}
      </div>
    );
  }

  // Default variant - simple file input
  return (
    <div className={containerClassName}>
      {label && (
        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        ref={ref}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        className={`
          block w-full text-sm text-stone-600 dark:text-stone-400
          file:mr-4 file:py-2 file:px-4
          file:rounded-lg file:border-0
          file:text-sm file:font-medium
          file:bg-green-lightest file:text-green-dark
          dark:file:bg-green-dark/20 dark:file:text-green-light
          file:cursor-pointer
          hover:file:bg-green-light dark:hover:file:bg-green-dark/30
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      />

      {(error || hint) && (
        <p className={`mt-1.5 text-sm ${error ? 'text-red-500' : 'text-stone-500 dark:text-stone-400'}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

function FileIcon({ filename }) {
  const ext = filename.split('.').pop()?.toLowerCase();
  const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext);
  const isPdf = ext === 'pdf';

  return (
    <div className={`
      w-10 h-10 rounded-lg flex items-center justify-center
      ${isImage ? 'bg-purple-100 text-purple-600' : isPdf ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}
    `}>
      {isImage ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )}
    </div>
  );
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export default FileInput;

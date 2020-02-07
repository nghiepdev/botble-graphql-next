import React from 'react';

const TopHead = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-2 sm:px-0">
        <div className="flex h-10 justify-between">
          <div className="flex items-center">
            <a href="/" className="text-blue-700">
              <span
                className="iconify text-2xl"
                data-icon="mdi:facebook"></span>
            </a>
            <a href="/" className="inline-block ml-3 text-blue-600">
              <span className="iconify text-2xl" data-icon="mdi:twitter"></span>
            </a>
            <a
              href="https://github.com/nghiepit"
              className="inline-block ml-3"
              target="_blank"
              rel="noopener noreferrer">
              <span className="iconify text-2xl" data-icon="mdi:github"></span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span
                className="iconify"
                data-icon="mdi:login"
                data-height="16"></span>
              <span className="inline-block ml-1">Đăng nhập</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHead;

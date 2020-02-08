import React from 'react';
import {Icon} from '@iconify/react';
import facebookIcon from '@iconify/icons-mdi/facebook';
import twitterIcon from '@iconify/icons-mdi/twitter';
import githubIcon from '@iconify/icons-mdi/github';
import loginIcon from '@iconify/icons-mdi/login';

const TopHead = () => {
  return (
    <div className="bg-gray-200">
      <div className="container container-fluid px-2 lg:px-0">
        <div className="flex h-10 justify-between">
          <div className="flex items-center">
            <a href="/" className="text-blue-700">
              <Icon icon={facebookIcon} className="text-2xl" />
            </a>
            <a href="/" className="inline-block ml-3 text-blue-600">
              <Icon icon={twitterIcon} className="text-2xl" />
            </a>
            <a
              href="https://github.com/nghiepit"
              className="inline-block ml-3"
              target="_blank"
              rel="noopener noreferrer">
              <Icon icon={githubIcon} className="text-2xl" />
            </a>
          </div>
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Icon icon={loginIcon} height="16" />
              <span className="inline-block ml-1">Đăng nhập</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHead;

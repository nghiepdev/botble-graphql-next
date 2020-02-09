import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <section className="w-64">
      <div>
        <h4 className="underline-title">Từ khóa</h4>
        <div className="text-white font-medium text-xs">
          <a
            href="/"
            className="inline-block bg-fresh-red px-2 py-1 tracking-tight mr-2 mb-2">
            Virus Corona
          </a>
          <a
            href="/"
            className="inline-block bg-fresh-red px-2 py-1 tracking-tight mr-2 mb-2">
            Quần què
          </a>
          <a
            href="/"
            className="inline-block bg-fresh-red px-2 py-1 tracking-tight mr-2 mb-2">
            Tuấn khỉ xả súng
          </a>
          <a
            href="https://12bay.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-fresh-red px-2 py-1 tracking-tight mr-2 mb-2">
            Săn vé máy bay giá rẻ
          </a>
          <a
            href="/"
            className="inline-block bg-fresh-red px-2 py-1 tracking-tight mr-2">
            Áo cũng què
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="underline-title">Danh mục</h4>
        <ul>
          <li>
            <Link href="/c/[slug]" as="/c/the-gioi">
              <a>Thế giới</a>
            </Link>
          </li>
          <li className="mt-3">
            <Link href="/c/[slug]" as="/c/xa-hoi">
              <a>Xã hội</a>
            </Link>
          </li>
          <li className="mt-3">
            <Link href="/c/[slug]" as="/c/van-hoa">
              <a>Văn hóa</a>
            </Link>
          </li>
          <li className="mt-3">
            <Link href="/c/[slug]" as="/c/kinh-te">
              <a>Kinh tế</a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;

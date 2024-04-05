import React from 'react'


export default function SkeletonCard(){ 
return (
    <div className="rounded-md border animate-pulse">
      <div className="rounded-md border">
        <div className="aspect-[16/9] w-full bg-gray-300 rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]" />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold bg-gray-300 h-7 w-2/3 mb-2" />
          <p className="mt-3 text-sm text-gray-600 bg-gray-200 h-4 w-full" />
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900 h-5 w-20" />
          </div>
          <div className="mt-3 flex items-center space-x-2">
            <span className="block text-x1 font-semibold bg-gray-300 h-5 w-16" />
            <span className="block text-x1 bg-gray-200 h-5 w-12" />
            <sub className="text-red-500 h-3 w-10" />
          </div>
          <div className="mt-5 flex items-center space-x-2">
            <span className="block text-sm font-semibold bg-gray-300 h-5 w-16" />
            <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium text-yellow-500 h-5 w-12" />
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-gray-800 text-gray-100 px-2 py-1.5 text-sm font-semibold shadow-sm"
          >
            Loading...
          </button>
        </div>
      </div>
    </div>
  );
}
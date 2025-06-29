'use client';
import React from 'react';

interface RedditPostProps {
  communityIcon: string;
  communityName: string;
  postTime: string;
  visitStatus?: string; 
  title: string;
  content: string;
  upvotes: number;
  comments: number;
  saved: boolean;
}

function RedditPost({
  communityIcon,
  communityName,
  postTime,
  visitStatus,
  title,
  content,
  upvotes,
  comments,
  saved,
}: RedditPostProps) {
  return (
    <div className="rounded-md overflow-hidden border border-gray-200 mb-6"> 
      <div className="flex items-center p-3 sm:p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 flex-grow">
          {communityIcon && (
            <img src={communityIcon} alt="Community Icon" className="w-5 h-5 rounded-full" />
          )}
          <span className="text-sm font-semibold text-gray-800">{communityName}</span>
          <span className="text-xs text-gray-500">• {postTime}</span>
          {visitStatus && ( 
            <span className="text-xs text-gray-500 hidden sm:block">• {visitStatus}</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Post Title */}
      <div className="p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>

      {/* Post Content */}
      <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-gray-700 text-sm leading-relaxed">
        <p>{content}</p>
      </div>

      {/* Post Footer Actions */}
      <div className="flex items-center p-3 sm:p-4 border-t border-gray-200 space-x-2 sm:space-x-4">
        {/* Upvote/Downvote */}
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 space-x-1">
          <button className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 17a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L9 13.586V5a1 1 0 112 0v8.586l3.293-3.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 17z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="text-sm font-semibold text-gray-800">{upvotes}</span>
          <button className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 17a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L9 13.586V5a1 1 0 112 0v8.586l3.293-3.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 17z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Comments */}
        <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-100 rounded-full px-2 py-1 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-sm font-semibold">{comments}</span>
        </button>

        {/* Save */}
        <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-100 rounded-full px-2 py-1 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill={saved ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <span className="text-sm font-semibold">Save</span>
        </button>

        {/* Share */}
        <button className="flex items-center space-x-1 text-gray-700 hover:bg-gray-100 rounded-full px-2 py-1 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6A3 3 0 119 12c0 .482-.114.938-.316 1.342m0-2.684L15.316 6.684m0 0a3 3 0 100-2.684 3 3 0 000 2.684m0 0l-6.632 3.316m0 0A3 3 0 108.684 12c0-.482-.114-.938-.316-1.342M12 12h.01"
            />
          </svg>
          <span className="text-sm font-semibold">Share</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const dummyPosts: RedditPostProps[] = [
    {
      communityIcon: 'https://placehold.co/20x20/000/fff?text=R',
      communityName: 'r/Community Garden 1',
      postTime: '15 hr. ago',
      title: 'Our Tengah Garden Turning Into Mosquito Farm Already!',
      content: `The water trays under the potted plants at Block 224's community garden never get cleared. Can see stagnant water every time I walk past. A lot of mosquitoes already – my kid kena bitten twice last week. 
      Please lah, can someone maintain properly before dengue comes knocking?`,
      upvotes: 2,
      comments: 54,
      saved: false,
    },
    {
      communityIcon: 'https://placehold.co/20x20/000/fff?text=T',
      communityName: 'r/Community Garden 1',
      postTime: '2 hr. ago',
      title: 'Community Garden or Personal Farm?',
      content: `Noticed one resident at Garden Vista hogging three whole plots and even put up a "Do Not Touch" sign. Thought it’s supposed to be shared? Some of us also want to grow veggies but no space already. Can the RC or town council look into fair usage, please?
`,
      upvotes: 1200,
      comments: 345,
      saved: true,
    },

  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-8 font-inter px-16">
      <div className="w-full max-w-screen-lg lg:ml-0 lg:mr-auto">
        {dummyPosts.map((post, index) => (
          <RedditPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

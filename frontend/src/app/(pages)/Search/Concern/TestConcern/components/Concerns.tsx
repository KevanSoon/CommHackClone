"use client"

import { useState, useEffect } from "react"

import type { ConcernItem } from "@/app/api/concerns/lib/data"

interface RedditPostProps {
  id: string
  communityIcon: string
  communityName: string
  postTime: string
  visitStatus?: string
  title: string
  content: string
  upvotes: number | null
  comments: number | null
  saved: boolean
  // Add status properties
  isBeingLookedInto: boolean
  isBeingWorkedOn: boolean
  isResolved: boolean
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
  isBeingLookedInto,
  isBeingWorkedOn,
  isResolved,
}: RedditPostProps) {
  return (
    <div className="rounded-md overflow-hidden border border-gray-200 mb-4 sm:mb-6">
      <div className="flex items-center p-2 sm:p-4 border-b border-gray-200">
        <div className="flex items-center space-x-1 sm:space-x-2 flex-grow min-w-0">
          {communityIcon && (
            <img
              src={communityIcon || "/placeholder.svg"}
              alt="Community Icon"
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex-shrink-0"
            />
          )}
          <span className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{communityName}</span>
          <span className="text-xs text-gray-500 flex-shrink-0">• {postTime}</span>
          {visitStatus && <span className="text-xs text-gray-500 hidden md:block flex-shrink-0">• {visitStatus}</span>}
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
      <div className="p-2 sm:p-4">
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight">{title}</h2>
      </div>

      {/* Post Content */}
      <div className="px-2 sm:px-4 pb-2 sm:pb-4 text-gray-700 text-sm leading-relaxed">
        <p>{content}</p>
      </div>

      {/* Post Footer Actions */}
      <div className="flex items-center justify-between p-2 sm:p-4 border-t border-gray-200">
        <div className="flex items-center space-x-1 sm:space-x-2">
          {/* Upvote/Downvote with Thumbs */}
          <div className="flex items-center bg-gray-100 rounded-full px-1.5 sm:px-2 py-1 space-x-0.5 sm:space-x-1">
            <button
              className="p-0.5 sm:p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
              title="Upvote"
            >
              <span className="text-sm sm:text-lg">👍</span>
            </button>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 min-w-[20px] text-center">{upvotes}</span>
            <button
              className="p-0.5 sm:p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
              title="Downvote"
            >
              <span className="text-sm sm:text-lg">👎</span>
            </button>
          </div>

          {/* Comments */}
          <button className="flex items-center space-x-0.5 sm:space-x-1 text-gray-700 hover:bg-gray-100 rounded-full px-1.5 sm:px-2 py-1 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
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
            <span className="text-xs sm:text-sm font-semibold">{comments}</span>
          </button>
        </div>

        {/* Status Indicators - Only show if status is true */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          {isBeingLookedInto && (
            <button
              className="flex items-center text-gray-700 hover:bg-gray-100 rounded-full p-1 sm:px-2 sm:py-1 transition-colors duration-200"
              title="residential network is looking into it"
            >
              <span className="text-sm sm:text-lg">👁️</span>
            </button>
          )}

          {isBeingWorkedOn && (
            <button
              className="flex items-center text-gray-700 hover:bg-gray-100 rounded-full p-1 sm:px-2 sm:py-1 transition-colors duration-200"
              title="residential network is working on it"
            >
              <span className="text-sm sm:text-lg">🔧</span>
            </button>
          )}

          {isResolved && (
            <button
              className="flex items-center text-gray-700 hover:bg-gray-100 rounded-full p-1 sm:px-2 sm:py-1 transition-colors duration-200"
              title="resolved"
            >
              <span className="text-sm sm:text-lg">✅</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function mapConcernToRedditPost(concern: ConcernItem): RedditPostProps {
  // Determine status based on concern properties
  // You can adjust this logic based on your actual ConcernItem structure
  const isBeingLookedInto = concern.status === "looked-on"
  const isBeingWorkedOn = concern.status === "in-progress" 
  const isResolved = concern.status === "resolved" 

  return {
    id: concern.id,
    communityIcon: `https://placehold.co/20x20/66BB6A/FFFFFF?text=G`,
    communityName: concern.affectedGarden,
    postTime: "Just now",
    visitStatus: concern.acknowledgeSelection ? "Acknowledged" : "Pending Review",
    title: concern.concernTitle,
    content: concern.description,
    upvotes: 0,
    comments: 0,
    saved: false,
    // Add the status mappings
    isBeingLookedInto,
    isBeingWorkedOn,
    isResolved,
  }
}

export default function App() {
  const [redditPosts, setRedditPosts] = useState<RedditPostProps[]>([])

  useEffect(() => {
    // Define an async function inside useEffect to fetch the data
    const fetchConcerns = async () => {
      try {
        // Use the fetch API to make a GET request to your endpoint
        const response = await fetch("/api/concerns")
        if (!response.ok) {
          // If the server responds with an error status (e.g., 404, 500)
          throw new Error("Failed to fetch concerns")
        }
        // Parse the JSON data from the response
        const concernData: ConcernItem[] = await response.json()
        const mappedPosts = concernData.map(mapConcernToRedditPost)
        // CHANGE: Update our state with the newly formatted array of posts.
        setRedditPosts(mappedPosts)

        console.log(redditPosts)
      } catch (err: any) {
      } finally {
      }
    }

    // Call the function to execute the fetch
    fetchConcerns()
  }, []) // The empty dependency array [] means this effect runs only once when the component mounts

  // --- Render logic based on the state ---
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-4 sm:py-8 font-inter px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-screen-lg lg:ml-0 lg:mr-auto">
        {redditPosts.map((post, index) => (
          <RedditPost key={index} {...post} />
        ))}
      </div>
    </div>
  )
}

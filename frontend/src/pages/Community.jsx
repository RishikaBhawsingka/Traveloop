import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Community = () => {
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/journal');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (err) {
        console.error("Failed to fetch community posts", err);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handlePost = async () => {
    if (!currentUser) return alert("Please log in to post.");
    if (!newPostContent.trim()) return;

    setIsPosting(true);
    try {
      const response = await fetch('http://localhost:5000/api/journal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          content: newPostContent, 
          location: 'Global',
          author: { name: currentUser.name || 'Traveler', seed: currentUser.uid }
        })
      });
      if (response.ok) {
        setNewPostContent('');
        // Optimistic update
        setPosts([{
          _id: Date.now().toString(),
          author: { name: currentUser.name || 'Traveler', seed: currentUser.uid },
          location: 'Global',
          content: newPostContent,
          imageUrl: `https://picsum.photos/seed/${Date.now()}/800/400`,
          likes: 0,
          comments: 0,
          timeAgo: 'Just now'
        }, ...posts]);
      }
    } catch (err) {
      alert("Failed to post.");
    }
    setIsPosting(false);
  };

  return (
    <div className="grid md:grid-cols-4 gap-8">
      <div className="md:col-span-1">
        <div className="card p-6 sticky top-6" style={{ position: 'sticky', top: '2rem' }}>
          <h3 className="mb-4">Categories</h3>
          <ul className="flex flex-col gap-3">
            <li style={{ cursor: 'pointer', color: 'var(--primary)', fontWeight: 500 }}>All Posts</li>
            <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }}>My Friends</li>
            <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }}>Trending</li>
            <li style={{ cursor: 'pointer', color: 'var(--text-muted)' }}>Tips & Guides</li>
          </ul>
        </div>
      </div>
      
      <div className="md:col-span-3 flex flex-col gap-6">
        <h1 className="mb-2">Community Feed</h1>
        
        {currentUser && (
          <div className="card p-6 mb-4">
            <textarea 
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Share your travel experiences..." 
              style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', resize: 'none', minHeight: '100px', marginBottom: '1rem' }} 
            />
            <div className="flex justify-end">
              <button onClick={handlePost} disabled={isPosting || !newPostContent.trim()} className="btn btn-primary">
                {isPosting ? 'Posting...' : 'Write a Post'}
              </button>
            </div>
          </div>
        )}

        {loading ? (
          <div>Loading posts...</div>
        ) : (
          posts.map(post => (
            <div key={post._id} className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--border-color)', backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author.seed})`, backgroundSize: 'cover' }}></div>
                <div>
                  <h4 style={{ margin: 0 }}>{post.author.name}</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{post.timeAgo} in {post.location}</span>
                </div>
              </div>
              <p className="mb-4">{post.content}</p>
              <img src={post.imageUrl} alt="Post" style={{ width: '100%', borderRadius: 'var(--radius-md)', maxHeight: '400px', objectFit: 'cover', marginBottom: '1rem' }} />
              <div className="flex gap-4 pt-4" style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <span style={{ cursor: 'pointer' }}>❤️ {post.likes} Likes</span>
                <span style={{ cursor: 'pointer' }}>💬 {post.comments} Comments</span>
                <span style={{ cursor: 'pointer' }}>↗️ Share</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Community;

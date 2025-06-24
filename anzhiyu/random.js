var posts=["2025/06/23/markdown/","2025/06/24/page-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2023/06/20/1/","2023/06/24/2/","2023/05/30/new/","2023/05/27/hello-world/","2023/06/07/html/"];function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};
var posts=["2023/06/20/1/","2023/06/24/2/","2023/06/25/3/","2023/06/27/4/","2023/07/02/5/","2023/05/27/hello-world/","2023/06/07/html/","2023/05/30/new/"];function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};
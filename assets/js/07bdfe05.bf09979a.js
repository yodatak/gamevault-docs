"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[3e3],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var o=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||n;return r?o.createElement(k,i(i({ref:t},c),{},{components:r})):o.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(1163),a=(r(9496),r(9613));const n={sidebar_position:1},i="Setting up a Crackpipe Server",s={unversionedId:"server-docs/setup",id:"server-docs/setup",title:"Setting up a Crackpipe Server",description:"Setting up a Crackpipe server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place.",source:"@site/docs/server-docs/setup.md",sourceDirName:"server-docs",slug:"/server-docs/setup",permalink:"/docs/server-docs/setup",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/server-docs/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configuration",permalink:"/docs/server-docs/configuration"}},p={},l=[{value:"Method 1: Docker Setup",id:"method-1-docker-setup",level:2},{value:"1. Install Docker and Docker Compose",id:"1-install-docker-and-docker-compose",level:3},{value:"2. Create a Docker Compose file",id:"2-create-a-docker-compose-file",level:3},{value:"3. Start the Crackpipe server",id:"3-start-the-crackpipe-server",level:3},{value:"Method 1.1: Docker Setup without PostgreSQL",id:"method-11-docker-setup-without-postgresql",level:4},{value:"Method 2: Caprover One Click App",id:"method-2-caprover-one-click-app",level:2},{value:"Method 3: Portrainer One Click App",id:"method-3-portrainer-one-click-app",level:2},{value:"More Methods",id:"more-methods",level:2},{value:"What Next?",id:"what-next",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-crackpipe-server"},"Setting up a Crackpipe Server"),(0,a.kt)("p",null,"Setting up a Crackpipe server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place."),(0,a.kt)("p",null,"There are many ways to deploy a Crackpipe Server. You can choose one from below."),(0,a.kt)("h2",{id:"method-1-docker-setup"},"Method 1: Docker Setup"),(0,a.kt)("h3",{id:"1-install-docker-and-docker-compose"},"1. Install Docker and Docker Compose"),(0,a.kt)("p",null,"Docker and Docker Compose are recommended to set up the Crackpipe server. If you do not have Docker and Docker Compose installed on your system, follow these steps to install them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker"),": You can download Docker from the official ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker website"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker Compose"),": Docker Compose is already included in the Docker Desktop installation for Windows and macOS users. If you are using Linux, follow the instructions on the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker Compose installation page"),".")),(0,a.kt)("h3",{id:"2-create-a-docker-compose-file"},"2. Create a Docker Compose file"),(0,a.kt)("p",null,"Create a new file named ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," in a directory of your choice and copy the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\nservices:\n  crackpipe-backend:\n    image: phalcode/crackpipe-backend:latest\n    restart: unless-stopped\n    environment:\n      DB_HOST: "db"\n      DB_USERNAME: "default"\n      DB_PASSWORD: "default"\n    volumes:\n      - /your/games/folder:/files\n      - /your/images/folder:/images\n  db:\n    image: postgres:15-alpine\n    restart: unless-stopped\n    environment:\n      POSTGRES_USER: default\n      POSTGRES_PASSWORD: default\n      POSTGRES_DB: crackpipe\n    volumes:\n      - /your/database/folder:/var/lib/postgresql\n    ports:\n      - 5432:5432\n')),(0,a.kt)("h3",{id:"3-start-the-crackpipe-server"},"3. Start the Crackpipe server"),(0,a.kt)("p",null,"Open a terminal, navigate to the directory where the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file is located, and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("p",null,"This will start the Crackpipe server and PostgreSQL server in the background. The ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," parameter detaches the process from the terminal."),(0,a.kt)("p",null,"Congratulations! You have successfully set up a Crackpipe server. You can now start adding games and managing your game library."),(0,a.kt)("h4",{id:"method-11-docker-setup-without-postgresql"},"Method 1.1: Docker Setup without PostgreSQL"),(0,a.kt)("p",null,"We don't recommend it but you can run Crackpipe without a PostgreSQL Database too using the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\nservices:\n  crackpipe-backend:\n    image: phalcode/crackpipe-backend:latest\n    restart: unless-stopped\n    environment:\n      DB_SYSTEM: "SQLITE"\n    volumes:\n      - /your/games/folder:/files\n      - /your/images/folder:/images\n      - /your/sqlite/database/folder:/db\n')),(0,a.kt)("h2",{id:"method-2-caprover-one-click-app"},"Method 2: Caprover One Click App"),(0,a.kt)("p",null,"If you're using ",(0,a.kt)("a",{parentName:"p",href:"https://caprover.com"},"Caprover"),", setting up a Crackpipe Server with a Postgres DB is just a click away."),(0,a.kt)("p",null,"We have already created a Caprover One-Click-App Integration for this purpose. However, our app hasn't gained enough prominence to be included in the official One-Click-App Repository of Caprover. So, we decided to create our own ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Phalcode/caprover-one-click-apps"},"third-party repository"),"."),(0,a.kt)("p",null,"To use it, follow these simple steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to your CapRover dashboard"),(0,a.kt)("li",{parentName:"ol"},'Go to "Apps" and click on "One-Click Apps/Databases." Scroll down to the bottom'),(0,a.kt)("li",{parentName:"ol"},'Under "3rd party repositories", copy and paste the following link: ',(0,a.kt)("inlineCode",{parentName:"li"},"https://phalcode.github.io/caprover-one-click-apps")),(0,a.kt)("li",{parentName:"ol"},'Click the "Connect New Repository" button')),(0,a.kt)("p",null,"Now, all you need to do is search for 'Crackpipe' using the search box and follow the installation wizard."),(0,a.kt)("h2",{id:"method-3-portrainer-one-click-app"},"Method 3: Portrainer One Click App"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Not yet available.")),(0,a.kt)("p",null,"We haven't had the time to create a Portrainer One-Click-App Template yet. But you can help us with it! Talk to us if you are interested."),(0,a.kt)("h2",{id:"more-methods"},"More Methods"),(0,a.kt)("p",null,"We're excited to announce that we're expanding our support for One-Click-App Integrations! In the future, we plan to add more hosting systems to our lineup."),(0,a.kt)("p",null,"We do want to point out that each system has its own unique blueprint syntax, and it can take a bit of time to set up the blueprints of new One-Click-Apps just right."),(0,a.kt)("p",null,"However, we're always looking for passionate individuals to join us in our mission! If you're interested in contributing and setting up a one-click-app for any of these hosting systems, we'd love to have you on board. Together, we can make our platform even more accessible and user-friendly for everyone."),(0,a.kt)("h2",{id:"what-next"},"What Next?"),(0,a.kt)("p",null,"\ud83e\udd73 Congratulations! \ud83e\udd73"),(0,a.kt)("p",null,"To set up and start using server, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configure your server:")," Customize the server settings to meet your specific needs. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-docs/configuration"},"configuration guide")," for detailed instructions.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Add games:")," Prepare your game files in the required format for Crackpipe to identify and install them correctly. Read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-docs/structure"},"structure chapter")," for important information. Once ready, proceed to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-docs/adding-games"},"add your games"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Enhance with Metadata:")," Connect your server to RAWG, the world's largest video game database that Crackpipe utilizes for fetching game metadata. This will enrich your gaming experience. Learn how to establish the connection in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-docs/indexing-and-metadata"},"indexing and metadata guide"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create an admin user:")," Set up an admin user account to gain full administrative access to the application. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-docs/user-management"},"user management guide")," for instructions on setting up the first user."))),(0,a.kt)("p",null,"Enjoy your gaming experience with Crackpipe!"))}u.isMDXComponent=!0}}]);
<div class="markdown prose w-full break-words">
  <h1>My Next App</h1>
  <p>这是一个基于 Next.js 和 Node.js 的全栈项目，使用 PostgreSQL 作为数据库。以下是构建和运行该项目的详细步骤。</p>
  <h2>前提条件</h2>
  <ol>
    <li>
      <strong>操作系统</strong>: Windows 10 或更高版本</li>
    <li>
      <strong>Node.js</strong>: 需要安装 Node.js（建议使用 LTS 版本）。可以从
      <a rel="noreferrer" target="_new" href="https://nodejs.org/">Node.js 官方网站</a>下载并安装。</li>
    <li>
      <strong>PostgreSQL</strong>: 需要安装 PostgreSQL 数据库。可以从
      <a rel="noreferrer" target="_new" href="https://www.postgresql.org/download/">PostgreSQL 官方网站</a>下载并安装。</li>
  </ol>
  <h2>克隆项目</h2>
  <p>首先，从 GitHub 克隆项目仓库：</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span></span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-">git <span class="hljs-built_in">clone</span> https://github.com/xiaoxiaoxiaoxiaoming/my-next-app.git
<span class="hljs-built_in">cd</span> my-next-app
</code></div></div></pre>
  <h2>环境配置</h2>
  <p>在项目根目录下创建一个 <code>.env</code> 文件，并添加以下内容：</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>makefile</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-makefile">DATABASE_USER=datamart
DATABASE_HOST=localhost
DATABASE_NAME=postgres
DATABASE_PASSWORD=datamart
DATABASE_PORT=5432
ORIGIN=http://localhost:3000
PORT=3001
</code></div></div></pre>
  <p>确保 PostgreSQL 数据库已经启动，并且上述配置与您的数据库设置相匹配。</p>
  <h2>安装依赖</h2>
  <p>在克隆的项目目录中，安装所需的依赖包：</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span></span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-">npm install
</code></div></div></pre>
  <h2>数据库初始化</h2>
  <p>在第一次运行项目之前，需要初始化数据库。确保 PostgreSQL 已经运行，然后执行以下命令：</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span></span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-">npx ts-node backend/utils/dbInit.ts
</code></div></div></pre>
  <h2>运行项目</h2>
  <h3>分别启动前后端</h3>
  <ol>
    <li>启动后端：</li>
  </ol><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span></span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-"><span class="hljs-built_in">cd</span> backend
npx ts-node server.ts
</code></div></div></pre>
  <ol start="2">
    <li>启动前端：</li>
  </ol><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span></span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-"><span class="hljs-built_in">cd</span> frontend
npm run dev
</code></div></div></pre>
  <h3>一起启动前后端</h3>
  <p>为了便于调试，也可以一起启动前后端：</p><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span></span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-">npm run dev
</code></div></div></pre>
  <h2>项目结构</h2><pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span></span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg></button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-"><span class="hljs-keyword">my</span>-<span class="hljs-keyword">next</span>-app/
├── backend/              <span class="hljs-comment"># 后端代码</span>
│   ├── dbexec/           <span class="hljs-comment"># 数据库执行文件</span>
│   ├── models/           <span class="hljs-comment"># 数据模型</span>
│   ├── routes/           <span class="hljs-comment"># 路由</span>
│   ├── service/          <span class="hljs-comment"># 服务层</span>
│   ├── utils/            <span class="hljs-comment"># 工具类</span>
│   ├── server.ts         <span class="hljs-comment"># 后端服务器入口</span>
│   └── ...               <span class="hljs-comment"># 其他后端相关文件</span>
├── frontend/             <span class="hljs-comment"># 前端代码</span>
│   ├── pages/            <span class="hljs-comment"># 页面文件</span>
│   ├── public/           <span class="hljs-comment"># 静态资源</span>
│   ├── styles/           <span class="hljs-comment"># 样式文件</span>
│   ├── ...               <span class="hljs-comment"># 其他前端相关文件</span>
├── .env                  <span class="hljs-comment"># 环境配置文件</span>
├── package.json          <span class="hljs-comment"># 项目配置文件</span>
├── tsconfig.json         <span class="hljs-comment"># TypeScript 配置文件</span>
└── ...                   <span class="hljs-comment"># 其他项目相关文件</span>
</code></div></div></pre>
  <h2>常见问题</h2>
  <h3>端口冲突</h3>
  <p>如果遇到端口冲突问题，可以在 <code>.env</code> 文件中修改 <code>PORT</code> 和 <code>ORIGIN</code> 的值，以使用不同的端口。</p>
  <h3>数据库连接失败</h3>
  <p>如果数据库连接失败，请检查 <code>.env</code> 文件中的数据库配置是否正确，并确保 PostgreSQL 数据库已经启动。</p>
  <h2>贡献</h2>
  <p>欢迎贡献代码！请 fork 本仓库并提交 pull request。</p>
  <h2>许可证</h2>
  <p>本项目采用 MIT 许可证。</p>
  <hr>
  <p>请将上述内容复制到你的 <code>README.md</code> 文件中。 ​
    <span class="" data-state="closed">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 19 15" fill="none" class="-mt-0.5 ml-0.5 inline-block text-token-link hover:text-token-link-hover" width="19" height="15">
          <path d="M4.42 0.75H2.8625H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V11.65C0.75 12.7546 1.64543 13.65 2.75 13.65H2.8625C2.8625 13.65 2.8625 13.65 2.8625 13.65C2.8625 13.65 4.00751 13.65 4.42 13.65M13.98 13.65H15.5375H15.65C16.7546 13.65 17.65 12.7546 17.65 11.65V2.75C17.65 1.64543 16.7546 0.75 15.65 0.75H15.5375H13.98" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          </path>
          <path d="M5.55283 4.21963C5.25993 3.92674 4.78506 3.92674 4.49217 4.21963C4.19927 4.51252 4.19927 4.9874 4.49217 5.28029L6.36184 7.14996L4.49217 9.01963C4.19927 9.31252 4.19927 9.7874 4.49217 10.0803C4.78506 10.3732 5.25993 10.3732 5.55283 10.0803L7.95283 7.68029C8.24572 7.3874 8.24572 6.91252 7.95283 6.61963L5.55283 4.21963Z" fill="currentColor" stroke="currentColor" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round">
          </path>
          <path d="M9.77753 8.75003C9.3357 8.75003 8.97753 9.10821 8.97753 9.55003C8.97753 9.99186 9.3357 10.35 9.77753 10.35H13.2775C13.7194 10.35 14.0775 9.99186 14.0775 9.55003C14.0775 9.10821 13.7194 8.75003 13.2775 8.75003H9.77753Z" fill="currentColor" stroke="currentColor" stroke-width="0.1">
          </path>
        </svg>
      </button>
    </span>​</p>
</div>
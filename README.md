<div dir="auto">
    <div class="markdown-heading" dir="auto">
        <h1 tabindex="-1" class="heading-element" dir="auto">My Next App</h1>
    </div>
    <p dir="auto">这是一个基于 Next.js 和 Node.js 的全栈项目，使用 PostgreSQL 作为数据库。以下是构建和运行该项目的详细步骤。</p>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">前提条件</h2>
    </div>
    <ol dir="auto">
        <li>
            <strong>操作系统</strong>: Windows 10 或更高版本</li>
        <li>
            <strong>Node.js</strong>: 需要安装 Node.js（建议使用 LTS 版本）。可以从
            <a href="https://nodejs.org/" rel="nofollow">Node.js 官方网站</a>下载并安装。</li>
        <li>
            <strong>PostgreSQL</strong>: 需要安装 PostgreSQL 数据库。可以从
            <a href="https://www.postgresql.org/download/" rel="nofollow">PostgreSQL 官方网站</a>下载并安装。</li>
    </ol>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">克隆项目</h2>
    </div>
    <p dir="auto">首先，从 GitHub 克隆项目仓库：</p>
    <pre><code>git <span>clone</span> https://github.com/xiaoxiaoxiaoxiaoming/my-next-app.git
    <span>cd</span> my-next-app
    </code></div></div></pre>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">环境配置</h2>
    </div>
    <p dir="auto">在项目根目录下确认 <code>.env
    </code>文件存在，如果不存在添加以下内容：</p>
    <pre><code>
    #backend
    DATABASE_USER=YOUR_DATABASE_USER
    DATABASE_HOST=YOUR_DATABASE_HOST
    DATABASE_NAME=YOUR_DATABASE_NAME
    DATABASE_PASSWORD=YOU_DATABASER_PASSWORD
    DATABASE_PORT=YOUR_DATABASE_PORT
    LOG_LEVEL=info
    PORT=3001
    ORIGIN=http://localhost:3000
    </code><p dir="auto"><code>#frontend
    NODE_ENV=development
    API_BASE_URL=<a href="http://localhost:3001/api" rel="nofollow">http://localhost:3001/api</a>
    </code></p></div></div></pre>
    <p dir="auto"></p>
    <p dir="auto">确保 PostgreSQL 数据库已经启动，并且上述配置与您的数据库设置相匹配。</p>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">安装依赖</h2>
    </div>
    <p dir="auto">在克隆的项目目录中，安装所需的依赖包：</p>
    <pre><code>npm install
    </code></div></div></pre>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">数据库初始化</h2>
    </div>
    <p dir="auto">在第一次运行项目之前，需要初始化数据库。确保 PostgreSQL 已经运行，然后执行以下命令：</p>
    <pre><code>npx ts-node backend/utils/dbInit.ts
    </code></div></div></pre>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">运行项目</h2>
    </div>
    <div class="markdown-heading" dir="auto">
        <h3 tabindex="-1" class="heading-element" dir="auto">分别启动前后端</h3>
    </div>
    <ol dir="auto">
        <li>启动后端：</li>
    </ol>
    <pre><code><span>cd</span> backend
    npx ts-node server.ts
    </code></div></div></pre>
    <ol start="2" dir="auto">
        <li>启动前端：</li>
    </ol>
    <pre><code><span>cd</span> frontend
    npm run dev
    </code></div></div></pre>
    <div class="markdown-heading" dir="auto">
        <h3 tabindex="-1" class="heading-element" dir="auto">一起启动前后端</h3>
    </div>
    <p dir="auto">为了便于调试，也可以一起启动前后端：</p>
    <pre><code>npm run dev
    </code></div></div></pre>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">项目结构</h2>
    </div>
    <pre><code><span>my</span>-<span>next</span>-app/
    ├── backend/              <span># 后端代码</span>
    │   ├── dbexec/           <span># 数据库执行文件</span>
    │   ├── models/           <span># 数据模型</span>
    │   ├── routes/           <span># 路由</span>
    │   ├── service/          <span># 服务层</span>
    │   ├── utils/            <span># 工具类</span>
    │   ├── server.ts         <span># 后端服务器入口</span>
    │   └── ...               <span># 其他后端相关文件</span>
    ├── frontend/             <span># 前端代码</span>
    │   ├── pages/            <span># 页面文件</span>
    │   ├── public/           <span># 静态资源</span>
    │   ├── styles/           <span># 样式文件</span>
    │   ├── ...               <span># 其他前端相关文件</span>
    ├── .env                  <span># 环境配置文件</span>
    ├── package.json          <span># 项目配置文件</span>
    ├── tsconfig.json         <span># TypeScript 配置文件</span>
    └── ...                   <span># 其他项目相关文件</span>
    </code></div></div></pre>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">常见问题</h2>
    </div>
    <div class="markdown-heading" dir="auto">
        <h3 tabindex="-1" class="heading-element" dir="auto">端口冲突</h3>
    </div>
    <p dir="auto">如果遇到端口冲突问题，可以在 <code>.env</code>文件中修改 <code>PORT</code>和<code>ORIGIN</code>的值，以使用不同的端口。</p>
    <div class="markdown-heading" dir="auto">
        <h3 tabindex="-1" class="heading-element" dir="auto">数据库连接失败</h3>
    </div>
    <p dir="auto">如果数据库连接失败，请检查 <code>.env</code>文件中的数据库配置是否正确，并确保 PostgreSQL 数据库已经启动。</p>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">贡献</h2>
    </div>
    <p dir="auto">欢迎贡献代码！请 fork 本仓库并提交 pull request。</p>
    <div class="markdown-heading" dir="auto">
        <h2 tabindex="-1" class="heading-element" dir="auto">许可证</h2>
    </div>
    <p dir="auto">本项目采用 MIT 许可证。</p>
</div>
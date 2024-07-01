<div>
    <div class="markdown-heading">
        <h1 class="heading-element">My Next App</h1>
    </div>
    <p>这是一个基于 Next.js 和 Node.js 的全栈项目，使用 PostgreSQL 作为数据库。以下是构建和运行该项目的详细步骤。</p>
    <div class="markdown-heading">
        <h2 class="heading-element">前提条件</h2>
    </div>
    <ol>
        <li>
            <strong>操作系统</strong>: Windows 10 或更高版本</li>
        <li>
            <strong>Node.js</strong>: 需要安装 Node.js（建议使用 LTS 版本）。可以从
            <a href="https://nodejs.org/" rel="nofollow">Node.js 官方网站</a>下载并安装。</li>
        <li>
            <strong>PostgreSQL</strong>: 需要安装 PostgreSQL 数据库。可以从
            <a href="https://www.postgresql.org/download/" rel="nofollow">PostgreSQL 官方网站</a>下载并安装。</li>
    </ol>
    <div class="markdown-heading">
        <h2 class="heading-element">克隆项目</h2>
    </div>
    <p>首先，从 GitHub 克隆项目仓库：</p>
<pre><code>git clone https://github.com/xiaoxiaoxiaoxiaoming/my-next-app.git
cd my-next-app</code></pre>
    <div class="markdown-heading">
        <h2 class="heading-element">环境配置</h2>
    </div>
    <p>在项目根目录下确认 <code>.env
</code>文件存在，如果不存在添加以下内容：</p>
<pre><code>#backend
DATABASE_USER=YOUR_DATABASE_USER
DATABASE_HOST=YOUR_DATABASE_HOST
DATABASE_NAME=YOUR_DATABASE_NAME
DATABASE_PASSWORD=YOU_DATABASER_PASSWORD
DATABASE_PORT=YOUR_DATABASE_PORT
LOG_LEVEL=info
PORT=3001
ORIGIN=http://localhost:3000
<p></p>
#frontend
NODE_ENV=development
API_BASE_URL=http://localhost:3001/api</code></pre>
    <p>确保 PostgreSQL 数据库已经启动，并且上述配置与您的数据库设置相匹配。</p>
    <div class="markdown-heading">
        <h2 class="heading-element">安装依赖</h2>
    </div>
    <p>在克隆的项目目录中，安装所需的依赖包：</p>
<pre><code>npm install</code></pre>
    <div class="markdown-heading">
        <h2 class="heading-element">运行项目</h2>
    </div>
    <div class="markdown-heading">
        <p>1.找到Run and Debug，快捷键:Ctrl+Shift+D</p>
        <p>2.选择Node.js:Backend</h3>
        <p>3.点击绿色播放▶按钮,启动后台服务器</p>
        <p>4.选择Node.js:Frontend</p>
        <p>5.点击绿色播放▶按钮,启动前台服务器</p>
    </div>
    <div class="markdown-heading">
        <h2 class="heading-element">项目目录</h2>
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
</code></pre>
    <div class="markdown-heading">
        <h2 class="heading-element">常见问题</h2>
    </div>
    <div class="markdown-heading">
        <h3 class="heading-element">端口冲突</h3>
    </div>
    <p>如果遇到端口冲突问题，可以在 <code>.env</code>文件中修改 <code>PORT</code>和<code>ORIGIN</code>的值，以使用不同的端口。</p>
    <div class="markdown-heading">
        <h3 class="heading-element">数据库连接失败</h3>
    </div>
    <p>如果数据库连接失败，请检查 <code>.env</code>文件中的数据库配置是否正确，并确保 PostgreSQL 数据库已经启动。</p>
    <div class="markdown-heading">
        <h2 class="heading-element">贡献</h2>
    </div>
    <p>欢迎贡献代码！请 fork 本仓库并提交 pull request。</p>
    <div class="markdown-heading">
        <h2 class="heading-element">许可证</h2>
    </div>
    <p>本项目采用 MIT 许可证。</p>
</div>
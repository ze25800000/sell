## [预览效果](https://ze25800000.github.io/sell/)

![Markdown](http://i1.piimg.com/584916/e5918b2d55eea621.png)

## 项目技术架构

```
- vue-cli
- vue
- vue-resource
- vue-router
- better-scroll
- stylus
- webpack
```
## 目录结构

```
├build                          // 构建服务和webpack配置
├─build.js
├─check-versions.js
├─dev-client.js
├─dev-server.js
├─utils.js
├─webpack.base.conf.js
├─webpack.dev.conf.js
└─webpack.prod.conf.js
├config                         // 项目不同环境的配置
├─dev.env.js
├─index.js
├─prod.env.js
└─test.env.js
├src
├common                         // 公共的css js 资源
│ ├fonts
│ ├js
│ ├stylus
├components                     // 各种组件
│ ├cartcontrol
│ ├food
│ ├goods
│ ├header
│ ├icon
│ ├ratings
│ ├ratingselect
│ ├seller
│ ├shopcart
│ ├split
│ ├star
├─App.vue                      // 主页面 
└─main.js                      // Webpack 预编译入口
├static
├─.gitkeep
└─reset.css
├─.babelrc
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─data.json
├─index.html                  // 项目入口文件
└─package.json
```
## 实现的功能
- 商品滚动 ，商品滚轮滚动
- 商品联动
- 加入购物车，移除购物车
- 显示评论 评论筛选
- 图片左右滑动
- 商品详情 父子组件的通信
## 安装

项目地址：（git clone）

```
git clone https://github.com/ze25800000/sell
```

通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```

启动服务(http://localhost:8081)

```
npm run dev
```
浏览器弹出http://localhost:8081页面时，需要手动修改为http://localhost:8081?id=123

发布代码

```
npm run build
```

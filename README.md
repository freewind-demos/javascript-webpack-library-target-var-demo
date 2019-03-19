Webpack Config "libraryTarget" "var" Demo
=======================================

当`libraryTarget`指定为var时，再配合`library`给出的变量名，webpack将会把指定的入口文件对应的文件生成的module对象
赋值给指定变量。这样，当我们在`<script>`引用以后，相应的变量名就会在全局可用。

在本demo中，由于指定了`library`为`abc`，所以在`index.html`中，引入`./dist/bundle.js`之后，就可以使用变量`abc.hello`
来调用我们在entry.js中export出来的函数了。

```
npm install
npm run demo
```

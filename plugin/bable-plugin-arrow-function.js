const { debug } = require("webpack");

module.exports = function({ types: t }) {
    return {
      visitor: {
        //代表处理 ArrowFunctionExpression 节点
        ArrowFunctionExpression(path, state){
          debugger
          // 原来的参数
          const  params = path.node.params
          // 创建一个blockStatement

          const blockStatement = t.blockStatement([
              t.returnStatement(path.node.body)
          ])

          // 创建一个函数
          const fn = t.functionExpression(null, params, blockStatement, false, false)

          path.replaceWith(fn)
        }
      }
    };
};

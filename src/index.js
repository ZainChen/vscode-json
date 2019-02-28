const vscode = require('vscode');  //导入模块并在下面的代码中使用别名vscode引用它(模块“vscode”包含VS代码可扩展性API)
const path = require('path');
const fs = require('fs');

const ayjson = require("./ayjson/index");  //json文件解析功能模块(test)

/**
 * 插件被激活时触发，所有代码总入口。
 * 激活扩展时调用此方法，您的扩展将在命令第一次执行时被激活。
 * @依赖文件 const vscode = require('vscode');
 * @param {vscode.ExtensionContext} context 扩展内容
 */
function activate(context) {
	//json文件解析功能
	const jsonOutlineProvider = new ayjson.JsonOutlineProvider(context);
    vscode.window.registerTreeDataProvider('jsonOutline', jsonOutlineProvider);
    vscode.commands.registerCommand('jsonOutline.refresh', () => jsonOutlineProvider.refresh());
    vscode.commands.registerCommand('jsonOutline.refreshNode', offset => jsonOutlineProvider.refresh(offset));
    vscode.commands.registerCommand('jsonOutline.renameNode', offset => jsonOutlineProvider.rename(offset));
    vscode.commands.registerCommand(
		'extension.openJsonSelection',
		range => jsonOutlineProvider.select(range)
	);
	
}
exports.activate = activate;  //插件被激活触发(函数接口)


/**
 * 插件被释放时触发。
 * 当您的扩展被停用时，将调用此方法。
 */
function deactivate() {
	console.log('Your extension "omi" has been released');
}
exports.deactivate = deactivate;  //插件被释放触发(函数接口)


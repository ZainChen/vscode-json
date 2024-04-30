'use strict';

import * as vscode from 'vscode';
import { JsonTreeProvider } from './json/jsonTree';

export function activate(context: vscode.ExtensionContext) {
	const jsonTreeProvider = new JsonTreeProvider(context);
	vscode.window.createTreeView('jsonTree', { treeDataProvider: jsonTreeProvider, showCollapseAll: true });
	vscode.commands.registerCommand('jsonTree.refresh', () => jsonTreeProvider.refresh());
	vscode.commands.registerCommand('jsonTree.refreshNode', offset => jsonTreeProvider.refresh(offset));
	vscode.commands.registerCommand('jsonTree.renameNode', offset => jsonTreeProvider.rename(offset));
	vscode.commands.registerCommand('extension.openJsonSelection', range => jsonTreeProvider.select(range));
}

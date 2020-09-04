'use strict';

import * as vscode from 'vscode';
import { JsonOutlineProvider } from './json/jsonOutline';

export function activate(context: vscode.ExtensionContext) {
	const jsonOutlineProvider = new JsonOutlineProvider(context);
	vscode.window.createTreeView('jsonOutline', { treeDataProvider: jsonOutlineProvider, showCollapseAll: true });
	vscode.commands.registerCommand('jsonOutline.refresh', () => jsonOutlineProvider.refresh());
	vscode.commands.registerCommand('jsonOutline.refreshNode', offset => jsonOutlineProvider.refresh(offset));
	vscode.commands.registerCommand('jsonOutline.renameNode', offset => jsonOutlineProvider.rename(offset));
	vscode.commands.registerCommand('extension.openJsonSelection', range => jsonOutlineProvider.select(range));
}

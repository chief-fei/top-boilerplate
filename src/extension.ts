import { createComponent } from '@utils';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const createReactComponentDisposable = vscode.commands.registerCommand(
    'top-boilerplate.createReactComponent',
    async (uri: vscode.Uri) => createComponent(context, uri, 'react-component', 'react'),
  );

  const createVueComponentDisposable = vscode.commands.registerCommand(
    'top-boilerplate.createVueComponent',
    async (uri: vscode.Uri) => createComponent(context, uri, 'vue-component', 'vue'),
  );

  context.subscriptions.push(createReactComponentDisposable, createVueComponentDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

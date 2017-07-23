import React, { Component } from 'react';
import { Editor, EditorState, CompositeDecorator } from 'draft-js';

import '../../node_modules/draft-js/dist/Draft.css';


function HandleSpan({ children }) {
  return <span>{children}</span>
}

function handleStrategy(contentBlock, callback) {
  const text = contentBlock.getText();
  console.log(text);
  callback(0, 1);
}


export default class MyEditor extends Component {
  constructor(props) {
    super(props);

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: HandleSpan,
      },
    ]);

    this.state = { editorState: EditorState.createEmpty(compositeDecorator) };
    this.onChange = editorState => this.setState({editorState});
  }

  render() {
    return (
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="type some text..."
        />
    );
  }
}

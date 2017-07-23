import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';

import '../../node_modules/draft-js/dist/Draft.css';

export default class MyEditor extends Component {
  constructor(props) {
    super(props);

    this.state = { editorState: EditorState.createEmpty() };
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

import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function MenuBar({onInit}) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      const textboxValue = editorRef.current.getContent();
      console.log(textboxValue);
    }
  };
  return (
    <>
      <Editor
        apiKey='wiws7jycfr7rujok7lvtm1xpyo2akb2nzwbjkp8gedoqbamz'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
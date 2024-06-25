import { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript'; 

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const textareaRef = useRef(null);
  const preRef = useRef(null);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, [code]);

  const highlightedCode = Prism.highlight(code, Prism.languages.javascript, 'javascript');

  return (
    <div className="flex justify-center items-center mt-[2rem] ">
      <div className="relative w-[30rem]  h-56">
        <textarea
          ref={textareaRef}
          className="absolute top-0 left-0 w-full h-full m-0 p-4 bg-transparent caret-black text-transparent border-none resize-none font-mono text-base leading-relaxed outline-none z-10 whitespace-pre-wrap"
          value={code}
          onChange={handleChange}
          spellCheck="false"
          onScroll={() => {
            preRef.current.scrollTop = textareaRef.current.scrollTop;
            preRef.current.scrollLeft = textareaRef.current.scrollLeft;
          }}
          placeholder='Enter your code here ....'
        />
        <pre
          ref={preRef}
          className="absolute top-0 left-0 w-full h-full m-0 p-4 bg-white border border-gray-300 rounded shadow-lg font-mono text-base leading-relaxed overflow-auto pointer-events-none whitespace-pre-wrap"
          aria-hidden="true"
        >
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;

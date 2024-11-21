import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (newTask: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [input, setInput] = useState<string>('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const languageColors: Record<string, string> = {
    React: 'bg-blue-500 text-white',
    'React Native': 'bg-green-500 text-white',
    Flutter: 'bg-purple-500 text-white',
  };

  const toggleLanguage = (lang: string) => {
    if (selectedLanguages.includes(lang)) {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  const handleAddTask = () => {
    if (input.trim()) {
      const taskText = selectedLanguages.length
        ? `${input.trim()} [${selectedLanguages.join(', ')}]`
        : input.trim();
      addTask(taskText);
      setInput('');
      setSelectedLanguages([]);
    }
  };

  return (
    <div>
      {/* Input Field */}
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={handleAddTask}
          disabled={!input.trim()}
          className={`min-h-10 border rounded-lg w-20 ml-8   ${
            input.trim()
              ? 'bg-green-500 text-white hover:bg-green-900'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          ADD
        </button>
      </div>

      {/* Language Selection */}
      <div className="flex space-x-4">
        {['React', 'React Native', 'Flutter'].map((lang) => (
          <button
            key={lang}
            onClick={() => toggleLanguage(lang)}
            className={`px-4 py-2  rounded-lg ${
              selectedLanguages.includes(lang)
                ? languageColors[lang]
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskInput;

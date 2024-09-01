import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure the API key is defined
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("API key is not defined in environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// Make sure chatSession is properly initialized and has sendMessage
export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Reference to:\n{\n   "time": 1550476186479,\n   "blocks": [\n      {\n         "id": "oUq2g_tl8y",\n         "type": "header",\n         "data": {\n            "text": "Editor.js",\n            "level": 2\n         }\n      },\n      {\n         "id": "zbGZFPM-iI",\n         "type": "paragraph",\n         "data": {\n            "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."\n         }\n      },\n      {\n         "id": "qYIGsjS5rt",\n         "type": "header",\n         "data": {\n            "text": "Key features",\n            "level": 3\n         }\n      },\n      {\n         "id": "XV87kJS_H1",\n         "type": "list",\n         "data": {\n            "style": "unordered",\n            "items": [\n               "It is a block-styled editor",\n               "It returns clean data output in JSON",\n               "Designed to be extendable and pluggable with a simple API"\n            ]\n         }\n      },\n      {\n         "id": "AOulAjL8XM",\n         "type": "header",\n         "data": {\n            "text": "What does it mean «block-styled editor»",\n            "level": 3\n         }\n      },\n      {\n         "id": "cyZjplMOZ0",\n         "type": "paragraph",\n         "data": {\n            "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\\"cdx-marker\\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core."\n         }\n      }\n   ],\n   "version": "2.8.1"\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "time": 1678884763861,\n  "blocks": [\n    {\n      "id": "qW3z_m_8b",\n      "type": "header",\n      "data": {\n        "text": "Grocery TODO List",\n        "level": 1\n      }\n    },\n    {\n      "id": "bQz4f_H-L",\n      "type": "paragraph",\n      "data": {\n        "text": "This is your handy grocery list. Add items, check them off as you buy them, and stay organized!"\n      }\n    },\n    {\n      "id": "D8o9i_m6F",\n      "type": "checklist",\n      "data": {\n        "items": [\n          {\n            "text": "Milk",\n            "checked": false\n          },\n          {\n            "text": "Eggs",\n            "checked": false\n          },\n          {\n            "text": "Bread",\n            "checked": false\n          }\n        ]\n      }\n    },\n    {\n      "id": "A4vR7_r-k",\n      "type": "paragraph",\n      "data": {\n        "text": "Happy Shopping!"\n      }\n    }\n  ],\n  "version": "2.8.1"\n}\n```\n\n**Explanation:**\n\n- **`time`**: This represents the timestamp of the data.\n- **`blocks`**: An array that contains the blocks of content for your editor.\n- **`version`**: The version of Editor.js being used.\n\n**Blocks:**\n\n1. **`header`**: A level 1 header with the text "Grocery TODO List".\n2. **`paragraph`**: A paragraph explaining the purpose of the list.\n3. **`checklist`**: A checklist block that represents the grocery list itself.\n    - **`items`**: An array of checklist items.\n        - **`text`**: The text of each item (e.g., "Milk").\n        - **`checked`**: A boolean indicating whether the item is checked (false by default).\n4. **`paragraph`**: A final paragraph with a cheerful message.\n\n**Customization:**\n\n- You can easily modify the checklist items and add more to fit your needs.\n- You can change the text in the paragraphs to better reflect your grocery list\'s purpose.\n-  For more complex lists, you can add additional blocks like:\n    - `list`: For bullet points or numbered lists.\n    - `table`: For organizing multiple items by category.\n    - `code`: For storing notes or recipes.\n-  Explore other Editor.js plugins to enhance the functionality of your grocery list.\n\nRemember, this is just a basic template. Feel free to customize it further to create your perfect grocery TODO list. \n',
        },
      ],
    },
  ],
});

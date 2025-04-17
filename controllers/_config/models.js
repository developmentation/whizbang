//Configs to the frontend

exports.getModels = async function (req, res, next) {
  try {
    const payload = [
      {
        name: { en: "Gemini 2 Flash", fr: "Gemini 2 Flash" },
        model: "gemini-2.0-flash",
        provider: "gemini",
        default: true,
      },
      {
        name: { en: "GPT 4o", fr: "GPT 4o" },
        model: "gpt-4o",
        provider: "openAi",
      },
      {
        name: { en: "Claude Sonnet 3.7", fr: "Claude Sonnet 3.7" },
        model: "claude-3-7-sonnet-20250219",
        provider: "anthropic",
      },
      // {
      //   name: { en: "Gemini 1.5 Flash", fr: "Gemini 1.5 Flash" },
      //   model: "gemini-1.5-flash",
      //   provider: "gemini",
      // },
      // {
      //   name: { en: "o1", fr: "o1" },
      //   model: "o1-preview",
      //   provider: "openAi",
      // },
      // {
      //   name: { en: "o3-mini", fr: "o3-mini" },
      //   model: "o3-mini-2025-01-31",
      //   provider: "openAi",
      // },
      // {
      //   name: { en: "Llama 3.3", fr: "Llama 3.3" },
      //   model: "llama-3.3-70b-versatile",
      //   provider: "groq",
      // },

      // {
      //   name: { en: "Mistral Large", fr: "Mistral Large" },
      //   model: "mistral-large-latest",
      //   provider: "mistral",
      // },

      // {
      //   name: { en: "GPT o1-mini", fr: "GPT o1-mini" },
      //   model: "o1-mini-2024-09-12",
      //   provider: "openAi",
      // },

      // {
      //   name: { en: "Grok 2", fr: "Grok 2" },
      //   model: "grok-2-1212",
      //   provider: "xai",
      // },
    ];

    // Send the counts as JSON response
    res.status(200).json({
      message: "Here are the server side model and providers",
      payload: payload,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error retrieving models",
      payload: null,
    });
  }
};

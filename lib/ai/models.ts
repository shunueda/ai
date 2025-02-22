import { openai } from '@ai-sdk/openai'
import { customProvider } from 'ai'
import { ModelId } from '@/lib/ai/model-id'
import { openrouter } from '@openrouter/ai-sdk-provider'

export const DEFAULT_CHAT_MODEL: string = ModelId.OPENAI_4O_MINI

export const myProvider = customProvider({
  languageModels: Object.fromEntries(
    Object.entries(ModelId).map(([key, value]) => [
      ModelId[key as keyof typeof ModelId],
      openrouter(value)
    ])
  ),
  imageModels: {
    'small-model': openai.image('dall-e-2'),
    'large-model': openai.image('dall-e-3')
  }
})

interface ChatModel {
  id: string
  description: string
}

export const chatModels: Array<ChatModel> = [
  {
    id: ModelId.OPENAI_4O_MINI,
    description: 'Small model for fast, lightweight tasks'
  },
  {
    id: ModelId.OPENAI_4O,
    description: 'Great for most questions'
  },
  {
    id: ModelId.OPENAI_O3_MINI,
    description: 'Fast at advanced reasoning'
  }
]

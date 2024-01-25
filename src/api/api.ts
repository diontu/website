import axios from 'axios'

type Response<T> = {
    data: {
        content: T
        metadata: any
    }
    message: string
    status: string
}

type ContentResponse<S> = {
    fields: S
    metadata: any
    sys: {
        createdAt: string
        id: string
        locale: string
        type: string
        updatedAt: string
    }
}[]

type RecipeSchema = {
    cookingSteps: any
    ingredients: string[]
    title: string
    thumbnail: {
        fields: {
            description: string
            title: string
            file: {
                details: {
                    size: number
                    image: {
                        width: number
                        height: number
                    }
                }
                contentType: string
                fileName: string
                url: string
            }
        }
    }
}

export type RecipeResponse = ContentResponse<RecipeSchema>

export const getRecipes = async (): Promise<Response<RecipeResponse>> => {
    const response = await axios.get(`${import.meta.env.VITE_BE_HOST}/recipes`)
    return response.data
}

import axios from 'axios'

export type Response<T> = {
    data: {
        content: T
        metadata: any
    }
    message: string
    status: string
}

export type ContentResponse<S> = {
    fields: S
    metadata: any
    sys: {
        createdAt: string
        id: string
        locale: string
        type: string
        updatedAt: string
    }
}

export type ContentResponseArray<S> = ContentResponse<S>[]

export type RecipeSchema = {
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

export type RecipesResponse = Response<ContentResponseArray<RecipeSchema>>

export type RecipeResponse = Response<ContentResponse<RecipeSchema>>

export const getRecipes = async (): Promise<RecipesResponse> => {
    const response = await axios.get(`${import.meta.env.VITE_BE_HOST}/recipes`)
    return response.data
}

export const getRecipe = async (entryId: string): Promise<RecipeResponse> => {
    const response = await axios.get(
        `${import.meta.env.VITE_BE_HOST}/recipes/${entryId}`
    )
    return response.data
}
